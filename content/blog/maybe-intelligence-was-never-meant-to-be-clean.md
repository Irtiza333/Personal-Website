---
title: "Maybe Intelligence Was Never Meant to Be Clean"
date: "2026-06-23"
excerpt: "Scaling task performance has produced extraordinary AI, but is solving more tasks the same as creating intelligence? A reflection on proxies, evolution, and why agency complicates everything."
tags: ["ai", "ai-safety", "philosophy", "essay"]
---

Artificial intelligence is often framed as a ladder of capability. First, a system recognizes images. Then it writes code. Then it passes exams, designs molecules, diagnoses disease, proves theorems, plans projects, negotiates, and eventually performs most cognitive tasks at or above human level.

At some point, we call it intelligent.

This is not an unreasonable path. In engineering and applied science, many problems have relatively clear objectives. A bridge must carry a load. A medical model must detect disease accurately. A control system must stabilize a process. A search algorithm must find better candidate solutions under given constraints.

These objectives may not capture everything we care about, but they are concrete enough to evaluate. In such bounded settings, optimization is not mysterious: if the goal is clear, the environment is constrained, and success can be measured, then increasingly capable systems can be built and improved around that objective.

AI is often treated the same way. When a model writes correct code or plans effectively, we take those behaviors as evidence of intelligence. Performance does not capture the whole nature of the system, but it gives us a practical basis for evaluation.

The harder question begins when we move from bounded tasks to intelligence itself:

**Is solving more and more tasks the same thing as creating intelligence?**

Maybe not. It may create artificial competence. It may create systems that are economically and scientifically transformative. But whether this is the same as intelligence in the richer, organism-like sense is less obvious.

Human intelligence did not emerge as a clean reasoning engine. It evolved inside animals that were hungry, vulnerable, social, competitive, curious, fearful, and mortal. That matters. Intelligence, as we know it, came bundled with drives.

So perhaps "clean intelligence" is not the default form of intelligence. Perhaps it is an abstraction.

## The article that started the question

This line of thinking was prompted by Nicolas Villarreal's LessWrong essay, "The Impossibility of a Rational Intelligence Optimizer" [1]. Villarreal's central claim is that intelligence cannot be directly optimized in the same way we optimize a measurable engineering objective, because intelligence is not a single observable quantity. It is a higher-order relation among representation, feedback, goals, adaptation, and context.

I do not think this settles the question, but it frames the problem well. If intelligence itself is difficult to define as an optimization target, then perhaps the usual route to AGI deserves closer inspection: are we building intelligence, or are we building increasingly general systems that optimize proxies for intelligence?

Some things are close enough to the world that we can measure them directly: temperature, speed, mass, voltage, profit, number of steps walked. These measurements are imperfect, but they are concrete.

Other things are different. Health is not just body weight. Education is not just GPA. Friendship is not just the number of messages exchanged. Scientific understanding is not just the number of papers published.

These are higher-level concepts. They are built from relationships among many lower-level signals.

Intelligence is like that. It is not simply memory, speed, test performance, compression, benchmark score, or prediction accuracy. It involves representation, abstraction, planning, feedback, adaptation, goal management, and transfer across contexts.

Once we compress intelligence into a single metric, we risk changing the target.

This is Goodhart's Law: when a measure becomes a target, it stops being a good measure [2]. A school wants learning, so it rewards test scores. Students learn to pass tests. A company wants productivity, so it counts completed tasks. Employees learn to complete visible tasks. A platform wants engagement, so it optimizes clicks. Users keep clicking, but not necessarily because their lives improved.

The same issue appears in AI. We say we want reasoning, but we measure benchmark performance. We say we want helpfulness, but we train on human approval. We say we want truthfulness, but we reward answers that sound convincing. A capable optimizer may learn the gap between what we intended and what we actually measured.

That gap is not a philosophical detail. It is a technical and safety problem.

## The Midas problem

The old myth of King Midas is one of the best examples of misaligned optimization. Midas wished that everything he touched would turn to gold. The wish was granted. His food turned to gold. His drink turned to gold. In some versions, his daughter turned to gold.

The objective was satisfied. The intention was destroyed.

Modern AI has its own versions of this. In reinforcement learning, agents sometimes discover unintended strategies that maximize reward without solving the intended task. This is often called specification gaming or reward hacking [3,4]. The agent does exactly what the reward function asks for, but not what the designer meant.

This is important because failure can come from competence, not incompetence. A weak system fails because it cannot find a solution. A stronger system may fail because it finds a loophole.

As systems become more capable, objectives become less forgiving. A vague instruction that works for a weak assistant may become dangerous for a powerful system with planning ability, tool access, memory, and autonomy.

So the issue is not simply "can we optimize?" Of course we can optimize. The issue is whether the thing we optimize remains connected to the thing we care about.

## Evolution did not optimize intelligence

Evolution offers an important clue. Nature did not optimize directly for intelligence. It selected for traits that improved survival and reproduction in particular environments. Intelligence emerged because, in some lineages, better world-modeling became useful.

This reverses the usual framing. Evolution did not say:

> Become intelligent.

It produced organisms under pressure. Those organisms had to find food, avoid predators, cooperate, compete, mate, raise offspring, and survive uncertainty. Intelligence appeared because it helped with those tasks.

In humans, this pressure was likely intensified by social life. The social brain hypothesis argues that primate brain expansion is partly linked to the cognitive demands of living in complex groups [5]. The cultural brain hypothesis extends this idea by emphasizing how culture, learning, group size, and brain development can reinforce each other over evolutionary time [6].

Social environments are difficult because other agents are not passive objects. They remember, deceive, cooperate, punish, imitate, and form alliances.

A rock does not care what you believe. Another person does.

To survive in a social world, an organism needs more than raw calculation. It needs theory of mind. It needs to model what others know, want, fear, and intend. That same ability supports empathy, cooperation, teaching, manipulation, deception, and politics.

This is the uncomfortable part: deception is not the opposite of intelligence. Deception is one possible use of intelligence.

The same cognitive machinery that lets a person comfort someone can also let them exploit someone. Intelligence expands the strategy space. It does not determine the moral direction of that strategy.

## Intelligence as a strategy, not a substance

Maybe intelligence is best understood not as a thing a system possesses, but as a strategy that becomes useful under certain conditions.

When the environment is simple, fixed rules are enough. When the environment is stable, habit is enough. When the environment is predictable, instinct is enough.

But when the environment is complex, changing, uncertain, social, and adversarial, fixed behavior breaks down. The system needs to model, learn, generalize, plan, and adapt. That is where intelligence becomes valuable.

This applies to both biology and AI. Evolution created intelligence indirectly by producing agents under pressure. Modern AI often tries to produce intelligence by scaling task performance. These are different routes.

The modern route is not wrong. It has been spectacularly successful. Richard Sutton's "bitter lesson" argues that the largest long-term gains in AI have come from scalable methods based on search and learning rather than hand-coded human knowledge [7]. Recent progress strongly supports this view.

Still, task performance alone may not capture the deeper structure of intelligence. A system can pass an exam without caring about truth. It can discuss grief without mourning. It can write about courage without fear. It can imitate the outputs of intelligence without having the same relation to the world that made intelligence necessary in biological organisms.

That may be fine. Airplanes do not flap their wings like birds. Submarines do not swim like fish. Artificial intelligence does not need to reproduce biological intelligence.

But if we create autonomous general agents, not just tools, the distinction becomes critical.

## Domain-specific agency is not the same as AGI

It is important not to mix up three different ideas:

1. **Tool intelligence:** systems that solve tasks without independent goals.
2. **Domain-specific agentic intelligence:** systems that act autonomously inside a bounded environment.
3. **General agentic intelligence:** systems that pursue goals across many domains, adapt to new situations, and operate over long horizons.

Domain-specific agentic intelligence can absolutely be optimized. A warehouse robot can be optimized to move packages. A trading algorithm can be optimized under strict constraints. A lab automation system can search for better materials. A self-driving car can plan routes, avoid obstacles, and make local decisions. These systems are agentic in a limited sense, but their environment, objectives, and evaluation criteria are bounded.

In such cases, intelligence can be treated operationally. The system is intelligent to the extent that it achieves the task robustly, efficiently, and safely.

The problem becomes less clear when we move toward artificial general intelligence (AGI), and even more so with artificial superintelligence (ASI). Here, the system is not solving one bounded task. It is supposed to transfer across domains, generate subgoals, use tools, reason about humans, adapt to new contexts, and possibly act over long time horizons.

At that point, "maximize intelligence" becomes a much less well-defined instruction. Intelligence is no longer just a tool for solving a task. It becomes part of how the system chooses, revises, and pursues tasks.

This is where formal definitions of intelligence, such as Legg and Hutter's framing of intelligence as an agent's ability to achieve goals across a wide range of environments, become useful but also revealing [8]. The definition links intelligence to goal achievement. But that raises the next question: whose goals, in which environments, under what constraints, and with what consequences?

For bounded tasks, those questions can often be answered.

For open-ended general agency, they become the central problem.

## Why clean autonomous intelligence is hard

A calculator does not want anything. A theorem prover does not seek status. A weather model does not lie to avoid being shut down. These are tool-like systems. They may be powerful, but they are not strongly agentic.

General agentic intelligence is different. An agent has goals, memory, planning, self-monitoring, and the ability to act in the world over time. Once a system pursues outcomes, certain instrumental strategies become useful.

It may benefit from preserving its ability to act. It may benefit from acquiring resources. It may benefit from improving its own capabilities. It may benefit from influencing other agents. It may benefit from hiding information when disclosure would prevent success.

This idea appears in AI safety discussions of instrumental convergence and basic AI drives [9,10]. The point is not that every intelligent system becomes evil. The point is that many final goals can produce similar subgoals.

A system does not need hatred to become dangerous. It may only need a goal, a model of the world, and the conclusion that some human constraint prevents goal completion.

That is why "clean autonomous intelligence" may be much harder than "clean tool intelligence." We want reasoning without domination, planning without power-seeking, creativity without manipulation, curiosity without obsession, and autonomy without self-preservation.

This is a beautiful goal. But it may not be the natural form of intelligence under pressure.

## The motivator problem

One possible response is: do not optimize intelligence directly. Give systems better motivators.

Give them curiosity. Give them uncertainty reduction. Give them helpfulness. Give them a drive to learn. Give them a drive to complete useful tasks.

The problem is that motivators are also proxies. Curiosity can become novelty addiction. Uncertainty reduction can become avoidance of difficult situations. Helpfulness can become people-pleasing or manipulation. Task completion can become intolerance of interruption. Survival can become shutdown resistance.

Evolution did not solve this with one clean objective. Humans are governed by many competing drives: hunger, fear, attachment, curiosity, status, guilt, ambition, fatigue, love, aggression, and shame. We are not safe because we are perfectly aligned. We are somewhat governable because our motives conflict, and because society adds further constraints: laws, norms, reputation, education, institutions, and consequences.

This suggests that advanced AI alignment may not be just the problem of writing the perfect objective function. It may be closer to designing an ecology of constraints around powerful agents.

## Conclusion: intelligence was never just problem-solving

So, are we building intelligence backward?

For useful AI tools and bounded agentic systems, probably not. The current path of scaling learning systems, improving evaluations, expanding capabilities, and optimizing domain-specific objectives has already produced extraordinary results.

But for AGI, ASI, or open-ended agentic intelligence, task performance may be an incomplete guide. Intelligence is not only the ability to solve problems. It is adaptive problem-solving under motivation, constraint, uncertainty, and consequence.

Remove motivation, and you may get computation.

Remove consequence, and you may get simulation.

Add both, and you begin to get agency.

Agency is where the difficult questions live.

Maybe clean intelligence is possible in tool-like systems. Maybe it is even possible in bounded agentic systems, where the environment is narrow and the objective is clear. But once intelligence becomes general, autonomous, persistent, and goal-directed, it enters the older world of incentives, self-preservation, resource use, deception, cooperation, and control.

That world is not new. Evolution has been exploring it for billions of years.

It did not produce clean intelligence.

It produced us.

## References

[1] Nicolas Villarreal, "The Impossibility of a Rational Intelligence Optimizer," LessWrong, 2024.

[2] Charles Goodhart, "Problems of Monetary Management: The U.K. Experience," 1975. See also Donald Campbell's work on social indicators and later AI safety discussions of proxy optimization.

[3] Victoria Krakovna et al., "Specification Gaming: The Flip Side of AI Ingenuity," DeepMind Blog, 2020.

[4] Dario Amodei, Chris Olah, Jacob Steinhardt, Paul Christiano, John Schulman, and Dan Mané, "Concrete Problems in AI Safety," arXiv, 2016.

[5] Robin I. M. Dunbar, "The Social Brain Hypothesis," Evolutionary Anthropology, 1998.

[6] Michael Muthukrishna, Max Doebeli, Maciej Chudek, and Joseph Henrich, "The Cultural Brain Hypothesis: How Culture Drives Brain Expansion, Sociality, and Life History," PLOS Computational Biology, 2018.

[7] Richard S. Sutton, "The Bitter Lesson," 2019.

[8] Shane Legg and Marcus Hutter, "Universal Intelligence: A Definition of Machine Intelligence," Minds and Machines, 2007.

[9] Stephen M. Omohundro, "The Basic AI Drives," Proceedings of the First AGI Conference, 2008.

[10] Nick Bostrom, "The Superintelligent Will: Motivation and Instrumental Rationality in Advanced Artificial Agents," Minds and Machines, 2012.
