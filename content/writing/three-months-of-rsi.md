---
title: 'Three Months of RSI: When Expectations Outrun the Technology'
slug: three-months-of-rsi
created: '2026-10-07'
updated: '2026-10-07'
summary: >-
  What today's self-improving systems can change, what recent experiments show,
  and why sustained acceleration remains unverified.
tags:
  - RSI
  - Recursive Self-Improvement
  - Agent
  - AI
lang: en
---
# Three Months of RSI: When Expectations Outrun the Technology

**RSI** (Recursive Self-Improvement) has been hard to avoid in my feeds for the past three months.

On July 4, Lilian Weng published [*Harness Engineering for Self-Improvement*](https://lilianweng.github.io/posts/2026-07-04-harness/), tying harness engineering and recursive self-improvement together. OpenAI's [public job postings](https://openai.com/careers/researcher-recursive-self-improvement-safety-san-francisco/) now include roles dedicated to RSI safety research. By September 28, Alan Chan and colleagues had released [*What if automating AI R&D triggers an intelligence explosion?*](https://arxiv.org/abs/2609.36054), with Hinton among the paper's 22 authors.

The discussion has moved from engineering practice to lab plans to the possibility of an intelligence explosion. Its scope keeps widening.

Phrases like "a year's progress in five weeks" are certainly catchy. But what I want to know is: what kind of self-improvement is actually happening today? And how many steps remain between what we have and sustained acceleration?

---

## First, what is the "self" in RSI?

None of this is new. As far back as 1965, I. J. Good was discussing the possibility of an ultra-intelligent machine designing even better machines. Today's RSI discussion continues the same feedback loop: an AI takes part in improving a system, and the improved system becomes better at continuing the improvement. Weng's survey is a good place for the conceptual background.

The easiest confusion here is reading "self" as the model weights.

An agent's capability depends on more than its base model. Tools, context management, task decomposition, and verification all matter. That surrounding layer is usually called the **harness**. It decides when the model calls a tool, what information it sees, how it retries after failure, and how results get checked.

Improve retrieval so the agent can find code it previously missed. Add a test pipeline so problems in patches get caught early. The model weights can stay exactly the same, and the whole system still performs better.

So: **a system can improve itself without changing its model weights.** The point is to be explicit about which layer the improvement happens in.

There's another distinction worth making. Letting a model revise its answer over and over on the same problem is closer to in-task revision. If it retains effective tool use, prompts, or workflows that benefit later tasks, that's closer to the systemic self-improvement I'm talking about here. The next question is whether the improved system can run the *next* round more effectively. That's where "recursive" starts to matter.

Human supervision doesn't automatically rule out such feedback either. Fully autonomous, cross-generation sustained acceleration is a much stronger claim.

Why has this discussion become concrete in the last few years? Because AI has started to participate in AI R&D. Code, training recipes, and experimental tooling are now things it can work on, and some of the results can be checked quickly through programmatic tests. [OpenAI's September statement](https://openai.com/index/ai-policy-window/) says AI can already complete some tasks that used to take skilled researchers days, while explicitly distinguishing these advances from fully autonomous recursive self-improvement.

This gives the idea a concrete engineering path. But between code that runs, a metric that ticks up, and a research conclusion that's reliable and holds up at larger scale, there's still a lot of work.

---

## What has actually been achieved

Weng's article focuses mainly on the harness route. Keep in mind while reading that this is her chosen focus. You can't collapse the whole field of RSI into "tweaking things outside the model."

It helps to draw one round of improvement before comparing the recent papers.

![A current RSI improvement loop: execute a task, collect feedback, propose modifications, validate the candidate version, and let the new version take part in the next round](/content/three-months-of-rsi/rsi-improvement-loop-en.png)

*Figure: A flow diagram based on the ideas in Self-Harness, DGM, and SIA. Each approach differs in what it modifies and how it validates; the two modification routes can be used separately or together. Part of the figure was AI-assisted.*

The arrow on the left looping back to the start is the point of this diagram. Changes that survive enter the next version of the system and take part in subsequent tasks and improvements. Whether the new version is actually *better at improving* still depends on the results of consecutive rounds. The loop structure alone proves nothing.

To see this process in concrete work, look at [Self-Harness](https://arxiv.org/abs/2606.09498).

It mines failure patterns from execution logs, has the model propose small, scoped modifications, and runs regression tests before accepting them. Examples include adding artifact checks, adjusting state retrieval, or routing modified code through verification first. The paper reports improvements on the model-task combinations it tested, and evaluates on tasks that were not part of the improvement process.

There's nothing mysterious about the workflow. It resembles an engineer reading logs, locating the problem, changing code, and running tests. The difference is that the agent starts modifying its own operating environment instead of waiting for a human to fix it each time.

[Darwin Gödel Machine (DGM)](https://arxiv.org/abs/2505.22954) goes one step further. It has a coding agent modify its own code, keeps multiple versions, and continues exploring from the versions it has. With a fixed base model, the paper reports SWE-bench Verified improving from 20% for the initial version to 50%.

That result is specific to the paper's experimental setup and can't be extrapolated to all development tasks. But calling it "the base model didn't change, so no capability was gained" is clearly wrong too. What improved is the entire agent system's ability on those tasks.

Model-weight updates are part of the picture, too. [SIA](https://arxiv.org/abs/2605.27276) puts harness modification and weight updates in the same loop: a feedback agent decides how to adjust the task system, and can also trigger training based on task feedback.

But it matters which model does which job. The paper uses Claude Sonnet 4.6 to provide feedback, gpt-oss-120b as the task model, and LoRA for parameter updates. It demonstrates that the two kinds of improvement can be combined. It does not show that "a frontier model has already, fully autonomously, trained itself to be stronger and stronger."

These studies go beyond giving ordinary retries a new name. System code can be modified, model parameters can be updated, and experiments have reported gains. The next question is how far those gains can go.

---

## There are gains. How far are we from sustained acceleration?

Let's get the "one year into five weeks" math straight first.

The Chan et al. paper discusses the following: *if* AI R&D were fully automated, *if* research investment kept delivering technical progress at the historically estimated rate, and *if* no other bottlenecks kicked in, then the rate of progress could rise roughly tenfold within about a year and a half. At that point, the work of a year's progress today might take about five weeks.

That year and a half is a model projection *assuming full automation*. It isn't a countdown from the paper's publication date. Nor is it an experimental result produced by some existing RSI algorithm.

The authors take this possibility seriously and argue for preparing for its risks ahead of time. I don't read the paper as pouring cold water on RSI. What calls for caution is jumping from "acceleration is possible" to "acceleration has been verified."

Turning to the actual experiments, the picture is more complicated than either "recursion works" or "recursion doesn't."

[STOP](https://arxiv.org/abs/2310.02304), proposed in 2023 and published at COLM in 2024, studied whether "a program that improves programs can improve itself." In some of the paper's experiments, GPT-4's average performance rose over improvement rounds; switch to GPT-3.5 or Mixtral and performance degraded.

That shows the effect depends on model and task conditions. Recursion doesn't automatically make things stronger. Conversely, these are results from early models on narrow task ranges, so they don't prove that all recursive improvement merely amplifies existing ability, or that weaker models always get worse as they iterate.

This year's [*Harness Updating Is Not Harness Benefit*](https://arxiv.org/abs/2605.30621) unpacks another issue cleanly: *writing* a useful harness modification and *benefiting* from the modified harness are two different things.

In its tested setup, modifications proposed by a 9B model could bring benefits similar to those proposed by Opus 4.6. But whether the task-executing model actually captures the benefit still depends on whether it loads the relevant artifacts, calls the tools, and keeps following the policy through long pipelines. A small model may receive a good modification and still use it badly. A very strong model already does well, leaving less room to improve.

[*Audit the Scaffold, Not the Checkpoint*](https://arxiv.org/abs/2609.34924) is also worth reading. On the coding tasks and model combinations it tested, it observed that many trajectories stop improving after the first attempt. Several more rounds yield little return.

But the same paper emphasizes a condition: if the space of what can be modified and explored stays fixed, search gradually saturates. Changing tools, retrieval, verification, or task decomposition may change that space. Frozen weights do not mean the running system stands still.

These results make me care more about controlled comparisons. Revising answers over and over, and continually modifying the system, are different methods. Their gains should be counted separately.

The comparison I'd rather see is a plain one: with the same model and a similar total budget, does continually modifying the system beat sampling more, doing the first attempt well, or using a human-designed pipeline? Do the gains persist on new tasks? If they vanish when you swap the test set, we need to reconsider what the system actually learned.

At the scale of a full research project, there's another gap. In Trehan and Chopra's [four autonomous research attempts](https://arxiv.org/abs/2601.03315), published in January 2026, only one produced a finished paper; the others exposed implementation drift, evaluation errors, and over-optimism. Four cases can't stand in for the field's success rate, but they remind us: chaining together "come up with an idea, write code, run experiments, write the paper" is still some distance from reliably producing solid research.

And running the research pipeline automatically once still doesn't prove it will do the *next* round of research any better.

Beyond reliability, Chan et al. also discuss the [constraints on R&D acceleration](https://arxiv.org/abs/2609.36054): compute, data, steps that resist automation, and experiment wall-clock time. You can spin up more agent instances; experimental resources and feedback speed don't automatically scale with them. Once the easy-to-find improvements are used up, subsequent research may also get harder.

These constraints are not proof that an intelligence explosion is impossible. Better training efficiency, better experiment design, and verifiable feedback may relieve some of them. They just remind me that "more researchers", "faster task completion", and "sustained acceleration of model capability" each need their own evidence.

---

## Closing thoughts

Going through this material, my view of RSI is more concrete than when I started.

System self-modification has results worth taking seriously, and joint parameter-harness updates are being actively worked on. I won't dismiss these advances just because they still depend on human-designed pipelines.

But in the public material I've read, I haven't seen enough evidence for a fully autonomous loop that keeps accelerating across generations. That's the gap I mean by "expectations running ahead of the technology."

For people building agents, the more pressing question right now is how to make every improvement leave credible evidence. Test on held-out tasks after a change, record the attempts that didn't work, and understand where the gains come from. The system can propose modifications, but it must not be allowed to rewrite the evaluation criteria or its own permission boundaries just to pass. Weng's survey also lists these among its open challenges.

I'll keep following this direction. More than the next "the intelligence explosion is coming" headline, what I want to see is a complete, multi-generation record from a single system: what it changed, what it cost, which new tasks it still improved on, and whether the next round of improvement genuinely got easier.

---

## References

- [Lilian Weng: Harness Engineering for Self-Improvement](https://lilianweng.github.io/posts/2026-07-04-harness/)
- [What if automating AI R&D triggers an intelligence explosion?](https://arxiv.org/abs/2609.36054)
- [Self-Harness: Harnesses That Improve Themselves](https://arxiv.org/abs/2606.09498)
- [Darwin Gödel Machine: Open-Ended Evolution of Self-Improving Agents](https://arxiv.org/abs/2505.22954)
- [SIA: Self Improving AI with Harness & Weight Updates](https://arxiv.org/abs/2605.27276)
- [Self-Taught Optimizer (STOP): Recursively Self-Improving Code Generation](https://arxiv.org/abs/2310.02304)
- [Harness Updating Is Not Harness Benefit: Disentangling Evolution Capabilities in Self-Evolving LLM Agents](https://arxiv.org/abs/2605.30621)
- [Audit the Scaffold, Not the Checkpoint: A Stationarity Dichotomy for Recursive Self-Improvement in Agentic Coding](https://arxiv.org/abs/2609.34924)
- [Why LLMs Aren't Scientists Yet: Lessons from Four Autonomous Research Attempts](https://arxiv.org/abs/2601.03315)
- [OpenAI: The AI policy window is open. We need to act.](https://openai.com/index/ai-policy-window/)
- [OpenAI: RSI safety research roles](https://openai.com/careers/researcher-recursive-self-improvement-safety-san-francisco/)
- [Geoffrey Hinton's original post on X](https://x.com/geoffreyhinton/status/2106122709285368061)
- [QbitAI coverage of the story](https://mp.weixin.qq.com/s/tEyarN9uAFXBrrf9jjD01Q)
