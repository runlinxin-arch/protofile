"use client";

import Reveal from "./Reveal";
import Motif from "./Motif";

export default function SectionHead({
  char,
  title,
  en,
  motif,
}: {
  char: string;
  title: string;
  en: string;
  motif?: "laurel" | "compass" | "corinthian" | "sun";
}) {
  return (
    <Reveal className="sec-head">
      <span className="char">{char}</span>
      <div className="titles">
        <h2>
          <span className="in">{title}</span>
        </h2>
        <span className="en">{en}</span>
      </div>
      {motif && (
        <span className="sec-motif">
          <Motif kind={motif} />
        </span>
      )}
    </Reveal>
  );
}
