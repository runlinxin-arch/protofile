"use client";

import { useEffect, useRef } from "react";

/**
 * 扁平矢量风格的大卫头像 —— Hero 签名形象
 * 实心色块、无描边，大理石色板随主题自适应（globals.css 中 .david 的 --d-* 变量）。
 * 两只贴纸式眼睛（纸白椭圆 + 朱红瞳孔）覆盖在眼位，跟随光标并随机眨眼。
 */
export default function DavidHead() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pupilLRef = useRef<SVGCircleElement>(null);
  const pupilRRef = useRef<SVGCircleElement>(null);
  const eyeLRef = useRef<SVGGElement>(null);
  const eyeRRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pL = pupilLRef.current;
    const pR = pupilRRef.current;
    const eL = eyeLRef.current;
    const eR = eyeRRef.current;

    if (!reduce) {
      let lastX = 0;
      let lastY = 0;
      let curX = 0;
      let curY = 0;
      let raf = 0;

      const onMove = (e: MouseEvent) => {
        lastX = e.clientX / window.innerWidth - 0.5;
        lastY = e.clientY / window.innerHeight - 0.5;
      };
      window.addEventListener("mousemove", onMove);

      const loop = () => {
        curX += (lastX - curX) * 0.1;
        curY += (lastY - curY) * 0.1;
        const px = curX * 4.5;
        const py = curY * 2.2;
        if (pL) pL.setAttribute("transform", `translate(${px},${py})`);
        if (pR) pR.setAttribute("transform", `translate(${px},${py})`);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);

      const blink = () => {
        eL?.classList.add("blink");
        eR?.classList.add("blink");
        setTimeout(() => {
          eL?.classList.remove("blink");
          eR?.classList.remove("blink");
        }, 140);
      };
      blink();
      const blinkTimer = setInterval(() => setTimeout(blink, Math.random() * 2400), 3200);

      return () => {
        window.removeEventListener("mousemove", onMove);
        cancelAnimationFrame(raf);
        clearInterval(blinkTimer);
      };
    }
  }, []);

  return (
    <div className="david" ref={wrapRef} aria-hidden="true">
      <div className="david-inner">
        <svg viewBox="0 0 240 240">
          {/* 拱形壁龛背景 */}
          <path
            d="M54,232 L54,96 Q54,40 120,40 Q186,40 186,96 L186,232 Z"
            fill="var(--d-bg)"
          />

          {/* 躯干（胸像底座） */}
          <path
            d="M120,192 C96,194 76,202 60,212 L56,240 L184,240 L180,212 C164,202 144,194 120,192 Z"
            fill="var(--d-mid)"
          />
          {/* 锁骨阴影 */}
          <path d="M104,204 Q120,197 136,204 Q120,201 104,204 Z" fill="var(--d-shade)" opacity=".55" />

          {/* 颈部 */}
          <path d="M101,156 L139,156 L143,196 L97,196 Z" fill="var(--d-mid)" />
          <path d="M104,180 Q120,188 136,180 L136,186 Q120,192 104,186 Z" fill="var(--d-shade)" opacity=".5" />

          {/* 头部（面部，含下巴） */}
          <path
            d="M120,46 C90,46 74,78 76,110 C78,144 94,168 120,176 C146,168 162,144 164,110 C166,78 150,46 120,46 Z"
            fill="var(--d-face)"
          />

          {/* 卷发（多层色块） —— 先暗部回衬，再主体，最后亮部提点 */}
          <g fill="var(--d-hair-d)">
            <circle cx="84" cy="62" r="14" />
            <circle cx="120" cy="48" r="15" />
            <circle cx="156" cy="62" r="14" />
            <circle cx="74" cy="94" r="12" />
            <circle cx="166" cy="94" r="12" />
          </g>
          <g fill="var(--d-hair)">
            <circle cx="78" cy="80" r="13" />
            <circle cx="95" cy="58" r="13" />
            <circle cx="112" cy="48" r="12" />
            <circle cx="128" cy="48" r="12" />
            <circle cx="145" cy="58" r="13" />
            <circle cx="162" cy="80" r="13" />
            <circle cx="90" cy="80" r="11" />
            <circle cx="150" cy="80" r="11" />
            <circle cx="76" cy="106" r="11" />
            <circle cx="164" cy="106" r="11" />
            <circle cx="86" cy="100" r="9" />
            <circle cx="154" cy="100" r="9" />
          </g>
          <g fill="var(--d-hair-l)">
            <circle cx="102" cy="54" r="6" />
            <circle cx="126" cy="52" r="6" />
            <circle cx="142" cy="64" r="5" />
            <circle cx="86" cy="68" r="5" />
          </g>

          {/* 眉（浓眉，向上扬） */}
          <path d="M92,110 L116,106 L116,111 L94,115 Z" fill="var(--d-ink)" />
          <path d="M148,110 L124,106 L124,111 L146,115 Z" fill="var(--d-ink)" />

          {/* 眼窝阴影（贴纸眼睛下浅凹） */}
          <path d="M92,117 Q100,123 114,118 L113,123 Q100,127 91,122 Z" fill="var(--d-shade)" opacity=".5" />
          <path d="M148,117 Q140,123 126,118 L127,123 Q140,127 149,122 Z" fill="var(--d-shade)" opacity=".5" />

          {/* 鼻（一侧阴影 + 鼻翼） */}
          <path d="M120,112 L126,130 L122,138 L118,131 Z" fill="var(--d-shade)" opacity=".8" />
          <ellipse cx="114" cy="133" rx="2" ry="1.6" fill="var(--d-shade)" />
          <ellipse cx="127" cy="133" rx="2" ry="1.6" fill="var(--d-shade)" />

          {/* 嘴（小而沉静） */}
          <path d="M110,150 Q120,154 130,150 L130,152 Q120,156 110,152 Z" fill="var(--d-ink)" opacity=".85" />

          {/* 眼睛：浅暖白眼白 + 深色瞳孔 + 细描边（两种主题一致，干净不瘆人） */}
          <g className="eye" ref={eyeLRef}>
            <ellipse
              cx="100"
              cy="120"
              rx="11"
              ry="7.6"
              fill="var(--d-eye)"
              stroke="var(--d-eye-line)"
              strokeWidth="1.4"
              opacity=".96"
            />
            <circle className="pupil" ref={pupilLRef} cx="100" cy="120.5" r="3.8" fill="var(--d-pupil)" />
          </g>
          <g className="eye" ref={eyeRRef}>
            <ellipse
              cx="140"
              cy="120"
              rx="11"
              ry="7.6"
              fill="var(--d-eye)"
              stroke="var(--d-eye-line)"
              strokeWidth="1.4"
              opacity=".96"
            />
            <circle className="pupil" ref={pupilRRef} cx="140" cy="120.5" r="3.8" fill="var(--d-pupil)" />
          </g>
        </svg>
      </div>
    </div>
  );
}
