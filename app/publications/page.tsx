import type { Metadata } from "next";
import { publications, type Publication } from "@/content/publications";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { BibtexButton } from "@/components/BibtexButton";
import { withBase } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Publications",
  description: "Peer-reviewed papers, conference proceedings, and preprints.",
};

const typeLabels: Record<Publication["type"], string> = {
  journal: "Journal",
  conference: "Conference",
  preprint: "Preprint",
  thesis: "Thesis",
};

const linkStyles: Record<string, string> = {
  pdf: "bg-[var(--color-accent)] text-white border-transparent",
  doi: "border-[var(--color-border)]",
  code: "border-[var(--color-border)]",
  slides: "border-[var(--color-border)]",
  arxiv: "border-[var(--color-border)]",
};

export default function PublicationsPage() {
  const years = Array.from(new Set(publications.map((p) => p.year))).sort(
    (a, b) => b - a,
  );

  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading
        eyebrow="Publications"
        title="Papers & preprints"
        description="A selection of my work. Each entry includes links to the paper and a copyable BibTeX citation."
      />

      <div className="space-y-12">
        {years.map((year) => (
          <section key={year}>
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-widest text-[var(--color-muted)]">
              {year}
            </h2>
            <div className="space-y-5">
              {publications
                .filter((p) => p.year === year)
                .map((pub, i) => (
                  <Reveal key={pub.title} delay={i * 60}>
                    <Card interactive>
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-semibold leading-snug">
                          {pub.title}
                        </h3>
                        <span className="shrink-0 rounded-md border border-[var(--color-border)] px-2 py-0.5 text-xs font-medium text-[var(--color-muted)]">
                          {typeLabels[pub.type]}
                        </span>
                      </div>

                      <p className="mt-2 text-sm text-[var(--color-muted)]">
                        {pub.authors}
                      </p>
                      <p className="mt-0.5 text-sm italic text-[var(--color-muted)]">
                        {pub.venue}
                      </p>

                      {pub.abstract && (
                        <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                          {pub.abstract}
                        </p>
                      )}

                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        {pub.links?.map((link) => (
                          <a
                            key={link.label}
                            href={withBase(link.href)}
                            target="_blank"
                            rel="noreferrer"
                            className={`rounded-md border px-2.5 py-1 text-xs font-medium transition-colors hover:opacity-90 ${
                              linkStyles[link.kind] ??
                              "border-[var(--color-border)]"
                            }`}
                          >
                            {link.label}
                          </a>
                        ))}
                        <BibtexButton bibtex={pub.bibtex} />
                      </div>
                    </Card>
                  </Reveal>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
