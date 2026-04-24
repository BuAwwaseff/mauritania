"use client";

import type { ReactNode } from "react";
import { FadeUp } from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  text,
  className = "",
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  text: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`.trim()}>
      <FadeUp>
        <div className="eyebrow-divider lp-eyebrow text-[var(--primary)]">
          <span className="eyebrow-divider__line" />
          {eyebrow}
          <span className="eyebrow-divider__line" />
        </div>
      </FadeUp>

      <FadeUp delay={60}>
        <h2 className="lp-section-title mt-5 text-[var(--foreground)] sm:mt-6">{title}</h2>
      </FadeUp>

      <FadeUp delay={120}>
        <p className="lp-body mx-auto mt-3 max-w-2xl text-[var(--foreground-muted)] sm:mt-4">
          {text}
        </p>
      </FadeUp>
    </div>
  );
}
