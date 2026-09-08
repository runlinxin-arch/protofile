"use client";

import { useLang } from "@/lib/i18n";
import { profile, sections } from "@/lib/data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function About() {
  const { lang } = useLang();

  return (
    <section id="about" className="site-section">
      <div className="wrap">
        <SectionHead char={sections.about.char} title={sections.about.title[lang]} en={sections.about.en[lang]} motif="laurel" />
        <div className="about-grid">
          <Reveal>
            <p className="lead">{profile.bioLead[lang]}</p>
            <p className="body">{profile.bioBody[lang]}</p>
          </Reveal>
          <Reveal>
            <div className="facts">
              {profile.facts.map((f) => (
                <div className="fact" key={f.k.en}>
                  <span className="k">{f.k[lang]}</span>
                  <span className="v">{f.v[lang]}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
