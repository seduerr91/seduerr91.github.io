---
title: AI Is Electricity, Not a Lightbulb
tags: [AI, History, Economics, Engineering]
style: fill
color: success
description: What factory electrification teaches us about AI adoption, productivity lags, and redesigning work.
---

I love Deutschlandfunk's [*Crashkurs – Wirtschaft trifft Geschichte*](https://www.deutschlandfunk.de/crashkurs-100.html) because it uses history as a diagnostic tool. It begins with a live economic question, goes back to a period when people faced a structurally similar problem, explains the machinery underneath it, and then returns to the present with a more useful question.

So here is the current puzzle.

Artificial intelligence, or AI, is everywhere, but its economic impact is strangely hard to see. A 2026 [survey of nearly 6,000 senior executives](https://www.nber.org/papers/w34836) found that 69 percent of their firms actively used AI. Yet 89 percent reported no effect on labor productivity over the previous three years. The same executives expected AI to raise productivity at their firms by an average of 1.4 percent over the next three.

Productivity here simply means how much useful output we produce from inputs such as time, labor, and capital.

How can a technology be widely used, feel transformative, and still leave so little trace in the numbers?

The history of electricity offers a surprisingly good answer. It also offers a warning: buying access to a new technology is not the same as reorganizing around it.

## New York, 1882: The Switch Is Thrown

On September 4, 1882, Thomas Edison's Pearl Street station began supplying electricity to a small part of lower Manhattan.

The lightbulb gets most of the attention, but Pearl Street mattered because it was a **system**. Edison needed generation, underground distribution, wiring, meters, lamps, maintenance, and a business model that could sell the result. The [Smithsonian's history of the station](https://americanhistory.si.edu/lighting/scripts/s19c.htm) makes the point clearly: a useful electric light required far more than a bulb.

Electricity then spread into factories. It seemed like an obvious productivity revolution. Steam engines were large, hot, dirty, and mechanically awkward. Electric motors were cleaner and could be placed almost anywhere.

But the first wave of electrification did something very familiar: it inserted the new technology into the old system.

## The Factory Built Around One Spinning Shaft

Before electrification, a factory commonly had one central steam engine. That engine turned long metal shafts running through the building. Belts connected the shafts to lathes, drills, looms, and other machines.

Think of it as a physical monolith. Power came from one central service, and the entire factory architecture depended on its interface.

Machines had to sit where the shafts and belts could reach them. Multiple floors helped keep equipment close to the power train. A worker might have to stop a whole section of the system to service one machine. Energy was lost through friction even when only part of the factory was doing useful work.

Early factory owners often replaced the steam engine with one large electric motor—and kept the shafts, belts, layout, and operating model.

That was an improvement. It was not yet a transformation.

Economic historian Warren Devine described electrification as a [three-stage transition](https://www.osti.gov/servlets/purl/6774921):

1. One large motor replaced the steam engine but continued to turn the old line shafts.
2. Several smaller motors powered groups of machines through shorter shafts.
3. Individual machines received their own motors, eliminating the shaft system.

The third stage changed the factory.

Once power could be delivered directly to each machine, engineers could arrange equipment around the flow of materials rather than the geometry of a drive shaft. Factories could become lighter, safer, more flexible, and often single-story. Machines could start and stop independently. Maintenance no longer had to interrupt an entire line.

Between 1900 and 1930, electricity's share of power in American manufacturing rose from roughly 10 percent to 80 percent. Recent [factory-level research on this transition](https://doi.org/10.1016/j.eeh.2025.101654) finds that manufacturers which electrified increased productivity and output relative to those that did not. But the [largest economy-wide gains appeared decades after Pearl Street](https://academic.oup.com/oxrep/article/37/3/521/6374675), when firms had built new factories and new processes around electric motors.

The revolution began when electricity stopped being treated as a better steam engine.

## Two Different Meanings of GPT

Economists have a useful name for technologies such as steam power, electricity, and computers: **general-purpose technologies**, or GPTs.

This creates an almost comical acronym collision. In AI, GPT usually means **generative pre-trained transformer**, a family of language models. In economic history, GPT means a technology with three broad properties:

- it can spread across much of the economy
- it keeps improving
- it enables further inventions, products, and processes

Timothy Bresnahan and Manuel Trajtenberg developed this framework in their paper [*General Purpose Technologies: Engines of Growth?*](https://www.nber.org/papers/w4148). A 2025 review by the [Organisation for Economic Co-operation and Development (OECD)](https://www.oecd.org/en/publications/is-generative-ai-a-general-purpose-technology_704e2d12-en.html) concludes that generative AI already shows all three characteristics, although the long-run economic payoff remains uncertain.

Electricity did not create value only by making existing machines cheaper to run. It spawned elevators, appliances, refrigeration, radio, new factory layouts, and businesses that would have made little sense before the grid existed.

The strongest case for AI is similar. Its value will not come only from drafting the same email faster. It may come from products, organizations, and decision systems that are difficult to imagine while we still preserve the old workflow.

## Today's Line Shafts

Most companies are in the first stage of electrification.

They buy an AI assistant for every employee. The assistant produces a document that enters the same approval chain. It summarizes a meeting whose information is copied into the same disconnected tools. It generates code that waits in the same slow review, test, and deployment pipeline. It drafts a support response using knowledge that is still stale and fragmented.

The model is new. The line shaft is still turning.

That does not make these tools useless. Point improvements compound, and employees often receive real personal value from them. But personal time saved is not automatically converted into organizational output. If the surrounding process remains the bottleneck, the gain disappears into waiting, rework, extra demand, or simply more activity.

The analogy looks roughly like this:

| Electrification | AI adoption |
|---|---|
| Generator and grid | Models, compute, and cloud infrastructure |
| Wires into the factory | Data pipelines, application programming interfaces, and integrations |
| Motor at a machine | AI capability inside a product or workflow |
| Meter and switchgear | Cost tracking, access control, evaluations, and monitoring |
| Factory redesign | End-to-end workflow and organizational redesign |
| Electricians and production engineers | Platform engineers, domain experts, product teams, and operators |

An **application programming interface**, usually shortened to API, is a defined way for software systems to exchange requests and results. An **evaluation**, or eval, is a repeatable test of whether an AI system produces acceptable results for a particular task.

The table is not a claim that models and motors are identical. It is a reminder that the visible tool is only one component of a production system.

## Why Productivity Can Dip Before It Rises

Paul David made the electricity comparison famous in his 1990 essay [*The Dynamo and the Computer*](https://gwern.net/doc/economics/automation/1990-david.pdf). His argument was not that every technology follows the same clock. It was that general-purpose technologies often require complementary investments before their potential becomes measurable.

Those investments are expensive:

- redesigning processes
- cleaning and connecting data
- writing new software
- changing responsibilities and incentives
- training people
- learning which uses fail
- building trust, controls, and operating routines

Many of those assets are intangible. An organization can spend a year learning how to use AI well while the accounting system mostly records the salaries and cloud bill. The capability being built is real, but difficult to see.

Erik Brynjolfsson, Daniel Rock, and Chad Syverson call this the [**productivity J-curve**](https://www.nber.org/papers/w25148). Measured productivity can initially flatten or fall because the costs arrive before the benefits. Later, successful redesign starts producing returns.

This fits the 2026 executive survey: broad but shallow use today, little measured impact so far, and high expectations for the next few years.

But the history is not a blank check. "Electricity took decades" cannot become an excuse for an AI program that never defines a customer outcome, never measures quality, and never removes an old step. A lag can be evidence of investment. It can also be evidence that a project does not work.

## Where the Analogy Breaks

The electricity analogy is useful precisely until it becomes too comfortable.

### Electrons do not hallucinate

An electric motor does not occasionally invent a plausible voltage. Modern AI systems are probabilistic: the same system can produce an excellent result and then a confident error. Reliability, evaluation, human review, and fallback behavior therefore belong in the core design, not in a compliance appendix.

### Electricity became a standardized commodity

A kilowatt-hour is fungible. AI output is not. Models vary in capability, cost, latency, privacy, and behavior. The same model can be safe for brainstorming and unacceptable for an automated financial decision.

### AI changes information and authority

Electric motors changed where physical power was applied. AI can change who writes, recommends, classifies, approves, and decides. That makes organizational power, professional judgment, accountability, and deskilling part of the engineering problem.

### Software can diffuse faster than physical infrastructure

An AI product can reach millions of users in days. The [2026 Stanford AI Index](https://hai.stanford.edu/ai-index/2026-ai-index-report/economy) estimates that generative AI reached 53 percent population adoption in three years, faster than the personal computer or the internet. Yet organizational redesign can remain slow even when software distribution is instant.

### AI literally depends on electricity

The analogy is not purely metaphorical. Training and serving models requires chips, data centers, cooling, transmission capacity, and power generation. The [International Energy Agency's 2026 outlook](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary) projects that electricity use by AI-focused data centers will triple between 2025 and 2030. AI may resemble electricity as a general-purpose technology while also becoming one of the grid's largest new customers.

## What I Would Take from the History

### 1. Look for the line shaft

Map the complete flow of work. Where does information wait? Where is it copied? Which approval exists only because the old process lacked context or trust? Which batch could become a continuous flow?

The best opportunity may not be the task that is easiest to automate. It may be the constraint that forces the rest of the system into an old shape.

### 2. Fund systems, not seats

Licenses are easy to count. Transformation requires less visible work: data ownership, APIs, evaluations, permissions, observability, product design, and training.

### 3. Redesign one measurable workflow end to end

Choose a flow with a real unit of output: incidents resolved, experiments completed, customers onboarded, claims processed, or deployments safely shipped. Measure time, quality, cost, and failure rates before and after.

### 4. Put domain experts next to engineers

Factory electrification needed people who understood motors and people who understood production. AI redesign similarly needs model knowledge and deep understanding of the work. Neither group can infer the other half from a dashboard.

### 5. Treat controls as enabling infrastructure

Meters, breakers, and standards helped make electricity deployable. For AI, access controls, audit trails, evaluations, privacy boundaries, and fallback paths make deeper integration possible.

### 6. Expect learning, but demand evidence

Some benefits will arrive late. That makes staged investment and explicit hypotheses more important, not less. Every phase should teach the organization something observable about value, risk, or feasibility.

## What to Read Next

These are the sources that made the analogy more concrete for me:

- Paul David, [*The Dynamo and the Computer*](https://gwern.net/doc/economics/automation/1990-david.pdf), for the original productivity-paradox comparison.
- Warren Devine, [*From Shafts to Wires*](https://www.osti.gov/servlets/purl/6774921), for the three stages of factory electrification.
- Thomas P. Hughes, [*Networks of Power*](https://www.press.jhu.edu/books/title/2031/networks-power), for electricity as a technical, business, political, and cultural system.
- David E. Nye, [*Electrifying America*](https://mitpress.mit.edu/9780262640305/electrifying-america/), for how electricity changed factories, homes, cities, and everyday life.
- Nicholas Crafts, [*Artificial Intelligence as a General-Purpose Technology: An Historical Perspective*](https://academic.oup.com/oxrep/article/37/3/521/6374675), for a careful economic comparison of AI, steam, electricity, and computing.
- Erik Brynjolfsson, Daniel Rock, and Chad Syverson, [*Artificial Intelligence and the Modern Productivity Paradox*](https://www.nber.org/papers/w24001) and [*The Productivity J-Curve*](https://www.nber.org/papers/w25148), for why complementary investment can hide early gains.
- Ajay Agrawal, Joshua Gans, and Avi Goldfarb, [*Power and Prediction*](https://www.avigoldfarb.com/books), for the distinction between improving a task and redesigning a system.
- The OECD's [2025 assessment of generative AI as a general-purpose technology](https://www.oecd.org/en/publications/is-generative-ai-a-general-purpose-technology_704e2d12-en.html), for the current evidence and policy questions.

The lesson I take from electrification is hopeful, but demanding.

AI does not become transformative because it is present everywhere. Electricity did not transform manufacturing when the motor arrived at the factory door. The deeper change came when engineers removed the shafts, moved the machines, rebuilt the flow of work, and created something the old power system could not support.

The useful question is no longer, "Where can we add AI?"

It is, "What would we design differently if useful intelligence could be available at every step?"

That is the question I explore in the follow-up: [*What Would We Design If Intelligence Were Everywhere?*](/blog/what-would-we-design-if-intelligence-were-everywhere).
