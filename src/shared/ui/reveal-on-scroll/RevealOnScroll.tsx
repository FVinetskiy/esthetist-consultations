"use client";

import Box, { type BoxProps } from "@mui/material/Box";
import { useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";

export type RevealOnScrollProps = BoxProps & {
  delayMs?: number;
  offsetPx?: number;
  durationSec?: number;
};

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function RevealOnScroll({
  children,
  delayMs = 0,
  offsetPx = 12,
  durationSec = 0.5,
  sx,
  ...props
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const [intersected, setIntersected] = useState(false);

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

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate3d(0, 0, 0)"
          : `translate3d(0, ${offsetPx}px, 0)`,
        transition,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
