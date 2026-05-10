"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import Image from "next/image";
import NextLink from "next/link";
import { useTranslation } from "react-i18next";

const HERO_PORTRAIT = "/hero-portrait.webp";

export function HeroSection() {
  const { t } = useTranslation();
  const theme = useTheme();
  const light = theme.palette.mode === "light";

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        minHeight: {
          xs: "calc(100dvh - 108px)",
          md: "calc(100dvh - 52px)",
        },
        py: { xs: 4, md: 6 },
        bgcolor: (th) => th.palette.brand.bg,
        backgroundImage: (th) => {
          const b = th.palette.brand;
          if (th.palette.mode === "light") {
            return [
              `linear-gradient(180deg, ${alpha("#ffffff", 0.72)} 0%, transparent 38%)`,
              `linear-gradient(
                152deg,
                ${b.bg} 0%,
                ${alpha(b.paper, 0.2)} 30%,
                ${b.bgAlt} 55%,
                ${alpha(b.accent, 0.08)} 88%,
                ${alpha(b.bg, 0.98)} 100%
              )`,
            ].join(", ");
          }

          return [
            `linear-gradient(180deg, ${alpha("#ffffff", 0.04)} 0%, transparent 36%)`,
            `linear-gradient(
              165deg,
              ${b.bg} 0%,
              ${alpha(b.paper, 0.45)} 40%,
              ${alpha(b.bgAlt, 0.92)} 78%,
              ${b.bg} 100%
            )`,
          ].join(", ");
        },
        "@keyframes heroIn": {
          from: { opacity: 0, transform: "translateY(12px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        animation: "heroIn 0.65s ease-out both",
        "@keyframes heroAuraOpacity": {
          "0%, 100%": { opacity: 0.34 },
          "50%": { opacity: 0.52 },
        },
        "@media (prefers-reduced-motion: reduce)": {
          animation: "none",
        },
      }}
    >
      {light ? (
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: "-16%",
            background: (th) =>
              `radial-gradient(ellipse 52% 44% at 88% 6%, ${alpha(th.palette.primary.main, 0.12)} 0%, transparent 60%),
               radial-gradient(ellipse 44% 38% at 8% 92%, ${alpha(th.palette.brand.heading, 0.06)} 0%, transparent 55%)`,
            pointerEvents: "none",
            animation: "heroAuraOpacity 22s ease-in-out infinite",
            "@media (prefers-reduced-motion: reduce)": {
              animation: "none",
              opacity: 0.28,
            },
          }}
        />
      ) : null}

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: 0,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(0, 1.04fr) minmax(340px, 0.74fr)",
            },
            columnGap: { xs: 0, md: 6, lg: 8 },
            rowGap: { xs: 3.5, md: 0 },
            alignItems: "center",
          }}
        >
          <Stack spacing={{ xs: 2.25, md: 3 }} sx={{ minWidth: 0, pr: { md: 1 } }}>
            <Typography
              variant="h1"
              sx={{
                color: (th) => th.palette.brand.heading,
                lineHeight: 1.08,
                wordBreak: "break-word",
                letterSpacing: "0",
                fontSize: "clamp(1.08rem, 0.61rem + 2.05vw, 2.58rem)",
                maxWidth: 780,
              }}
            >
              {t("landing.hero.title")}
            </Typography>

            <Typography
              component="p"
              variant="body1"
              sx={{
                maxWidth: 660,
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                fontWeight: 400,
                lineHeight: 1.7,
                color: "text.secondary",
                wordBreak: "break-word",
                fontSize: {
                  xs: "1.0625rem",
                  md: "1.25rem",
                },
              }}
            >
              {t("landing.hero.subtitle")}
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1.25, sm: 1.5 }}
              alignItems={{ xs: "stretch", sm: "center" }}
              flexWrap="wrap"
              useFlexGap
            >
              <Button
                component={NextLink}
                href="/contacts"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  minHeight: 52,
                  px: 3,
                  justifyContent: "center",
                  ...(theme.palette.mode === "light"
                    ? {
                        bgcolor: "#373737",
                        color: "#fff",
                        boxShadow: `0 10px 28px ${alpha("#373737", 0.28)}`,
                      }
                    : {
                        boxShadow: (th) =>
                          `0 10px 28px ${alpha(th.palette.primary.main, 0.42)}`,
                      }),
                  "&:hover": {
                    transform: "translateY(-2px)",
                    ...(theme.palette.mode === "light"
                      ? {
                          bgcolor: "#2b2b2b",
                          boxShadow: `0 12px 32px ${alpha("#373737", 0.36)}`,
                        }
                      : {
                          bgcolor: "primary.dark",
                        }),
                  },
                  "@media (prefers-reduced-motion: reduce)": {
                    "&:hover": { transform: "none" },
                  },
                }}
              >
                {t("landing.hero.ctaBook")}
              </Button>
              <Button
                component={NextLink}
                href="#how-it-works"
                variant="outlined"
                size="large"
                sx={{
                  minHeight: 52,
                  px: 3,
                  borderColor: (th) => alpha(th.palette.brand.heading, 0.28),
                  color: (th) => th.palette.brand.heading,
                  bgcolor: (th) =>
                    alpha(th.palette.background.default, th.palette.mode === "light" ? 0.28 : 0.12),
                  "&:hover": {
                    transform: "translateY(-2px)",
                    borderColor: "primary.main",
                    bgcolor: (th) => alpha(th.palette.primary.main, 0.08),
                  },
                  "@media (prefers-reduced-motion: reduce)": {
                    "&:hover": { transform: "none" },
                  },
                }}
              >
                {t("landing.hero.ctaDetails")}
              </Button>
              <Link
                component={NextLink}
                href="#tariffs"
                underline="hover"
                sx={{
                  minHeight: 52,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", sm: "flex-start" },
                  px: { xs: 1.25, sm: 1 },
                  color: "text.secondary",
                  fontWeight: 700,
                  textUnderlineOffset: "4px",
                  "&:focus-visible": {
                    outline: "2px solid",
                    outlineColor: "primary.main",
                    outlineOffset: 3,
                    borderRadius: 1,
                  },
                }}
              >
                {t("landing.hero.tariffsLink")}
              </Link>
            </Stack>
          </Stack>

          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: { xs: 440, md: 470 },
              justifySelf: { xs: "center", md: "end" },
            }}
          >
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                inset: { xs: 14, md: 18 },
                transform: "translate(18px, 18px)",
                borderRadius: { xs: 3, md: 4 },
                bgcolor: (th) =>
                  alpha(th.palette.primary.main, th.palette.mode === "light" ? 0.18 : 0.12),
              }}
            />
            <Box
              sx={{
                position: "relative",
                aspectRatio: "2 / 3",
                borderRadius: { xs: 3, md: 4 },
                overflow: "hidden",
                bgcolor: (th) =>
                  th.palette.mode === "light"
                    ? alpha(th.palette.brand.paper, 0.62)
                    : alpha(th.palette.background.paper, 0.62),
                border: 1,
                borderColor: (th) =>
                  alpha(th.palette.brand.heading, th.palette.mode === "light" ? 0.1 : 0.18),
                boxShadow: (th) =>
                  th.palette.mode === "light"
                    ? `0 24px 70px ${alpha(th.palette.brand.heading, 0.16)}`
                    : "0 24px 70px rgba(0,0,0,0.36)",
              }}
            >
              <Image
                src={HERO_PORTRAIT}
                alt={t("landing.hero.imageAlt")}
                fill
                priority
                sizes="(max-width: 899px) min(100vw - 24px, 440px), 470px"
                style={{
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
