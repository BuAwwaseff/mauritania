"use client";

import { FadeUp } from "@/components/Reveal";
import { marketContactLinks, marketRoutes } from "@/lib/market";
import { useLanguage } from "@/providers/LanguageProvider";

function HeroVisual() {
  const { t } = useLanguage();
  const visual = t.home.hero.visual;
  const channels = [t.home.sports.eyebrow, t.home.casino.eyebrow, t.home.promos.eyebrow];

  return (
    <FadeUp delay={180} className="h-full">
      <div className="home-hero-board">
        <div className="home-hero-board__top">
          <span className="home-hero-live">
            <span className="promo-live__dot" aria-hidden />
            {visual.status}
          </span>
          <span className="home-hero-board__brand">MELBET</span>
        </div>

        <h2 className="home-hero-board__headline">{visual.title}</h2>

        <div className="home-hero-board__arena">
          <span aria-hidden className="home-hero-board__halo home-hero-board__halo--a" />
          <span aria-hidden className="home-hero-board__halo home-hero-board__halo--b" />
          <span aria-hidden className="home-hero-board__ring" />
          <div className="home-hero-board__lane home-hero-board__lane--1" aria-hidden>
            <span />
            <span />
            <span />
          </div>
          <div className="home-hero-board__lane home-hero-board__lane--2" aria-hidden>
            <span />
            <span />
            <span />
          </div>
          <div className="home-hero-board__lane home-hero-board__lane--3" aria-hidden>
            <span />
            <span />
            <span />
          </div>

          <div className="home-hero-board__center">
            <div className="home-hero-board__icon">
              <svg width="42" height="42" viewBox="0 0 40 40" fill="none" aria-hidden>
                <path
                  d="M20 7a13 13 0 1 0 0 26 9.5 9.5 0 1 1 0-19 13 13 0 0 0 0-7z"
                  fill="var(--primary)"
                />
                <path
                  d="m24 5.5 1.2 3.7h3.9L26 11.5l1.2 3.7-3.2-2.3-3.1 2.3 1.2-3.7L19 9.2h3.8L24 5.5z"
                  fill="var(--primary)"
                />
              </svg>
            </div>
            <div className="home-hero-board__center-copy">
              <span>{visual.status}</span>
              <strong>{visual.stats[0]?.label}</strong>
            </div>
          </div>

          {channels.map((channel, index) => (
            <span
              key={channel}
              className={`home-hero-board__chip home-hero-board__chip--${index + 1}`}
            >
              {channel}
            </span>
          ))}
        </div>

        <div className="home-hero-board__stats">
          {visual.stats.map((stat, index) => (
            <div key={stat.label} className="home-hero-board__stat">
              <span dir="ltr" className="home-hero-board__value">
                {stat.value}
              </span>
              <span className="home-hero-board__label">{stat.label}</span>
              <span
                aria-hidden
                className="home-hero-board__meter"
                style={{ width: `${66 - index * 14}%` }}
              />
            </div>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}

export default function HomeHeroSection() {
  const { t, isArabic } = useLanguage();
  const section = t.home.hero;
  const heroStats = section.visual.stats;
  const featurePills = [t.home.sports.eyebrow, t.home.casino.eyebrow, t.home.promos.eyebrow];

  return (
    <section dir={isArabic ? "rtl" : "ltr"} className="section-shell section-shell--hero">
      <div className="container-main">
        <div className="surface-panel home-hero-stage relative overflow-hidden rounded-[30px] px-5 py-8 sm:rounded-[36px] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <span aria-hidden className="panel-top-line" />
          <span aria-hidden className="home-hero-stage__wash home-hero-stage__wash--a" />
          <span aria-hidden className="home-hero-stage__wash home-hero-stage__wash--b" />
          <span aria-hidden className="home-hero-stage__gridline" />

          <div className="home-hero-stage__grid">
            <div className="home-hero-copy">
              <FadeUp>
                <div className="eyebrow-divider lp-eyebrow justify-start text-[var(--primary)]">
                  <span className="eyebrow-divider__line" />
                  {section.eyebrow}
                </div>
              </FadeUp>

              <FadeUp delay={80}>
                <h1 className="lp-hero-title mt-5 text-[var(--foreground)] sm:mt-6">
                  {section.title.before}
                  <br className="hidden sm:block" />
                  <span className="glow-primary">{section.title.glow}</span>
                </h1>
              </FadeUp>

              <FadeUp delay={140}>
                <p className="lp-body mt-5 max-w-[40rem] text-[var(--foreground-muted)] sm:mt-6">
                  {section.text}
                </p>
              </FadeUp>

              <FadeUp delay={190}>
                <div className="home-hero-kpis mt-6 sm:mt-7">
                  {heroStats.map((stat, index) => (
                    <div key={stat.label} className="home-hero-kpi">
                      <span dir="ltr" className="home-hero-kpi__value">
                        {stat.value}
                      </span>
                      <span className="home-hero-kpi__label">{stat.label}</span>
                      <span
                        aria-hidden
                        className="home-hero-kpi__bar"
                        style={{ width: `${70 - index * 12}%` }}
                      />
                    </div>
                  ))}
                </div>
              </FadeUp>

              <FadeUp delay={240}>
                <div className="home-hero-actionshell mt-8 sm:mt-9">
                  <div className="grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
                    <a
                      href={marketContactLinks.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-primary lp-button"
                    >
                      {section.primaryCta}
                    </a>
                    <a href={marketRoutes.homePromos} className="button-secondary lp-button">
                      {section.secondaryCta}
                    </a>
                  </div>

                  <div className="home-hero-actionshell__meta">
                    <span className="home-hero-live">
                      <span className="promo-live__dot" aria-hidden />
                      {section.visual.status}
                    </span>
                    <div className="home-hero-pills">
                      {featurePills.map((pill, index) => (
                        <span
                          key={pill}
                          className="home-hero-pill"
                          style={{ animationDelay: `${index * -1.1}s` }}
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>

            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
