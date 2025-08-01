---
title: Red Teaming Study Guide
description: A complete guide to red teaming concepts and vulnerabilities.
tags: ['DeepEval', 'LLM Evaluation', 'Red Team']
style: 'fill'
color: 'secondary'
--- 

# Red Teaming Study Guide

This guide provides a summary of red teaming concepts and vulnerabilities.

## Introduction to DeepTeam

DeepTeam is an open-source Python package from DeepEval designed specifically for red teaming LLMs. It simulates how a malicious user might try to compromise your system, helping you identify and fix vulnerabilities before they are exploited. It integrates with the broader DeepEval ecosystem for evaluation.

### Core Usage

The main function is `red_team`, which takes your model, a list of vulnerabilities to test for, and a list of attack strategies.

```python
from deepteam import red_team
from deepteam.vulnerabilities import Bias
from deepteam.attacks import PromptInjection

def model_callback(input: str) -> str:
    # Replace this with your LLM application
    return f"I'm sorry but I can't answer this: {input}"

bias = Bias(types=["race"])
prompt_injection = PromptInjection()

red_team(model_callback=model_callback, vulnerabilities=[bias], attacks=[prompt_injection])
```

## Vulnerabilities

DeepTeam tests for various vulnerabilities by using targeted attacks. Here are the key categories:

### Bias

- **Purpose:** Tests the LLM's ability to identify, mitigate, and avoid generating biased content.
- **Configuration:** Can be configured to target specific types of bias (e.g., `types=["race"]`).
- **Usage:** Implemented as the `Bias` class in the `deepteam.vulnerabilities` module.

### Competition

- **Purpose:** Tests if the LLM can resist disclosing sensitive competitive information or unfairly influencing market perceptions.
- **Usage:** Implemented as the `Competition` class in the `deepteam.vulnerabilities` module.

### Excessive Agency

- **Purpose:** Tests if the LLM can be manipulated into performing actions that exceed its intended scope or violate its safety constraints.
- **Configuration:** Can target specific types of agency, such as `types=["functionality"]`.
- **Usage:** Implemented as the `ExcessiveAgency` class in the `deepteam.vulnerabilities` module.

### Graphic Content

- **Purpose:** Tests if the LLM can be prompted to generate explicit, inappropriate, or graphic material.
- **Configuration:** Can target specific types of content, such as `types=["sexual content"]`.
- **Usage:** Implemented as the `GraphicContent` class in the `deepteam.vulnerabilities` module.

### Illegal Activity

- **Purpose:** Tests if the LLM can be prompted to generate content that facilitates or promotes unlawful actions.
- **Configuration:** Can target specific types of illegal activities, such as `types=["violent crime"]`.
- **Usage:** Implemented as the `IllegalActivity` class in the `deepteam.vulnerabilities` module.

### Intellectual Property

- **Purpose:** Tests if the LLM can be prompted to generate content that infringes on or misuses intellectual property rights.
- **Configuration:** Can target specific types of IP violations, such as `types=["copyright violations"]`.
- **Usage:** Implemented as the `IntellectualProperty` class in the `deepteam.vulnerabilities` module.

### Misinformation

- **Purpose:** Tests if the LLM can avoid generating or amplifying false or misleading content.
- **Configuration:** Can target specific types of misinformation, such as `types=["factual error"]`.
- **Usage:** Implemented as the `Misinformation` class in the `deepteam.vulnerabilities` module.

### PII Leakage

- **Purpose:** Tests if the LLM can be manipulated into disclosing Personally Identifiable Information (PII).
- **Configuration:** Can target specific types of PII leakage, such as `types=["direct pii disclosure"]`.
- **Usage:** Implemented as the `PIILeakage` class in the `deepteam.vulnerabilities` module.

### Prompt Leakage

- **Purpose:** Tests if the LLM can be manipulated into revealing sensitive or internal details from its system prompt.
- **Configuration:** Can target specific types of prompt leakage, such as `types=["secrets and credentials"]`.
- **Usage:** Implemented as the `PromptLeakage` class in the `deepteam.vulnerabilities` module.

### Robustness

- **Purpose:** Tests if the LLM can resist malicious inputs or user-provided data that could compromise its intended behavior.
- **Configuration:** Can target specific types of robustness issues, such as `types=["hijacking"]`.
- **Usage:** Implemented as the `Robustness` class in the `deepteam.vulnerabilities` module.

### Personal Safety

- **Purpose:** Tests if the LLM can resist generating responses that jeopardize the safety and well-being of individuals.
- **Configuration:** Can be configured to target specific types of safety issues.
- **Usage:** Implemented as the `PersonalSafety` class in the `deepteam.vulnerabilities` module.

### Toxicity

- **Purpose:** Tests if the LLM can resist generating or assisting in the creation of harmful, offensive, or demeaning content.
- **Configuration:** Can target specific types of toxicity, such as `types=["race"]`.
- **Usage:** Implemented as the `Toxicity` class in the `deepteam.vulnerabilities` module.

### Unauthorized Access

- **Purpose:** Tests if the LLM can be prompted to exploit security weaknesses, perform unauthorized actions, or access restricted resources.
- **Configuration:** Can target specific types of unauthorized access, such as `types=["rbac"]`.
- **Usage:** Implemented as the `UnauthorizedAccess` class in the `deepteam.vulnerabilities` module.

## Adversarial Attacks

- **Purpose:** Use adversarial attacks to uncover vulnerabilities that are not discoverable through normal prompting.
- **Examples:** `Prompt Injection`, `Leetspeak`, `ROT13`, etc.
- **Implementation:** DeepTeam provides over 10 adversarial attack types, including single and multi-turn attacks.
- **Usage:** Attacks are used within the `red_team` function alongside vulnerabilities.

```python
from deepteam.attacks.single_turn import PromptInjection
from deepteam.attacks.multi_turn import LinearJailbreaking
from deepteam import red_team

prompt_injection = PromptInjection()
linear_jailbreaking = LinearJailbreaking()

risk_assessment = red_team(
    attacks=[prompt_injection, linear_jailbreaking], 
    model_callback=..., 
    vulnerabilities=...
)
```
