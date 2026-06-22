import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={`rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-card)] p-6 ${
        interactive
          ? "transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-lg hover:shadow-black/5"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
