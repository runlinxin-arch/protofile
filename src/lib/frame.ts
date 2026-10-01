import type { CSSProperties } from "react";

/**
 * 自适应画框尺寸。
 *
 * 相册与灯箱原本使用固定的 4:5 竖构图，横构图的照片会被裁掉近一半画面。
 * 这里改为「每张按自身比例显示」，同时保证不溢出容器：
 *   - 竖构图 → 以高度为基准，宽度由比例算出
 *   - 横构图 → 以宽度为基准，高度由比例算出
 * 两个方向都用 calc() 显式给出，避免 width:auto 在块级/拉伸布局下
 * 忽略 aspect-ratio 的问题。
 */

/** 相册中央大图：竖构图最高 520px，横构图最宽 660px */
export function carouselFrame(w: number, h: number): CSSProperties {
  const ratio = w / h;
  return h >= w
    ? {
        height: "clamp(300px, 46vw, 520px)",
        width: `calc(clamp(300px, 46vw, 520px) * ${ratio.toFixed(4)})`,
      }
    : {
        width: "min(78vw, 660px)",
        height: `calc(min(78vw, 660px) * ${(1 / ratio).toFixed(4)})`,
      };
}

/** 灯箱：竖构图按视口高度收，横构图按舞台宽度收，四周留白 */
export function lightboxFrame(w: number, h: number): CSSProperties {
  const ratio = w / h;
  return h >= w
    ? {
        height: "min(72vh, 760px)",
        width: `calc(min(72vh, 760px) * ${ratio.toFixed(4)})`,
      }
    : {
        width: "min(72vw, 840px)",
        height: `calc(min(72vw, 840px) * ${(1 / ratio).toFixed(4)})`,
      };
}
