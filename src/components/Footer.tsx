"use client";

import { useLang } from "@/lib/i18n";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import Motif from "./Motif";

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer id="contact" className="site-footer">
      <div className="wrap">
        <Reveal>
          <div className="contact-row">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            {profile.socials.map((s) => (
              <a key={s.label.en} href={s.href}>
                {s.label[lang]}
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="rule">
            <span className="dia">
              <svg viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                  <path d="M20,10 C16,6 10,4 4,5 C8,8 13,10 20,10 Z" />
                  <path d="M20,10 C24,6 30,4 36,5 C32,8 27,10 20,10 Z" />
                  <path d="M20,10 C19,12 19,14 20,16 C21,14 21,12 20,10 Z" />
                </g>
                <circle cx="20" cy="7" r="2" fill="var(--accent)" />
              </svg>
            </span>
          </div>
        </Reveal>
        <Reveal>
          <div className="footer-bottom">
            <span>{profile.footerNote[lang]}</span>
            <span className="era">
              <span className="era-motif">
                <Motif kind="sun" />
              </span>
              ANNO MMXXV <span className="dot">◆</span> IN THE AI AGE
            </span>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
