---
title: "From Graph to Silicon: How ML Compilers Target TPUs and Cerebras WSE"
tags: [AI, Compilers, TPU, Cerebras]
style: fill
color: success
description: How ML compilers turn tensor programs into fast executables for two radically different AI architectures.
---

![A processor on a circuit board](https://images.unsplash.com/photo-1758549885423-819fd86e04f0?q=80&w=2400&auto=format&fit=crop)

*Photo by [He Junhui](https://unsplash.com/@he_junhui) on [Unsplash](https://unsplash.com/photos/close-up-of-a-computer-processor-chip-on-circuit-board-cMoE2tU_BbM)*

The same model can run beautifully on one accelerator and disappoint on another. The difference is not always the headline FLOPS number. Often, it is the compiler's ability to reshape the model around the hardware.

A traditional compiler translates a program into instructions for a processor. An ML compiler does that too, but its most important input is usually a graph of tensor operations rather than a sequence of ordinary scalar instructions. It sees matrix multiplications, attention blocks, convolutions, reductions, tensor shapes, and data dependencies. That global view lets it make decisions that would be impossible one kernel at a time.

This is why ML compilers have become such an important part of AI systems. They sit between a model expressed in PyTorch, JAX, or TensorFlow and an accelerator with a very particular memory hierarchy, communication fabric, and compute geometry.

Google's TPU stack and Cerebras' wafer-scale stack make an especially useful comparison. Both need to turn large tensor graphs into efficient machine execution, but the machines underneath them are radically different. Their compilers therefore optimize for different physical realities.

## The Difference Is Emphasis, Not a Clean Boundary

It is tempting to draw a sharp line:

```text
traditional compiler: source code → IR → machine code
ML compiler: model graph → tensor IR → accelerator executable
```

That is a useful first approximation, but modern systems overlap. Traditional compilers also vectorize loops, reason about memory, and target GPUs. ML compilers eventually need ordinary control flow, register allocation, and code generation. Many ML stacks use LLVM and MLIR precisely because those mature compiler ideas remain valuable.

The real difference is where the compiler spends most of its intelligence.

| Concern | Traditional application compiler | ML compiler |
|---|---|---|
| Main input | Source-level functions, types, loops, and branches | Tensor operations, shapes, dataflow, and sharding intent |
| Common IR focus | Control-flow graphs, SSA values, instructions | Tensor semantics, layouts, devices, tiled loops, and kernels |
| Dominant cost | Instructions, branches, cache behavior, registers | Data movement, accelerator utilization, intermediate tensors, collectives |
| Important rewrites | Inlining, dead-code elimination, vectorization | Fusion, tiling, layout selection, memory planning, sharding |
| Typical target | General-purpose CPU or GPU ISA | Matrix units, tensor cores, systolic arrays, or a wafer-scale fabric |

For AI workloads, moving a tensor can cost more than computing on it. An optimization that removes an intermediate trip to high-bandwidth memory may matter more than one that saves a few arithmetic instructions.

## A Useful Mental Model for the ML Compiler Pipeline

A production ML compiler rarely has one intermediate representation. It lowers the program through a stack of abstractions:

1. **Framework program:** Python constructs a model with PyTorch, JAX, or TensorFlow operations.
2. **Captured graph:** Tracing, lazy execution, or ahead-of-time export turns those operations into a graph the compiler can inspect.
3. **High-level tensor IR:** Operations still resemble `matmul`, convolution, attention, and reductions.
4. **Distributed and layout-aware IR:** The compiler chooses sharding, physical tensor layouts, fusion boundaries, and communication.
5. **Loop or kernel IR:** Tensor operations become tiled loops, data-transfer schedules, and target-specific kernels.
6. **Executable:** The backend emits machine instructions, runtime calls, and metadata for the accelerator.

Each level preserves the information needed for a different optimization. Lower too early and the compiler loses the fact that several loops form one attention block. Stay too high for too long and it cannot reason about the exact SRAM tile or communication route.

## The Optimizations That Usually Decide Performance

### Fusion

Suppose a model performs a matrix multiplication, adds a bias, and applies an activation. Running those as three independent kernels can materialize two large intermediate tensors. Fusion combines compatible work so values remain close to compute.

The [OpenXLA architecture documentation](https://openxla.org/xla/architecture) describes fusion and buffer analysis as core compilation passes. Its GPU documentation calls fusion its most important optimization because avoiding intermediate HBM traffic can transform a memory-bound sequence.

Fusion is not automatically good. A giant fused kernel can increase register or local-memory pressure, reduce parallelism, or make scheduling harder. The compiler needs a cost model, not a rule that says “fuse everything.”

### Tiling and Layout

Large matrices do not fit in the fastest local memory at once. The compiler divides them into tiles, chooses an order, and schedules data movement so compute units remain busy.

Physical layout matters just as much. Two tensors with the same logical shape can be stored differently. A layout that makes one operation efficient may force an expensive transpose before the next. Good compilation optimizes the path through the graph, not each operation in isolation.

### Memory Planning

Once the full graph is visible, the compiler can determine when a buffer becomes dead, reuse its storage, prefetch future data, and double-buffer transfers. This is one of the great advantages over eager execution: the compiler can plan for values that do not exist yet.

### Sharding and Communication

When a model spans devices, tensor placement becomes part of compilation. A sharding choice implies collective operations such as all-reduce or all-gather. The best mathematical partition can still be a poor systems choice if it creates too much communication.

This makes distributed ML compilation a joint optimization problem: compute, memory, topology, and synchronization all interact.

## Google TPU and XLA: Feed the Matrix Units

Google's current TPU7x, the first Ironwood release, is built for dense tensor computation at enormous scale. According to the [official TPU7x documentation](https://docs.cloud.google.com/tpu/docs/tpu7x), each chip has 192 GB of HBM with approximately 7.37 TB/s of bandwidth. Google's [TPU performance guide](https://docs.cloud.google.com/tpu/docs/performance-guide) lists a 256 × 256 matrix multiply unit for Ironwood and recommends tensor dimensions that tile cleanly into the hardware.

XLA is the compiler that translates framework graphs into TPU executables. JAX, TensorFlow, and PyTorch/XLA provide frontends; StableHLO provides a portable high-level operation set; XLA applies graph optimizations and hands the result to a target-specific backend.

The TPU backend needs to answer questions such as:

- Can several operations be fused so an intermediate never reaches HBM?
- Which physical tensor layout minimizes copies across the full graph?
- How should a matrix be tiled to keep the MXU occupied rather than padded?
- Which values belong in fast on-chip vector memory and which remain in HBM?
- How should work and collectives be partitioned across a TPU slice?

Shape stability helps. XLA can specialize aggressively when dimensions are known, while frequently changing shapes may create recompilation or weaker optimization. Saying that TPU programs must have completely static shapes is too strong—dynamic-shape support exists—but predictable shapes still make the compiler's job easier.

A tiny JAX example exposes the boundary:

```python
import jax
import jax.numpy as jnp

@jax.jit
def mlp_block(x, weight, bias):
    return jax.nn.gelu(x @ weight + bias)

x = jnp.ones((128, 1024), dtype=jnp.bfloat16)
w = jnp.ones((1024, 4096), dtype=jnp.bfloat16)
b = jnp.ones((4096,), dtype=jnp.bfloat16)

lowered = mlp_block.lower(x, w, b)
print(lowered.compiler_ir(dialect="stablehlo"))
```

The Python looks eager and ordinary. Under `jit`, JAX stages the computation, and the compiler sees a graph containing the dot, broadcasted bias addition, and GELU. That graph—not the surface syntax—is where fusion, layout, and target lowering begin.

## Cerebras WSE: Map the Graph Across a Wafer

Cerebras takes a different architectural bet. The [WSE-3](https://www.cerebras.ai/chip) is a wafer-scale processor with 900,000 AI-optimized cores and 44 GB of distributed on-chip SRAM. Cerebras reports 21 PB/s of on-chip memory bandwidth. Instead of connecting many separately packaged accelerator chips for the core computation, it places a vast number of small compute elements, local memory, and communication links on one wafer.

That changes the compiler's central problem.

The [Cerebras Graph Compiler](https://www.cerebras.ai/product-software) takes a model graph and creates an executable placement across the WSE. It allocates cores, selects layouts, generates kernels, and schedules communication through the on-wafer fabric. Cerebras' PyTorch integration captures the model while the compiler and runtime hide much of the low-level mapping from the user.

For large-model training, Cerebras also uses a weight-streaming architecture. [MemoryX](https://training-docs.cerebras.ai/rel-2.10.0/concepts/cerebras-wafer-scale-cluster) stores and streams model weights while activations and compute remain close to the wafer. The system can process a layer across the wafer, then move to the next one. This shifts the problem away from manually assigning different pipeline stages to separate conventional accelerators.

The compiler must decide:

- which regions of the wafer execute each part of an operator;
- how tensors are distributed across local SRAM attached to the cores;
- how neighboring processing elements exchange data;
- whether adjacent layers should share a layout or pay for redistribution;
- how to overlap weight streaming, communication, and compute;
- how to route around unavailable fabric resources while preserving correctness.

For custom non-ML work, the [Cerebras SDK](https://www.cerebras.ai/blog/supercharge-your-hpc-research-with-the-cerebras-sdk) exposes Cerebras Software Language, a C-like language with a dataflow programming model. That lower-level path makes the architecture visible: computation is activated as data arrives at processing elements connected by the fabric.

## TPU/XLA and WSE/CGC Side by Side

| Aspect | Google TPU7x + XLA | Cerebras WSE-3 + Graph Compiler |
|---|---|---|
| Compute shape | Large matrix units plus vector/scalar resources | 900,000 small AI cores distributed across a wafer |
| Fast-memory model | On-chip vector memory backed by 192 GB HBM per chip | 44 GB distributed SRAM physically close to cores |
| Central compiler task | Fusion, tiling, layout, buffer planning, and multi-chip partitioning | Graph placement, local-memory allocation, fabric routing, and dataflow scheduling |
| Scaling model | Partition work across TPU chips connected as a slice or pod | Treat one wafer as a large device; connect systems for larger scale |
| Large-model pressure | Choose sharding and collectives across chips | Stream weights and keep much of the active execution on wafer |
| Developer surface | JAX, TensorFlow, or PyTorch/XLA through StableHLO/XLA | PyTorch through CSoft, or CSL for custom kernels |

The important distinction is not that one system has a compiler and the other does not. It is that each compiler encodes a different definition of “nearby.”

On a TPU, nearby may mean data already arranged for an MXU tile or resident in fast local memory. Across a pod, communication topology enters the cost. On a WSE, nearby can mean SRAM attached to a processing element or another core a few hops across the on-wafer mesh. Those distance and bandwidth differences shape every placement decision.

## What This Means for Model Developers

The compiler is powerful, but model code still affects what it can prove and optimize.

On TPU, I would pay attention to stable shapes, accelerator-friendly matrix dimensions, fusion barriers, padding, and the sharding implied by my parallelism strategy. I would inspect HLO and profiles instead of assuming that `jit` guarantees an efficient program.

On Cerebras, I would begin with supported PyTorch model patterns and let the graph compiler own placement. When performance or support breaks down, I would think about full-graph capture, static execution, on-wafer layouts, and weight-streaming behavior rather than CUDA block geometry.

On either platform, three habits transfer well:

1. **Measure end to end.** Kernel speed does not reveal compilation time, input stalls, communication, or host overhead.
2. **Inspect the compiler's representation.** A surprising graph often explains surprising performance.
3. **Change one structural variable at a time.** Shape, layout, precision, batch size, and sharding interact; random tuning hides the cause.

## The Larger Lesson

AI accelerators are increasingly hardware-software products. The silicon defines what is possible; the compiler decides how much of that possibility an ordinary model can reach.

XLA looks at an Ironwood TPU and sees matrix geometry, memory tiers, layouts, and a network of devices. Cerebras' Graph Compiler looks at the WSE and sees a wafer-sized placement and routing problem with hundreds of thousands of cores and distributed SRAM.

Both start from tensor graphs. Both use fusion, memory planning, and parallelism. But they turn those ideas into different execution strategies because the cost of moving data—and the meaning of a device—is fundamentally different.

That is the best mental model for ML compilers: not source translators with a few AI optimizations, but the layer that converts a model's mathematical structure into the physical choreography of a particular machine.
