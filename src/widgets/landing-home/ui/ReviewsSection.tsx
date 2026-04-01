"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { IconQuoteSolid } from "@/shared/ui/icons/SolidIcons";
import { ReviewsSlider } from "./ReviewsSlider";
import { Section } from "./Section";

type Review = { author: string; text: string };

export function ReviewsSection() {
  const { t } = useTranslation();
  const theme = useTheme();
  const heading = theme.palette.brand.heading;
  const items = t("landing.reviews.items", { returnObjects: true }) as Review[];
  const extra = t("landing.reviews.extra", { returnObjects: true }) as Review[];
  const slides = [...items, ...extra];

  return (
    <Section>
      <Stack spacing={1.25} alignItems="center" sx={{ mb: 1.5 }}>
        <Box
          component="span"
          sx={{
            display: "inline-flex",
            color: "primary.main",
            lineHeight: 0,
            opacity: theme.palette.mode === "light" ? 0.92 : 0.88,
          }}
          aria-hidden
        >
          <IconQuoteSolid sx={{ fontSize: { xs: 34, sm: 40 } }} />
        </Box>
        <Typography variant="h2" sx={{ color: heading, textAlign: "center" }}>
          {t("landing.reviews.title")}
        </Typography>
      </Stack>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          maxWidth: 760,
          mx: "auto",
          mb: { xs: 3, md: 4 },
          textAlign: "center",
          lineHeight: 1.7,
        }}
      >
        {t("landing.reviews.intro")}
      </Typography>

      <ReviewsSlider slides={slides} />
    </Section>
  );
}
