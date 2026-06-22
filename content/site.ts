export type SocialLink = {
  label: string;
  href: string;
  // simple inline svg icon key handled in Footer/Navbar
  icon: "github" | "scholar" | "linkedin" | "email" | "orcid";
};

export type NavItem = {
  label: string;
  href: string;
};

export const site = {
  name: "Irtiza Khan",
  // short, punchy role used in the hero + page titles
  role: "MScE Researcher, Mechanical Engineering",
  tagline:
    "Surrogate-assisted optimization for aerodynamic and marine shape design",
  // one or two sentences for the hero intro
  intro:
    "I build machine-learning-driven optimization methods that make high-fidelity CFD design faster. At the University of New Brunswick, my work couples Gaussian-process surrogates with swarm and Bayesian optimization to design wind-turbine airfoil slats and marine propellers under expensive, failure-prone simulations.",
  location: "Fredericton, New Brunswick, Canada",
  email: "irtiza.khan@unb.ca",
  // path is resolved against the deployment base path automatically
  resume: "/cv.pdf",
  avatar: "/avatar.svg",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Irtiza333", icon: "github" },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/",
    icon: "scholar",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/irtiza-khan-512992193",
    icon: "linkedin",
  },
  { label: "ORCID", href: "https://orcid.org/", icon: "orcid" },
  { label: "Email", href: "mailto:irtiza.khan@unb.ca", icon: "email" },
];
