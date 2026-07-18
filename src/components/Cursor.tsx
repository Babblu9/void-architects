"use client";

import { useEffect } from "react";

// Custom cursor: instant dot + lerp-trailing ring. Desktop fine-pointer only.
// Grows over interactive elements. Pure DOM + rAF, no lib, no re-renders.
export default function Cursor() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;

    const dot = document.createElement("div");
    const ring = document.createElement("div");
    dot.className = "cursor-dot";
    ring.className = "cursor-ring";
    document.body.append(dot, ring);
    document.body.classList.add("has-cursor");

    let mx = innerWidth / 2,
      my = innerHeight / 2,
      rx = mx,
      ry = my,
      raf = 0;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      const t = e.target as HTMLElement;
      const interactive = t.closest("a, button, input, [data-cursor]");
      ring.classList.toggle("is-hover", !!interactive);
    };
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const onEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("pointerenter", onEnter);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("pointerenter", onEnter);
      dot.remove();
      ring.remove();
      document.body.classList.remove("has-cursor");
    };
  }, []);

  return null;
}
