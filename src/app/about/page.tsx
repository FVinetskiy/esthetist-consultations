"use client";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { RevealOnScroll } from "@/shared/ui/reveal-on-scroll";

const PORTRAIT = "/about/portrait.jpg";
const WORKSPACE = "/about/workspace.jpg";

export default function AboutPage() {
  const { t } = useTranslation();

  const introParagraphs = t("pages.about.introParagraphs", {
    returnObjects: true,
  }) as string[];
  const values = t("pages.about.values", { returnObjects: true }) as string[];

  const border = (theme: import("@mui/material/styles").Theme) =>
    `1px solid ${theme.palette.mode === "light" ? "rgba(15, 23, 42, 0.08)" : "rgba(248, 250, 252, 0.12)"}`;

  return (
    <Box sx={{ maxWidth: 1040, mx: "auto" }}>
      <RevealOnScroll>
        <Box>
          <Typography
            variant="overline"
            sx={{
              display: "block",
              letterSpacing: "0.22em",
              color: "text.secondary",
              fontWeight: 600,
              mb: 1,
            }}
          >
            {t("pages.about.title")}
          </Typography>

          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: (theme) => theme.palette.brand.heading,
              mb: 0.5,
            }}
          >
            {t("pages.about.name")}
          </Typography>

          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ mb: 3, maxWidth: 640 }}
          >
            {t("pages.about.role")}
            <Box component="span" sx={{ display: "block", mt: 1, fontWeight: 400 }}>
              {t("pages.about.subtitle")}
            </Box>
          </Typography>
        </Box>
      </RevealOnScroll>

      <Grid container spacing={{ xs: 3, md: 4 }} alignItems="flex-start">
        <Grid size={{ xs: 12, md: 5 }}>
          <RevealOnScroll>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: "4 / 5",
                overflow: "hidden",
                borderRadius: 1,
                border: border,
              }}
            >
              <Image
                src={PORTRAIT}
                alt={t("pages.about.photoAltPortrait")}
                fill
                sizes="(max-width: 900px) 100vw, 380px"
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>

            <Box
              sx={{
                position: "relative",
                width: "100%",
                mt: 2,
                aspectRatio: "16 / 10",
                overflow: "hidden",
                borderRadius: 1,
                border: border,
              }}
            >
              <Image
                src={WORKSPACE}
                alt={t("pages.about.photoAltWorkspace")}
                fill
                sizes="(max-width: 900px) 100vw, 380px"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </RevealOnScroll>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <RevealOnScroll delayMs={60}>
            <Box
              sx={{
                border: border,
                borderRadius: 1,
                px: { xs: 2, sm: 3 },
                py: { xs: 2.5, sm: 3 },
              }}
            >
              <StackedParagraphs paragraphs={introParagraphs} />

              <Divider sx={{ my: 3 }} />

              <Typography
                variant="overline"
                sx={{
                  letterSpacing: "0.18em",
                  color: "text.secondary",
                  fontWeight: 600,
                  display: "block",
                  mb: 1.5,
                }}
              >
                {t("pages.about.valuesTitle")}
              </Typography>

              <Box component="ul" sx={{ m: 0, pl: 2.25 }}>
                {values.map((line, i) => (
                  <Typography
                    key={i}
                    component="li"
                    variant="body1"
                    color="text.secondary"
                    sx={{ lineHeight: 1.75, mb: i === values.length - 1 ? 0 : 1.25 }}
                  >
                    {line}
                  </Typography>
                ))}
              </Box>

              <Divider sx={{ my: 3 }} />

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.8 }}
              >
                {t("pages.about.closing")}
              </Typography>
            </Box>
          </RevealOnScroll>
        </Grid>
      </Grid>
    </Box>
  );
}

function StackedParagraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {paragraphs.map((p, i) => (
        <Typography
          key={i}
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.8 }}
        >
          {p}
        </Typography>
      ))}
    </Box>
  );
}
