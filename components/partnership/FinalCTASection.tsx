"use client";

import { FadeUp } from "@/components/Reveal";
import LoopingDealRail from "@/components/partnership/LoopingDealRail";
import { marketContactLinks } from "@/lib/market";
import { useLanguage } from "@/providers/LanguageProvider";

export default function FinalCTASection() {
  const { t, isArabic } = useLanguage();
  const section = t.finalCta;

  return (
    <section
      id="cta"
      dir={isArabic ? "rtl" : "ltr"}
      className="section-shell section-shell--tight"
    >
      <div className="container-main">
        <div className="surface-panel relative overflow-hidden rounded-[28px] px-5 py-9 text-center sm:rounded-[34px] sm:px-12 sm:py-14 lg:px-16 lg:py-16">
          <span aria-hidden className="panel-top-line" />

          <FadeUp>
            <div className="eyebrow-divider lp-eyebrow text-[var(--primary)]">
              <span className="eyebrow-divider__line" />
              {section.eyebrow}
              <span className="eyebrow-divider__line" />
            </div>
          </FadeUp>

          <FadeUp delay={80}>
            <h2 className="lp-section-title mt-5 text-[var(--foreground)] sm:mt-6">
              {section.title}
            </h2>
          </FadeUp>

          <FadeUp delay={160}>
            <p className="lp-body mx-auto mt-3 max-w-2xl text-[var(--foreground-muted)] sm:mt-4">
              {section.text}
            </p>
          </FadeUp>

          <FadeUp delay={220}>
            <LoopingDealRail
              items={section.ticker}
              className={isArabic ? "mx-auto mt-6 max-w-4xl partnership-rail--reverse" : "mx-auto mt-6 max-w-4xl"}
            />
          </FadeUp>

          <FadeUp delay={300}>
            <div className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
              <a
                href={marketContactLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary lp-button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.32 13.99 4.36 13.08c-.642-.204-.657-.643.136-.953l11.197-4.317c.537-.194 1.006.131.84.94-.001-.001-.001-.001-.639.471z" />
                </svg>
                {section.telegramCta}
              </a>

              <a
                href={marketContactLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary lp-button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.523 5.845L.057 23.945l6.274-1.643A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.802 9.802 0 0 1-4.994-1.362l-.358-.213-3.724.976.994-3.634-.233-.373A9.79 9.79 0 0 1 2.182 12c0-5.42 4.399-9.818 9.818-9.818S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                </svg>
                {section.whatsappCta}
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
