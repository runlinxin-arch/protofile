"use client";

import { useRef, type MouseEvent } from "react";
import { useLang } from "@/lib/i18n";
import { profile } from "@/lib/data";
import DavidHead from "./DavidHead";

export default function Hero() {
  const { lang } = useLang();
  const ctaRef = useRef<HTMLAnchorElement>(null);

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ctaRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
  };
  const onLeave = () => {
    if (ctaRef.current) ctaRef.current.style.transform = "";
  };

  const roleParts = profile.role[lang].split("·");

  return (
    <section className="hero" id="top">
      <span className="vmark">序</span>
      <div className="wrap">
        <p className="hero-eyebrow rise">{profile.eyebrow[lang]}</p>
        <h1 className="hero-name">
          <span className="name-main rise">{profile.name[lang]}</span>
        </h1>
        <p className="hero-line rise">
          {roleParts.map((part, i) =>
            i === 0 ? (
              part
            ) : (
              <span key={i}>
                <em>·</em>
                {part}
              </span>
            )
          )}
        </p>
        <a
          ref={ctaRef}
          className="hero-cta rise"
          href="#photo"
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          <span>{profile.cta[lang]}</span>
          <span className="arrow">↓</span>
        </a>
      </div>
      <DavidHead />
    </section>
  );
}
