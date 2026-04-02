"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { LanguageToggleButton } from "@/features/language-toggle";
import { ThemeToggleButton } from "@/features/theme-toggle";
import { SiteLogo } from "./SiteLogo";

const NAV_LINKS = [
  { href: "/", key: "nav.home" as const },
  { href: "/about", key: "nav.about" as const },
  { href: "/articles", key: "nav.articles" as const },
  { href: "/contacts", key: "nav.contacts" as const },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      sx={{
        zIndex: (theme) => theme.zIndex.appBar,
        WebkitTransform: "translateZ(0)",
        transform: "translateZ(0)",
        borderBottom: 1,
        borderColor: "divider",
        bgcolor: "background.default",
      }}
    >
      <Toolbar
        variant="dense"
        disableGutters
        sx={{
          minHeight: { xs: "auto", md: 52 },
          py: { xs: 1, md: 0.75 },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr auto", md: "1fr auto 1fr" },
            gridTemplateRows: { xs: "auto auto", md: "auto" },
            columnGap: { xs: 1, sm: 2 },
            rowGap: { xs: 1.25, md: 0 },
            alignItems: "center",
          }}
        >
        <Box
          component={Link}
          href="/"
          aria-label={t("nav.logoAria")}
          sx={{
            gridColumn: { xs: 1, md: 1 },
            gridRow: { xs: 1, md: 1 },
            justifySelf: "start",
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "primary.main",
            borderRadius: 1,
            outlineOffset: 2,
            transition: "opacity 0.2s ease, color 0.2s ease",
            "&:hover": { opacity: 0.88 },
            "&:focus-visible": {
              outline: (th) => `2px solid ${th.palette.primary.main}`,
            },
          }}
        >
          <SiteLogo />
        </Box>

        <Stack
          component="nav"
          direction="row"
          flexWrap="wrap"
          spacing={0.25}
          useFlexGap
          aria-label={t("nav.aria")}
          justifyContent="center"
          sx={{
            gridColumn: { xs: "1 / -1", md: 2 },
            gridRow: { xs: 2, md: 1 },
            justifySelf: "center",
            width: { xs: "100%", md: "auto" },
            rowGap: 0.5,
          }}
        >
          {NAV_LINKS.map(({ href, key }) => {
            const active = pathname === href;
            return (
              <Button
                key={href}
                component={Link}
                href={href}
                color={active ? "primary" : "inherit"}
                sx={{
                  fontWeight: active ? 600 : 400,
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  minWidth: "auto",
                  fontSize: { xs: "0.925rem", sm: "1rem" },
                  px: { xs: 1, sm: 1.25 },
                  py: 0.5,
                  whiteSpace: "nowrap",
                }}
              >
                {t(key)}
              </Button>
            );
          })}
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{
            gridColumn: { xs: 2, md: 3 },
            gridRow: { xs: 1, md: 1 },
            justifySelf: "end",
            position: "relative",
            zIndex: 2,
            flexShrink: 0,
          }}
        >
          <ThemeToggleButton />
          <LanguageToggleButton />
          <Button
            component={Link}
            href="/contacts"
            variant="contained"
            color="primary"
            size="small"
            sx={{
              display: { xs: "none", sm: "inline-flex" },
              fontWeight: 600,
              fontSize: "0.8125rem",
              px: 1.75,
              py: 0.65,
              whiteSpace: "nowrap",
              boxShadow: "none",
              "&:hover": { boxShadow: "none" },
            }}
          >
            {t("nav.call")}
          </Button>
        </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
