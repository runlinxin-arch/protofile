"use client";

import { useLang } from "@/lib/i18n";
import { projects, sections } from "@/lib/data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Works() {
  const { lang } = useLang();

  return (
    <section id="works" className="site-section">
      <div className="wrap">
        <SectionHead char={sections.works.char} title={sections.works.title[lang]} en={sections.works.en[lang]} motif="corinthian" />
        <div className="works-list">
          {projects.map((pr, i) => (
            <Reveal key={i}>
              <a className="work" href={pr.link}>
                <span className="y">{pr.year}</span>
                <div>
                  <div className="t">{pr.title[lang]}</div>
                  <p className="d">{pr.desc[lang]}</p>
                </div>
                <div className="tags">
                  {pr.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
