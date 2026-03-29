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
  const h = theme.palette.brand.heading;
  const items = t("landing.reviews.items", { returnObjects: true }) as Review[];
  const extra = t("landing.reviews.extra", { returnObjects: true }) as Review[];
  const slides = [...items, ...extra];

  return (
    <Section>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={{ xs: 1.25, sm: 2 }}
        sx={{ mb: 2, flexWrap: "nowrap" }}
      >
        <Box
          component="span"
          sx={{
            display: "inline-flex",
            color: "primary.main",
            flexShrink: 0,
            lineHeight: 0,
            opacity: theme.palette.mode === "light" ? 0.92 : 0.88,
            mt: 0.25,
          }}
          aria-hidden
        >
          <IconQuoteSolid sx={{ fontSize: { xs: 36, sm: 42 } }} />
        </Box>
        <Typography variant="h2" sx={{ color: h, textAlign: "left" }}>
          {t("landing.reviews.title")}
        </Typography>
      </Stack>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          maxWidth: 720,
          mx: "auto",
          mb: { xs: 3, md: 4 },
          textAlign: "center",
          lineHeight: 1.7,
          px: { xs: 0.5, sm: 0 },
        }}
      >
        {t("landing.reviews.intro")}
      </Typography>
      <ReviewsSlider slides={slides} />
    </Section>
  );
}
