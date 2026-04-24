"use client";

import { FadeUp } from "@/components/Reveal";
import LoopingDealRail from "@/components/partnership/LoopingDealRail";
import SectionHeading from "@/components/SectionHeading";
import { marketContactLinks, marketRoutes } from "@/lib/market";
import { useLanguage } from "@/providers/LanguageProvider";

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="mt-0.5 shrink-0"
    >
      <circle cx="8" cy="8" r="8" fill="var(--primary-soft)" />
      <path
        d="M5 8l2 2 4-4"
        stroke="var(--primary)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PathCard({
  side,
  title,
  text,
  cta,
  ctaHref,
  secondaryCta,
  secondaryHref,
  stats,
  pointA,
  pointB,
  railItems,
  accent = false,
  delay,
}: {
  side: string;
  title: string;
  text: string;
  cta: string;
  ctaHref: string;
  secondaryCta: string;
  secondaryHref: string;
  stats: readonly { value: string; label: string }[];
  pointA: { title: string; text: string };
  pointB: { title: string; text: string };
  railItems: readonly string[];
  accent?: boolean;
  delay: number;
}) {
  return (
    <FadeUp delay={delay} className="h-full">
      <div
        className={[
          "partnership-path-card flex h-full min-w-0 flex-col gap-6 rounded-[28px] p-5 sm:rounded-[30px] sm:p-8",
          accent ? "surface-accent" : "surface-glass",
        ].join(" ")}
      >
        <span className="lp-eyebrow text-[var(--primary)]">{side}</span>

        <div className="flex flex-col gap-3">
          <h3 className="lp-card-title text-[var(--foreground)]">{title}</h3>
          <p className="lp-body-sm text-[var(--foreground-muted)]">{text}</p>
        </div>

        <div className="partnership-stat-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="partnership-stat">
              <span className="partnership-stat__value">{stat.value}</span>
              <span className="partnership-stat__label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className={accent ? "partnership-flow partnership-flow--accent" : "partnership-flow"} aria-hidden>
          <span />
          <span />
          <span />
        </div>

        <div className="flex flex-col gap-4">
          {[pointA, pointB].map((point) => (
            <div key={point.title} className="flex gap-3">
              <CheckIcon />
              <div>
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  {point.title}
                </p>
                <p className="lp-body-sm text-[var(--foreground-muted)]">{point.text}</p>
              </div>
            </div>
          ))}
        </div>

        <LoopingDealRail
          items={railItems}
          className="partnership-rail--compact"
        />

        <div className="mt-auto grid gap-3 pt-2 sm:flex sm:flex-wrap">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary lp-button"
          >
            {cta}
          </a>

          <a href={secondaryHref} className="button-secondary lp-button">
            {secondaryCta}
          </a>
        </div>
      </div>
    </FadeUp>
  );
}

export default function PathsSection() {
  const { t, isArabic } = useLanguage();
  const section = t.paths;
  const agentRail = [
    `${section.agent.stats[0].value} ${section.agent.stats[0].label}`,
    `${section.agent.stats[1].value} ${section.agent.stats[1].label}`,
    section.agent.pointA.title,
  ];
  const partnerRail = [
    `${section.partner.stats[0].value} ${section.partner.stats[0].label}`,
    section.partner.stats[1].value,
    section.partner.pointA.title,
  ];

  return (
    <section
      id="partnership"
      dir={isArabic ? "rtl" : "ltr"}
      className="section-shell"
    >
      <div className="container-main">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} text={section.text} />

        <div className="partnership-path-grid mt-10 md:mt-12">
          <PathCard
            side={section.agent.side}
            title={section.agent.title}
            text={section.agent.text}
            cta={section.agent.cta}
            ctaHref={marketContactLinks.telegram}
            secondaryCta={section.agent.secondaryCta}
            secondaryHref={marketRoutes.steps}
            stats={section.agent.stats}
            pointA={section.agent.pointA}
            pointB={section.agent.pointB}
            railItems={agentRail}
            delay={80}
          />

          <PathCard
            side={section.partner.side}
            title={section.partner.title}
            text={section.partner.text}
            cta={section.partner.cta}
            ctaHref={marketContactLinks.whatsapp}
            secondaryCta={section.partner.secondaryCta}
            secondaryHref={marketRoutes.steps}
            stats={section.partner.stats}
            pointA={section.partner.pointA}
            pointB={section.partner.pointB}
            railItems={partnerRail}
            accent
            delay={180}
          />
        </div>
      </div>
    </section>
  );
}
