"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { IconHelpSolid, IconMailSolid } from "@/shared/ui/icons/SolidIcons";
import { Section } from "./Section";

type FaqItem = { q: string; a: string[] };

export function FaqSection() {
  const { t } = useTranslation();
  const theme = useTheme();
  const items = t("landing.faq.items", { returnObjects: true }) as FaqItem[];
  const h = theme.palette.brand.heading;
  const light = theme.palette.mode === "light";

  const shellBase = {
    borderRadius: 2.5,
    bgcolor: "background.paper",
    border: `1px solid ${alpha(h, light ? 0.14 : 0.22)}`,
    boxShadow: light
      ? `0 4px 20px ${alpha(h, 0.08)}, 0 0 0 1px ${alpha(h, 0.05)}`
      : `0 6px 24px rgba(0,0,0,0.32), 0 0 0 1px ${alpha("#fff", 0.06)}`,
    overflow: "hidden",
    transition: "box-shadow 0.28s ease, border-color 0.28s ease",
    "&:hover": {
      borderColor: alpha(h, light ? 0.22 : 0.32),
      boxShadow: light
        ? `0 6px 26px ${alpha(h, 0.1)}, 0 0 0 1px ${alpha(h, 0.07)}`
        : `0 8px 28px rgba(0,0,0,0.38)`,
    },
    "&:has(.MuiAccordion-root.Mui-expanded)": {
      borderColor: alpha(theme.palette.primary.main, light ? 0.38 : 0.45),
      boxShadow: light
        ? `0 10px 36px ${alpha(h, 0.11)}, 0 0 0 1px ${alpha(theme.palette.primary.main, 0.18)}`
        : `0 12px 36px rgba(0,0,0,0.45)`,
    },
  } as const;

  return (
    <Section tinted id="faq">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1.5}
        sx={{ mb: 3 }}
      >
        <Box
          sx={{
            color: "primary.main",
            display: "flex",
            transition: "transform 0.28s ease",
            "@media (hover: hover)": { "&:hover": { transform: "rotate(-6deg)" } },
            "@media (prefers-reduced-motion: reduce)": {
              "&:hover": { transform: "none" },
            },
          }}
          aria-hidden
        >
          <IconHelpSolid sx={{ fontSize: 34 }} />
        </Box>
        <Typography variant="h2" sx={{ color: h, textAlign: "center" }}>
          {t("landing.faq.title")}
        </Typography>
      </Stack>
      <Stack spacing={2} sx={{ maxWidth: 800, mx: "auto", mb: 4 }}>
        {items.map((item) => (
          <Box key={item.q} sx={shellBase}>
            <Accordion
              disableGutters
              elevation={0}
              sx={{
                bgcolor: "transparent",
                boxShadow: "none",
                border: "none",
                "&:before": { display: "none" },
                margin: "0 !important",
                "&.Mui-expanded": {
                  margin: "0 !important",
                },
                "& .MuiCollapse-root": {
                  margin: 0,
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "primary.main",
                      fontSize: "1.35rem",
                    }}
                  />
                }
                sx={{
                  px: 2,
                  py: 1.5,
                  minHeight: 52,
                  alignItems: "flex-start",
                  "& .MuiAccordionSummary-content": {
                    margin: "10px 0",
                    marginRight: 2,
                    overflow: "hidden",
                    alignSelf: "stretch",
                  },
                  "& .MuiAccordionSummary-expandIconWrapper": {
                    marginTop: "10px",
                    marginRight: 0.5,
                  },
                }}
              >
                <Typography
                  fontWeight={600}
                  sx={{ lineHeight: 1.45, pr: 0.5, textAlign: "left" }}
                >
                  {item.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  px: 2,
                  pt: 0,
                  pb: 2.5,
                  borderTop: `1px solid ${alpha(h, light ? 0.1 : 0.18)}`,
                  bgcolor: light
                    ? alpha(theme.palette.brand.bg, 0.45)
                    : alpha("#000", 0.12),
                }}
              >
                <Stack spacing={1.5}>
                  {item.a.map((para) => (
                    <Typography
                      key={para.slice(0, 48)}
                      variant="body2"
                      color="text.secondary"
                      lineHeight={1.75}
                    >
                      {para}
                    </Typography>
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
      </Stack>
      <Stack alignItems="center" sx={{ px: 1 }}>
        <Button
          component={Link}
          href="/contacts"
          variant="contained"
          size="large"
          startIcon={<IconMailSolid />}
          sx={{
            px: { xs: 2.75, sm: 4 },
            py: 1.5,
            borderRadius: 999,
            fontSize: { xs: "0.9rem", sm: "1rem" },
            fontWeight: 600,
            letterSpacing: "0.02em",
            boxShadow:
              theme.palette.mode === "light"
                ? `0 12px 36px ${alpha(theme.palette.primary.main, 0.42)}, 0 4px 12px ${alpha(theme.palette.brand.heading, 0.1)}`
                : 10,
            background: (th) =>
              th.palette.mode === "light"
                ? `linear-gradient(135deg, ${th.palette.primary.main} 0%, ${th.palette.primary.dark} 100%)`
                : undefined,
            "&:hover": {
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 16px 44px ${alpha(theme.palette.primary.main, 0.5)}`
                  : 14,
              transform: "translateY(-2px)",
            },
            "@media (prefers-reduced-motion: reduce)": {
              "&:hover": { transform: "none" },
            },
          }}
        >
          {t("landing.faq.askCta")}
        </Button>
      </Stack>
    </Section>
  );
}
