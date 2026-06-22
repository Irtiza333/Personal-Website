import type { Metadata } from "next";
import { projects, researchInterests } from "@/content/research";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Current research projects in surrogate-assisted optimization and aerodynamic shape design.",
};

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading
        eyebrow="Research"
        title="What I'm working on"
        description="My research sits at the intersection of machine learning and computational fluid dynamics: making expensive, high-fidelity aerodynamic design tractable with smarter optimization."
      />

      <div className="mb-12 flex flex-wrap gap-2">
        {researchInterests.map((interest) => (
          <span
            key={interest}
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1.5 text-sm text-[var(--color-muted)]"
          >
            {interest}
          </span>
        ))}
      </div>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 80}>
            <Card className="h-full">
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-md bg-[var(--color-accent)] px-2.5 py-1 text-xs font-semibold text-white">
                      {project.badge}
                    </span>
                    <span className="text-sm text-[var(--color-muted)]">
                      {project.period}
                    </span>
                    {project.featured && (
                      <span className="rounded-md border border-[var(--color-accent)] px-2.5 py-1 text-xs font-semibold text-[var(--color-accent)]">
                        Featured
                      </span>
                    )}
                  </div>

                  <h2 className="mt-3 text-xl font-bold tracking-tight">
                    {project.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-[var(--color-muted)]">
                    {project.summary}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-2.5 text-sm leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                        <span className="text-[var(--color-muted)]">{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.methods.map((m) => (
                      <span
                        key={m}
                        className="rounded-full bg-[color-mix(in_oklab,var(--color-accent)_12%,transparent)] px-3 py-1 text-xs font-medium text-[var(--color-accent)]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
