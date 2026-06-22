import Link from "next/link";
import { site, socials } from "@/content/site";
import { researchInterests, projects } from "@/content/research";
import { publications } from "@/content/publications";
import { getAllPostMeta, formatDate } from "@/lib/blog";
import { withBase } from "@/lib/paths";
import { Reveal } from "@/components/Reveal";
import { Card } from "@/components/Card";
import { SocialIcon, ArrowRightIcon } from "@/components/icons";

export default function HomePage() {
  const posts = getAllPostMeta().slice(0, 2);
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const latestPub = publications[0];

  return (
    <>
      {/* Hero */}
      <section className="hero-glow">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
          <div className="flex flex-col items-start gap-10 md:flex-row md:items-center">
            <Reveal className="order-2 flex-1 md:order-1">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1 text-xs font-medium text-[var(--color-muted)]">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Available for collaboration
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Hi, I&apos;m {site.name.split(" ")[0]}.
              </h1>
              <p className="mt-3 text-xl font-medium text-[var(--color-accent)]">
                {site.role}
              </p>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
                {site.intro}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  View my research
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <Link
                  href="/publications"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2.5 text-sm font-semibold transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  Publications
                </Link>
              </div>

              <div className="mt-7 flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target={s.icon === "email" ? undefined : "_blank"}
                    rel="noreferrer"
                    className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    <SocialIcon name={s.icon} className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120} className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[var(--color-accent)] to-[var(--color-accent-soft)] opacity-20 blur-2xl" />
                <img
                  src={withBase(site.avatar)}
                  alt={site.name}
                  width={176}
                  height={176}
                  className="relative h-40 w-40 rounded-full border-4 border-[var(--color-card)] object-cover shadow-xl sm:h-44 sm:w-44"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="mt-12 flex flex-wrap gap-2">
              {researchInterests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1.5 text-sm text-[var(--color-muted)]"
                >
                  {interest}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-5xl px-5 py-8">
        <div className="grid gap-5 md:grid-cols-3">
          <Reveal>
            <Link href="/research" className="block h-full">
              <Card interactive className="h-full">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                  Current research
                </p>
                <h3 className="mt-2 text-lg font-semibold">{featured.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-[var(--color-muted)]">
                  {featured.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)]">
                  Explore projects <ArrowRightIcon className="h-4 w-4" />
                </span>
              </Card>
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <Link href="/publications" className="block h-full">
              <Card interactive className="h-full">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                  Latest paper
                </p>
                <h3 className="mt-2 text-lg font-semibold">{latestPub.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  {latestPub.venue}, {latestPub.year}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)]">
                  All publications <ArrowRightIcon className="h-4 w-4" />
                </span>
              </Card>
            </Link>
          </Reveal>

          <Reveal delay={160}>
            <Link href="/blog" className="block h-full">
              <Card interactive className="h-full">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                  From the blog
                </p>
                {posts[0] ? (
                  <>
                    <h3 className="mt-2 text-lg font-semibold">
                      {posts[0].title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm text-[var(--color-muted)]">
                      {posts[0].excerpt}
                    </p>
                  </>
                ) : (
                  <p className="mt-2 text-sm text-[var(--color-muted)]">
                    Posts coming soon.
                  </p>
                )}
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)]">
                  Read the blog <ArrowRightIcon className="h-4 w-4" />
                </span>
              </Card>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Recent writing */}
      {posts.length > 0 && (
        <section className="mx-auto max-w-5xl px-5 py-12">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Recent writing</h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-[var(--color-accent)]"
            >
              View all
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <Card interactive className="h-full">
                    <p className="text-sm text-[var(--color-muted)]">
                      {formatDate(post.date)} &middot; {post.readingTime} min read
                    </p>
                    <h3 className="mt-1 text-lg font-semibold">{post.title}</h3>
                    <p className="mt-2 text-sm text-[var(--color-muted)]">
                      {post.excerpt}
                    </p>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
