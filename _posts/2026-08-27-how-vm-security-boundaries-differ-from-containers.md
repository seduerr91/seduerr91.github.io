---
title: How VM Security Boundaries Differ from Containers
tags: [Security, Containers, Cloud]
style: fill
color: success
description: A senior engineer's guide to VM and container isolation, from kernels and cgroups to practical design decisions.
---

I used containers long before I had a satisfying mental model for their security boundary.

The usual explanation was a list of Linux features: namespaces, cgroups, capabilities, seccomp, AppArmor, and SELinux. Every word was technically relevant. The list still did not tell me what a container actually *was*, why each mechanism existed, or what an attacker would have to cross.

This is the explanation I wish I had received as a senior engineer who understood operating systems and cloud infrastructure but was not a full-time security specialist.

## The Short Answer

A **security boundary** is a layer that is expected to prevent code on one side from affecting data, code, or infrastructure on the other side—even if the code is compromised.

A conventional Linux container isolates a group of processes **inside one shared host kernel**. A virtual machine, or VM, normally boots its own **guest operating system and kernel**, with a **hypervisor** mediating access to the physical hardware.

The request paths look like this:

```text
Container:
application process -> system call -> shared host kernel -> hardware

Virtual machine:
application process -> system call -> guest kernel -> virtual hardware -> hypervisor -> hardware
```

A **system call** is a request from an application to the kernel: open this file, allocate memory, create a network connection, start a process, or mount a filesystem. The kernel is the privileged part of the operating system that schedules processors, manages memory, talks to devices, and enforces access rules.

Because containers share that kernel, a kernel flaw or overly powerful container configuration can expose the host and neighboring workloads. A VM places a separate guest kernel and virtualization boundary in the path. That usually makes VMs a stronger default for mutually untrusted workloads, but it does not make them invulnerable.

## The Building Metaphor

I think of containers as apartments in one building.

Each tenant can have a different apartment number, view, key set, storage area, and utility quota. The apartments can feel private. But they share the structure, utilities, and building management. In the metaphor, the host kernel is the building manager and infrastructure combined.

VMs are closer to separate houses on land operated by a common property manager. Each house has its own internal systems and its own superintendent—the guest kernel. The hypervisor is the property layer that allocates land and utilities and keeps the houses apart.

If an attacker takes over an apartment, the next target is the shared building machinery. If an attacker takes over a house, they still need to break through its internal systems and then the property boundary to reach another house.

The metaphor also explains an important caveat: compromising the property-management portal can be easier than tunneling through a wall. Stolen cloud credentials, an exposed virtualization console, or an overprivileged Kubernetes identity can bypass the low-level boundary entirely.

## What a Container Really Is

A conventional container is not a small VM and does not boot a separate kernel.

At runtime, it is roughly:

- one or more ordinary host processes
- an isolated view of selected operating-system resources
- resource limits and accounting
- a restricted set of privileges and kernel operations
- a filesystem assembled from a container image

An **image** is the packaged filesystem and metadata used as a template. A **container runtime**, such as containerd or CRI-O, asks the kernel to create the constrained processes. CRI-O implements Kubernetes' **Container Runtime Interface** (CRI) using **Open Container Initiative** (OCI) runtimes. An **orchestrator**, such as Kubernetes, decides where those containers should run and configures their identities, networks, storage, and lifecycle.

The kernel mechanisms are easier to understand when each one answers a separate question.

## Namespaces: What Can This Process See?

A Linux **namespace** gives a process a scoped view of one kind of operating-system resource.

In the building metaphor, namespaces are the tenant directory, room numbers, and floor plan. Two tenants can both see a door labeled `front` without that label referring to the same physical door.

Common namespaces include:

- **PID namespace:** controls which process identifiers are visible. PID means **process ID**, the number the operating system assigns to a running process.
- **network namespace:** gives a workload its own network interfaces, routes, firewall rules, and port space.
- **mount namespace:** gives it a separate view of mounted filesystems.
- **user namespace:** maps user and group IDs inside the namespace to different IDs outside it. A process can appear to be root inside while mapping to an unprivileged user on the host.
- **UTS namespace:** isolates the hostname. UTS comes from the historical name **UNIX Time-Sharing System**.
- **IPC namespace:** isolates selected inter-process communication resources. IPC means **inter-process communication**.

Why are namespaces needed?

Without them, a process could see the host's process list, network devices, mounts, hostname, and other global resources. Containers would be little more than normal applications started from a different directory.

The important limit is that namespaces primarily change **visibility and naming**. They are not a complete permission system. A process still reaches the same kernel, and another configuration may deliberately expose host resources inside its view.

The [Linux namespaces manual](https://man7.org/linux/man-pages/man7/namespaces.7.html) is the useful reference once the mental model is in place.

## cgroups: How Much Can This Workload Consume?

**cgroup** stands for **control group**. Linux uses cgroups to organize processes into a hierarchy and account for or control the resources they consume.

In the building metaphor, cgroups are utility meters, quotas, and circuit breakers.

A cgroup can govern resources such as:

- processor time
- memory
- disk input and output, usually shortened to I/O
- the number of processes a workload may create

Processor usage is commonly labeled CPU, short for **central processing unit**.

Why is that needed for security?

Isolation is not only about confidentiality. It is also about availability. A memory leak, a fork bomb that repeatedly creates new processes, or a hostile workload should not be able to consume all memory, create millions of processes, monopolize the processors, and take down every other tenant on the node.

This makes the distinction easy to remember:

> Namespaces answer, "What can I see?" Cgroups answer, "How much can I use?"

Cgroups are not the main wall protecting one container's files from another. Docker's [security documentation](https://docs.docker.com/engine/security/) explicitly distinguishes their resource-control role from data and process isolation. The authoritative [Linux cgroup v2 documentation](https://docs.kernel.org/admin-guide/cgroup-v2.html) describes the mechanism as hierarchical organization and controlled distribution of resources.

In Kubernetes, CPU and memory **requests** guide scheduling, while **limits** are enforced through the container runtime and kernel controls such as cgroups. CPU requests also influence how processor time is shared during contention. A Kubernetes **node** is a machine that runs pods; a **pod** is Kubernetes' smallest deployable unit and groups one or more containers. If resource settings are absent or unrealistic, the availability boundary is weaker even when filesystem isolation is correct.

## Capabilities: Which Privileged Keys Does It Hold?

Traditional UNIX systems treated the root user like someone holding one enormous master key. Linux **capabilities** split many root privileges into individually grantable units.

In the building metaphor, capabilities are a key ring. A maintenance worker may need the key to the network closet without receiving keys to every apartment, the roof, and the property office.

Examples include:

- `CAP_NET_BIND_SERVICE`: bind a network service to a port below 1024
- `CAP_NET_ADMIN`: change network interfaces, routes, and firewall configuration
- `CAP_SYS_TIME`: change the system clock
- `CAP_SYS_BOOT`: reboot the system
- `CAP_SYS_ADMIN`: perform a very broad collection of administrative operations

The `CAP_` prefix simply marks the name as a Linux capability. `CAP_SYS_ADMIN` deserves special attention because it has accumulated so many powers that engineers often describe it as the kernel's "miscellaneous admin" or "junk drawer" capability. Granting it can remove a large part of the intended isolation.

Why do capabilities matter?

A web server might need one narrow privilege without needing everything historically implied by root. The safer pattern is to drop all capabilities and add back only the ones the workload demonstrably requires.

Capabilities are still contextual. A capability held inside a user namespace may apply only to resources governed by that namespace. The exact rules are documented in the Linux [capabilities manual](https://man7.org/linux/man-pages/man7/capabilities.7.html).

## seccomp: Which Kernel Requests Are Even Allowed?

**seccomp** means **secure computing**. It lets Linux filter the system calls a process is allowed to make.

In the building metaphor, seccomp is the list of requests the front desk will accept from a tenant. Reading a package or opening a normal network connection may be allowed. Requests to load kernel features, trace another process, or create a new namespace may be rejected.

Why is this useful?

The Linux kernel exposes hundreds of system calls. Most applications use only a subset. If a container never needs a dangerous or obscure call, blocking it removes one route an attacker could use to reach vulnerable kernel code.

Seccomp reduces attack surface; it does not understand business intent. It can filter a call such as `mount`, but it is not normally the tool that decides whether an application may read `/customer-data/a.csv` but not `/customer-data/b.csv`. Filesystem and mandatory access-control policies handle that kind of resource rule.

Kubernetes supports runtime-default and custom seccomp profiles, and the [Linux seccomp manual](https://man7.org/linux/man-pages/man2/seccomp.2.html) documents the underlying mechanism.

## AppArmor and SELinux: What Does Policy Permit?

**AppArmor** and **SELinux** are Linux security systems that implement **mandatory access control**, shortened to MAC.

Normal file permissions are called discretionary because an owner can often change them. Mandatory access control adds a policy enforced by the kernel even when the process's user and file permissions would otherwise allow an operation.

In the building metaphor, this is the security guard following a property-wide rulebook. Possessing a room key does not override a rule that contractors may never enter the records floor.

- **AppArmor** commonly uses profiles expressed around program behavior and filesystem paths.
- **SELinux**, short for **Security-Enhanced Linux**, assigns security labels to processes and resources and applies rules to interactions between those labels.

Why add this after namespaces, cgroups, capabilities, and seccomp?

Because each mechanism answers a different question. A compromised process may see a file in its mount namespace, stay under its memory limit, hold no unusual capability, and use an ordinary `open` system call—yet still have no legitimate reason to read that file. AppArmor or SELinux can deny it.

Kubernetes' [security-context documentation](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/) shows how capabilities, seccomp, AppArmor, and SELinux connect to pod configuration.

## Putting the Mechanisms Together

The metaphors are deliberately different because these controls are not interchangeable:

| Mechanism | Question it answers | Mental model |
|---|---|---|
| Namespace | What resources can the process see and name? | Separate tenant directory and floor plan |
| cgroup | How much can the process consume? | Meter, quota, and circuit breaker |
| Capability | Which privileged operations may it perform? | Reduced key ring |
| seccomp | Which kernel requests may it issue? | Front-desk request filter |
| AppArmor or SELinux | Which resources may it access under policy? | Security guard with a rulebook |

Together they can create strong practical isolation. None is a concrete wall by itself, and they still depend on the correctness of the shared kernel.

## Why a VM Is a Different Boundary

A VM normally includes its own guest operating system and guest kernel.

The **hypervisor**, also called a virtual machine monitor, presents virtual processors, memory, storage, and network devices to each VM. It mediates access to the real hardware and isolates one VM from another. The [U.S. National Institute of Standards and Technology (NIST) hypervisor guidance](https://csrc.nist.gov/pubs/sp/800/125/a/r1/final) defines runtime isolation as one of the hypervisor's baseline responsibilities.

This changes the escape path. Compromising an application inside a VM does not directly place an attacker inside the host kernel. They first land in the guest environment and must cross the hypervisor or a management boundary to reach the host or another VM.

That extra boundary is why VMs are generally preferred for workloads controlled by mutually distrustful parties. Examples include arbitrary customer code, hostile file analysis, and some continuous-integration jobs that execute code from untrusted pull requests.

The tradeoff is more machinery:

- another operating system to configure and patch
- virtual devices and guest integrations
- a hypervisor and virtual network
- images, credentials, and a management plane

A vulnerable hypervisor, unsafe device passthrough, or compromised management console can still undermine the boundary.

## The Most Common Escape Route Is Often an Open Door

When reviewing a workload, I would not focus only on exotic kernel or hypervisor exploits.

A container with any of the following may already have a path to the host:

- privileged mode
- broad capabilities such as `CAP_SYS_ADMIN`
- writable host filesystem mounts
- the host process or network namespace
- access to the Docker or container-runtime socket

The Docker socket is the local **application programming interface**, or API, used to control the Docker daemon—the long-running service that manages containers. A workload that can instruct a daemon running with host root privileges to start arbitrary containers or mount host directories effectively holds the property-management master console. Treat that access as host-level privilege.

Credentials create similar shortcuts. A pod may be technically well isolated but carry a Kubernetes service account with excessive **role-based access control** permissions, usually called RBAC. It may also reach cloud **identity and access management**, or IAM, credentials that can read storage, create machines, or assume other roles.

In those cases, the attacker does not need to escape. The authorized interfaces already provide the path.

## Containers and VMs Usually Form Layers

In production cloud systems, containers and VMs are commonly used together:

1. physical hardware
2. hypervisor
3. node VM and guest operating system
4. container runtime
5. Kubernetes components
6. pod and container
7. application identity and code

Each layer limits a different **blast radius**, meaning the maximum scope of damage after a compromise. A VM can separate one node from another. Container controls separate workloads within a node. Kubernetes RBAC limits actions through the control plane—the APIs and controllers that manage cluster state. Network policy limits connections. Cloud IAM limits access to external services.

This is **defense in depth**: no single mechanism is expected to survive every mistake and exploit.

## How I Would Choose the Boundary

The useful question is not "Are containers secure?" It is "Secure enough against whom, for what, and with which privileges?"

| Workload | Reasonable starting point |
|---|---|
| Microservices owned by the same trusted organization | Restricted containers inside patched node VMs |
| Customer-submitted or otherwise untrusted code | A stronger sandbox boundary such as a VM, microVM, or dedicated sandbox runtime |
| Privileged monitoring, storage, or networking agent | Dedicated nodes where possible; treat compromise as potential node compromise |
| Build job executing code from an untrusted contribution | Ephemeral VM or hardened sandbox with short-lived credentials and no sensitive network access |
| Highly sensitive multi-tenant data processing | Layer VM and container isolation, minimize identity permissions, and validate against the actual threat model |

A **microVM** is a stripped-down VM optimized for fast startup and low overhead. A **sandbox runtime** adds another isolation layer between an application and the host kernel, often by intercepting or reimplementing much of the system-call interface.

These options live on a spectrum. Stronger isolation usually costs something in startup time, memory, compatibility, operational complexity, or performance.

## The Design-Review Questions I Would Ask

For a senior engineering review, this checklist gets closer to the real boundary than the word "containerized":

1. **Who controls the code?** Our team, a partner, a customer, or an anonymous contributor?
2. **What is the consequence of compromise?** One request, one pod, the node, the cluster, or the cloud account?
3. **Is sharing a kernel acceptable for those parties?** If not, use a VM or another sandbox boundary.
4. **Which capabilities, mounts, host namespaces, devices, and runtime sockets are exposed?** Why is each one necessary?
5. **Which credentials does the workload receive?** What can they read, change, create, or impersonate?
6. **Are CPU, memory, I/O, and process-count limits set?** Can one workload deny service to neighbors?
7. **Are seccomp, AppArmor or SELinux, non-root execution, and read-only filesystems enabled where practical?**
8. **How would we detect and contain a breakout?** Consider runtime signals, network boundaries, credential lifetime, node replacement, and incident response.

Kubernetes' [Pod Security Standards](https://kubernetes.io/docs/concepts/security/pod-security-standards/) provide a concrete baseline, and its [Linux kernel security guidance](https://kubernetes.io/docs/concepts/security/linux-kernel-security-constraints/) explains how these kernel controls interact.

## What I Would Read Next

For the conceptual model, I would start with Liz Rice's [*Container Security, Second Edition*](https://www.oreilly.com/library/view/container-security-2nd/9798341627697/). It connects Linux internals to practical threat modeling without treating containers as a black box.

Then I would compare two NIST Special Publications, abbreviated SP:

- [NIST SP 800-190, *Application Container Security Guide*](https://csrc.nist.gov/pubs/sp/800/190/final)
- [NIST SP 800-125, *Guide to Security for Full Virtualization Technologies*](https://csrc.nist.gov/pubs/sp/800/125/final)

The mental model I want to retain is simple:

> A container gives a process a constrained room inside a shared kernel. A VM gives a workload its own kernel behind virtual hardware.

From there, every unfamiliar security term becomes a concrete engineering question: what can the process see, consume, request, access, and control—and which boundary must fail before the damage reaches the next tenant?
