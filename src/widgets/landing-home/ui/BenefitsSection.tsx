"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme, type Theme } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { IconHeartSolid } from "@/shared/ui/icons/SolidIcons";
import { Section } from "./Section";

type BenefitItem = { title: string; body: string };

const STAGGER_MS = 70;
const CARD_TRANSITION_MS = 520;

function cardWashBackground(index: number, theme: Theme, light: boolean): string {
  const accent = theme.palette.primary.main;
  const h = theme.palette.brand.heading;
  const a = light ? 1 : 1.15;
  switch (index % 3) {
    case 0:
      return `radial-gradient(115% 90% at 0% 0%, ${alpha(accent, 0.13 * a)}, transparent 58%)`;
    case 1:
      return `linear-gradient(155deg, ${alpha(h, light ? 0.06 : 0.1)} 0%, transparent 48%)`;
    default:
      return `radial-gradient(95% 95% at 100% 100%, ${alpha(accent, 0.09 * a)}, transparent 52%)`;
  }
}

export function BenefitsSection() {
  const { t } = useTranslation();
  const theme = useTheme();
  const items = t("landing.benefits.items", { returnObjects: true }) as BenefitItem[];
  const cardsGridRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = cardsGridRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setRevealed(true);
      },
      {
        threshold: 0,
        rootMargin: "25% 0px 35% 0px",
      },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => setRevealed(true), 2800);
    return () => window.clearTimeout(id);
  }, []);

  const h = theme.palette.brand.heading;
  const light = theme.palette.mode === "light";
  const accent = theme.palette.primary.main;
  const cardBorder = alpha(h, light ? 0.14 : 0.24);
  const cardBorderHover = alpha(accent, light ? 0.55 : 0.65);

  return (
    <Section tinted>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: { xs: 2, sm: 2.5 },
          py: { xs: 0.5, sm: 1 },
          px: { xs: 0, sm: 0.5 },
          isolation: "isolate",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: { xs: "-4%", sm: "-4%" },
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <Box
            aria-hidden
            sx={{
              width: "min(92vw, 560px)",
              height: { xs: 240, sm: 360 },
              flexShrink: 0,
              borderRadius: "50%",
              background: `radial-gradient(circle at 45% 40%, ${alpha(accent, light ? 0.22 : 0.28)}, ${alpha(accent, 0.06)} 45%, transparent 68%)`,
              filter: light ? "blur(52px)" : "blur(56px)",
              opacity: light ? 0.95 : 0.85,
            }}
          />
        </Box>
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: { xs: 0, sm: "-10% -6%" },
            pointerEvents: "none",
            zIndex: 0,
            background: light
              ? `radial-gradient(ellipse 68% 52% at 12% 18%, ${alpha(accent, 0.16)}, transparent 58%),
                 radial-gradient(ellipse 55% 48% at 88% 82%, ${alpha(h, 0.1)}, transparent 55%)`
              : `radial-gradient(ellipse 65% 50% at 10% 15%, ${alpha(accent, 0.2)}, transparent 58%),
                 radial-gradient(ellipse 50% 45% at 90% 85%, ${alpha(h, 0.16)}, transparent 52%)`,
          }}
        />
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            opacity: { xs: light ? 0.35 : 0.28, sm: light ? 0.6 : 0.45 },
            backgroundImage: `
              linear-gradient(${alpha(h, light ? 0.045 : 0.08)} 1px, transparent 1px),
              linear-gradient(90deg, ${alpha(h, light ? 0.045 : 0.08)} 1px, transparent 1px)
            `,
            backgroundSize: { xs: "36px 36px", sm: "44px 44px" },
            maskImage:
              "radial-gradient(ellipse 92% 85% at 50% 45%, black 22%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 92% 85% at 50% 45%, black 22%, transparent 78%)",
          }}
        />

        <Box sx={{ position: "relative", zIndex: 1, pointerEvents: "auto" }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            justifyContent="center"
            spacing={{ xs: 1.25, sm: 1.5 }}
            sx={{ mb: { xs: 3, md: 5 }, px: { xs: 0.5, sm: 0 }, maxWidth: "100%" }}
          >
            <Box
              sx={{
                color: "primary.main",
                display: "flex",
                flexShrink: 0,
                transition: "transform 0.3s ease",
                "@media (hover: hover)": { "&:hover": { transform: "scale(1.08)" } },
                "@media (prefers-reduced-motion: reduce)": {
                  "&:hover": { transform: "none" },
                },
              }}
              aria-hidden
            >
              <IconHeartSolid sx={{ fontSize: { xs: 30, sm: 36 } }} />
            </Box>
            <Typography
              variant="h2"
              sx={{
                color: h,
                textAlign: { xs: "center", sm: "left" },
                maxWidth: "100%",
                wordBreak: "break-word",
                lineHeight: 1.25,
              }}
            >
              {t("landing.benefits.title")}
            </Typography>
          </Stack>

          <Box
            ref={cardsGridRef}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
              gap: { xs: 2.25, md: 2.75 },
              maxWidth: 920,
              mx: "auto",
            }}
          >
            {items.map((item, index) => {
              const delay = index * STAGGER_MS;
              return (
                <Box
                  key={item.title}
                  sx={{
                    position: "relative",
                    borderRadius: 2.5,
                    overflow: "hidden",
                    px: { xs: 2.25, sm: 2.75 },
                    py: { xs: 2.5, sm: 3 },
                    bgcolor: (t) =>
                      alpha(t.palette.background.paper, light ? 0.9 : 0.48),
                    boxShadow: "none",
                    border: "1px solid",
                    borderColor: cardBorder,
                    transitionProperty: "transform, border-color",
                    transitionDuration: "0.38s",
                    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                    "@keyframes benefitReveal": {
                      from: { opacity: 0, transform: "translateY(22px)" },
                      to: { opacity: 1, transform: "translateY(0)" },
                    },
                    "@media (prefers-reduced-motion: reduce)": {
                      opacity: 1,
                      transform: "none",
                      animation: "none",
                      transition: "border-color 0.25s ease",
                      "@media (hover: hover)": {
                        "&:hover": {
                          borderColor: cardBorderHover,
                        },
                      },
                    },
                    "@media (prefers-reduced-motion: no-preference)": revealed
                      ? {
                          animation: `benefitReveal ${CARD_TRANSITION_MS}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms both`,
                          pointerEvents: "auto",
                        }
                      : {
                          opacity: 0,
                          transform: "translateY(22px)",
                          pointerEvents: "none",
                        },
                    "@media (prefers-reduced-motion: no-preference) and (hover: hover)":
                      {
                        "&:hover": {
                          transform: "translateY(-4px)",
                          borderColor: cardBorderHover,
                        },
                      },
                  }}
                >
                  <Box
                    aria-hidden
                    sx={{
                      position: "absolute",
                      inset: 0,
                      pointerEvents: "none",
                      background: cardWashBackground(index, theme, light),
                    }}
                  />
                  <Box
                    aria-hidden
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      zIndex: 1,
                      background: `linear-gradient(90deg, ${accent} 0%, ${alpha(accent, 0.25)} 55%, transparent 100%)`,
                    }}
                  />
                  <Box sx={{ position: "relative", zIndex: 2 }}>
                    <Typography
                      variant="overline"
                      sx={{
                        display: "block",
                        mb: 1.25,
                        letterSpacing: "0.2em",
                        fontWeight: 700,
                        fontSize: "0.68rem",
                        color: alpha(accent, light ? 0.95 : 1),
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        mb: 1.25,
                        color: h,
                        fontWeight: 600,
                        lineHeight: 1.35,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {item.body}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Section>
  );
}
