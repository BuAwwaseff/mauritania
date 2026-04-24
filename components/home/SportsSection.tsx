"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { FadeUp, StaggerReveal } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/providers/LanguageProvider";

const sportImages = [
  "/sports/football.png",
  "/sports/basketball.png",
  "/sports/baseball.png",
  "/sports/esports.png",
] as const;

const sportIcons: ReactNode[] = [
  <path
    key="football"
    d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 3 2.5 1.8-.9 2.9h-3.2l-.9-2.9L12 6Zm-4.9 5.2 2.5 1.8-.9 2.9H5.8a6.8 6.8 0 0 1 1.3-4.7Zm11.1 4.7h-2.9l-.9-2.9 2.5-1.8a6.8 6.8 0 0 1 1.3 4.7ZM9.4 18l1.1-3h3l1.1 3a6.8 6.8 0 0 1-5.2 0Z"
    fill="currentColor"
  />,
  <path
    key="basketball"
    d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm6.7 7.7a12.7 12.7 0 0 0-5.4-1.6 12.5 12.5 0 0 0 1.5-3.2 7 7 0 0 1 3.9 4.8ZM9.2 5.9a10.6 10.6 0 0 1-3.1 4.3 7 7 0 0 1 3.1-4.3Zm-3.9 8.4a12.5 12.5 0 0 0 5.4 1.6 12.5 12.5 0 0 0-1.5 3.2 7 7 0 0 1-3.9-4.8Zm9.5 3.8a10.6 10.6 0 0 1 3.1-4.3 7 7 0 0 1-3.1 4.3ZM12 14a10.4 10.4 0 0 1-5.5-1.8A10.4 10.4 0 0 0 12 10a10.4 10.4 0 0 1 5.5 1.8A10.4 10.4 0 0 0 12 14Z"
    fill="currentColor"
  />,
  <path
    key="baseball"
    d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-5.8 7.3a7 7 0 0 1 4.1-4.1 12 12 0 0 0-1.8 5.6 12 12 0 0 0-2.3-1.5Zm3.9 7.5a7 7 0 0 1-4-4 12 12 0 0 0 2.4-1.5 12 12 0 0 0 1.6 5.5Zm3.6 0a12 12 0 0 0 1.8-5.6 12 12 0 0 0 2.3 1.5 7 7 0 0 1-4.1 4.1Zm1.8-8a12 12 0 0 0-1.6-3.6 7 7 0 0 1 4 4 12 12 0 0 0-2.4 1.6Zm-3.5 4.9a10.2 10.2 0 0 1-1.5-5.4 10.2 10.2 0 0 1 3 0 10.2 10.2 0 0 1-1.5 5.4Z"
    fill="currentColor"
  />,
  <path
    key="esports"
    d="M7.5 8h9A4.5 4.5 0 0 1 21 12.5v2A3.5 3.5 0 0 1 17.5 18c-1.4 0-2.2-.7-3-1.7H9.5c-.8 1-1.6 1.7-3 1.7A3.5 3.5 0 0 1 3 14.5v-2A4.5 4.5 0 0 1 7.5 8Zm.3 3v1.4H6.4v1.4H5V12.4H3.6V11H5V9.6h1.4V11h1.4Zm7.7 2.6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3-2.6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    fill="currentColor"
  />,
];

function SportsCard({
  title,
  text,
  icon,
  imageSrc,
  cta,
}: {
  title: string;
  text: string;
  icon: ReactNode;
  imageSrc: string;
  cta: string;
}) {
  return (
    <article className="group relative flex min-h-[clamp(18rem,78vw,22.5rem)] overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[0_28px_70px_rgba(0,0,0,0.28)] sm:p-6">
      <Image
        src={imageSrc}
        alt=""
        fill
        quality={95}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
        className="scale-[1.08] object-cover object-[center_20%] transition duration-500 group-hover:scale-[1.11]"
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,11,8,0.06)_0%,rgba(5,8,6,0.24)_46%,rgba(5,8,6,0.88)_100%),radial-gradient(circle_at_50%_0%,rgba(212,168,79,0.08),transparent_42%)]"
      />

      <div className="relative z-10 flex h-full w-full flex-col justify-between gap-6 sm:gap-8">
        <div className="flex min-w-0 items-center gap-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[var(--primary-soft)] text-[var(--primary)] transition duration-500 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[var(--primary-soft-strong)] sm:h-13 sm:w-13 sm:rounded-[16px]">
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
              {icon}
            </svg>
          </span>
          <h3 className="lp-card-title min-w-0 text-[var(--foreground)]">{title}</h3>
        </div>

        <div>
          <p className="lp-body-sm mt-3 text-[var(--foreground-muted)]">{text}</p>
          <a href="" className="button-secondary lp-button mt-5 sm:mt-6">
            {cta}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function SportsSection() {
  const { t, isArabic } = useLanguage();
  const section = t.home.sports;

  return (
    <section
      id="sports"
      dir={isArabic ? "rtl" : "ltr"}
      className="section-shell section-shell--sports"
    >
      <div className="container-main">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} text={section.text} />

        <FadeUp delay={120}>
          <StaggerReveal className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {section.cards.map((card, index) => (
              <SportsCard
                key={card.title}
                title={card.title}
                text={card.text}
                cta={card.cta}
                imageSrc={sportImages[index] ?? sportImages[0]}
                icon={sportIcons[index] ?? sportIcons[0]}
              />
            ))}
          </StaggerReveal>
        </FadeUp>
      </div>
    </section>
  );
}
