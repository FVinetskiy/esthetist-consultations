"use client";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { Section } from "./Section";

const GUIDE_DOWNLOAD_PATH = "/downloads/basic-skincare-guide.pdf";
const GUIDE_IMAGE_PATH = "/images/landing/basic-skincare-guide.png";

export function FreeGuideSection() {
  const { t } = useTranslation();
  const paragraphs = t("landing.freeGuide.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <Section id="free-guide">
      <Card
        elevation={0}
        sx={{
          position: "relative",
          overflow: "hidden",
          maxWidth: 960,
          mx: "auto",
          borderRadius: { xs: 5, md: 7 },
          border: "1px solid",
          borderColor: (theme) =>
            alpha(theme.palette.brand.heading, theme.palette.mode === "light" ? 0.14 : 0.22),
          bgcolor: "#FBF7F1",
          backgroundImage: "none",
          boxShadow: "none",
        }}
      >
        <CardContent
          sx={{
            px: { xs: 2.5, md: 5 },
            py: { xs: 4, md: 5 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Grid container spacing={{ xs: 2.5, md: 4 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                component="img"
                src={GUIDE_IMAGE_PATH}
                alt="Базовый уход за кожей"
                loading="lazy"
                sx={{
                  display: "block",
                  width: "100%",
                  borderRadius: { xs: 3, md: 4 },
                  border: "1px solid",
                  borderColor: (theme) =>
                    alpha(
                      theme.palette.brand.heading,
                      theme.palette.mode === "light" ? 0.1 : 0.18,
                    ),
                  boxShadow: (theme) =>
                    theme.palette.mode === "light"
                      ? `0 16px 38px ${alpha(theme.palette.brand.heading, 0.12)}`
                      : "0 16px 38px rgba(0,0,0,0.32)",
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={2.25} alignItems="flex-start" textAlign="left">
                <Typography
                  variant="h3"
                  sx={{ color: (theme) => theme.palette.brand.heading, maxWidth: 660 }}
                >
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
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Section>
  );
}
