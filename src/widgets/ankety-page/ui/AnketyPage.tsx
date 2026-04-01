"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Script from "next/script";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RevealOnScroll } from "@/shared/ui/reveal-on-scroll";

export function AnketyPage() {
  const { t } = useTranslation();
  const [active, setActive] = useState<"consult" | "home">("consult");

  const yandexSrc = "https://forms.yandex.ru/u/69ca316649af4710d823ca21?iframe=1";

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 }, px: { xs: 2, sm: 3 } }}>
      <Script src="https://forms.yandex.ru/_static/embed.js" strategy="afterInteractive" />
      <RevealOnScroll>
        <Stack spacing={1} sx={{ mb: { xs: 3, md: 5 }, maxWidth: 720 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{ color: (th) => th.palette.brand.heading }}
          >
            {t("pages.ankety.title")}
          </Typography>
        </Stack>
      </RevealOnScroll>

      <RevealOnScroll delayMs={40}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          sx={{ mb: 1.5, maxWidth: 560 }}
        >
          <Button
            variant={active === "consult" ? "contained" : "outlined"}
            onClick={() => setActive("consult")}
          >
            {t("pages.ankety.switch.consult")}
          </Button>
          <Button
            variant={active === "home" ? "contained" : "outlined"}
            onClick={() => setActive("home")}
          >
            {t("pages.ankety.switch.home")}
          </Button>
        </Stack>
        <Box
          sx={{
            borderRadius: 2.5,
            overflow: "hidden",
            border: "1px solid",
            borderColor: "divider",
            bgcolor: "background.paper",
            minHeight: 720,
          }}
        >
          <iframe
            key={active}
            src={yandexSrc}
            frameBorder="0"
            name={`ya-form-${active}`}
            title={`Yandex form ${active}`}
            width="100%"
            style={{ minHeight: 720, display: "block" }}
          />
        </Box>
      </RevealOnScroll>
    </Container>
  );
}

