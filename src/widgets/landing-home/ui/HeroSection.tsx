"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import Image from "next/image";
import NextLink from "next/link";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { cardShadowLight } from "@/shared/config/mui-theme";

const HERO_CARD_THUMB = "/showcase-tailored/5.jpg";
/** Текст на белых карточках — тёмный в обеих темах */
const FLOAT_CARD_TITLE = "#373737";
const FLOAT_CARD_BODY = "#5A534D";
/** Миниатюры в обеих карточках — один размер по макету */
const FLOAT_THUMB = {
  w: { xs: "min(100%, 168px)", sm: 168 },
  h: 79,
} as const;

type HeroFloatCard = { title: string; body: string };
type FloatCardLayout = "row" | "stacked";

function FloatCard({
  title,
  body,
  layout = "row",
  sx,
}: HeroFloatCard & { layout?: FloatCardLayout; sx?: object }) {
  const isStacked = layout === "stacked";

  const textBlock = (
    <Stack spacing={0.35} sx={{ minWidth: 0 }}>
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 600,
          lineHeight: 1.3,
          color: FLOAT_CARD_TITLE,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          lineHeight: 1.45,
          fontSize: "0.8125rem",
          color: FLOAT_CARD_BODY,
        }}
      >
        {body}
      </Typography>
    </Stack>
  );

  const thumb = (
    <Box
      sx={{
        position: "relative",
        width: FLOAT_THUMB.w,
        height: FLOAT_THUMB.h,
        borderRadius: 1.25,
        overflow: "hidden",
        flexShrink: 0,
        bgcolor: alpha("#373737", 0.06),
      }}
    >
      <Image
        src={HERO_CARD_THUMB}
        alt=""
        fill
        sizes="168px"
        style={{ objectFit: "cover" }}
      />
    </Box>
  );

  const textColumn = isStacked ? (
    <Box
      sx={{
        width: FLOAT_THUMB.w,
        maxWidth: "100%",
        boxSizing: "border-box",
      }}
    >
      {textBlock}
    </Box>
  ) : (
    textBlock
  );

  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        borderRadius: 2,
        p: { xs: 1.75, sm: 2 },
        maxWidth: {
          xs: "100%",
          sm: isStacked ? "min(100%, 240px)" : 380,
        },
        width: { xs: "100%", sm: isStacked ? "fit-content" : "auto" },
        boxShadow: (t) => cardShadowLight(t),
        border: 1,
        borderColor: (t) => alpha(t.palette.brand.heading, 0.08),
        ...sx,
      }}
    >
      {isStacked ? (
        <Stack direction="column" spacing={1.25} alignItems="flex-start">
          {thumb}
          {textColumn}
        </Stack>
      ) : (
        <Stack
          direction="row"
          spacing={{ xs: 1.5, sm: 2 }}
          alignItems="flex-start"
        >
          {thumb}
          {textColumn}
        </Stack>
      )}
    </Box>
  );
}

export function HeroSection() {
  const { t } = useTranslation();
  const theme = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const light = theme.palette.mode === "light";
  const floatCards = t("landing.hero.floatCards", { returnObjects: true }) as HeroFloatCard[];

  return (
    <Box
      ref={sectionRef}
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        /** Высоты как у отступа под шапку в AppShell (xs: 108, md: 52) */
        minHeight: {
          xs: "calc(100dvh - 108px)",
          md: "calc(100dvh - 52px)",
        },
        py: { xs: 2.5, md: 4 },
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
      {light && (
        <Box
          ref={auraRef}
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
      )}

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "7fr 3fr" },
            columnGap: { xs: 0, md: 4 },
            rowGap: { xs: 2.5, md: 0 },
            alignItems: "flex-start",
            flexShrink: 0,
          }}
        >
          <Box sx={{ minWidth: 0, pr: { md: 1 } }}>
            <Typography
              variant="h1"
              sx={{
                color: (th) => th.palette.brand.heading,
                lineHeight: 1.16,
                wordBreak: "break-word",
                letterSpacing: "-0.03em",
                fontSize: "clamp(1.55rem, 0.65rem + 4.2vw, 3.35rem)",
              }}
            >
              {t("landing.hero.title")}
            </Typography>
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <Stack spacing={2.25} sx={{ height: "100%" }}>
              <Typography
                component="p"
                variant="body1"
                sx={{
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontWeight: 400,
                  lineHeight: 1.65,
                  color: "text.secondary",
                  wordBreak: "break-word",
                  fontSize: {
                    xs: "clamp(1.04rem, 0.96rem + 0.5vw, 1.3125rem)",
                    md: "17px",
                  },
                }}
              >
                {t("landing.hero.subtitle")}
              </Typography>
              <Stack spacing={1.25} alignItems={{ xs: "stretch", sm: "flex-start" }}>
                <Button
                  component={NextLink}
                  href="/contacts"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    alignSelf: { xs: "stretch", sm: "flex-start" },
                    width: { xs: "100%", md: 310 },
                    maxWidth: { xs: "100%", md: 310 },
                    justifyContent: "center",
                    ...(theme.palette.mode === "light"
                      ? {
                          bgcolor: "#373737",
                          color: "#fff",
                          boxShadow: `0 10px 28px ${alpha("#373737", 0.35)}`,
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
                            boxShadow: `0 12px 32px ${alpha("#373737", 0.42)}`,
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
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box
          sx={{
            mt: { xs: 2, md: 3 },
            flex: 1,
            minHeight: { xs: 200, md: 220 },
            display: "flex",
            flexDirection: "column",
            position: "relative",
            borderRadius: { xs: 3, md: 4 },
            overflow: "hidden",
            bgcolor: (th) =>
              th.palette.mode === "light" ? "#E6E1E5" : alpha(th.palette.brand.paper, 0.55),
            border: 1,
            borderColor: (th) =>
              th.palette.mode === "light"
                ? alpha(th.palette.brand.heading, 0.08)
                : alpha(th.palette.divider, 0.4),
          }}
        >
          <Box
            sx={{
              flex: 1,
              minHeight: { xs: 180, md: 200 },
              px: { xs: 2, sm: 3 },
              py: { xs: 2, md: 3 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                maxWidth: 480,
                mx: "auto",
                px: { xs: 2.5, sm: 3.5 },
                py: { xs: 2, sm: 2.5 },
                borderRadius: 2,
                border: "1px dashed",
                borderColor: (th) =>
                  alpha("#373737", th.palette.mode === "light" ? 0.14 : 0.22),
                bgcolor: (th) =>
                  alpha("#ffffff", th.palette.mode === "light" ? 0.22 : 0.04),
              }}
            >
              <Typography
                component="p"
                sx={{
                  m: 0,
                  textAlign: "center",
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: { xs: "0.8125rem", md: "0.875rem" },
                  fontWeight: 500,
                  lineHeight: 1.55,
                  letterSpacing: "0.02em",
                  color: (th) =>
                    alpha("#373737", th.palette.mode === "light" ? 0.38 : 0.45),
                }}
              >
                {t("landing.hero.photoPlaceholder")}
              </Typography>
            </Box>
          </Box>

          <Stack
            spacing={1.5}
            sx={{
              display: { xs: "flex", md: "none" },
              px: 2,
              pb: 2,
              pt: 0,
            }}
          >
            {floatCards.map((c, index) => (
              <FloatCard
                key={c.title}
                {...c}
                layout={index === 0 ? "stacked" : "row"}
              />
            ))}
          </Stack>

          {floatCards[0] && (
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                left: 24,
                bottom: 28,
                zIndex: 2,
              }}
            >
              <FloatCard {...floatCards[0]} layout="stacked" />
            </Box>
          )}
          {floatCards[1] && (
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                right: 24,
                top: 28,
                zIndex: 2,
              }}
            >
              <FloatCard {...floatCards[1]} />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
