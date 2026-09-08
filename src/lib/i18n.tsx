"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "zh" | "en";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "zh",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "en" || saved === "zh") setLang(saved);
    } catch {
      /* ignore */
    }
  }, []);

  const apply = (l: Lang) => {
    setLang(l);
    document.documentElement.lang = l === "zh" ? "zh-CN" : "en";
    try {
      localStorage.setItem("lang", l);
    } catch {
      /* ignore */
    }
  };

  return <LangContext.Provider value={{ lang, setLang: apply }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
