"use client";

import { useEffect } from "react";

export default function ProgressBar() {
  useEffect(() => {
    const el = document.getElementById("progress");
    if (!el) return;
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      el.style.width = `${p * 100}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div id="progress" />;
}
