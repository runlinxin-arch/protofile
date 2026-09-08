"use client";

import { useEffect } from "react";
import { useLang } from "@/lib/i18n";
import { photos } from "@/lib/data";

export default function Lightbox({
  index,
  onClose,
  onNav,
}: {
  index: number | null;
  onClose: () => void;
  onNav: (d: number) => void;
}) {
  const { lang } = useLang();
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNav(-1);
      if (e.key === "ArrowRight") onNav(1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, onNav]);

  const p = photos[index ?? 0];
  const N = photos.length;

  return (
    <div
      className={`lightbox ${open ? "open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="作品预览"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="lb-stage">
        <button className="lb-close" onClick={onClose}>
          {lang === "zh" ? "关闭 ESC" : "Close ESC"}
        </button>
        <div className="lb-frame">
          {p.src ? (
            <img src={p.src} alt={p.title[lang]} />
          ) : (
            <span>PHOTO {String(p.id).padStart(2, "0")}</span>
          )}
        </div>
        <div className="lb-meta">
          <span className="t">{p.title[lang]}</span>
          <span className="n">
            {(index ?? 0) + 1} / {N}
          </span>
        </div>
        <div className="lb-meta" style={{ marginTop: 4 }}>
          <span className="n" style={{ letterSpacing: ".14em" }}>
            {p.date}
          </span>
          <span className="n">{p.meta}</span>
        </div>
        <button className="lb-btn lb-prev" aria-label={lang === "zh" ? "上一张" : "Previous"} onClick={() => onNav(-1)}>
          ←
        </button>
        <button className="lb-btn lb-next" aria-label={lang === "zh" ? "下一张" : "Next"} onClick={() => onNav(1)}>
          →
        </button>
      </div>
    </div>
  );
}
