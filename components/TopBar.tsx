"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  observeOnce,
  pauseAnimation,
  prepareReveal,
  revealScale,
  setVisible,
  stopAnimation,
} from "@/lib/motion";
import { marketRoutes } from "@/lib/market";
import { useLanguage } from "@/providers/LanguageProvider";

function NavItem({
  href,
  label,
  className = "",
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link href={href} className={`nav-pill lp-eyebrow ${className}`.trim()}>
      {label}
    </Link>
  );
}

function BrandMark() {
  const [logoLoaded, setLogoLoaded] = useState(true);

  return (
    <span className="brand-lockup__logo">
      {logoLoaded ? (
        <Image
          src="/logo.svg"
          alt="Melbet"
          width={160}
          height={28}
          priority
          unoptimized
          className="brand-lockup__image"
          onError={() => setLogoLoaded(false)}
        />
      ) : (
        <span className="brand-lockup__fallback">Melbet</span>
      )}
    </span>
  );
}

export default function TopBar() {
  const { t, isArabic } = useLanguage();
  const barRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const element = barRef.current;
    if (!element) return;

    prepareReveal(element, "scale");

    let animation: ReturnType<typeof revealScale> = null;
    const cleanup = observeOnce(
      element,
      () => {
        animation = revealScale(element);
      },
      { threshold: 0.1 },
    );

    return () => {
      pauseAnimation(animation);
      stopAnimation(element);
      setVisible(element);
      cleanup();
    };
  }, []);

  useEffect(() => {
    const closeMenu = () => {
      setMenuOpen(false);
    };

    window.addEventListener("hashchange", closeMenu);
    window.addEventListener("resize", closeMenu);

    return () => {
      window.removeEventListener("hashchange", closeMenu);
      window.removeEventListener("resize", closeMenu);
    };
  }, []);

  return (
    <header
      className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="container-main">
        <div ref={barRef} className="header-shell">
          <span aria-hidden className="header-shell__glow" />
          <span aria-hidden className="panel-top-line" />

          <div className="relative flex min-h-[var(--header-height)] items-center gap-2.5 px-3 sm:gap-3 sm:px-5 lg:px-6">
            <div className="hidden min-w-0 flex-1 items-center gap-2 md:flex">
              <NavItem href={marketRoutes.home} label={t.topBar.home} />
            </div>

            <Link
              href={marketRoutes.home}
              aria-label="Melbet home"
              className="brand-lockup shrink-0"
              dir="ltr"
            >
              <BrandMark />
            </Link>

            <div className="hidden min-w-0 flex-1 items-center justify-end gap-3 md:flex">
              <NavItem href={marketRoutes.partnership} label={t.topBar.partnership} />
              <LanguageSwitcher />
            </div>

            <div className="ml-auto flex items-center gap-2 md:hidden">
              <button
                type="button"
                className={`header-mobile-toggle ${
                  menuOpen ? "header-mobile-toggle--open" : ""
                }`.trim()}
                onClick={() => setMenuOpen((current) => !current)}
                aria-expanded={menuOpen}
                aria-controls="topbar-mobile-menu"
                aria-label="Toggle menu"
              >
                <span className="relative block h-4 w-4">
                  <span
                    className={[
                      "absolute left-0 top-[2px] h-px w-full bg-[currentColor] transition duration-300 ease-out",
                      menuOpen ? "translate-y-[6px] rotate-45" : "",
                    ].join(" ")}
                  />
                  <span
                    className={[
                      "absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[currentColor] transition duration-300 ease-out",
                      menuOpen ? "opacity-0" : "",
                    ].join(" ")}
                  />
                  <span
                    className={[
                      "absolute bottom-[2px] left-0 h-px w-full bg-[currentColor] transition duration-300 ease-out",
                      menuOpen ? "-translate-y-[6px] -rotate-45" : "",
                    ].join(" ")}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        {menuOpen ? (
          <div className="relative md:hidden">
            <div id="topbar-mobile-menu" className="header-menu">
              <nav className="flex flex-col gap-2">
                <Link
                  href={marketRoutes.home}
                  onClick={() => setMenuOpen(false)}
                  className="header-menu__link"
                >
                  {t.topBar.home}
                </Link>
                <Link
                  href={marketRoutes.partnership}
                  onClick={() => setMenuOpen(false)}
                  className="header-menu__link"
                >
                  {t.topBar.partnership}
                </Link>
              </nav>

              <div className="mt-4">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
