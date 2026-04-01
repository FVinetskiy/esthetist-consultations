"use client";

import Box, { type BoxProps } from "@mui/material/Box";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export type RevealOnScrollProps = BoxProps & {
  delayMs?: number;
  offsetPx?: number;
  durationSec?: number;
  direction?: "up" | "left" | "right";
};

export function RevealOnScroll({
  children,
  delayMs = 0,
  offsetPx = 12,
  durationSec = 0.5,
  direction = "up",
  sx,
  ...props
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  /** Must stay false on server + first client paint so HTML matches (avoids hydration errors). */
  const [reducedMotion, setReducedMotion] = useState(false);
  const [intersected, setIntersected] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useLayoutEffect(() => {
    if (reducedMotion) return;

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIntersected(true);
            io.unobserve(entry.target);
            break;
          }
        }
      },
      { root: null, rootMargin: "0px 0px -5% 0px", threshold: 0.06 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [reducedMotion]);

  const visible = reducedMotion || intersected;

  const easing = "cubic-bezier(0.22, 1, 0.36, 1)";
  const delay = `${delayMs}ms`;
  const transition = reducedMotion
    ? "none"
    : `opacity ${durationSec}s ${easing} ${delay}, transform ${durationSec}s ${easing} ${delay}`;

  const hiddenTransform =
    direction === "left"
      ? `translate3d(-${offsetPx}px, 0, 0)`
      : direction === "right"
        ? `translate3d(${offsetPx}px, 0, 0)`
        : `translate3d(0, ${offsetPx}px, 0)`;

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0, 0, 0)" : hiddenTransform,
        transition,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
