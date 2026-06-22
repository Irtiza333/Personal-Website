import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center px-5 py-32 text-center">
      <p className="text-6xl font-bold text-[var(--color-accent)]">404</p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight">
        This page could not be found.
      </h1>
      <p className="mt-2 text-[var(--color-muted)]">
        The page you are looking for does not exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        Back home
      </Link>
    </div>
  );
}
