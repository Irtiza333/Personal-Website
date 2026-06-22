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

// "Irtiza" is highlighted on the page so the author's own name stands out.
export const authorName = "Khan";

export const publications: Publication[] = [
  {
    title:
      "A Sample-Efficient and Failure-Aware Surrogate-Assisted Workflow for Thick-Airfoil Slat Optimization",
    authors:
      "Irtiza M. Khan, Sean R. Hebert, Finley M. Corbett, Andrew Gerber, Juan A. Carretero, Tiger Jeans",
    venue: "AIAA AVIATION 2026 Forum, San Diego, CA",
    year: 2026,
    type: "conference",
    abstract:
      "We optimize a leading-edge slat for a thick wind-turbine airfoil by coupling an automated meshing pipeline with high-fidelity CFD, comparing particle swarm optimization (PSO) against a Gaussian-process Bayesian-optimization framework. The GP-assisted method uses expected improvement, highest-predicted-mean sampling, and niching-based E-SPSO search with an adaptive rolling-window infill allocation, while penalized imputation retains failed mesh/CFD evaluations so the surrogate can learn from regions where the workflow fails. Across multiple seeds both methods reach comparable designs, with the GP-assisted approach generally requiring fewer generations.",
    links: [
      {
        label: "PDF",
        href: "/papers/thick-airfoil-slat-optimization-aiaa-2026.pdf",
        kind: "pdf",
      },
      { label: "DOI", href: "https://doi.org/10.2514/6.2026-4473", kind: "doi" },
    ],
    bibtex: `@inproceedings{khan2026slat,
  title     = {A Sample-Efficient and Failure-Aware Surrogate-Assisted Workflow for Thick-Airfoil Slat Optimization},
  author    = {Khan, Irtiza M. and Hebert, Sean R. and Corbett, Finley M. and Gerber, Andrew and Carretero, Juan A. and Jeans, Tiger},
  booktitle = {AIAA AVIATION 2026 Forum},
  address   = {San Diego, CA},
  year      = {2026},
  doi       = {10.2514/6.2026-4473}
}`,
  },
  {
    title:
      "Surrogate-Assisted Propeller Shape Optimization in Hull Wake using 3D RANS Simulations",
    authors:
      "Irtiza Khan, Finley Corbett, Andrew Gerber, Juan Carretero, Tiger Jeans",
    venue:
      "Ninth International Symposium on Marine Propulsors (smp'26), St. John's, Canada",
    year: 2026,
    type: "conference",
    abstract:
      "This work maximizes in-situ propeller hydrodynamic efficiency behind the Canadian Navy's ORCA-class hull using high-fidelity 3D RANS (ANSYS CFX) with a multiple-reference-frame approach. Gaussian-process/Kriging surrogates with iterative retraining, guided by expected improvement and MaxMSE infill, reduce the number of expensive evaluations over an 11-variable Bezier-parameterized design space. From 250 successful simulations, a candidate improves hydrodynamic efficiency from 50.93% to 53.07% (+2.14 points), demonstrating a reusable framework for hull-propeller self-propulsion optimization.",
    links: [
      {
        label: "PDF",
        href: "/papers/surrogate-propeller-hull-wake-smp-2026.pdf",
        kind: "pdf",
      },
    ],
    bibtex: `@inproceedings{khan2026propeller,
  title     = {Surrogate-Assisted Propeller Shape Optimization in Hull Wake using 3D RANS Simulations},
  author    = {Khan, Irtiza and Corbett, Finley and Gerber, Andrew and Carretero, Juan and Jeans, Tiger},
  booktitle = {Ninth International Symposium on Marine Propulsors (smp'26)},
  address   = {St. John's, Canada},
  year      = {2026}
}`,
  },
  {
    title:
      "Automated 3D Propeller Modeling for Integration into a Shape Optimization Workflow",
    authors:
      "Irtiza M. Khan, Finley M. Corbett, Tiger L. Jeans, Andrew G. Gerber, Juan A. Carretero",
    venue:
      "CSME/CFDSC/CSR 2025 International Congress, Montreal, Quebec, Canada",
    year: 2025,
    type: "conference",
    abstract:
      "We develop a robust, automated 3D marine-propeller modeling method that integrates into a shape-optimization workflow using automated meshing and Reynolds-Averaged Navier-Stokes (RANS) solvers. Leveraging high-fidelity 3D CFD over low-order methods enables better wake resolution and accounts for hull effects. The paper demonstrates the automated modeling process, validates it against an existing propeller, and outlines the optimization workflow.",
    links: [
      {
        label: "PDF",
        href: "/papers/automated-3d-propeller-modeling-csme-2025.pdf",
        kind: "pdf",
      },
    ],
    bibtex: `@inproceedings{khan2025propeller,
  title     = {Automated 3D Propeller Modeling for Integration into a Shape Optimization Workflow},
  author    = {Khan, Irtiza M. and Corbett, Finley M. and Jeans, Tiger L. and Gerber, Andrew G. and Carretero, Juan A.},
  booktitle = {Proceedings of the CSME International Congress (CSME/CFDSC/CSR 2025)},
  address   = {Montr\\'eal, Qu\\'ebec, Canada},
  year      = {2025}
}`,
  },
];
