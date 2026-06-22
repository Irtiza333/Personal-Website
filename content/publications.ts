export type PubLink = {
  label: string;
  href: string;
  // controls the small pill style
  kind: "pdf" | "doi" | "code" | "slides" | "arxiv";
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: "journal" | "conference" | "preprint" | "thesis";
  abstract?: string;
  links?: PubLink[];
  bibtex: string;
};

export const publications: Publication[] = [
  {
    title:
      "Gaussian-Process-Enhanced Particle Swarm Optimization for Aerodynamic Shape Design",
    authors: "I. Khan, A. Collaborator, S. Advisor",
    venue: "Journal of Aerospace Optimization (placeholder)",
    year: 2025,
    type: "journal",
    abstract:
      "We present a hybrid optimizer that integrates a Gaussian-process surrogate into particle swarm optimization to reduce the number of expensive CFD evaluations required for airfoil and high-lift slat design, while retaining global search performance.",
    links: [
      { label: "PDF", href: "#", kind: "pdf" },
      { label: "DOI", href: "#", kind: "doi" },
      { label: "Code", href: "https://github.com/Irtiza333", kind: "code" },
    ],
    bibtex: `@article{khan2025gppso,
  title   = {Gaussian-Process-Enhanced Particle Swarm Optimization for Aerodynamic Shape Design},
  author  = {Khan, Irtiza and Collaborator, A. and Advisor, S.},
  journal = {Journal of Aerospace Optimization},
  year    = {2025}
}`,
  },
  {
    title:
      "Failure-Aware Imputation Strategies for Surrogate-Assisted CFD Optimization",
    authors: "I. Khan, S. Advisor",
    venue: "AIAA Aviation Forum (placeholder)",
    year: 2024,
    type: "conference",
    abstract:
      "Expensive CFD evaluations sometimes fail to converge. We study imputation strategies that let surrogate-assisted optimizers recover useful information from failed simulations, improving robustness on practical design problems.",
    links: [
      { label: "PDF", href: "#", kind: "pdf" },
      { label: "Slides", href: "#", kind: "slides" },
    ],
    bibtex: `@inproceedings{khan2024imputation,
  title     = {Failure-Aware Imputation Strategies for Surrogate-Assisted CFD Optimization},
  author    = {Khan, Irtiza and Advisor, S.},
  booktitle = {AIAA Aviation Forum},
  year      = {2024}
}`,
  },
  {
    title:
      "On Kernel Selection and Length-Scale Behaviour in Expensive Engineering Optimization",
    authors: "I. Khan",
    venue: "arXiv preprint (placeholder)",
    year: 2024,
    type: "preprint",
    abstract:
      "An empirical study of how Gaussian-process kernel choice and learned length-scales evolve across optimization seeds, and what that implies for sample efficiency on constrained engineering objectives.",
    links: [{ label: "arXiv", href: "#", kind: "arxiv" }],
    bibtex: `@misc{khan2024kernels,
  title  = {On Kernel Selection and Length-Scale Behaviour in Expensive Engineering Optimization},
  author = {Khan, Irtiza},
  year   = {2024},
  note   = {arXiv preprint}
}`,
  },
];
