"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { skinCompareImages } from "@/shared/config/skin-compare";

function clientXToRevealPct(el: HTMLElement, clientX: number): number {
  const r = el.getBoundingClientRect();
  const x = Math.min(Math.max(clientX - r.left, 0), r.width);
  if (r.width <= 0) return 50;
  return Math.min(98, Math.max(2, (100 * x) / r.width));
}

export function BeforeAfterSlider() {
  const { t } = useTranslation();
  const theme = useTheme();
  const h = theme.palette.brand.heading;
  const light = theme.palette.mode === "light";

  const wrapRef = useRef<HTMLDivElement>(null);
  const [revealPct, setRevealPct] = useState(50);
  const [cw, setCw] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setCw(el.offsetWidth));
    ro.observe(el);
    setCw(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  const onPointer = useCallback(
    (clientX: number) => {
      if (reduceMotion) return;
      const el = wrapRef.current;
      if (!el) return;
      setRevealPct(clientXToRevealPct(el, clientX));
    },
    [reduceMotion],
  );

  const resetCenter = useCallback(() => {
    if (!reduceMotion) setRevealPct(50);
  }, [reduceMotion]);

  return (
    <Box
      ref={wrapRef}
      id="skin-compare"
      role="img"
      aria-label={`${t("landing.skinCompare.labelBefore")} / ${t("landing.skinCompare.labelAfter")}`}
      onMouseMove={(e) => onPointer(e.clientX)}
      onMouseLeave={resetCenter}
      onTouchStart={(e) => {
        if (e.touches[0]) onPointer(e.touches[0].clientX);
      }}
      onTouchMove={(e) => {
        if (e.touches[0]) onPointer(e.touches[0].clientX);
      }}
      onTouchEnd={resetCenter}
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: { xs: 420, md: "none" },
        mx: { xs: "auto", md: 0 },
        aspectRatio: "3 / 4",
        borderRadius: 3,
        overflow: "hidden",
        cursor: reduceMotion ? "default" : "col-resize",
        touchAction: "none",
        userSelect: "none",
        boxShadow: light
          ? `0 16px 48px ${alpha(h, 0.12)}, 0 0 0 1px ${alpha(h, 0.08)}`
          : `0 12px 40px rgba(0,0,0,0.45), 0 0 0 1px ${alpha("#fff", 0.06)}`,
      }}
    >
      <Image
        src={skinCompareImages.before}
        alt={t("landing.skinCompare.altBefore")}
        fill
        sizes="(max-width: 900px) 100vw, 380px"
        style={{ objectFit: "cover" }}
        priority={false}
        draggable={false}
      />

      <Box
        aria-hidden
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: `${revealPct}%`,
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: cw > 0 ? `${cw}px` : "100%",
            minWidth: "100%",
          }}
        >
          <Image
            src={skinCompareImages.after}
            alt={t("landing.skinCompare.altAfter")}
            fill
            sizes="(max-width: 900px) 100vw, 380px"
            style={{ objectFit: "cover" }}
            priority={false}
            draggable={false}
          />
        </Box>
      </Box>

      <Typography
        variant="caption"
        sx={{
          position: "absolute",
          left: 12,
          top: 12,
          zIndex: 2,
          px: 1,
          py: 0.5,
          borderRadius: 1,
          bgcolor: alpha("#000", 0.45),
          color: "#fff",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          pointerEvents: "none",
        }}
      >
        {t("landing.skinCompare.labelAfter")}
      </Typography>
      <Typography
        variant="caption"
        sx={{
          position: "absolute",
          right: 12,
          top: 12,
          zIndex: 2,
          px: 1,
          py: 0.5,
          borderRadius: 1,
          bgcolor: alpha("#000", 0.45),
          color: "#fff",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          pointerEvents: "none",
        }}
      >
        {t("landing.skinCompare.labelBefore")}
      </Typography>

      <Box
        aria-hidden
        sx={{
          position: "absolute",
          left: `${revealPct}%`,
          top: 0,
          bottom: 0,
          width: 3,
          zIndex: 3,
          transform: "translateX(-50%)",
          pointerEvents: "none",
          background: `linear-gradient(180deg, ${alpha("#fff", 0.95)}, ${alpha(theme.palette.primary.main, 0.95)}, ${alpha("#fff", 0.95)})`,
          boxShadow: `0 0 12px ${alpha("#000", 0.35)}`,
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          left: `${revealPct}%`,
          top: "50%",
          zIndex: 4,
          transform: "translate(-50%, -50%)",
          width: 36,
          height: 36,
          borderRadius: "50%",
          bgcolor: alpha("#fff", 0.92),
          border: `2px solid ${theme.palette.primary.main}`,
          boxShadow: `0 4px 16px ${alpha("#000", 0.25)}`,
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::before": {
            content: '""',
            width: 10,
            height: 10,
            borderRadius: "50%",
            bgcolor: "primary.main",
          },
        }}
      />
    </Box>
  );
}
