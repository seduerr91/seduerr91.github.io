---
title: Cloud Infrastructure
tags: [Mental Castle]
style: fill
color: primary
description: A walk through Bamberg
---

## Tooling to set up Kubernetes in AWS

`Brennerstr.`: AWS Control Plane Types:

- `Aldi`: EKS instance: managed kubernetes solution, AWS cares for updates, providing availability, auth, security, load balancing, scaling for $72/month.
- `Rewe`: Self-managed: AWS as IaaS, deploy kubernetes with kubeadmin or rancher, requires human labor

`Katharinenstr.`: Workernodes: 
- `1`: Self-managed nodes: provide own node groups and attach them to cluster
maximum flexibility and scaling is included
additional management overhead: 
needed to use services like AWS outposts
only always has identical instance types: you cannot combine ARM64 ubuntu and a x86 AMI instance
- `11`: EKS managed nodeGroups: pay per use
  - takes care of provisioning and connecting them to EKS cluster
  - updates nodes (security and OS)  to latest AMI (Amazon Machine Image)
  - choose between on-demand instances and spot instances (spot: can lead to node drains, don't use for stateful or fault intolerant workloads)
- `Stadtwerke`: AWS Fargate: Containers as a service, paying only for workload
    - no config overhead but no control over environment
    - can't ssh into node, can't use GPU

`Zollnerstr.`: Considering Multicluster: 
- tool kubermatic helps managing multiple clusters and to provision them
- AWS eksctl or the web UI are sufficient

`Feki Mensa`: Deployment Pipeline: 
- GitOps approach with ArgoCD or Flux
- git triggered CICD pipeline with images pushed to container registry available in the cluster (ECR)
- additional environment repos watched by ArgoCD or Flux holding kustomize files / helm charts

## Inference Service on Kubernetes

`Feki Bib`: Deployment and Load Balancing:
- have multiple instances of inference service and route through ingress gateway
- default kubernetes service can do load balancing of routing request to an instance
- ray can create a single point of entry and ray takes care of load balancing in application code, we need to provision computing resources (ray clusters) for the workload to run on, e.g. with worker pods

`Mathe Faq`: Container Spec:
- package inference services in (multiple) container image(s)
- provide health and readiness endpoints in the container to leverage kubernetes autohealing

`Sporthallen`: Node Spec:
- which node group type (managed, self-managed, spot or on demand)
- resource size: # CPU, memory, # GPU
- Node groups per application: taints on nodegroups to ensure correct scheduling of workloads

`Umkleiden`: Tenancy Separation: 
- Dedicated clusters per tenant: master cluster as an entry point, each tenant would have separate computing resources, custom models, no interference
- Single cluster and dedicated worker node pools per tenant: still separation of tenants
- Shared workers: better util, one client could disrupt service for other clients

`Sportplatz`: Monitoring: monitoring, alerting and log management stack
Prometheus and alertmanager for metrcos
Grafana for analytics, monitoring and visualization
Jaeger for distributed tracing

`Rechenzentrum`: Autoscaling: 
- Vertical auto scaling: scaling of computer resources (CPUs, memory, GPUs)
  - Node cordening: if a lot of nodes are underutilized, autoscalers will take care of trying to shift the remaining load on some workers to other workers.
- Horizontal auto scaling: provisioning and deletion of new workers depending on load.
  - Ray manages with cluster Autoscaler
- Pod level vertical auto scaling: use kubernetes native vertical Pod Autoscaler automatically
- Pod level horizontal auto scaling: either AWS horizontal pod autoscaler or ray operator

`Validationautomat`: GPU Utilization: 
- GPU can only be claimed in whole numbers (not fractional), we need to split GPU up between pods, otherwise they would be underutilized
- on physical level: 
  - use Nvidia GPUS with MIG (multi instance gpus): can split GPU into slices, each of which get dedicated cpu memory and time resources
- on software level:
    - use CUDA timesharing features: meaning CUDA processes get scheduled and take over the whole GPU which results in full context switches and memory swapping
    - MPS: aws-virtual-gpu-device plug-in: deployed as demonset, configures MPS on nodes and enables us to claim virtual GPUs in containers, avoid OOM errors (since there is no physical memory separation)
    - GPU resource management timesharing: integrated in ray framework abstracting the setup away and allow fractional GPU slices in the actual application code, relying on ML frameworks

`Main Entrance`: Storage Provider: 
- elastic block storage (EBS): fastest option in terms of raw performance, attached to one node only, not easy to scale
- elastic file system (EFS): highly scalable NFS that can be shared between nodes, great to share models 
- S3 buckets: great for long-term storing, cheap and can interface with analytic tools

## `Weissenburgstr`: | Running Multiple NLP models to achieve efficient GPU util

- `McFit`: Setup: Single cluster and shared worker approach, customers are segregated just on request level via API keys.
- `Hotel Garni`: Slicing of inference containers: 
  - Scheduler: Different nodes so that scheduler uses appropriate nodes for different workload  
  - Reader containers:
    - on-demand node groups for stability, keeping models in memory without drains
    - host instances of GPUs with MIG support, to accommodate needs of different models
    - split reader in different classes via Deployments with different models and labels targeting different nodegroups (via tolerations)
    - Monitoring, testing, and analytics can optimize parameters of different nodegroups and models
    - a node group with GPU time sharing, and a fitting reader image, which hosts very rarely used models
    - use of EFS storage to share models and spin up new ones faster
- `Bambados`: DocumentStore/Retriever containers: simple containers for both
- `Volkspark`: 'Front end' services: 
  - providing pipeline creation, search endpoint, scheduling, retrying failed searches
  - Simple Ingress Gateway routing strategy: based on HTTP parameters requests get routed to different versions of the reader service or via URL params or info in the body
  - Could consider also a service mesh solution for routing
- `Freibad`: Monitoring and testing: is key to figure out what causes performance bottlenecks, and how changes in configuration affect the results
  - grafana and prometheus to track useful metrics: average request response times, load, error count
  - jaeger: create and distribute tracing IDs for all calls, to aggregate information on average request response time, time spent in every service etc.
- `Stadion`: Challenges:
    - Slicing Request service into different classes based on models and finding the right configuration of the respective node groups to fully utilize GPU memory.
    - balancing resource planning for smooth operation during request spikes.