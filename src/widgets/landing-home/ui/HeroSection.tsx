"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  IconDropletSolid,
  IconHeartSolid,
  IconScienceSolid,
} from "@/shared/ui/icons/SolidIcons";

const HERO_IMG = "/avatar.jpg";

export function HeroSection() {
  const { t } = useTranslation();
  const theme = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const light = theme.palette.mode === "light";

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const clear = () => {
      auraRef.current?.style.removeProperty("transform");
      auraRef.current?.style.removeProperty("will-change");
    };

    let rafId = 0;
    const target = { y: 0 };
    const current = { y: 0 };

    const measure = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const focus = rect.top + rect.height * 0.42;
      target.y = Math.max(-1, Math.min(1, (vh * 0.5 - focus) / (vh * 0.65)));
    };

    const apply = (c: number) => {
      if (light && auraRef.current) {
        auraRef.current.style.setProperty("will-change", "transform");
        auraRef.current.style.setProperty(
          "transform",
          `translate3d(${c * 6}%, ${c * 4.5}%, 0) scale(${1.04 + c * 0.035})`,
        );
      }
    };

    const tick = () => {
      current.y += (target.y - current.y) * 0.1;
      apply(current.y);
      if (Math.abs(target.y - current.y) > 0.002) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = 0;
        auraRef.current?.style.removeProperty("will-change");
      }
    };

    const kick = () => {
      if (mq.matches) {
        clear();
        return;
      }
      measure();
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    if (mq.matches) {
      clear();
    } else {
      measure();
      apply(current.y);
    }

    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick);
    const onMq = () => {
      cancelAnimationFrame(rafId);
      rafId = 0;
      if (mq.matches) clear();
      else {
        current.y = target.y;
        kick();
      }
    };
    mq.addEventListener("change", onMq);

    return () => {
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
      mq.removeEventListener("change", onMq);
      cancelAnimationFrame(rafId);
      clear();
    };
  }, [light]);

  return (
    <Box
      ref={sectionRef}
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: 3, md: 6 },
        pb: { xs: 4, md: 7 },
        bgcolor: (t) => t.palette.brand.bg,
        backgroundImage: (t) => {
          const b = t.palette.brand;
          if (t.palette.mode === "light") {
            return [
              `linear-gradient(180deg, ${alpha("#ffffff", 0.5)} 0%, transparent 42%)`,
              `linear-gradient(
                152deg,
                ${b.bg} 0%,
                ${alpha(b.paper, 0.28)} 26%,
                ${b.bgAlt} 52%,
                ${alpha(b.accent, 0.11)} 82%,
                ${alpha(b.bg, 0.97)} 100%
              )`,
              `linear-gradient(118deg, transparent 0%, ${alpha(b.accent, 0.06)} 48%, transparent 68%)`,
            ].join(", ");
          }
          return [
            `linear-gradient(180deg, ${alpha("#ffffff", 0.045)} 0%, transparent 40%)`,
            `linear-gradient(
              165deg,
              ${b.bg} 0%,
              ${alpha(b.paper, 0.55)} 38%,
              ${alpha(b.bgAlt, 0.95)} 72%,
              ${b.bg} 100%
            )`,
            `linear-gradient(125deg, transparent 20%, ${alpha(b.accent, 0.08)} 50%, transparent 75%)`,
          ].join(", ");
        },
        "@keyframes heroIn": {
          from: { opacity: 0, transform: "translateY(12px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        animation: "heroIn 0.65s ease-out both",
        "@keyframes heroAuraOpacity": {
          "0%, 100%": { opacity: 0.38 },
          "50%": { opacity: 0.58 },
        },
        "@media (prefers-reduced-motion: reduce)": {
          animation: "none",
        },
      }}
    >
      {light && (
        <Box
          ref={auraRef}
          aria-hidden
          sx={{
            position: "absolute",
            inset: "-18%",
            background: (t) =>
              `radial-gradient(ellipse 58% 48% at 86% 4%, ${alpha(t.palette.primary.main, 0.16)} 0%, transparent 62%),
               radial-gradient(ellipse 48% 40% at 10% 94%, ${alpha(t.palette.brand.heading, 0.075)} 0%, transparent 58%)`,
            pointerEvents: "none",
            animation: "heroAuraOpacity 22s ease-in-out infinite",
            "@media (prefers-reduced-motion: reduce)": {
              animation: "none",
              opacity: 0.32,
            },
          }}
        />
      )}

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center" columns={12}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={2.5}>
              <Typography
                variant="h1"
                component={Link}
                href="/#tariffs"
                sx={{
                  color: (t) => t.palette.brand.heading,
                  textDecoration: "none",
                  lineHeight: 1.25,
                  transition: "opacity 0.22s ease, color 0.22s ease",
                  wordBreak: "break-word",
                  "&:hover": { opacity: 0.88 },
                }}
              >
                {t("landing.hero.title")}
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "text.secondary",
                  wordBreak: "break-word",
                }}
              >
                {t("landing.hero.subtitle")}
              </Typography>
              <Stack
                direction="row"
                flexWrap="wrap"
                gap={1.25}
                sx={{ pt: 0.5 }}
                aria-hidden
              >
                {[IconDropletSolid, IconScienceSolid, IconHeartSolid].map((Ic, i) => (
                  <Box
                    key={i}
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: (th) =>
                        alpha(
                          th.palette.primary.main,
                          th.palette.mode === "light" ? 0.12 : 0.18,
                        ),
                      color: (th) => th.palette.brand.heading,
                      transition:
                        "transform 0.25s ease, color 0.25s ease, background-color 0.25s ease",
                      "@media (hover: hover)": {
                        "&:hover": {
                          color: "primary.main",
                          bgcolor: (th) =>
                            alpha(
                              th.palette.primary.main,
                              th.palette.mode === "light" ? 0.2 : 0.26,
                            ),
                          transform: "translateY(-3px)",
                        },
                      },
                      "@media (prefers-reduced-motion: reduce)": {
                        "&:hover": { transform: "none" },
                      },
                    }}
                  >
                    <Ic sx={{ fontSize: 22 }} />
                  </Box>
                ))}
              </Stack>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                sx={{ pt: 1 }}
              >
                <Button
                  component={Link}
                  href="/contacts"
                  variant="contained"
                  size="large"
                  sx={{
                    boxShadow: (t) =>
                      t.palette.mode === "light"
                        ? `0 10px 28px ${alpha(t.palette.primary.main, 0.42)}`
                        : undefined,
                    "&:hover": {
                      transform: "translateY(-2px)",
                    },
                    "@media (prefers-reduced-motion: reduce)": {
                      "&:hover": { transform: "none" },
                    },
                  }}
                >
                  {t("landing.hero.ctaBook")}
                </Button>
                <Button
                  component={Link}
                  href="/#tariffs"
                  variant="outlined"
                  size="large"
                  color="inherit"
                  sx={{
                    borderColor: (t) => t.palette.brand.accent,
                    color: (t) => t.palette.brand.heading,
                    "&:hover": {
                      borderColor: (t) => t.palette.brand.accentHover,
                      bgcolor: (t) =>
                        t.palette.mode === "light"
                          ? "rgba(216,165,160,0.14)"
                          : "action.hover",
                      transform: "translateY(-2px)",
                    },
                    "@media (prefers-reduced-motion: reduce)": {
                      "&:hover": { transform: "none" },
                    },
                  }}
                >
                  {t("landing.hero.ctaDetails")}
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 3,
                overflow: "hidden",
                aspectRatio: "4 / 5",
                maxWidth: 420,
                width: "100%",
                mx: { xs: "auto", md: 0 },
                ml: { md: "auto" },
                boxShadow: (t) =>
                  t.palette.mode === "light"
                    ? `0 22px 56px ${alpha(t.palette.brand.heading, 0.16)}, 0 0 0 1px ${alpha(t.palette.brand.heading, 0.06)}`
                    : "0 16px 40px rgba(0,0,0,0.35)",
                transition:
                  "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s ease",
                "@media (prefers-reduced-motion: reduce)": {
                  transition: "box-shadow 0.3s ease",
                },
                "&:hover": {
                  transform: { xs: "none", sm: "translateY(-4px) scale(1.01)" },
                  boxShadow: (t) =>
                    t.palette.mode === "light"
                      ? `0 28px 64px ${alpha(t.palette.brand.heading, 0.2)}`
                      : "0 20px 48px rgba(0,0,0,0.45)",
                },
              }}
            >
              <Image
                src={HERO_IMG}
                alt={t("landing.hero.imageAlt")}
                fill
                sizes="(max-width: 900px) 100vw, 420px"
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
