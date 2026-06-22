"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "./icons";

export function BibtexButton({ bibtex }: { bibtex: string }) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setOpen(true);
    }
  }

  return (
    <div className="inline-flex flex-col items-start gap-2">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-md border border-[var(--color-border)] px-2.5 py-1 text-xs font-medium text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          {copied ? (
            <CheckIcon className="h-3.5 w-3.5" />
          ) : (
            <CopyIcon className="h-3.5 w-3.5" />
          )}
          {copied ? "Copied" : "BibTeX"}
        </button>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-xs font-medium text-[var(--color-muted)] underline-offset-2 hover:underline"
        >
          {open ? "Hide" : "Show"}
        </button>
      </div>
      {open && (
        <pre className="max-w-full overflow-x-auto rounded-lg border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-fg)_5%,var(--color-card))] p-3 text-xs leading-relaxed">
          <code>{bibtex}</code>
        </pre>
      )}
    </div>
  );
}
