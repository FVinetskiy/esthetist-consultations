"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { IconHelpSolid } from "@/shared/ui/icons/SolidIcons";
import { Section } from "./Section";

type FaqItem = { q: string; a: string[] };

export function FaqSection() {
  const { t } = useTranslation();
  const theme = useTheme();
  const items = t("landing.faq.items", { returnObjects: true }) as FaqItem[];
  const [expanded, setExpanded] = useState<string | false>(false);
  const [revealed, setRevealed] = useState(false);
  const cardsWrapRef = useRef<HTMLDivElement>(null);
  const h = theme.palette.brand.heading;
  const light = theme.palette.mode === "light";

  const shellBase = {
    borderRadius: 3.5,
    bgcolor: light ? alpha("#fff", 0.58) : alpha("#fff", 0.03),
    border: `1px solid ${alpha(h, light ? 0.1 : 0.2)}`,
    boxShadow: light ? `0 6px 22px ${alpha(h, 0.06)}` : `0 8px 24px rgba(0,0,0,0.3)`,
    overflow: "hidden",
    transition: "border-color 0.24s ease, box-shadow 0.24s ease",
    "@media (hover: hover)": {
      "&:hover": {
        borderColor: alpha(h, light ? 0.18 : 0.28),
        boxShadow: light ? `0 9px 26px ${alpha(h, 0.085)}` : `0 10px 28px rgba(0,0,0,0.38)`,
      },
    },
    "&:has(.MuiAccordion-root.Mui-expanded)": {
      borderColor: alpha(theme.palette.primary.main, light ? 0.34 : 0.46),
      boxShadow: light
        ? `0 12px 30px ${alpha(h, 0.1)}, 0 0 0 1px ${alpha(theme.palette.primary.main, 0.16)}`
        : `0 12px 30px rgba(0,0,0,0.45)`,
    },
  } as const;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = cardsWrapRef.current;
    if (!root) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setRevealed(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    io.observe(root);
    return () => io.disconnect();
  }, []);

  return (
    <Section tinted id="faq">
      <Stack spacing={1.35} alignItems="center" sx={{ mb: { xs: 2.5, md: 3.5 } }}>
        <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.85 }}>
          <IconHelpSolid sx={{ fontSize: 22, color: "primary.main" }} aria-hidden />
          <Typography
            variant="caption"
            sx={{
              borderRadius: 999,
              px: 1.1,
              py: 0.35,
              bgcolor: alpha(theme.palette.primary.main, light ? 0.14 : 0.2),
              color: light ? alpha(h, 0.9) : alpha("#fff", 0.88),
              letterSpacing: "0.04em",
            }}
          >
            ЧАСТЫЕ ВОПРОСЫ
          </Typography>
        </Box>
        <Typography variant="h2" sx={{ color: h, textAlign: "center", lineHeight: 1.12, maxWidth: 820 }}>
          {t("landing.faq.title")}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.72, maxWidth: 760, textAlign: "center" }}
        >
          {t("landing.faq.lead")}
        </Typography>
      </Stack>

      <Grid ref={cardsWrapRef} container spacing={{ xs: 1.15, md: 1.5 }} sx={{ mb: 3 }}>
        {items.map((item, index) => {
          const panelId = `faq-${index}`;
          return (
            <Grid
              key={item.q}
              size={{ xs: 12, md: 6 }}
              sx={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? "translate3d(0,0,0)" : "translate3d(0,10px,0)",
                transition: "opacity 0.28s ease, transform 0.34s ease",
                transitionDelay: `${index * 45}ms`,
              }}
            >
              <Box sx={shellBase}>
                <Accordion
                  disableGutters
                  elevation={0}
                  expanded={expanded === panelId}
                  onChange={(_, isExpanded) =>
                    setExpanded(isExpanded ? panelId : false)
                  }
                  slotProps={{ transition: { unmountOnExit: true } }}
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
                          fontSize: "1.45rem",
                        }}
                      />
                    }
                    sx={{
                      px: { xs: 1.4, md: 1.7 },
                      py: { xs: 1.1, md: 1.25 },
                      minHeight: 70,
                      alignItems: "center",
                      "& .MuiAccordionSummary-content": {
                        margin: "0 !important",
                        marginRight: 1.2,
                      },
                      "& .MuiAccordionSummary-expandIconWrapper": {
                        alignSelf: "center",
                        marginRight: 0.1,
                      },
                    }}
                  >
                    <Stack spacing={0.6}>
                      <Typography
                        fontWeight={600}
                        sx={{
                          lineHeight: 1.3,
                          textAlign: "left",
                          fontSize: { xs: "1rem", md: "1.08rem" },
                        }}
                      >
                        {item.q}
                      </Typography>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      px: { xs: 1.4, md: 1.7 },
                      pt: 0.3,
                      pb: 1.9,
                      borderTop: `1px solid ${alpha(h, light ? 0.1 : 0.18)}`,
                      bgcolor: light
                        ? alpha(theme.palette.brand.bg, 0.35)
                        : alpha("#000", 0.12),
                    }}
                  >
                    <Stack spacing={1.5} sx={{ mt: "10px" }}>
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
            </Grid>
          );
        })}
      </Grid>

      <Stack alignItems="center" sx={{ px: 1 }}>
        <Button
          component={Link}
          href="/contacts"
          variant="contained"
          size="large"
          sx={{
            boxShadow: (t) =>
              t.palette.mode === "light"
                ? `0 10px 28px ${alpha(t.palette.primary.main, 0.42)}`
                : undefined,
            "&:hover": {
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
