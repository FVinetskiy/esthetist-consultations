"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { IconCheckSolid, IconHeartSolid } from "@/shared/ui/icons/SolidIcons";
import { Section } from "./Section";

type BenefitItem = { title: string; body: string };

const FEATURE_IMAGE = "/benefits-photo.png";

export function BenefitsSection() {
  const { t } = useTranslation();
  const theme = useTheme();
  const items = t("landing.benefits.items", { returnObjects: true }) as BenefitItem[];
  const leftItems = items.slice(0, 3);
  const rightItems = items.slice(3, 6);
  const heading = theme.palette.brand.heading;
  const light = theme.palette.mode === "light";

  return (
    <Section tinted>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: { xs: 3, md: 4 },
          px: { xs: 2, md: 4 },
          py: { xs: 4, md: 6 },
          background: light ? "#F2F2F2" : alpha(theme.palette.background.paper, 0.8),
        }}
      >
        <Stack spacing={1.25} alignItems="center" sx={{ mb: { xs: 3.5, md: 5 } }}>
          <Box sx={{ display: "flex", color: "primary.main" }} aria-hidden>
            <IconHeartSolid sx={{ fontSize: { xs: 30, sm: 36 } }} />
          </Box>
          <Typography variant="h2" sx={{ color: heading, textAlign: "center", maxWidth: 760 }}>
            {t("landing.benefits.title")}
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr minmax(240px, 320px) 1fr" },
            gap: { xs: 2.5, md: 3.5 },
            alignItems: "center",
            maxWidth: 1080,
            mx: "auto",
          }}
        >
          <Stack spacing={1.5}>
            {leftItems.map((item, idx) => (
              <Box
                key={item.title}
                sx={{
                  p: { xs: 1.5, md: 1.75 },
                  borderRadius: 2.5,
                  backgroundColor: alpha(theme.palette.background.paper, light ? 0.72 : 0.3),
                  border: `1px solid ${alpha(heading, light ? 0.12 : 0.25)}`,
                  animation: "benefitFadeIn 540ms ease both",
                  animationDelay: `${idx * 90}ms`,
                  "@keyframes benefitFadeIn": {
                    from: { opacity: 0, transform: "translateY(10px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                  },
                }}
              >
                <Stack direction="row" spacing={1.1} alignItems="flex-start">
                  <IconCheckSolid sx={{ color: "primary.main", fontSize: 20, mt: 0.2 }} />
                  <Box>
                    <Typography variant="h6" sx={{ color: heading, mb: 0.4, lineHeight: 1.28 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                      {item.body}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            ))}
          </Stack>

          <Box
            sx={{
              mx: "auto",
              width: "100%",
              maxWidth: 320,
              aspectRatio: "3 / 4.7",
              borderRadius: "999px",
              overflow: "hidden",
              boxShadow: light
                ? `0 16px 38px ${alpha(heading, 0.18)}`
                : `0 16px 38px rgba(0,0,0,0.45)`,
              border: `1px solid ${alpha(heading, light ? 0.12 : 0.22)}`,
              animation: "heroFloat 6s ease-in-out infinite",
              "@keyframes heroFloat": {
                "0%, 100%": { transform: "translateY(0)" },
                "50%": { transform: "translateY(-8px)" },
              },
              "@media (prefers-reduced-motion: reduce)": {
                animation: "none",
              },
            }}
          >
            <Box
              component="img"
              src={FEATURE_IMAGE}
              alt="Skincare routine visual"
              loading="lazy"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>

          <Stack spacing={1.5}>
            {rightItems.map((item, idx) => (
              <Box
                key={item.title}
                sx={{
                  p: { xs: 1.5, md: 1.75 },
                  borderRadius: 2.5,
                  backgroundColor: alpha(theme.palette.background.paper, light ? 0.72 : 0.3),
                  border: `1px solid ${alpha(heading, light ? 0.12 : 0.25)}`,
                  animation: "benefitFadeIn 540ms ease both",
                  animationDelay: `${(idx + 3) * 90}ms`,
                }}
              >
                <Stack direction="row" spacing={1.1} alignItems="flex-start">
                  <IconCheckSolid sx={{ color: "primary.main", fontSize: 20, mt: 0.2 }} />
                  <Box>
                    <Typography variant="h6" sx={{ color: heading, mb: 0.4, lineHeight: 1.28 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                      {item.body}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Section>
  );
}
