"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const pointerFine = window.matchMedia("(pointer: fine)").matches;

    if (reducedMotion || !pointerFine || window.innerWidth < 900) {
      glow.style.display = "none";
      return;
    }

    let frame = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;

      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        glow.style.transform = `translate3d(${x - 220}px, ${y - 220}px, 0)`;
        frame = 0;
      });
    };

    window.addEventListener("pointermove", move, { passive: true });

    return () => {
      window.removeEventListener("pointermove", move);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-10 h-[27.5rem] w-[27.5rem] rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.13),rgba(99,102,241,0.08)_36%,transparent_70%)] opacity-80 mix-blend-screen blur-xl"
    />
  );
}
