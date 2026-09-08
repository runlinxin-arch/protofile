/**
 * 文艺复兴角标母题（扁平填充风格，与扁平大卫统一）
 * 主体随 currentColor（章节角标=灰、可自适应主题），点缀用 accent 朱红。
 */
export default function Motif({ kind }: { kind: "laurel" | "compass" | "corinthian" | "sun" }) {
  /* 月桂花环（关于） */
  if (kind === "laurel") {
    return (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g fill="currentColor">
          <path d="M20,35 C13,33 8,27 8,19 C8,12 11,7 15,5 L16,8 C13,10 11,14 11,19 C11,25 14,30 20,32 Z" />
          <path d="M10,20 C7,19 6,16 7,13 C10,14 11,17 10,20 Z" />
          <path d="M12,14 C9,12 9,9 11,7 C14,9 14,12 12,14 Z" />
          <path d="M20,35 C27,33 32,27 32,19 C32,12 29,7 25,5 L24,8 C27,10 29,14 29,19 C29,25 26,30 20,32 Z" />
          <path d="M30,20 C33,19 34,16 33,13 C30,14 29,17 30,20 Z" />
          <path d="M28,14 C31,12 31,9 29,7 C26,9 26,12 28,14 Z" />
        </g>
        <circle cx="10" cy="25" r="1.5" fill="var(--accent)" />
        <circle cx="30" cy="25" r="1.5" fill="var(--accent)" />
      </svg>
    );
  }

  /* 罗盘玫瑰（摄影） */
  if (kind === "compass") {
    return (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon
          fill="currentColor"
          points="36,20 25.1,22.1 31.3,31.3 22.1,25.1 20,36 17.9,25.1 8.7,31.3 14.9,22.1 4,20 14.9,17.9 8.7,8.7 17.9,14.9 20,4 22.1,14.9 31.3,8.7 25.1,17.9"
        />
        <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="20" cy="20" r="2.6" fill="var(--accent)" />
      </svg>
    );
  }

  /* 科林斯柱头（项目） */
  if (kind === "corinthian") {
    return (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g fill="currentColor">
          <path d="M10,5 L30,5 L29,9 L11,9 Z" />
          <path d="M13,10 L15,16 C15,20 17,23 20,25 C23,23 25,20 25,16 L27,10 Z" />
          <path d="M15,27 L25,27 L25,30 L15,30 Z" />
        </g>
        <circle cx="20" cy="16" r="1.7" fill="var(--accent)" />
      </svg>
    );
  }

  /* 带射线日轮 / 阿波罗（页脚） */
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <path d="M20,11 L20,4" />
        <path d="M20,29 L20,36" />
        <path d="M11,20 L4,20" />
        <path d="M29,20 L36,20" />
        <path d="M26.4,13.6 L31.3,8.7" />
        <path d="M26.4,26.4 L31.3,31.3" />
        <path d="M13.6,26.4 L8.7,31.3" />
        <path d="M13.6,13.6 L8.7,8.7" />
      </g>
      <circle cx="20" cy="20" r="8" fill="currentColor" />
      <circle cx="20" cy="20" r="2.6" fill="var(--accent)" />
    </svg>
  );
}
