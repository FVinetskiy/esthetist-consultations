"use client";

import TelegramIcon from "@mui/icons-material/Telegram";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import NextLink from "next/link";
import { useTranslation } from "react-i18next";
import { RevealOnScroll } from "@/shared/ui/reveal-on-scroll";

export function SiteFooter() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        borderTop: 1,
        borderColor: "divider",
        boxShadow: (theme) =>
          theme.palette.mode === "light"
            ? `0 -10px 40px ${alpha(theme.palette.brand.heading, 0.06)}`
            : "0 -12px 40px rgba(0,0,0,0.25)",
        bgcolor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.brand.paper
            : "background.paper",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <RevealOnScroll offsetPx={10} durationSec={0.45}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexWrap="wrap"
            useFlexGap
          >
            <Stack direction="row" flexWrap="wrap" gap={2} useFlexGap>
              <Link
                component={NextLink}
                href="/contacts"
                color="inherit"
                underline="hover"
              >
                {t("landing.footer.contacts")}
              </Link>
              <Link
                component={NextLink}
                href="/privacy"
                color="inherit"
                underline="hover"
              >
                {t("landing.footer.privacy")}
              </Link>
              <Link
                component={NextLink}
                href="/offer"
                color="inherit"
                underline="hover"
              >
                {t("landing.footer.offer")}
              </Link>
              <Link
                component={NextLink}
                href="/social"
                color="inherit"
                underline="hover"
              >
                {t("landing.footer.social")}
              </Link>
            </Stack>
            <Stack spacing={0.75} alignItems={{ xs: "flex-start", sm: "flex-end" }}>
              <Typography variant="body2" color="text.secondary">
                © {year} {t("landing.footer.copyrightBrand")}
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                flexWrap="wrap"
                useFlexGap
                columnGap={0.75}
                rowGap={0.5}
              >
                <Typography component="span" variant="body2" color="text.secondary">
                  {t("landing.footer.devBy")}
                </Typography>
                <Link
                  href="https://t.me/FVinetskiy"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  underline="hover"
                  aria-label="Telegram: @FVinetskiy"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.5,
                    typography: "body2",
                    color: "text.secondary",
                  }}
                >
                  <TelegramIcon sx={{ fontSize: 18 }} aria-hidden />
                  @FVinetskiy
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </RevealOnScroll>
      </Container>
    </Box>
  );
}
