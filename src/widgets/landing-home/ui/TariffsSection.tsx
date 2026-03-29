"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { IconLayersSolid } from "@/shared/ui/icons/SolidIcons";
import { Section } from "./Section";
import { TariffCard } from "./TariffCard";

export function TariffsSection() {
  const { t } = useTranslation();

  return (
    <Section id="tariffs">
      <Stack spacing={1.5} sx={{ mb: 4, maxWidth: 720, mx: "auto" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: "flex-start", md: "center" }}
          spacing={1.5}
        >
          <Box
            sx={{
              display: "flex",
              color: "primary.main",
              transition: "transform 0.28s ease",
              "@media (hover: hover)": {
                "&:hover": { transform: "scale(1.06)" },
              },
              "@media (prefers-reduced-motion: reduce)": {
                "&:hover": { transform: "none" },
              },
            }}
            aria-hidden
          >
            <IconLayersSolid sx={{ fontSize: { xs: 32, sm: 36 } }} />
          </Box>
          <Typography
            variant="h2"
            component="span"
            sx={{
              color: (theme) => theme.palette.brand.heading,
              textAlign: { xs: "left", md: "center" },
            }}
          >
            {t("landing.tariffs.sectionTitle")}
          </Typography>
        </Stack>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: { xs: "left", md: "center" } }}
        >
          {t("landing.tariffs.sectionLead")}
        </Typography>
      </Stack>
      <Grid container spacing={3} alignItems="stretch">
        <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
          <TariffCard tier="lite" />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
          <TariffCard tier="pro" />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
          <TariffCard tier="proPlus" />
        </Grid>
      </Grid>
    </Section>
  );
}
