"use client";

import { FadeUp, StaggerReveal } from "@/components/Reveal";
import { useLanguage } from "@/providers/LanguageProvider";

function PerkIcon({ index }: { index: number }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[12px] border border-[var(--border-strong)] bg-[var(--primary-soft)] text-[var(--primary-strong)] sm:h-9 sm:w-9">
      {index === 0 ? (
        <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden>
          <path
            d="M4 10h16v10H4V10Zm0-3h4.1C6.9 5.6 6.7 4 7.8 3.2c1.4-1.1 3.4-.1 4.2 2.3.8-2.4 2.8-3.4 4.2-2.3 1.1.8.9 2.4-.3 3.8H20v3H4V7Zm6 0C9.2 5.7 8.5 5.1 8 5.5c-.4.3-.1.9 1.2 1.5H10Zm4.8 0c1.3-.6 1.6-1.2 1.2-1.5-.5-.4-1.2.2-2 1.5h.8Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden>
          <path
            d="M12 3 14.5 8l5.5.8-4 3.9.9 5.5L12 15.6 7.1 18.2l.9-5.5-4-3.9L9.5 8 12 3Z"
            fill="currentColor"
          />
        </svg>
      )}
    </span>
  );
}

function OfferCard({
  offer,
  index,
}: {
  offer: {
    label: string;
    title: string;
    text: string;
    items: readonly string[];
  };
  index: number;
}) {
  const isFeatured = index === 0;

  return (
    <article
      className={[
        "group relative min-w-0 min-h-[20rem] overflow-hidden rounded-[28px] border p-5 transition duration-300 sm:p-6 md:min-h-[22.5rem] md:rounded-[30px] md:p-7",
        isFeatured
          ? "border-[var(--border-strong)] bg-[linear-gradient(145deg,rgba(27,39,32,0.98)_0%,rgba(14,22,18,0.94)_62%,rgba(40,31,11,0.72)_100%)] shadow-[var(--shadow-hero)]"
          : "border-[var(--border)] bg-[linear-gradient(145deg,rgba(17,27,23,0.92)_0%,rgba(10,17,14,0.88)_100%)] shadow-[var(--shadow-card)]",
      ].join(" ")}
    >
      <span aria-hidden className="panel-top-line" />
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,transparent_0%,rgba(212,168,79,0.08)_100%)] opacity-70"
      />
      <span
        aria-hidden
        className="absolute right-4 top-4 text-[4.25rem] font-black leading-none text-[var(--primary)]/10 transition duration-300 group-hover:text-[var(--primary)]/14 sm:right-5 sm:top-5 sm:text-[5.5rem]"
      >
        0{index + 1}
      </span>

      <div className="relative flex h-full min-w-0 flex-col justify-between gap-6 sm:gap-8">
        <div className="min-w-0">
          <div className="flex min-w-0 flex-wrap items-center gap-3">
            <span className="lp-eyebrow rounded-full border border-[var(--border-strong)] bg-black/16 px-3 py-2 text-[var(--primary-strong)]">
              {offer.label}
            </span>
            {isFeatured ? (
              <span className="h-px min-w-12 flex-1 bg-[linear-gradient(90deg,rgba(212,168,79,0.42),transparent)]" />
            ) : null}
          </div>
          <h3 className="lp-card-title mt-5 max-w-full text-[var(--foreground)] sm:mt-6 sm:max-w-sm">
            {offer.title}
          </h3>
          <p className="lp-body-sm mt-3 max-w-full text-[var(--foreground-muted)] sm:max-w-md">
            {offer.text}
          </p>
        </div>

        <div className="grid gap-3">
          {offer.items.map((item, itemIndex) => (
            <div
              key={item}
              className="flex min-w-0 items-start gap-3 rounded-[20px] border border-[var(--border)] bg-black/18 p-3 transition duration-300 group-hover:border-[var(--border-strong)]"
            >
              <PerkIcon index={itemIndex} />
              <span className="min-w-0 flex-1 break-words text-sm font-extrabold leading-snug text-[var(--foreground)]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function LiveRewardStream({
  label,
  items,
}: {
  label: string;
  items: readonly string[];
}) {
  const streamItems = [...items, ...items];

  return (
    <div className="promo-live min-w-0 w-full">
      <div className="flex min-w-0 flex-wrap items-center justify-between gap-3">
        <p className="lp-eyebrow flex min-w-0 items-center gap-2 text-[var(--primary-strong)]">
          <span className="promo-live__dot" aria-hidden />
          {label}
        </p>
        <span className="rounded-full border border-[var(--border)] bg-black/18 px-3 py-1 text-xs font-black text-[var(--foreground-soft)]">
          24/7
        </span>
      </div>

      <div className="promo-live__track mt-4 w-full">
        <div className="promo-live__rail">
          {streamItems.map((item, index) => (
            <span key={`${item}-${index}`} className="promo-live__chip">
              <span className="promo-live__spark" aria-hidden />
              <span className="truncate">{item}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2" aria-hidden>
        <span className="promo-live__bar">
          <span />
        </span>
        <span className="promo-live__bar promo-live__bar--slow">
          <span />
        </span>
        <span className="promo-live__bar promo-live__bar--fast">
          <span />
        </span>
      </div>
    </div>
  );
}

export default function PromosSection() {
  const { t, isArabic } = useLanguage();
  const section = t.home.promos;
  const liveItems = section.offers.flatMap((offer) => offer.items);

  return (
    <section
      id="promos"
      dir={isArabic ? "rtl" : "ltr"}
      className="section-shell section-shell--tight overflow-hidden"
    >
      <div className="container-main">
        <FadeUp>
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-[-8%] top-1/2 h-44 -translate-y-1/2 bg-[linear-gradient(90deg,transparent_0%,rgba(212,168,79,0.08)_24%,rgba(15,107,67,0.1)_50%,rgba(212,168,79,0.08)_76%,transparent_100%)] sm:h-56"
            />

            <div className="relative z-10 grid gap-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-end lg:gap-8">
              <div className="min-w-0">
                <p className="lp-eyebrow text-[var(--primary)]">{section.eyebrow}</p>
                <h2 className="lp-section-title mt-5 max-w-xl text-[var(--foreground)]">
                  {section.title}
                </h2>
                <p className="lp-body mt-4 max-w-xl text-[var(--foreground-muted)]">
                  {section.text}
                </p>

                <div className="mt-5 max-w-xl min-w-0 sm:mt-6">
                  <LiveRewardStream label={section.liveLabel} items={liveItems} />
                </div>
              </div>

              <StaggerReveal className="grid min-w-0 gap-4 md:grid-cols-2">
                {section.offers.map((offer, index) => (
                  <OfferCard key={offer.title} offer={offer} index={index} />
                ))}
              </StaggerReveal>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
