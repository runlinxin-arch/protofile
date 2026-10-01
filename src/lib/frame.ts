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

/**
 * 相册作品的照片板（.car-plate）尺寸：在统一槽位 --slot-w × --slot-h 内
 * 按自身比例「完整贴合」（等价于 object-fit: contain），因此：
 *   - 画面零裁切、零留白
 *   - 槽位本身尺寸对所有作品一致 → 滚轮几何稳定，切换时不再忽大忽小
 *   - 槽位比按钮内缘窄，横构图不会再压到左右切换按钮上
 */
export function photoPlate(w: number, h: number): CSSProperties {
  const ratio = (w / h).toFixed(4);
  return {
    width: `min(var(--slot-w), calc(var(--slot-h) * ${ratio}))`,
    height: `min(var(--slot-h), calc(var(--slot-w) / ${ratio}))`,
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
