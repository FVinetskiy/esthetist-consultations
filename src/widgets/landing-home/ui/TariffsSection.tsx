"use client";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Section } from "./Section";
import { TariffCard } from "./TariffCard";

export function TariffsSection() {
  return (
    <Section id="tariffs">
      <Stack spacing={1.5} sx={{ mb: 4, maxWidth: 720, mx: "auto" }}>
        <Typography
          variant="h2"
          sx={{ textAlign: { xs: "left", md: "center" } }}
        >
          Тарифы:
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
