---
title: Next-Gen Transcription Models Transform Real-Time Communication
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 07-29"
---
OpenAI has introduced two advanced transcription models, GPT-Transcribe and GPT-Live-Transcribe, to succeed Whisper, offering enhanced accuracy, real-time low-latency streaming, multi-language support, and improved contextual capabilities. Major trends include an emphasis on better handling of multilingual environments, new request fields, and detected language outputs. Users are encouraged to update their application integration and consult provided resources for smooth migration, with guidance available on addressing common migration challenges.

## New Cookbook Recipes

### [migrating_from_whisper_to_gpt_transcribe.ipynb](https://github.com/openai/openai-cookbook/blob/0a796c4b95457a82dc090d0e31392deaf3b07f28/examples/migrating_from_whisper_to_gpt_transcribe.ipynb)
**Source:** openai/openai-cookbook

OpenAI has announced new transcription models, GPT-Transcribe and GPT-Live-Transcribe, designed to replace Whisper with improved functionalities. GPT-Transcribe focuses on accurate transcription of uploaded audio files, while GPT-Live-Transcribe offers low-latency, real-time transcription for continuously streaming audio. Key changes include new request fields, multiple language support, and contextual hints. Users of Whisper are encouraged to migrate by utilizing appropriate endpoints and updating their application code accordingly.

Other notable updates involve the shifting from single-language hints to a multi-language array, and the introduction of streaming capabilities for completed audio files. Additionally, the models provide detected language outputs, allowing better handling of multilingual environments. OpenAI suggests evaluating transcription quality and operational behaviors to ensure effective migration. The blog outlines common migration errors and provides resources for further guidance on using the new models.