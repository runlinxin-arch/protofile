"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/i18n";
import { photos, sections } from "@/lib/data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";

interface Slot {
  x: number;
  scale: number;
  rz: number;
  op: number;
  z: number;
}

function layoutFor(cur: number, N: number): Slot[] {
  return photos.map((_, i) => {
    let d = (i - cur) % N;
    if (d < 0) d += N;
    if (d > N / 2) d -= N;
    const ad = Math.abs(d);
    if (ad === 0) return { x: 0, scale: 1, rz: 0, op: 1, z: 40 };
    if (ad === 1)
      return { x: (d < 0 ? -1 : 1) * 34, scale: 0.6, rz: (d < 0 ? 14 : -14), op: 0.45, z: 20 };
    if (ad === 2)
      return { x: (d < 0 ? -1 : 1) * 56, scale: 0.42, rz: (d < 0 ? 20 : -20), op: 0.12, z: 8 };
    return { x: 0, scale: 1, rz: 0, op: 0, z: 1 };
  });
}

export default function PhotoCarousel() {
  const { lang } = useLang();
  const N = photos.length;
  const [current, setCurrent] = useState(0);
  const [slots, setSlots] = useState<Slot[]>(() => layoutFor(0, N));
  const [open, setOpen] = useState<number | null>(null);

  const accRef = useRef(0);
  const lockedRef = useRef(false);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    setSlots(layoutFor(current, N));
  }, [current, N]);

  const step = useCallback(
    (d: number) => {
      setCurrent((c) => (c + d + N) % N);
    },
    [N]
  );

  /* 滚轮：仅当鼠标位于相册交互范围内才接管
     范围 = 水平：左按钮左缘 → 右按钮右缘；垂直：最大（中央）图片上缘 → 下缘 */
  useEffect(() => {
    const stage = document.getElementById("carStage");
    if (!stage) return;
    const onWheel = (e: WheelEvent) => {
      const prev = document.getElementById("carPrev");
      const next = document.getElementById("carNext");
      const curEl = stage.querySelector<HTMLElement>(".car-item.is-current .car-frame");
      if (!prev || !next || !curEl) return;
      const lb = prev.getBoundingClientRect();
      const rb = next.getBoundingClientRect();
      const img = curEl.getBoundingClientRect();
      const inside = e.clientX >= lb.left && e.clientX <= rb.right && e.clientY >= img.top && e.clientY <= img.bottom;
      if (!inside) return; // 范围外 → 页面正常滚动
      e.preventDefault();
      if (lockedRef.current) return;
      accRef.current += e.deltaY;
      if (Math.abs(accRef.current) >= 60) {
        step(accRef.current < 0 ? -1 : 1);
        accRef.current = 0;
        lockedRef.current = true;
        setTimeout(() => {
          lockedRef.current = false;
        }, 680);
      }
    };
    stage.addEventListener("wheel", onWheel, { passive: false });
    return () => stage.removeEventListener("wheel", onWheel);
  }, [step]);

  /* 键盘 ← → 切换（灯箱打开时由灯箱接管） */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (open !== null) return;
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step, open]);

  return (
    <section id="photo" className="site-section">
      <div className="wrap">
        <SectionHead char={sections.photo.char} title={sections.photo.title[lang]} en={sections.photo.en[lang]} motif="compass" />

        <Reveal>
          <div
            className="car-stage"
            id="carStage"
            onTouchStart={(e) => {
              touchX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 44) step(dx < 0 ? 1 : -1);
              touchX.current = null;
            }}
          >
            {photos.map((p, i) => {
              const s = slots[i];
              const style: React.CSSProperties = {
                zIndex: s.z,
                opacity: s.op,
                transform: `translate(-50%,-50%) translateX(${s.x}%) rotateY(${s.rz}deg) scale(${s.scale})`,
              };
              if (s.op === 0) style.pointerEvents = "none";
              return (
                <div
                  key={p.id}
                  className={`car-item photo-item ${i === current ? "is-current" : ""}`}
                  style={style}
                  onClick={() => {
                    if (i === current) setOpen(i);
                    else setCurrent(i);
                  }}
                >
                  <div className="car-frame">
                    {p.src ? (
                      <img src={p.src} alt={p.title[lang]} loading="lazy" />
                    ) : (
                      <div className="photo-ph">
                        <span className="ph-num">{p.roman}</span>
                        <span className="ph-label">PHOTO {String(p.id).padStart(2, "0")}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            <button
              className="car-btn car-prev"
              id="carPrev"
              aria-label={lang === "zh" ? "上一张" : "Previous"}
              onClick={() => step(-1)}
            >
              <span className="arr">←</span>
            </button>
            <button
              className="car-btn car-next"
              id="carNext"
              aria-label={lang === "zh" ? "下一张" : "Next"}
              onClick={() => step(1)}
            >
              <span className="arr">→</span>
            </button>
          </div>
          <div className="car-ribbon">
            <span className="t">{photos[current].title[lang]}</span>
            <span className="d">
              {photos[current].date} · {photos[current].meta} · {String(current + 1).padStart(2, "0")} / {N}
            </span>
          </div>
        </Reveal>
      </div>

      <Lightbox
        index={open}
        onClose={() => setOpen(null)}
        onNav={(d) => setOpen((o) => (o === null ? o : (o + d + N) % N))}
      />
    </section>
  );
}
