"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { showcaseMedia } from "@/shared/config/showcase-media";
import { Section } from "../Section";
import { MarqueeStrip } from "./MarqueeStrip";

export function TailoredShowcaseSection() {
  const { t } = useTranslation();
  const theme = useTheme();
  const h = theme.palette.brand.heading;
  const light = theme.palette.mode === "light";
  const cardBorder = alpha(h, light ? 0.1 : 0.14);

  return (
    <Section
      id="tailored-showcase"
      sx={{
        py: { xs: 4, md: 6 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1120,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "45fr 55fr" },
          gap: { xs: 2, md: 3 },
          alignItems: "stretch",
        }}
      >
        <Box
          sx={{
            borderRadius: 3,
            border: `1px solid ${alpha("#fff", light ? 0.58 : 0.14)}`,
            bgcolor: light ? alpha("#fff", 0.34) : alpha("#ffffff", 0.08),
            boxShadow: light
              ? `0 18px 60px ${alpha(h, 0.12)}, inset 0 1px 0 ${alpha("#fff", 0.72)}`
              : `0 18px 60px rgba(0,0,0,0.32), inset 0 1px 0 ${alpha("#fff", 0.12)}`,
            backdropFilter: "blur(18px) saturate(1.25)",
            WebkitBackdropFilter: "blur(18px) saturate(1.25)",
            p: { xs: 2.25, sm: 3, md: 4 },
            display: "flex",
            alignItems: "center",
          }}
        >
          <Stack spacing={1.5} sx={{ textAlign: "left" }}>
            <Typography
              variant="h2"
              sx={{
                color: h,
                lineHeight: 1.12,
              }}
            >
              Независимый подбор косметики
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.75 }}
            >
              Я не продаю косметику и не сотрудничаю с брендами, поэтому не
              заинтересована продвигать конкретные средства.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.75 }}
            >
              В подборки попадают продукты, которые проходят оценку по составу:
              активы с доказательной базой, рабочие концентрации, общая логика
              формулы и соотношение цена/качество из того, что реально доступно
              на рынке.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.75 }}
            >
              Вы сами решаете, где покупать средства из подборок: по наличию,
              лучшей цене и подходящим условиям доставки.
            </Typography>
          </Stack>
        </Box>

        <Box
          sx={{
            minWidth: 0,
            borderRadius: 3,
            overflow: "hidden",
            border: `1px solid ${cardBorder}`,
            bgcolor: light ? alpha("#fff", 0.46) : alpha(theme.palette.background.paper, 0.55),
            boxShadow: light
              ? `0 12px 40px ${alpha(h, 0.08)}, 0 0 0 1px ${cardBorder}`
              : `0 10px 36px rgba(0,0,0,0.35), 0 0 0 1px ${alpha("#fff", 0.06)}`,
            p: { xs: 2, sm: 2.5, md: 3 },
            display: "flex",
            alignItems: "center",
          }}
        >
          <Stack
            spacing={1.4}
            sx={{
              width: "100%",
              maskImage:
                "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
            }}
          >
            <MarqueeStrip
              images={showcaseMedia.marqueeA}
              durationSec={52}
              cellSize={72}
              gapPx={10}
            />
            <MarqueeStrip
              images={showcaseMedia.marqueeB}
              durationSec={64}
              reverse
              cellSize={72}
              gapPx={10}
            />
            <MarqueeStrip
              images={showcaseMedia.marqueeC}
              durationSec={58}
              cellSize={72}
              gapPx={10}
            />
          </Stack>
        </Box>
      </Box>
    </Section>
  );
}
