"use client";

import StarIcon from "@mui/icons-material/Star";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme, type Theme } from "@mui/material/styles";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { showcaseMedia } from "@/shared/config/showcase-media";
import { Section } from "../Section";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { MarqueeStrip } from "./MarqueeStrip";

function StarsRow({ count = 5 }: { count?: number }) {
  return (
    <Stack direction="row" spacing={0.25} sx={{ color: "#b8952e" }} aria-hidden>
      {Array.from({ length: count }, (_, i) => (
        <StarIcon key={i} sx={{ fontSize: 18 }} />
      ))}
    </Stack>
  );
}

export function ShowcaseSection() {
  const { t } = useTranslation();
  const theme = useTheme();
  const h = theme.palette.brand.heading;
  const light = theme.palette.mode === "light";

  const cardBorder = alpha(h, light ? 0.1 : 0.14);
  const cardShadow = light
    ? `0 12px 40px ${alpha(h, 0.08)}, 0 0 0 1px ${cardBorder}`
    : `0 10px 36px rgba(0,0,0,0.35), 0 0 0 1px ${alpha("#fff", 0.06)}`;

  const cardShell = {
    borderRadius: 3,
    overflow: "hidden" as const,
    border: `1px solid ${cardBorder}`,
    bgcolor: "background.paper",
    boxShadow: cardShadow,
    height: "100%",
  };

  return (
    <Section
      id="showcase"
      sx={{
        py: { xs: 4, md: 6 },
        bgcolor: (th: Theme) =>
          th.palette.mode === "light"
            ? alpha(th.palette.brand.paper, 0.4)
            : th.palette.action.hover,
      }}
    >
      <Stack spacing={{ xs: 3, md: 4 }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
        >
          <Box
            sx={{
              width: "min(100%, 720px)",
              textAlign: "center",
            }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                letterSpacing: "0.2em",
                fontWeight: 600,
                display: "block",
                mb: 1,
              }}
            >
              {t("landing.showcase.kicker")}
            </Typography>
            <Typography variant="h2" sx={{ color: h }}>
              {t("landing.showcase.title")}
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={2} columns={12}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2} sx={{ height: "100%" }}>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: h,
                    mb: 0.75,
                    fontFamily: theme.typography.h2.fontFamily,
                  }}
                >
                  {t("landing.skinCompare.title")}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.65, mb: 2 }}
                >
                  {t("landing.skinCompare.hint")}
                </Typography>
                <BeforeAfterSlider />
              </Box>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={2}>
              <Grid container spacing={2} columns={12}>
                <Grid size={{ xs: 12, sm: 7 }}>
                  <Box
                    sx={{
                      ...cardShell,
                      position: "relative",
                      minHeight: { xs: 200, sm: 220 },
                    }}
                  >
                    <Image
                      src={showcaseMedia.experience}
                      alt={t("landing.showcase.experienceImageAlt")}
                      fill
                      sizes="(max-width: 600px) 100vw, 420px"
                      style={{ objectFit: "cover" }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(165deg, ${alpha("#000", 0.15)} 0%, ${alpha("#000", 0.55)} 100%)`,
                      }}
                    />
                    <Stack
                      spacing={1}
                      sx={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        p: { xs: 2, sm: 2.5 },
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          color: "#fff",
                          fontFamily: theme.typography.h2.fontFamily,
                          fontWeight: 500,
                          textShadow: `0 2px 16px ${alpha("#000", 0.45)}`,
                        }}
                      >
                        {t("landing.showcase.experienceTitle")}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: alpha("#fff", 0.92),
                          maxWidth: 420,
                          lineHeight: 1.65,
                        }}
                      >
                        {t("landing.showcase.experienceBody")}
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 5 }}>
                  <Box
                    sx={{
                      ...cardShell,
                      p: { xs: 2, sm: 2.5 },
                      display: "flex",
                      flexDirection: "column",
                      minHeight: { xs: 200, sm: 220 },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: h,
                        fontFamily: theme.typography.h2.fontFamily,
                        fontWeight: 500,
                        mb: 1.5,
                        flex: 1,
                      }}
                    >
                      {t("landing.showcase.statsTitle")}
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
                      <Chip
                        label={t("landing.showcase.statChip1")}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                      <Chip
                        label={t("landing.showcase.statChip2")}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={-1.5}
                      sx={{ justifyContent: "flex-end", mt: "auto" }}
                    >
                      {showcaseMedia.avatars.map((src, i) => (
                        <Avatar
                          key={src}
                          src={src}
                          alt=""
                          sx={{
                            width: 44,
                            height: 44,
                            border: `2px solid ${theme.palette.background.paper}`,
                            zIndex: 3 - i,
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </Grid>
              </Grid>

              <Box sx={{ ...cardShell, p: { xs: 2, sm: 2.5 } }}>
                <Stack spacing={1.25} sx={{ mb: 2.5 }}>
                  <MarqueeStrip images={showcaseMedia.marqueeA} durationSec={28} />
                  <MarqueeStrip
                    images={showcaseMedia.marqueeB}
                    durationSec={34}
                    reverse
                  />
                  <MarqueeStrip images={showcaseMedia.marqueeC} durationSec={31} />
                </Stack>
                <Stack spacing={0.75} sx={{ textAlign: { xs: "left", sm: "center" } }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: h,
                      fontFamily: theme.typography.h2.fontFamily,
                      fontWeight: 500,
                    }}
                  >
                    {t("landing.showcase.tailoredTitle")}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ maxWidth: 520, mx: { sm: "auto" }, lineHeight: 1.65 }}
                  >
                    {t("landing.showcase.tailoredSubtitle")}
                  </Typography>
                </Stack>
              </Box>

              <Box sx={{ ...cardShell, p: { xs: 2, sm: 2.5 } }}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  alignItems={{ sm: "center" }}
                  justifyContent="space-between"
                >
                  <Box>
                    <StarsRow />
                    <Typography
                      variant="h4"
                      sx={{ color: h, fontWeight: 600, my: 0.5 }}
                    >
                      {t("landing.showcase.trustPercent")}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ maxWidth: 280, lineHeight: 1.6 }}
                    >
                      {t("landing.showcase.trustLine")}
                    </Typography>
                  </Box>
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="flex-start"
                    sx={{
                      pt: { xs: 1, sm: 0 },
                      borderTop: { xs: `1px solid ${alpha(h, 0.1)}`, sm: "none" },
                    }}
                  >
                    <Avatar
                      src={showcaseMedia.quoteAvatar}
                      alt={t("landing.showcase.quoteAuthor")}
                      sx={{ width: 48, height: 48 }}
                    />
                    <Box sx={{ minWidth: 0 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "text.primary",
                          fontStyle: "italic",
                          lineHeight: 1.65,
                          mb: 1.5,
                        }}
                      >
                        «{t("landing.showcase.quote")}»
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: h, fontWeight: 600 }}
                      >
                        {t("landing.showcase.quoteAuthor")}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {t("landing.showcase.quoteRole")}
                      </Typography>
                      <Box sx={{ mt: 1 }}>
                        <StarsRow />
                      </Box>
                    </Box>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Section>
  );
}
