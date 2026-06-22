import type { Metadata } from "next";
import { site } from "@/content/site";
import { bio, timeline, personalInterests } from "@/content/about";
import { withBase } from "@/lib/paths";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — background, education, and interests.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading
        eyebrow="About"
        title={`A bit about me`}
        description={site.tagline}
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
        <Reveal>
          <div className="prose prose-neutral max-w-none dark:prose-invert">
            {bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold tracking-tight">Education</h2>
            <ol className="mt-6 space-y-6 border-l border-[var(--color-border)] pl-6">
              {timeline.map((entry) => (
                <li key={entry.title} className="relative">
                  <span className="absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)]" />
                  <p className="text-sm font-medium text-[var(--color-accent)]">
                    {entry.period}
                  </p>
                  <h3 className="mt-0.5 font-semibold">{entry.title}</h3>
                  <p className="text-sm text-[var(--color-muted)]">
                    {entry.org}
                  </p>
                  {entry.detail && (
                    <p className="mt-1 text-sm text-[var(--color-muted)]">
                      {entry.detail}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-5 lg:sticky lg:top-24">
            <Card>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                Curriculum Vitae
              </p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Download a full PDF of my CV with publications, talks, and
                experience.
              </p>
              <a
                href={withBase(site.resume)}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Download CV
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </Card>

            <Card>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                Beyond research
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {personalInterests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-[var(--color-border)] px-3 py-1 text-sm text-[var(--color-muted)]"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </Card>

            <Card>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                Get in touch
              </p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                The best way to reach me is by email.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 inline-block break-all text-sm font-medium text-[var(--color-accent)]"
              >
                {site.email}
              </a>
            </Card>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
