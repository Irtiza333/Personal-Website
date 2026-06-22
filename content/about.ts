export type TimelineEntry = {
  period: string;
  title: string;
  org: string;
  detail?: string;
};

export const bio: string[] = [
  "I am an MScE researcher in mechanical engineering at the University of New Brunswick, focused on making high-fidelity CFD-driven design faster and more reliable. My work combines machine-learning surrogates with population-based and Bayesian optimizers so that engineers can explore better designs with far fewer expensive simulations.",
  "Day to day, that means training Gaussian-process models on CFD data, designing infill strategies that decide when a real simulation is worth running, and building robust automated pipelines that connect geometry, meshing, and solvers. I apply these methods to wind-turbine airfoil slats and to marine propellers operating in a hull wake. I care a lot about reproducibility and about methods that hold up on messy, failure-prone, real-world problems.",
  "Outside of research, I enjoy writing about what I learn, mentoring students, and the occasional long bike ride.",
];

export const timeline: TimelineEntry[] = [
  {
    period: "Present",
    title: "MScE, Mechanical Engineering",
    org: "University of New Brunswick, Fredericton",
    detail:
      "Surrogate-assisted shape optimization for airfoil slats and marine propellers using high-fidelity CFD.",
  },
  {
    period: "Earlier",
    title: "BSc, Engineering",
    org: "Your University",
    detail: "Foundations in fluid mechanics, design, and computation.",
  },
];

export const personalInterests: string[] = [
  "Scientific writing",
  "Open-source tooling",
  "Data visualization",
  "Cycling",
  "Photography",
];
