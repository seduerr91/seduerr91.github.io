---
title: How I Want to Learn Ethical Hacking
tags: [Security, Learning, Coding]
style: fill
color: success
description: A practical map for getting into ethical hacking without skipping the fundamentals.
---

Ethical hacking keeps pulling at me.

Not because of the movie version of hacking, and not because I want vague "cybersecurity knowledge," but because I like understanding how real systems fail at their edges. Broken auth. Unsafe assumptions. APIs that trust the wrong thing. Product decisions that look harmless until you view them from the attacker's side.

The version that interests me most is not abstract theory. It is high-impact, consequence-driven research on real systems, paired with clear disclosure and real fixes.

So this is the map I would follow if I wanted to get serious about it.

## What Ethical Hacking Actually Is

Ethical hacking is not just "finding clever bugs."

It is security work done with authorization, scope, and the goal of reducing risk. Depending on the setting, that can mean:

- bug bounty research
- penetration testing
- product security review
- security engineering
- vulnerability research with responsible disclosure

The common thread is not offense for its own sake. It is learning how systems break so they can be made harder to break.

That distinction matters because the interesting part is not simply whether something is exploitable. It is whether you can explain the root cause, the impact, the fix, and the pattern that should be prevented next time.

## The Concepts I Want to Get Straight First

### CWE versus CVE

This was one of the first things I wanted to clean up in my own notes.

[CWE](https://cwe.mitre.org/) is MITRE's list of common software and hardware weakness types. It is about categories of failure: things like improper authorization, path traversal, injection, memory safety bugs, and other recurring design or implementation mistakes. If I want a compact entry point, MITRE's annual [CWE Top 25](https://cwe.mitre.org/top25/) is probably the best place to start.

[CVE](https://www.cve.org/about/overview) is different. CVE is the catalog of publicly disclosed vulnerabilities, with one CVE Record for each disclosed issue. A CVE is a specific vulnerability in a specific product or component. A CWE is the underlying weakness class that may have caused it.

So the right mental model is:

- **CWE** = recurring bug pattern
- **CVE** = specific disclosed instance

That sounds small, but it changes how you learn. If I only collect CVEs, I collect incidents. If I learn CWEs well, I start recognizing bug families.

### Threat Modeling Before Exploitation

Before I try to exploit anything, I want to get better at seeing the system.

That means understanding:

- assets worth protecting
- actors and roles
- trust boundaries
- data flows
- user journeys
- privileged actions
- where identity, state, and authorization get decided

Microsoft's [STRIDE](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats) model is still a strong scaffold for asking structured questions, and OWASP's [Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html) is a good reminder that simple data flow diagrams are often the right place to start.

I had written "thread model" in my scratch notes at one point, but the real idea is threat modeling: map the system first, then ask what can go wrong.

### Sources, Sinks, and Taint

Another concept I want in muscle memory is source-to-sink reasoning.

Where does untrusted data enter the system? Where does it become dangerous? What transformations happen in between?

GitHub's [CodeQL data flow documentation](https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/) is a clean way to think about this. Its taint-tracking model is basically formalized attacker thinking: can user-controlled or otherwise unsafe data flow from a source to a sink that matters?

That framing shows up everywhere:

- SQL injection
- command injection
- SSRF
- insecure deserialization
- XSS
- template injection
- path traversal

Even when the exploit changes, the reasoning pattern often stays the same.

### Impact and Risk

I also wrote down a "MIDAS goals" note for attacker objectives, but I could not verify that as a standard framework, so I would rather anchor on clearer language.

What I actually care about is whether an attacker can:

- read data they should not have
- change data or permissions they should not control
- impersonate users or services
- disrupt or ransom a system
- pivot deeper into an environment

For impact framing, the old [CIA triad](https://www.nccoe.nist.gov/publication/1800-26/VolA/index.html) is still useful: confidentiality, integrity, and availability.

It is simple, but it keeps me honest. Is the damage mainly exposure, tampering, or downtime? Often it is more than one.

And when teams disagree about whether something is "safe enough," that is usually a risk decision, not just a technical decision. Security should still surface the tradeoffs clearly, but the final call often belongs to the people who own the business risk.

## The Learning Path I Would Actually Follow

If I were starting from zero, I would not begin with exotic kernel exploitation or hardware fault injection. I would start where the feedback loop is better.

### 1. Learn web and API security first

The best beginner-friendly stack I have found is:

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [PortSwigger Web Security Academy](https://portswigger.net/web-security)

That combination gives me the categories, the testing structure, and the hands-on labs.

If I want the kinds of bugs that show up in consequence-heavy real-world writeups, I would spend a lot of time on:

- authentication flaws
- authorization failures and IDOR
- session and token mistakes
- API trust assumptions
- SSRF
- cache and request-routing weirdness

### 2. Threat-model products I already understand

One of the best habits would be to pick products I use or build and diagram them:

- user signup and login
- password reset
- admin tooling
- billing flows
- file upload and sharing
- mobile app plus backend API interactions

Then ask:

- where is identity established?
- where is authorization checked?
- what happens if a parameter is swapped?
- what can be replayed, enumerated, or confused?
- what data or action would matter most if exposed?

That seems much more valuable than memorizing exploit trivia.

### 3. Learn one code-level analysis mindset well

I do not need every security tool at once. I do need one good mental model.

Right now, that would probably be data flow and taint tracking through CodeQL, because it forces a very concrete style of reasoning: define sources, define sinks, then understand the propagation paths in between.

That is the kind of thinking that scales from application security into more advanced variant analysis later.

### 4. Read great writeups constantly

This might be the most important part.

The blogs I would follow first are:

- [Sam Curry](https://samcurry.net/): probably the closest match to the kind of research that drew me in. Big real-world systems, broken auth and APIs, physical-world implications, and clear disclosure narratives.
- [Ian Carroll](https://ian.sh/): readable investigations into consumer and transportation systems, privacy failures, and high-consequence web bugs.
- [HackerOne Hacktivity](https://hackerone.com/hacktivity/overview): less personal, more firehose, but useful for seeing patterns repeat across disclosed reports.
- [PortSwigger Research](https://portswigger.net/research): essential if I want to understand novel web exploitation techniques instead of only individual bugs.
- [Google Project Zero](https://projectzero.google): deeper and often lower-level, but excellent for rigor, disclosure discipline, and learning how serious researchers think.
- [Trail of Bits](https://blog.trailofbits.com/): great if I want to move toward cryptography, systems, supply chain, fuzzing, AI security, or lower-level engineering.
- [Assetnote Research](https://blog.assetnote.io/): practical web exploitation and internet attack-surface thinking.
- [Google Threat Intelligence / Mandiant](https://cloud.google.com/blog/topics/threat-intelligence): less "I found an IDOR" and more how real attackers operate in the wild.

If I want the narrative, consequence-heavy style first, I would start with Sam Curry, Ian Carroll, PortSwigger, and Assetnote.

### 5. Specialize later

There are a lot of directions this can go:

- web and API security
- cloud and SaaS attack surface
- mobile app security
- browser and OS exploitation
- low-level hardware and firmware security
- AI and agent security

I am personally curious about both API security and lower-level systems work, but those are very different ladders.

If I want fast traction, web and API security is the better first move. If I want to go deep into low-level or hardware security later, I will need a much stronger base in systems, C and C++, operating systems, reverse engineering, and memory corruption than I have today.

## Where AI Fits

I am also curious about AI-assisted security work, but I do not want to confuse "interesting frontier" with "good place to start."

The foundation still matters.

If I cannot explain the auth model, trust boundary, or source-to-sink path myself, then an agent finding something cool will teach me less than I think.

That said, this area is moving fast.

Google Project Zero's [Project Naptime](https://googleprojectzero.blogspot.com/2024/06/project-naptime.html) explored whether large language models could perform iterative vulnerability research, and PortSwigger's August 5, 2026 piece [Can AI do novel security research? Meet the HTTP Terminator](https://portswigger.net/research/can-ai-do-novel-security-research) pushes directly on whether autonomous systems can invent and apply new web attack techniques.

So I do want to keep following agentic vulnerability hunting. I just do not want to outsource understanding before I have it.

## What I Would Do Next

If I were turning this into a real practice, the next steps would be:

1. Work through OWASP Top 10 and PortSwigger Web Security Academy labs.
2. Read MITRE CWE Top 25 until the bug families feel familiar.
3. Threat-model products and flows I already know instead of only reading about strangers' systems.
4. Read a steady stream of real writeups from Sam Curry, Ian Carroll, PortSwigger, Project Zero, Trail of Bits, and Assetnote.
5. Start learning one serious analysis workflow, probably CodeQL data flow and taint tracking.

The shape of the field feels clearer to me now.

Ethical hacking is not magic. It is careful system understanding, attacker empathy, pattern recognition, disciplined testing, and good writing around what you found and why it matters.

That makes it feel a lot more learnable.
