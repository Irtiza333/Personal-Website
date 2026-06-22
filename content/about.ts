export type TimelineEntry = {
  period: string;
  title: string;
  org: string;
  detail?: string;
};

export const bio: string[] = [
  "I am a PhD researcher in aerospace engineering focused on making high-fidelity aerodynamic design faster and more reliable. My work combines machine-learning surrogates with population-based optimizers so that engineers can explore better designs with far fewer expensive simulations.",
  "Day to day, that means training Gaussian-process models on CFD data, designing infill strategies that decide when a real simulation is worth running, and building robust pipelines that connect geometry, meshing, and solvers. I care a lot about reproducibility and about methods that hold up on messy, real-world problems.",
  "Outside of research, I enjoy writing about what I learn, mentoring students, and the occasional long bike ride.",
];

export const timeline: TimelineEntry[] = [
  {
    period: "2023 - present",
    title: "PhD, Aerospace Engineering",
    org: "Your University",
    detail:
      "Surrogate-assisted optimization for aerodynamic shape design (GP-enhanced PSO).",
  },
  {
    period: "2021 - 2023",
    title: "MASc, Mechanical Engineering",
    org: "Your University",
    detail: "Computational fluid dynamics and design optimization.",
  },
  {
    period: "2017 - 2021",
    title: "BEng, Aerospace Engineering",
    org: "Your University",
    detail: "Graduated with distinction.",
  },
];

export const personalInterests: string[] = [
  "Scientific writing",
  "Open-source tooling",
  "Data visualization",
  "Cycling",
  "Photography",
];
