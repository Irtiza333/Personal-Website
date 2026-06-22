export type ResearchProject = {
  title: string;
  period: string;
  summary: string;
  methods: string[];
  highlights: string[];
  // emoji or short label used as a visual marker on the card
  badge: string;
  featured?: boolean;
};

export const researchInterests: string[] = [
  "Surrogate-assisted optimization",
  "Gaussian process regression",
  "Particle swarm optimization",
  "Bayesian optimization & infill criteria",
  "Computational fluid dynamics",
  "Aerodynamic shape optimization",
];

export const projects: ResearchProject[] = [
  {
    title: "GP-Enhanced PSO for Airfoil & Slat Shape Optimization",
    period: "2023 - present",
    badge: "Flagship",
    featured: true,
    summary:
      "A hybrid optimizer that wraps a Gaussian-process surrogate around a particle swarm, replacing most expensive CFD calls with cheap, uncertainty-aware predictions while preserving global search behaviour.",
    methods: [
      "Gaussian process surrogates",
      "Particle swarm optimization",
      "Expected-improvement infill",
      "Latin hypercube sampling",
    ],
    highlights: [
      "Cuts the number of high-fidelity CFD evaluations needed to converge by exploiting surrogate predictions between generations.",
      "Adaptive infill strategy balances exploration and exploitation using GP posterior uncertainty.",
      "Validated on transonic airfoil and multi-element high-lift slat design cases.",
    ],
  },
  {
    title: "Surrogate-Assisted High-Fidelity CFD Design",
    period: "2022 - present",
    badge: "CFD",
    summary:
      "Building robust pipelines that connect parametric geometry generation, automated meshing, and RANS solvers so that optimizers can query aerodynamic performance with minimal manual intervention.",
    methods: [
      "RANS / Mach-2 workflows",
      "Automated meshing",
      "Parametric geometry",
      "Failure-aware imputation",
    ],
    highlights: [
      "Automated journaling and supervision of CFD runs across large design batches.",
      "Imputation strategies recover useful signal from failed or non-converged simulations.",
    ],
  },
  {
    title: "Bayesian Optimization & Infill Strategies",
    period: "2023 - present",
    badge: "BayesOpt",
    summary:
      "Studying how acquisition functions and kernel choices shape sample efficiency for constrained, expensive engineering objectives, and how to keep the surrogate trustworthy across the design space.",
    methods: [
      "Expected improvement",
      "Kernel selection",
      "Length-scale diagnostics",
      "Constraint handling",
    ],
    highlights: [
      "Per-seed kernel and length-scale analysis to understand surrogate behaviour over runs.",
      "Comparative studies of EGO/EI against the GP-enhanced PSO baseline.",
    ],
  },
];
