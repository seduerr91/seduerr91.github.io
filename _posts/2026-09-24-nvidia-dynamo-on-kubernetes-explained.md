---
title: "NVIDIA Dynamo on Kubernetes: What Each Piece Does"
tags: [AI, Kubernetes, MLOps]
style: fill
color: primary
description: "Follow a language model from stored weights to a working API, and understand where NVIDIA Dynamo, Kubernetes, deployment tools, and monitoring fit in the complete serving stack."
---

Getting a language model to produce an answer is one milestone. Turning it into a service that other people can depend on is another.

Imagine an internal application that summarizes documents. A user uploads a report, clicks a button, and expects the summary to start appearing within a few seconds. Behind that button, something has to load the model, find GPU capacity, accept the request, generate the answer, and return it. The service also needs a way to survive failures, receive updates, and explain why it was slow yesterday afternoon.

That is when the tool names start arriving: NVIDIA Dynamo, vLLM, Kubernetes, Helm, AI Runway, Argo CD, Headlamp, Prometheus, Grafana, Loki.

The confusing part is not just the number of tools. It is that they operate at different levels. Some run the model. Some decide where a request should go. Some create the deployment. Others give an engineer a way to see what is happening.

**These tools do not form one long chain that every request passes through, and you do not need all of them to serve a model.**

The easiest way to understand the stack is to follow one service from its model files to its first request, then look at how we change it and keep it healthy. We will use the document-summary application throughout.

## The Whole Stack at a Glance

*Inference* means using an already-trained model to produce an answer. *Model serving* means making that inference available to applications over a network.

**[NVIDIA Dynamo](https://github.com/ai-dynamo/dynamo) is a framework for distributed inference serving.** It coordinates requests and model workers, with capabilities such as cache-aware routing and separating different stages of inference. It does not train the model, replace Kubernetes, or replace the runtime that performs the model computation.

For a small service, a model-serving runtime such as vLLM can expose an API directly. Dynamo becomes useful when you need its serving coordination capabilities. Kubernetes provides the infrastructure on which those components run.

Here is the larger picture, starting with what the user sees:

| Layer | Pieces and responsibilities |
| --- | --- |
| Application and access | The document-summary application calls an inference endpoint; its access layer supplies appropriate authentication, TLS, and traffic controls |
| Inference coordination | Dynamo Frontend and routing accept requests and direct work to model workers |
| Model execution | Workers using vLLM, SGLang, or TensorRT-LLM load the model and run its computation |
| Model and software artifacts | A container registry supplies the runtime image; model storage supplies weights, tokenizer files, and model configuration |
| Compute infrastructure | GPU machines, drivers, networking, and storage provide the physical capacity |
| Workload management | Kubernetes schedules and maintains containers; the Dynamo Operator manages Dynamo serving deployments |
| Deployment workflow | Helm packages Kubernetes configuration; optional AI Runway and Argo CD provide higher-level deployment and Git synchronization workflows |
| Live inspection | Headlamp or kubectl show Kubernetes resources, events, and container logs |
| Monitoring | Prometheus holds metrics, Loki holds collected logs, and Grafana provides dashboards and exploration |

The main request path is much shorter than that table. This example uses Dynamo's native frontend arrangement; other supported gateway integrations can place the routing decision at the gateway:

```text
Document-summary application
	|
	v
Access layer / gateway, where configured
	|
	v
Dynamo Frontend and routing
	|
	v
Model workers using a serving runtime
	|
	v
GPUs execute the model
```

The answer returns through the serving endpoint to the application. Kubernetes keeps the workloads running underneath this path. Deployment controllers maintain their configuration alongside it. Monitoring collects evidence about how it behaves.

That distinction is the organizing idea for everything that follows: **running a request, deploying the service, and observing the service are three different jobs.**

## Before Deployment: The Model and the Software

There are two things to obtain before a worker can do useful work.

The first is the **model**: its weights, the numerical parameters learned during training, together with files such as its tokenizer and configuration. The tokenizer translates text into the tokens the model processes. These files might come from a model repository, object storage, or a volume available to the workers.

The second is the **software that runs the model**, usually distributed as a container image. That image contains the serving runtime and the libraries it needs. Depending on how you package the service, the model files may be included in the image or downloaded or mounted separately.

The distinction matters during both deployment and debugging. A container can start successfully but fail to load the model because the files are inaccessible, the runtime does not support the model, or there is not enough GPU memory. Downloading an image is not the same as having a ready inference service.

For repeatable deployments, identify both the runtime image and the model revision precisely. An immutable image digest does not freeze model files fetched later from a moving branch. The deployment configuration also needs to record how the worker runs, including the relevant runtime options and resource requirements.

With those inputs available, we can move down to the infrastructure that runs them.

## 1. Kubernetes Provides the Foundation

Kubernetes schedules containers onto machines, restarts failed containers, connects services, and makes configured storage and hardware resources available.

Two Kubernetes terms appear throughout the stack:

- A **Pod** runs one or more containers together. A Dynamo worker runs in a Pod, which may request one or more GPUs.
- A **Service** provides a stable network address for a set of Pods, even as individual Pods are replaced.

GPU nodes also need the appropriate drivers and Kubernetes GPU integration. For NVIDIA GPUs, a device plugin commonly makes GPUs available as schedulable resources; the NVIDIA GPU Operator can manage much of that setup. A request for a GPU does not create hardware that the cluster lacks.

Kubernetes understands that a Pod needs a GPU. It does not inherently understand which worker has useful cached prompt state or how to split the work of generating an answer. Those are inference-specific decisions.

**Helm** and **kubectl** are tools for working with this foundation. Helm packages Kubernetes configuration into reusable installations. kubectl is the command-line client for applying configuration and inspecting resources, events, and logs. Neither runs the model.

## 2. The Dynamo Operator Creates the Serving Deployment

Before the cluster can serve a request, it needs a description of what should run.

Dynamo introduces a Kubernetes resource type called **`DynamoGraphDeployment`**. An individual object of that type describes a serving deployment, including components such as its frontend and workers.

The word *graph* refers to the connected serving components. It does not mean there is a graphical editor.

Kubernetes learns this resource type through a **Custom Resource Definition**, or **CRD**. The distinction is useful: the CRD defines the type; your deployment object describes one instance of it.

The **Dynamo Operator** watches these deployment objects and creates or updates the Kubernetes resources they require. An operator is a controller that repeatedly works to make the running system match its declared configuration. This is called **reconciliation**.

This is a different job from the NVIDIA GPU Operator mentioned earlier. The GPU Operator prepares the GPU software infrastructure on the nodes. The Dynamo Operator manages the inference workloads that use it.

For our document-summary service:

1. We submit a `DynamoGraphDeployment` describing the frontend, model workers, container images, and resource requirements.
2. The Dynamo Operator creates the corresponding workloads and supporting resources.
3. Kubernetes schedules the Pods onto suitable nodes.
4. The workers load the model and the components become ready to serve requests.

**The deployment object describes the service. The operator builds and maintains it. The running components serve requests.**

The operator is not a stop on the path of every prompt. It manages the lifecycle of the components that handle those prompts.

## 3. The Frontend and Workers Handle Requests

Once the service is ready, the application can ask it to summarize a document.

### The Frontend Is an API Server, Not a Dashboard

The **Dynamo Frontend** accepts OpenAI-compatible inference requests. Compatible describes the API format; it does not mean the request goes to OpenAI.

Despite its name, it is not a web page for deploying models. It is the network entry point for inference. Your application, or a separate chat UI, supplies the interface a person sees.

### Workers Run the Model

A worker uses a model-serving runtime such as **vLLM**, **SGLang**, or **TensorRT-LLM** to execute the model on GPUs. These are alternative backends, not three mandatory components you install in a sequence.

The runtime handles model execution and work such as batching requests. Dynamo coordinates work around the runtimes, including request routing and more advanced distributed serving arrangements.

The basic request path is:

1. **Application:** sends a document and a request to summarize it.
2. **Dynamo Frontend and routing:** accept the request and select an appropriate worker.
3. **Model worker:** processes the prompt and generates the answer on GPUs.
4. **Dynamo Frontend:** returns the answer, potentially streaming it as it is generated.

Argo CD, AI Runway's deployment UI, Headlamp, and Grafana do not relay each prompt through this path.

If callers are outside the cluster, you also need an appropriate way to reach the endpoint, such as an ingress or gateway. Authentication, TLS, and access controls belong in that access design; having an inference API does not make it safe to expose publicly.

### More Advanced Deployments Split the Work

Generating an answer has two main stages:

- **Prefill:** process the input prompt and build the model's attention state.
- **Decode:** use that state to generate output tokens, or pieces of text, one at a time.

The saved attention state is called the **key-value cache**, or **KV cache**. This is state created while processing a request, not the model's trained weights. Reusing suitable cached state for matching prompt prefixes can avoid repeating some prompt-processing work. **KV-cache-aware routing** considers where reusable state exists when selecting a worker.

In a simple deployment, the same worker handles prefill and decode. In a **disaggregated deployment**, separate worker pools handle them. That can help tune capacity for the two stages independently, but also introduces state-transfer and coordination costs.

For our application, a long report followed by a short summary creates a different balance of work from a short question followed by a long answer. The first has more input to process; the second has more output to generate. That is why treating all requests as equivalent can hide the actual capacity problem.

Dynamo also has planning and scaling capabilities for supported configurations. These are not all enabled merely by installing the operator. The chosen deployment determines which components and behaviors you use.

For understanding the architecture, start with a frontend and combined prefill/decode workers. Add the split when measurements justify its extra complexity.

### Workers Also Need to Find and Communicate With Each Other

The simple request diagram leaves out some internal plumbing:

- **Service discovery** tells components which workers are available and how to reach them. Dynamo supports Kubernetes-native discovery and alternatives such as etcd, a distributed key-value store.
- **Request and event transport** carries work and signals between components, including information about cached state. Some configurations use a messaging system such as NATS; it is not a universal prerequisite.
- **State transfer** moves data between workers in arrangements such as disaggregated serving. NIXL, NVIDIA's transfer library, supports high-speed movement of KV-cache data in supported backends. It is not another model server or dashboard.

NVIDIA's [architecture guide](https://docs.nvidia.com/dynamo/design-docs/overall-architecture) explains these paths in more detail. Their implementations and requirements vary by release and backend, so use a matching deployment example rather than combining dependency lists from different versions.

## 4. AI Runway and Argo CD Manage Deployment Intent

Both tools can affect what gets deployed, but they solve different problems.

### AI Runway: Describe the Model Service

[AI Runway](https://github.com/ai-runway/airunway) provides a web UI and a higher-level Kubernetes resource called **`ModelDeployment`**. It supports multiple inference providers, including Dynamo.

[![AI Runway interface](/assets/local-ai-stack/AI%20Runway.png)](/assets/local-ai-stack/AI%20Runway.png)

*AI Runway provides the model-oriented view of deployment.*

Instead of starting with a detailed Dynamo deployment, you start with the model you want to serve and its deployment settings. With the Dynamo provider configured, AI Runway's controller and provider integration translate that intent into Dynamo-specific resources.

There are two levels of description:

- **`ModelDeployment`:** the model service you want, expressed through AI Runway's API.
- **`DynamoGraphDeployment`:** the Dynamo serving components that implement it.

AI Runway is optional. You can submit Dynamo deployment objects directly without it. Its project also notes that its APIs are evolving, so check provider compatibility with the versions you install.

### Argo CD: Synchronize Configuration From Git

[Argo CD](https://argo-cd.readthedocs.io/en/stable/) compares configuration stored in Git with what exists in Kubernetes. It can apply changes through a manual sync or automatically, depending on configuration.

This is **GitOps**: Git records the desired configuration, and a controller synchronizes the cluster with it. Review and approval happen in your change process; Argo CD does not approve a commit merely by seeing it.

For a direct Dynamo deployment, the path is:

1. Change the `DynamoGraphDeployment` configuration in Git.
2. Review and merge the change.
3. Argo CD synchronizes it to Kubernetes.
4. The Dynamo Operator reconciles the updated object.
5. The running service changes accordingly.

### Give Each Controller a Clear Owner's Job

If you use AI Runway and Argo CD together, choose which configuration Git owns.

One arrangement is to store the parent `ModelDeployment` in Git. Argo CD manages that object, AI Runway manages the generated Dynamo deployment, and the Dynamo Operator manages the resulting workloads.

Read that as an ownership chain, not a request path:

```text
Git: ModelDeployment configuration
	|
	v
Argo CD: synchronizes the ModelDeployment
	|
	v
AI Runway: manages the DynamoGraphDeployment
	|
	v
Dynamo Operator: manages serving workloads
	|
	v
Kubernetes: runs the Pods
```

Avoid independently managing the same generated configuration with multiple tools. A manual change to a worker Pod, for example, may be replaced by its controller. A UI change to a Git-managed field may be overwritten by a later Argo CD sync.

**Make lasting changes at the level that owns the configuration.**

## 5. Headlamp Shows the Live Kubernetes State

[Headlamp](https://headlamp.dev/) is a Kubernetes UI for inspecting resources, status, events, and container logs. Available actions depend on your Kubernetes permissions.

[![Headlamp Kubernetes interface](/assets/local-ai-stack/Headlamp.png)](/assets/local-ai-stack/Headlamp.png)

*Headlamp provides the live Kubernetes view of the resources behind the model service.*

Suppose our document-summary endpoint never becomes ready. Headlamp helps answer:

- Does the `DynamoGraphDeployment` exist, and what status does it report?
- Were worker Pods created?
- Is a Pod waiting because no suitable GPU is available?
- Did its container image fail to download?
- Did the worker start but fail while loading the model?

The distinction from Argo CD is emphasis: **Argo CD compares the running system with the desired configuration; Headlamp helps inspect the running system itself.** Their capabilities overlap, but neither tells the whole story of inference performance.

You can investigate many of the same Kubernetes questions with kubectl. Headlamp gives you a visual interface, not a separate source of truth.

## 6. Prometheus, Loki, and Grafana Explain Behavior Over Time

A Pod can be running while the service is slow. That is why resource inspection and performance monitoring are separate jobs.

| Tool | Responsibility | Example |
| --- | --- | --- |
| Prometheus | Collect and store numeric measurements over time | Request rate, queue size, response latency |
| Loki | Store and make collected logs searchable | A worker's model-loading error |
| Grafana | Query data sources and display the results | A latency chart beside related worker logs |

**Grafana is the interface, not a substitute for collecting and storing the data.** Prometheus needs reachable metric endpoints. Loki needs a configured log collector. GPU measurements may require an exporter, a component that exposes hardware metrics for collection.

[![Grafana dashboard interface](/assets/local-ai-stack/Grafana.png)](/assets/local-ai-stack/Grafana.png)

*Grafana provides the operational view, using data from the monitoring systems connected to it.*

NVIDIA's [observability guide](https://docs.nvidia.com/dynamo/dev/kubernetes/operations/observability) describes Dynamo application metrics, operator metrics, and logging integration. Installing Dynamo alone does not install and connect the entire monitoring stack.

For a slow document-summary service, a useful investigation is:

1. **Grafana:** find when time to first token increased. This measures how long users wait before the answer starts appearing.
2. **Metrics from Prometheus:** compare request volume, queue size, and available worker capacity. High GPU utilization alone does not prove the cause.
3. **Headlamp:** inspect affected Pods for restarts, scheduling failures, or readiness problems.
4. **Logs in Loki, viewed through Grafana:** read messages from those workers in the same time window.
5. **Argo CD and Git:** check whether configuration changed around that time. A nearby rollout is evidence to investigate, not proof of causation.

Each tool contributes a different piece of evidence.

For more detailed request-level investigation, **distributed tracing** can record time spent across participating components. That requires configuring trace export and a collector and storage backend; it does not appear just because a Grafana dashboard exists. Be deliberate about collecting prompts or responses, since our document-summary service may handle sensitive material.

## What You Actually Put in the Cluster

It helps to distinguish infrastructure shared across model services from the resources for one particular model.

**Shared platform infrastructure** typically includes GPU-enabled nodes, the required Dynamo CRDs and operator, and the supporting services required by your Dynamo release. Argo CD, AI Runway, Headlamp, and the monitoring stack can also be shared. Some interfaces can run outside the cluster while connecting to it.

**Per-model resources** include the deployment object and the frontend, workers, and supporting Kubernetes resources created for that service. With AI Runway, the higher-level `ModelDeployment` sits above those resources.

For the document-summary example, the pieces now fit together:

1. Select a model that summarizes your documents well and fits the available hardware. Choose a compatible serving runtime, such as vLLM.
2. Record the model revision, runtime image, GPU requirements, and worker settings in the deployment configuration. Arrange access to the model files.
3. Submit the configuration through your chosen workflow. The controllers create the serving workloads, and Kubernetes schedules them.
4. Wait for the workers to load the model and become ready. Expose the frontend through the appropriate network and access controls.
5. Configure the application to call that endpoint, then test with representative documents and traffic. Inspect response quality as well as latency, errors, and capacity.

Use the installation instructions for your chosen release for exact dependencies and resource schemas. The architecture above is a map of responsibilities, not a version-specific installation recipe.

## Start With One Working Service

You do not need to adopt every tool in the table at once. For a first Dynamo deployment, start with a supported backend, a frontend, and workers that handle both prefill and decode. Provide the GPU infrastructure and supporting services required by that release, then use a direct deployment workflow you can inspect.

Check three things before adding more layers: the workers can load the intended model, an application can reach the endpoint through the intended access controls, and you can see enough metrics and logs to investigate a failed or slow request. A successful test prompt proves that the path works; it does not yet prove that the service can handle your expected traffic.

Then add capabilities to solve specific problems. Argo CD can make configuration changes reviewable and repeatable through Git. AI Runway can provide a model-oriented deployment interface. Headlamp can make cluster inspection easier. More advanced Dynamo arrangements can address serving bottlenecks once measurements show where they are.

The goal is not to install the most complete-looking collection of tools. It is to give each responsibility a clear home.

## Back to the Summarize Button

Return to the person waiting for a document summary. Their application reaches the inference endpoint. Dynamo directs the request to suitable workers. A serving runtime executes the model on GPUs, and the answer streams back. Kubernetes maintains the workloads that make this possible.

The rest of the stack makes that experience manageable over time. Deployment tools turn reviewed intent into running resources. Inspection tools show what exists now. Metrics and logs help explain what happened and whether the service is meeting its users' needs.

When something goes wrong, those boundaries give you a place to start. A worker that never becomes ready points you toward infrastructure, configuration, or model loading. A ready service with a growing queue calls for a look at demand and serving capacity. A fast but inaccurate summary needs attention to the model, prompt, and application evaluation, not just the Kubernetes deployment.

**A model produces an answer. A serving stack makes that answer available, repeatable, and operable.** NVIDIA Dynamo owns the inference coordination part of that system. Once you can place the other tools around it, the architecture stops being a list of product names and becomes a service you can reason about from beginning to end.