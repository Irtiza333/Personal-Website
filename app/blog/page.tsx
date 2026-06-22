import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostMeta, formatDate } from "@/lib/blog";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes, write-ups, and deep dives on optimization and CFD.",
};

export default function BlogPage() {
  const posts = getAllPostMeta();

  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading
        eyebrow="Blog"
        title="Writing & notes"
        description="Short essays and notes-to-self on optimization, Gaussian processes, CFD, and the research process."
      />

      {posts.length === 0 ? (
        <p className="text-[var(--color-muted)]">No posts yet — check back soon.</p>
      ) : (
        <div className="space-y-5">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 70}>
              <Link href={`/blog/${post.slug}`} className="block">
                <Card interactive>
                  <p className="text-sm text-[var(--color-muted)]">
                    {formatDate(post.date)} &middot; {post.readingTime} min read
                  </p>
                  <h2 className="mt-1 text-xl font-semibold tracking-tight">
                    {post.title}
                  </h2>
                  <p className="mt-2 leading-relaxed text-[var(--color-muted)]">
                    {post.excerpt}
                  </p>
                  {post.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[color-mix(in_oklab,var(--color-accent)_12%,transparent)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-accent)]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
