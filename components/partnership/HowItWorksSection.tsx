"use client";

import { FadeUp } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/providers/LanguageProvider";

function StepCard({
  number,
  title,
  text,
  status,
  chips,
  delay,
  highlight = false,
}: {
  number: string;
  title: string;
  text: string;
  status: string;
  chips: readonly string[];
  delay: number;
  highlight?: boolean;
}) {
  return (
    <FadeUp delay={delay} className="h-full">
      <div
        className={[
          "partnership-step-card relative flex h-full min-w-0 flex-col gap-4 rounded-[26px] p-5 sm:rounded-[28px] sm:p-7",
          highlight ? "surface-accent" : "surface-glass",
        ].join(" ")}
      >
        <div className="flex items-center justify-between gap-3">
          <span
            dir="ltr"
            className="lp-eyebrow inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary)] sm:h-9 sm:w-9"
          >
            {number}
          </span>
          <span className="partnership-status-pill">
            <span aria-hidden className="partnership-status-pill__dot" />
            {status}
          </span>
        </div>

        <h3 className="lp-card-title text-[var(--foreground)]">{title}</h3>
        <p className="lp-body-sm text-[var(--foreground-muted)]">{text}</p>
        <div className="partnership-meter mt-auto" aria-hidden>
          <span />
        </div>
        <div className="partnership-chip-list partnership-chip-list--small">
          {chips.map((chip) => (
            <span key={chip} className="partnership-chip">
              {chip}
            </span>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}

export default function HowItWorksSection() {
  const { t, isArabic } = useLanguage();
  const section = t.howItWorks;
  const visuals = section.visuals;

  const titleNode = (
    <>
      {section.title.before} <span className="glow-primary">{section.title.glow}</span>
      {section.title.after ? ` ${section.title.after}` : ""}
    </>
  );

  return (
    <section
      id="how-it-works"
      dir={isArabic ? "rtl" : "ltr"}
      className="section-shell"
    >
      <div className="container-main">
        <SectionHeading eyebrow={section.eyebrow} title={titleNode} text={section.text} />

        <div className="partnership-auto-grid mt-10 md:mt-12">
          <StepCard
            {...section.steps.first}
            status={`${visuals.step} ${section.steps.first.number}`}
            chips={[visuals.agent, visuals.partner]}
            delay={80}
          />
          <StepCard
            {...section.steps.second}
            status={visuals.live}
            chips={[visuals.activity, visuals.live]}
            delay={160}
            highlight
          />
          <StepCard
            {...section.steps.third}
            status={visuals.activity}
            chips={[`${visuals.step} ${section.steps.third.number}`, visuals.live]}
            delay={240}
          />
        </div>
      </div>
    </section>
  );
}
