import { site, socials } from "@/content/site";
import { SocialIcon } from "./icons";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-10 sm:flex-row">
        <p className="text-sm text-[var(--color-muted)]">
          &copy; {new Date().getFullYear()} {site.name}. Built with Next.js &amp;
          Tailwind CSS.
        </p>
        <div className="flex items-center gap-2">
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
      </div>
    </footer>
  );
}
