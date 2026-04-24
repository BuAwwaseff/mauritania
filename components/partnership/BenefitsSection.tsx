"use client";

import type { ReactNode } from "react";
import { FadeUp } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/providers/LanguageProvider";

const benefitIcons = {
  agent: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="7" r="4" stroke="var(--primary)" strokeWidth="1.7" />
      <path
        d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"
        stroke="var(--primary)"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M16 3.13a4 4 0 0 1 0 7.75"
        stroke="var(--primary)"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M21 21v-2a4 4 0 0 0-3-3.87"
        stroke="var(--primary)"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  ),
  partner: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect
        x="2"
        y="7"
        width="20"
        height="14"
        rx="3"
        stroke="var(--primary)"
        strokeWidth="1.7"
      />
      <path
        d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
        stroke="var(--primary)"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <line
        x1="12"
        y1="12"
        x2="12"
        y2="16"
        stroke="var(--primary)"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="14"
        x2="14"
        y2="14"
        stroke="var(--primary)"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  ),
  common: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L2 7l10 5 10-5-10-5z"
        stroke="var(--primary)"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M2 17l10 5 10-5"
        stroke="var(--primary)"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12l10 5 10-5"
        stroke="var(--primary)"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

type BenefitVariant = "agent" | "partner" | "common";

function BenefitVisual({ variant }: { variant: BenefitVariant }) {
  if (variant === "agent") {
    return (
      <div className="partnership-card-visual partnership-card-visual--agent" aria-hidden>
        <div className="partnership-cashier-core">
          <span />
          <span />
        </div>
        <div className="partnership-cashier-lane partnership-cashier-lane--top">
          <span />
          <span />
          <span />
        </div>
        <div className="partnership-cashier-lane partnership-cashier-lane--bottom">
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }

  if (variant === "partner") {
    return (
      <div className="partnership-card-visual partnership-card-visual--partner" aria-hidden>
        <div className="partnership-traffic-core" />
        <span className="partnership-traffic-ring" />
        <span className="partnership-traffic-chip partnership-traffic-chip--a">CPA</span>
        <span className="partnership-traffic-chip partnership-traffic-chip--b">25-40%</span>
        <span className="partnership-traffic-chip partnership-traffic-chip--c">Hybrid</span>
      </div>
    );
  }

  return (
    <div className="partnership-card-visual partnership-card-visual--common" aria-hidden>
      <span className="partnership-network-line partnership-network-line--a" />
      <span className="partnership-network-line partnership-network-line--b" />
      <span className="partnership-network-line partnership-network-line--c" />
      <span className="partnership-network-line partnership-network-line--d" />
      <span className="partnership-network-node partnership-network-node--a" />
      <span className="partnership-network-node partnership-network-node--b" />
      <span className="partnership-network-node partnership-network-node--c" />
      <span className="partnership-network-node partnership-network-node--d" />
      <span className="partnership-network-node partnership-network-node--e" />
    </div>
  );
}

function BenefitCard({
  icon,
  variant,
  title,
  text,
  pills,
  delay,
  accent = false,
}: {
  icon: ReactNode;
  variant: BenefitVariant;
  title: string;
  text: string;
  pills: readonly string[];
  delay: number;
  accent?: boolean;
}) {
  return (
    <FadeUp delay={delay} className="h-full">
      <div
        className={[
          "partnership-benefit-card flex h-full min-w-0 flex-col gap-5 rounded-[26px] p-5 sm:rounded-[28px] sm:p-7",
          accent ? "surface-accent" : "surface-glass",
        ].join(" ")}
      >
        <div
          className="flex h-10 w-10 items-center justify-center rounded-[14px] sm:h-12 sm:w-12 sm:rounded-[16px]"
          style={{ background: "var(--primary-soft)" }}
        >
          {icon}
        </div>
        <BenefitVisual variant={variant} />
        <h3 className="lp-card-title text-[var(--foreground)]">{title}</h3>
        <p className="lp-body-sm text-[var(--foreground-muted)]">{text}</p>
        <div className="partnership-chip-list mt-auto">
          {pills.map((pill) => (
            <span key={pill} className="partnership-chip">
              {pill}
            </span>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}

export default function BenefitsSection() {
  const { t, isArabic, language } = useLanguage();
  const section = t.benefits;
  const eyebrow =
    language === "ar" ? "لماذا يناسبك" : language === "fr" ? "Pourquoi vous" : "Why it fits you";
  const titleNode =
    language === "ar" ? (
      <>
        <span className="glow-primary">فرصتك</span> تتحرك بالفعل
      </>
    ) : language === "fr" ? (
      <>
        Votre <span className="glow-primary">opportunite</span> est deja en mouvement
      </>
    ) : (
      <>
        Your <span className="glow-primary">opportunity</span> is already moving
      </>
    );

  return (
    <section
      id="benefits"
      dir={isArabic ? "rtl" : "ltr"}
      className="section-shell"
    >
      <div className="container-main">
        <SectionHeading eyebrow={eyebrow} title={titleNode} text={section.text} />

        <div className="partnership-auto-grid mt-10 md:mt-12">
          <BenefitCard
            icon={benefitIcons.agent}
            variant="agent"
            title={section.agent.title}
            text={section.agent.text}
            pills={section.agent.pills}
            delay={80}
          />
          <BenefitCard
            icon={benefitIcons.partner}
            variant="partner"
            title={section.partner.title}
            text={section.partner.text}
            pills={section.partner.pills}
            accent
            delay={160}
          />
          <BenefitCard
            icon={benefitIcons.common}
            variant="common"
            title={section.common.title}
            text={section.common.text}
            pills={section.common.pills}
            delay={240}
          />
        </div>
      </div>
    </section>
  );
}
