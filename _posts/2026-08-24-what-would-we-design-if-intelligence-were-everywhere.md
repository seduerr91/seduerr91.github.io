---
title: What Would We Design If Intelligence Were Everywhere?
tags: [AI, Product Design, Future, Technology]
style: fill
color: success
description: Concrete ideas for the products, services, and institutions we might build when useful intelligence is available at every step.
---

I ended [*AI Is Electricity, Not a Lightbulb*](/blog/ai-is-electricity-not-a-lightbulb) with a question:

> What would we design differently if useful intelligence could be available at every step?

I have kept returning to it because it is much more interesting than asking where we can add a chatbot.

Adding a chatbot assumes that the product is basically finished and AI is one more interface. The larger possibility is that a system can perceive what is happening, understand the goal, remember what matters, propose a next step, take an authorized action, check the result, and learn from it.

That is not a feature. It is a different set of design materials.

We have seen this pattern before. A technology arrives as a bundle of capabilities. At first, we squeeze the bundle into familiar products. Then someone treats those capabilities as permanent background conditions and builds something that would previously have sounded impractical or slightly absurd.

## The Smartphone Was a Bundle of Assumptions

The smartphone did not create Netflix, Uber, or Airbnb by itself. Netflix launched streaming in 2007, before the App Store. Airbnb began as a website. Uber still needed drivers, payments, maps, and a city dense enough to make the market work.

But the smartphone made a remarkable combination ordinary. In 2008, the [iPhone 3G arrived with faster mobile internet, GPS, and the App Store](https://www.apple.com/newsroom/2008/07/10iPhone-3G-on-Sale-Tomorrow/). It also put a camera, screen, identity, payment relationship, and growing collection of sensors in people's pockets.

Once designers could assume that a person was connected, locatable, reachable, and carrying a computer, several old activities changed category.

Uber was not merely a taxi directory on a smaller screen. Its system could continuously locate supply and demand, match them, route them, price the trip, collect payment, and update both sides. Uber's explanation of [how it matches drivers and riders](https://www.uber.com/us/en/marketplace/matching/) shows how location, traffic, and many possible pairings become one continuous coordination problem.

Airbnb did not merely put hotel listings on a phone. Mobile cameras, maps, messaging, identity, reviews, and payments helped turn spare rooms and homes into a distributed hospitality network that hosts and guests could manage while moving through the world.

Netflix was not invented by mobile internet either. Broadband, content licensing, data centers, and content-delivery networks did much of the heavy lifting. But the connected screen in every pocket helped make streaming something that followed the viewer instead of belonging to the television. Netflix's own history dates [the launch of streaming to 2007](https://ir.netflix.net/files/doc_downloads/IR-Content-Accounting-Slides-Jan-2018.pdf).

The important point is not that one device caused three companies. It is that a stack of capabilities became dependable enough to assume. New products could be designed around continuous connection, location, identity, sensors, and software distribution instead of treating each one as a special event.

AI is beginning to form a similar stack:

- perception through cameras, microphones, and other sensors;
- translation between languages and formats;
- memory of a person, project, or organization;
- reasoning, planning, and simulation;
- generation of text, software, images, audio, and designs;
- action through tools, services, and eventually machines;
- feedback from the result.

The design unit is no longer necessarily a screen or a task. It can be a loop:

**Observe → understand → decide → act → verify → learn.**

What becomes possible when that loop is cheap enough to place throughout everyday life?

## 1. A Universal Apprenticeship

Imagine that you are repairing a bicycle, building a shelf, sewing a jacket, installing a heat pump, or trying to understand why a circuit does not work.

Today, you search for a video made for a similar model, scrub through it with dirty hands, translate what you see to the object in front of you, and hope you have not misunderstood the dangerous part.

An AI-native version would see your exact situation. It would identify the model, retrieve the correct manual, compare the object with the diagram, and place the next instruction over the relevant component. It would notice that you picked up the wrong screw, warn you before you cut the wrong wire, answer a follow-up question, and inspect the result.

That is not a better tutorial. It is a universal apprenticeship: explanation attached to the work, with feedback arriving at the moment it can still change the outcome.

The early ingredients are visible. Google DeepMind's [Project Astra](https://deepmind.google/models/project-astra/) explores assistants that can interpret a live environment, remember context, use tools, and interact through phones or glasses. Its [RT-2 research](https://deepmind.google/blog/rt-2-new-model-translates-vision-and-language-into-action/) connects visual and language understanding to robotic action.

The commercial opportunities extend far beyond household repairs. Field service, construction, laboratory work, agriculture, manufacturing, emergency response, and care work all contain moments when the right expert is somewhere else.

The expert does not disappear. The system handles routine recognition and instruction, while escalating ambiguity and safety-critical decisions to a qualified person. A serious version would know when it cannot see enough to help.

## 2. Services That Do Not Assume a Shared Language

Translation is usually designed as a separate step: paste text into a box, wait for an interpreter, or pause a conversation to operate an app.

What if the service itself did not assume that its participants shared a language?

A patient could speak naturally while a clinician hears a translated version that preserves tone and medical terms. A student could join a class in another language and ask questions without waiting for subtitles. A craftsperson could teach an apprentice across the world. A small business could support customers in languages it could never staff around the clock.

Meta's [Seamless Communication research](https://ai.meta.com/research/seamless-communication/) demonstrates streaming speech translation with about two seconds of latency, broad language coverage, and efforts to preserve expression rather than only words. The larger category is not a more convenient translator. It is language-independent service design.

High-stakes uses need stronger boundaries. The interface should preserve the original, expose uncertainty, make corrections easy, and bring in a human interpreter when precision matters. Fluency must not be allowed to disguise a consequential error.

## 3. Research That Does Not End When the Document Is Sent

Most research is still packaged as an artifact: a report, a presentation, a literature review, or a spreadsheet. The sources keep changing after the artifact stops.

An intelligence-rich research system would behave more like a living loop. It would maintain a map of claims and evidence, watch for new results, flag contradictions, reproduce calculations, and record which assumptions changed. It could propose the next question or experiment, then update its view when the answer arrives.

Science already offers a glimpse of this model. The autonomous materials laboratory known as [A-Lab](https://www.nature.com/articles/s41586-023-06734-w) combined published literature, machine learning, active learning, and robotics; it successfully synthesized 36 of 57 target materials over 17 days of continuous operation. Google's [AI co-scientist](https://www.nature.com/articles/s41586-026-10644-y) explores systems that generate and critique hypotheses in collaboration with researchers.

These systems are not automated truth machines. An experiment can be badly specified, a measurement can be misleading, and a model can confidently optimize the wrong objective. But they suggest a powerful shift: research can become a continuous process of proposing, checking, and revising instead of a one-time act of writing.

The same pattern could reshape investigative journalism, policy analysis, legal preparation, due diligence, and personal decisions. A good research agent would not only give an answer. It would keep an assumption ledger and tell you when reality invalidates one.

## 4. Software That Begins With Intent, Not Apps

Suppose I say, "I want to move to Berlin in October, keep my housing cost below this amount, bring my dog, and avoid a month without health coverage."

No current app owns that goal. It is scattered across apartment sites, airline rules, calendars, government portals, insurance documents, maps, bank accounts, and conversations.

An AI-native service could turn the goal into a living plan, identify dependencies, compare options, prepare forms, monitor deadlines, and coordinate the underlying services. The existing apps would still exist, but increasingly as tools used by a system organized around the person's outcome.

This is what "thinking on my behalf" should mean: not replacing my judgment, but spending background effort on the parts of a goal that I have authorized.

There should be an autonomy ladder:

1. Observe and organize.
2. Recommend and explain.
3. Simulate alternatives.
4. Perform reversible actions within a budget.
5. Ask before money, commitments, publication, or other difficult-to-reverse steps.

The system earns autonomy through reliability and reversibility. It does not receive unlimited authority merely because it can write a persuasive plan.

## 5. Education That Watches the Attempt

A textbook sees neither the learner nor the attempt. Most educational software sees only whether the final answer matches.

With useful intelligence at every step, the learning system could watch a student form a proof, wire a circuit, pronounce a word, play a scale, or debug a program. It could identify the precise misconception, choose a hint that does not reveal too much, and generate the next exercise around the weakness that just appeared.

The teacher would gain a higher-resolution view of the class: not only who is wrong, but where understanding fractured. The student would get feedback while the reasoning is still present in memory.

This also changes what a course is. Instead of a fixed sequence designed for an average learner, it can become a path through a map of competencies. Progress means demonstrated mastery, not merely time spent watching content.

There is a trap here. If the system solves every difficult step, it removes the struggle through which skill develops. A good tutor should optimize for the learner's future independence, not for the smoothness of today's session.

## 6. A Reality Compiler

Software has compilers that turn a description into instructions a machine can execute. Physical projects still require a person to translate an intention across sketches, measurements, materials, building codes, suppliers, tools, and manual work.

Now imagine scanning a room and saying: "Build a quiet work nook here. Keep the window accessible, use materials I can source locally, and stay within this budget."

The system creates several designs, simulates light and acoustics, checks measurements, generates a bill of materials, and explains the tradeoffs. It adapts the plan to the tools you own, guides each step through vision, and verifies the finished structure. For industrial users, parts of the plan might go directly to fabrication equipment or robots.

This would be a kind of reality compiler: intention translated into a tested plan for changing the physical world.

It requires more than a language model. It needs geometry, material properties, causal reasoning, simulation, local rules, and a model of what actions are safe. That is why work on [world models](/blog/world-models-explained), robotics, computer-aided design, and multimodal AI matters together.

If this stack becomes dependable, custom products may stop being luxury products. Furniture, clothing, assistive devices, replacement parts, and even small buildings could be generated for a particular person and fabricated near them.

## 7. A Personal Counterfactual Engine

Search engines retrieve what already exists. A counterfactual engine would help explore what could happen.

It would know the goals, constraints, and commitments I choose to share. Before a major decision, it could simulate several paths, locate the assumptions carrying the most risk, and show what new information would actually change the choice.

For a career decision, it might compare income, learning, location, family time, and the option value of each path. For a business, it could test a plan against changes in demand, regulation, pricing, or a delayed launch. For a city, it could make the tradeoffs in a transport or housing proposal visible to residents.

This is not an oracle. A plausible scenario is not a prediction. The valuable output may be a better question: "This decision only works if you believe X. How could we test X cheaply before committing?"

Such a system would become dangerous if its memory belonged to an advertiser, employer, insurer, or political campaign. Personal intelligence needs personal control: inspectable memory, clear permissions, the ability to forget, and a business model that does not benefit from manipulating the answer.

## 8. Institutions That Explain Themselves

Many public and private institutions are organized as mazes. A person must discover which benefit, permit, tax rule, insurance exception, or appeals process applies, then translate their life into the institution's vocabulary.

An intelligent institution could work in the opposite direction. It would begin with the person's situation, explain the relevant options in plain language, assemble a checklist, preflight the evidence, and show why a decision was made.

The most valuable government AI may not be an automated decision-maker. It may be a system that makes administrative rights usable: "You appear to qualify for these three programs. Here is the evidence each requires. Here is the deadline. Here is what you can do if the answer is no."

The authority to deny liberty, income, housing, healthcare, or legal status should not disappear inside a model. People need a named accountable institution, an understandable reason, access to the record, and a route to human appeal.

## More Category Seeds

These ideas all use the same raw capabilities, but organize them around different loops:

| Today | If intelligence were available throughout the process |
|---|---|
| A medical appointment after symptoms become serious | A preventive health companion that connects changes in symptoms, wearables, medication, and labs, then prepares a clinician rather than pretending to be one |
| A contract handed over for signature | A live agreement that explains consequences, checks obligations against reality, and warns both sides before a breach |
| A supply chain dashboard | A system that simulates disruptions, negotiates alternatives within limits, and learns from the actual recovery |
| A fixed piece of media | A story, game, or explanation that adapts to what the audience understands, while making adaptation and authorship visible |
| A marketplace of standard products | A market for locally fabricated objects designed for one person's body, room, tools, budget, and repair needs |
| A disaster alert | A coordination system that translates the warning, understands individual constraints, proposes routes, matches people to transport, and keeps adapting as conditions change |
| An expert hired for one expensive moment | Continuous access to a small amount of expert judgment, with AI handling observation and preparation between human interventions |

The pattern is consistent. A static artifact becomes a responsive process. A service episode becomes an ongoing relationship. A generic instruction becomes guidance connected to the situation in front of you.

## At the Spacy Edge: A Thought-to-AI Channel

The most science-fiction version is an AI you can speak to by thinking.

There is a real path toward part of that idea, but it begins in medicine, not telepathy.

In 2025, researchers reported an implanted [brain-to-voice neuroprosthesis](https://www.nature.com/articles/s41586-025-09127-3) that gave a man with ALS near-instantaneous synthesized speech, including control over aspects of expression. Neuralink has reported that early participants in its [PRIME study](https://neuralink.com/updates/a-year-of-telepathy/) used an implanted, wireless brain-computer interface to control computers and phones. Apple has also added a [protocol for brain-computer-interface input](https://www.apple.com/ca/newsroom/2025/05/apple-unveils-powerful-accessibility-features-coming-later-this-year/) to its accessibility platform.

These are extraordinary developments for people who have lost movement or speech. They are also invasive, experimental systems involving very small numbers of people. They do not read an unrestricted stream of private thought.

The nearer-term AI opportunity may be less cinematic and more useful. A brain-computer interface produces a limited, noisy signal: a cursor movement, a selected letter, an attempted word, or a compact indication of intent. An AI system can use context to expand that signal into a complete sentence or action, then ask the user to confirm it.

A [2026 systematic review of language models and brain-computer interfaces](https://pubmed.ncbi.nlm.nih.gov/42202831/) found experiments with autocomplete, correction, intent expansion, and dynamic interfaces. It also found only 11 studies, no motor-impaired participants in those studies, and weak reporting of latency and failures. The design opportunity is real; the evidence for clinical benefit is still early.

AI may make brain-computer interfaces useful before their raw bandwidth becomes high. But it creates a profound authorship problem. If a model expands a decoded fragment into a sentence, which words came from the person and which came from the model?

Research has also shown that [some inner speech can be decoded from implanted electrodes](https://pmc.ncbi.nlm.nih.gov/articles/PMC12360486/), alongside techniques intended to prevent unintended decoding. That makes mental privacy a product requirement, not a philosophical footnote.

A responsible thought interface would need at least four things:

- an explicit mental or physical unlock before interpretation begins;
- a visible distinction between decoded signal, model completion, and user-approved message;
- local processing and deletion wherever possible;
- a reliable way to inspect, correct, cancel, and disconnect.

Consumer implants may not be the first destination. Silent-speech sensors, eye tracking, muscle signals, and other non-invasive interfaces could deliver much of the benefit without brain surgery. Either way, the important category may not be "mind reading." It may be a private, low-friction channel for expressing intent when speaking, typing, or touching a screen is unavailable or inconvenient.

## AI at Every Step Does Not Mean AI Decides Every Step

Ubiquitous intelligence could easily become ubiquitous surveillance, interruption, and unaccountable control.

The more a system sees, remembers, and acts, the more damage it can do when its assumption is wrong. The design question therefore has two parts:

> Where would intelligence remove friction, and where would it remove agency?

I would use the following principles:

1. **Design closed loops, not chat boxes.** Connect perception, advice, action, and verification around a real outcome.
2. **Let people own the memory.** Make it inspectable, editable, portable, and forgettable.
3. **Earn autonomy through reversibility.** Suggest first; automate only within clear permissions, budgets, and boundaries.
4. **Show uncertainty and provenance.** A fluent answer should not erase its evidence or the limits of what the system could observe.
5. **Keep human authority at irreversible steps.** Medicine, law, safety, money, and public power require accountable judgment and appeal.
6. **Design for stronger humans.** Measure whether the system builds understanding and skill, not only whether it completes the immediate task.
7. **Spend attention carefully.** Intelligence that interrupts at every step can make work worse. It should know when silence is more helpful.

## Questions for Product Teams

Instead of asking where to add AI, I would ask:

- If the system could see the current state, which form or status meeting would disappear?
- If it could remember the history, what would a person no longer have to explain again?
- If it could anticipate the next dependency, which period of waiting could disappear?
- If it could act safely, which handoff would disappear?
- If it could verify the result, which error would be caught while it was still cheap?
- If it learned from outcomes, which static document would become a living process?
- What should remain a human decision even if automation becomes technically possible?

Electricity distributed power to every machine. Smartphones distributed connected computing, location, cameras, and sensors to every person. AI may distribute interpretation, prediction, generation, and limited agency throughout a process.

The most important AI-native product may not look like a chatbot at all. Just as Uber did not look like a mobile phone company, it may look like a new kind of apprenticeship, institution, research loop, language-independent service, or tool for shaping the physical world.

The new category begins when we stop asking how to place AI inside the old workflow and start designing as if useful intelligence were already there.
