"use client";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { Section } from "./Section";

const GUIDE_DOWNLOAD_PATH = "/downloads/basic-skincare-guide.pdf";

export function FreeGuideSection() {
  const { t } = useTranslation();
  const paragraphs = t("landing.freeGuide.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <Section id="free-guide" tinted>
      <Card
        elevation={0}
        sx={{
          position: "relative",
          overflow: "hidden",
          maxWidth: 960,
          mx: "auto",
          borderRadius: { xs: 5, md: 7 },
          bgcolor: (th) =>
            th.palette.mode === "light"
              ? "#F2F2F3"
              : alpha(th.palette.background.paper, 0.92),
          backgroundImage: (th) =>
            th.palette.mode === "light"
              ? "linear-gradient(90deg, #efeff0 0%, #f6f6f7 50%, #eeeeef 100%)"
              : "linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            left: { xs: -42, md: -36 },
            bottom: { xs: -34, md: -30 },
            width: { xs: 116, md: 148 },
            height: { xs: 116, md: 148 },
            borderRadius: "42% 58% 53% 47% / 42% 43% 57% 58%",
            bgcolor: (th) => alpha(th.palette.primary.main, th.palette.mode === "light" ? 0.12 : 0.18),
            filter: "blur(0.2px)",
          }}
        />
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            right: { xs: -56, md: -42 },
            top: { xs: -48, md: -34 },
            width: { xs: 132, md: 170 },
            height: { xs: 132, md: 170 },
            borderRadius: "55% 45% 48% 52% / 58% 40% 60% 42%",
            bgcolor: (th) => alpha(th.palette.brand.accent, th.palette.mode === "light" ? 0.2 : 0.22),
          }}
        />
        <CardContent sx={{ px: { xs: 2.5, md: 5 }, py: { xs: 4, md: 5 }, position: "relative", zIndex: 1 }}>
          <Stack spacing={2.25} alignItems="center" textAlign="center">
            <Typography variant="h3" sx={{ color: (theme) => theme.palette.brand.heading, maxWidth: 660 }}>
              {t("landing.freeGuide.title")}
            </Typography>
            <Stack spacing={1.35} sx={{ maxWidth: 760 }}>
              {paragraphs.map((paragraph) => (
                <Typography
                  key={paragraph}
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.75 }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Stack>
            <Button
              component="a"
              href={GUIDE_DOWNLOAD_PATH}
              download
              variant="contained"
              size="large"
              sx={{
                mt: 0.5,
                boxShadow: (t) =>
                  t.palette.mode === "light"
                    ? `0 10px 28px ${alpha(t.palette.primary.main, 0.42)}`
                    : undefined,
                "&:hover": { transform: "translateY(-2px)" },
                "@media (prefers-reduced-motion: reduce)": {
                  "&:hover": { transform: "none" },
                },
              }}
            >
              {t("landing.freeGuide.cta")}
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Section>
  );
}
