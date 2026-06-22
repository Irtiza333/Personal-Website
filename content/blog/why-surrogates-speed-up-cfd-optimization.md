---
title: "Why surrogates speed up CFD-driven optimization"
date: "2026-02-08"
excerpt: "A short, intuitive tour of how a Gaussian-process surrogate lets a particle swarm spend far fewer expensive simulations to find good designs."
tags: ["optimization", "gaussian-process", "cfd"]
---

High-fidelity CFD is *expensive*. A single converged RANS evaluation of an airfoil
can take minutes to hours, and a global optimizer might want thousands of them. The
core trick behind surrogate-assisted optimization is simple: **don't call the
simulator when a cheap model can answer the question well enough.**

## The two ingredients

1. **A surrogate** — here, a Gaussian process (GP) trained on the designs we have
   already evaluated. It predicts performance *and* reports how uncertain it is.
2. **A search method** — here, particle swarm optimization (PSO), which explores
   the design space with a population of candidate solutions.

## How they cooperate

Between generations, the swarm proposes many candidate designs. Instead of running
CFD on all of them, we query the GP. Most candidates get a cheap predicted score.
We only spend a real simulation when it is *worth it* — when a candidate looks
promising, or when the GP is uncertain enough that a new sample would teach us a lot.

```text
proposed designs --> GP prediction (cheap)
                       |
            promising / uncertain?
                       |
                    yes --> run CFD (expensive) --> update GP
                    no  --> trust the surrogate
```

## The infill question

Choosing *which* point to evaluate next is the heart of the method. Expected
improvement (EI) is a classic choice: it rewards points that are likely to beat the
current best, while still valuing exploration where the GP is unsure. Get this
balance right and you converge with a fraction of the simulations.

## Takeaway

Surrogate-assisted optimization is not magic — it is disciplined laziness. By
spending expensive evaluations only where they buy the most information, a
GP-enhanced swarm can reach good designs with dramatically fewer CFD runs than a
plain optimizer.
