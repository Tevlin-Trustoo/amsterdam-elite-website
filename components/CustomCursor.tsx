"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const target = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only on pointer devices
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      setDotPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    let rafId: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      setPos((prev) => ({
        x: lerp(prev.x, target.current.x, 0.12),
        y: lerp(prev.y, target.current.y, 0.12),
      }));
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    const onEnterHover = () => setHovered(true);
    const onLeaveHover = () => setHovered(false);

    const bindHoverables = () => {
      document.querySelectorAll("a, button, [data-cursor-hover]").forEach((el) => {
        el.addEventListener("mouseenter", onEnterHover);
        el.addEventListener("mouseleave", onLeaveHover);
      });
    };
    bindHoverables();

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Ring — lags */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-multiply"
        style={{
          transform: `translate(${pos.x - 20}px, ${pos.y - 20}px)`,
          transition: "transform 0ms linear",
        }}
      >
        <div
          className="rounded-full border border-gold transition-all duration-300"
          style={{
            width: hovered ? 56 : 40,
            height: hovered ? 56 : 40,
            marginLeft: hovered ? -8 : 0,
            marginTop: hovered ? -8 : 0,
            backgroundColor: hovered ? "rgba(201,168,76,0.08)" : "transparent",
          }}
        />
      </div>

      {/* Dot — instant */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ transform: `translate(${dotPos.x - 3}px, ${dotPos.y - 3}px)` }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
      </div>
    </>
  );
}
