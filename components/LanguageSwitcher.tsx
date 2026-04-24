"use client";

import type { CSSProperties } from "react";
import { useLanguage } from "@/providers/LanguageProvider";

const LANGS = [
  { key: "en", label: "EN" },
  { key: "ar", label: "AR" },
  { key: "fr", label: "FR" },
] as const;

type LangKey = (typeof LANGS)[number]["key"];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const count = LANGS.length;
  const index = Math.max(
    0,
    LANGS.findIndex((item) => item.key === language),
  );

  return (
    <div
      dir="ltr"
      className="language-switch"
      style={
        {
          "--language-count": count,
          "--language-index": index,
          gridTemplateColumns: `repeat(${count}, 1fr)`,
        } as CSSProperties
      }
    >
      <span aria-hidden className="language-switch__thumb" />

      {LANGS.map((item) => (
        <button
          key={item.key}
          type="button"
          aria-pressed={language === item.key}
          data-active={language === item.key ? "true" : "false"}
          onClick={() => setLanguage(item.key as LangKey)}
          className="language-switch__button lp-eyebrow"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
