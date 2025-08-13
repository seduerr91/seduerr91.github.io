---
title: AI Daily
tags: [AI, Blogs]
style: fill
color: primary
description: Articles from the Microsoft blog(s) on 08-13
---

Recent blog posts highlight significant advances in AI model training through the introduction of new optimizers, Muon and Dion. Muon enabled notable speed improvements, supporting large-scale model training and leading to the 1T parameter Kimi-K2 model. While Muon excels at smaller scales, Dion, now open-sourced, delivers better efficiency and scalability for larger models by introducing orthonormalization with amortized power iteration and a novel scalability dimension called rank. Benchmarks indicate Dion outperforms existing optimizers across various batch and model sizes. Both optimizers are now available as open-source PyTorch implementations, further accelerating AI research and development.

### [Dion: the distributed orthonormal update revolution is here](https://www.microsoft.com/en-us/research/blog/dion-the-distributed-orthonormal-update-revolution-is-here/)
**Source:** Microsoft

The blog post introduces a new optimizer called Muon, which has demonstrated promising results by powering a nanoGPT speedrun. Several AI labs reported 2x scale improvements using Muon, leading to the release of the 1T parameter Kimi-K2 model. Dion, another optimizer developed to enable more efficient training of large models at scale, has been open-sourced. Dion implements orthonormalization using amortized power iteration and introduces a new scalability axis called rank. While Muon faces challenges with large models, Dion has shown improved performance at larger scales by achieving a closer approximation to orthonormalization. The post provides insights into the benefits and performance of Dion compared to other optimizers across different batch sizes and model sizes. Open-source PyTorch implementations of Dion and Muon are available for faster training.