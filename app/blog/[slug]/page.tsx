import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPost, formatDate } from "@/lib/blog";
import { ArrowRightIcon } from "@/components/icons";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-5 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
      >
        <ArrowRightIcon className="h-4 w-4 rotate-180" />
        Back to blog
      </Link>

      <header className="mt-6">
        <p className="text-sm text-[var(--color-muted)]">
          {formatDate(post.date)} &middot; {post.readingTime} min read
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {post.title}
        </h1>
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
      </header>

      <div
        className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-headings:tracking-tight prose-a:text-[var(--color-accent)]"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  );
}
