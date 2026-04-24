"use client";

import type { ReactNode } from "react";
import { FadeUp } from "@/components/Reveal";
import { marketContactLinks } from "@/lib/market";
import { useLanguage } from "@/providers/LanguageProvider";

function HeroCard({
  title,
  text,
  icon,
  delay,
}: {
  title: string;
  text: string;
  icon: ReactNode;
  delay: number;
}) {
  return (
    <FadeUp delay={delay} className="h-full">
      <div className="surface-glass partnership-benefit-card flex h-full min-w-0 flex-col items-center gap-4 rounded-[26px] p-5 text-center sm:rounded-[28px] sm:p-6">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-[14px] sm:h-11 sm:w-11 sm:rounded-[16px]"
          style={{ background: "var(--primary-soft)" }}
        >
          {icon}
        </div>
        <h3 className="lp-card-title text-[var(--foreground)]">{title}</h3>
        <p className="lp-body-sm text-[var(--foreground-muted)]">{text}</p>
        <div className="partnership-meter partnership-meter--compact mt-auto" aria-hidden>
          <span />
        </div>
      </div>
    </FadeUp>
  );
}

export default function HeroSection() {
  const { t, isArabic } = useLanguage();

  const crescentIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 3a7 7 0 1 0 0 14 5.2 5.2 0 1 1 0-10.4A7 7 0 0 0 10 3z"
        fill="var(--primary)"
      />
    </svg>
  );

  const coinIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7" stroke="var(--primary)" strokeWidth="1.8" />
      <text
        x="10"
        y="14"
        textAnchor="middle"
        fontSize="9"
        fill="var(--primary)"
        fontWeight="700"
      >
        UM
      </text>
    </svg>
  );

  const networkIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="4" cy="10" r="2.5" fill="var(--primary)" />
      <circle cx="16" cy="4" r="2.5" fill="var(--primary)" />
      <circle cx="16" cy="16" r="2.5" fill="var(--primary)" />
      <line x1="6.5" y1="10" x2="13.5" y2="5" stroke="var(--primary)" strokeWidth="1.5" />
      <line x1="6.5" y1="10" x2="13.5" y2="15" stroke="var(--primary)" strokeWidth="1.5" />
    </svg>
  );

  const cards = [
    { key: "earn", icon: coinIcon, ...t.hero.cards.earn },
    { key: "grow", icon: networkIcon, ...t.hero.cards.grow },
    { key: "build", icon: crescentIcon, ...t.hero.cards.build },
  ];

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="section-shell section-shell--hero"
    >
      <div className="container-main">
        <div className="mx-auto max-w-6xl">
          <div className="surface-panel partnership-hero-panel relative overflow-hidden rounded-[28px] px-5 py-8 sm:rounded-[34px] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <span aria-hidden className="panel-top-line" />
            <div aria-hidden className="partnership-hero-aura">
              <span className="partnership-hero-aura__orb partnership-hero-aura__orb--a" />
              <span className="partnership-hero-aura__orb partnership-hero-aura__orb--b" />
              <span className="partnership-hero-aura__ring" />
            </div>

            <div className="relative mx-auto max-w-4xl text-center">
              <FadeUp>
                <div className="eyebrow-divider lp-eyebrow text-[var(--primary)]">
                  <span className="eyebrow-divider__line" />
                  {t.hero.eyebrow}
                  <span className="eyebrow-divider__line" />
                </div>
              </FadeUp>

              <FadeUp delay={80}>
                <h1 className="lp-hero-title mt-5 text-[var(--foreground)] sm:mt-6">
                  {t.hero.headlineLine1}
                  <br className="hidden sm:block" />
                  <span className="glow-primary">{t.hero.headlineLine2}</span>
                </h1>
              </FadeUp>

              <FadeUp delay={160}>
                <p className="lp-body mx-auto mt-5 max-w-3xl text-[var(--foreground-muted)] sm:mt-6">
                  {t.hero.text}
                </p>
              </FadeUp>

              <FadeUp delay={220}>
                <div className="partnership-metrics mx-auto mt-8 max-w-4xl sm:mt-10">
                  {t.hero.metrics.map((metric) => (
                    <div key={metric.label} className="partnership-metric">
                      <span className="partnership-metric__value">{metric.value}</span>
                      <span className="partnership-metric__label">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </FadeUp>

              <FadeUp delay={280}>
                <div className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
                  <a
                    href={marketContactLinks.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary lp-button"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.32 13.99 4.36 13.08c-.642-.204-.657-.643.136-.953l11.197-4.317c.537-.194 1.006.131.84.94-.001-.001-.001-.001-.639.471z" />
                    </svg>
                    {t.finalCta.telegramCta}
                  </a>

                  <a
                    href={marketContactLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-secondary lp-button"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.523 5.845L.057 23.945l6.274-1.643A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.802 9.802 0 0 1-4.994-1.362l-.358-.213-3.724.976.994-3.634-.233-.373A9.79 9.79 0 0 1 2.182 12c0-5.42 4.399-9.818 9.818-9.818S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                    </svg>
                    {t.finalCta.whatsappCta}
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>

          <div className="partnership-auto-grid mt-5 sm:mt-6">
            {cards.map((card, index) => (
              <HeroCard
                key={card.key}
                title={card.title}
                text={card.text}
                icon={card.icon}
                delay={320 + index * 80}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
