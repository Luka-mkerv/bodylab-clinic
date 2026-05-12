"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { Language } from "@/content/siteContent";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (obj: { en: string; ka: string }) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (obj) => obj.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("ka");

  const t = (obj: { en: string; ka: string }) => obj[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
