"use client";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getTranslations, type Language } from "@/lib/translations";

// Mauritania: Arabic (official) + French + English
const LANGS: Language[] = ["en", "ar", "fr"];
const STORAGE_KEY = "lp-lang-mr";

type Ctx = {
  language:       Language;
  isArabic:       boolean;
  setLanguage:    (l: Language) => void;
  toggleLanguage: () => void;
  t:              ReturnType<typeof getTranslations>;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved && (LANGS as string[]).includes(saved)) {
      const timeoutId = window.setTimeout(() => {
        setLanguageState(saved);
      }, 0);

      return () => window.clearTimeout(timeoutId);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const value = useMemo<Ctx>(() => ({
    language,
    isArabic: language === "ar",
    setLanguage: setLanguageState,
    toggleLanguage: () =>
      setLanguageState((curr) => {
        const idx = LANGS.indexOf(curr);
        return LANGS[(idx + 1) % LANGS.length];
      }),
    t: getTranslations(language),
  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be inside LanguageProvider");
  return ctx;
}
