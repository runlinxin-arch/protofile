"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { profile, sections } from "@/lib/data";

const NAV = [
  { href: "#about", key: "about" },
  { href: "#photo", key: "photo" },
  { href: "#works", key: "works" },
  { href: "#contact", key: "contact" },
] as const;

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <circle cx="12" cy="12" r="4.4" />
      <path d="M12 2.5v2.6M12 18.9v2.6M2.5 12h2.6M18.9 12h2.6M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.2 14.6A8.4 8.4 0 0 1 9.4 3.8a8.4 8.4 0 1 0 10.8 10.8Z" />
    </svg>
  );
}

export default function Header() {
  const { lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.querySelector(n.href);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top">
          <span className="mark">✦</span>
          <span>{profile.name[lang]}</span>
        </a>
        <nav className="nav">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className={active === n.href ? "active" : ""}>
              {sections.nav[n.key][lang]}
            </a>
          ))}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              lang === "zh"
                ? theme === "dark"
                  ? "切换为浅色模式"
                  : "切换为深色模式"
                : theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
            }
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            aria-label="切换语言 / Toggle language"
          >
            <span className={lang === "zh" ? "on" : ""}>中</span>
            <span className="sep">/</span>
            <span className={lang === "en" ? "on" : ""}>EN</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
