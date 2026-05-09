"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { Section } from "./Section";

const analysisPoints = [
  "типа кожи по уровню секреции кожного сала",
  "состояния барьерной функции",
  "уровня чувствительности и реактивности кожи",
  "состояния сосудистого русла",
  "тонуса кожи",
  "морфотипа старения",
];

const supportCards = [
  {
    title: "Разбор INCI",
    body: "Формирую подборки из современных сильных формул: оцениваю активы, базу средства, рабочие концентрации и доказательность компонентов.",
  },
  {
    title: "Схема в синергии",
    body: "Каждая позиция ухода дополняет другую и работает по разным звеньям проблемы, чтобы схема максимально эффективно вела к задачам коррекции.",
  },
  {
    title: "Приоритетность задач",
    body: "Сначала стабилизация барьера, чувствительности и сосудистых реакций. Затем — активы под пигментацию, воспаления, текстуру и anti-age коррекцию.",
  },
];

function AnalysisMarkIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        d="M12 2.8c3.4 3 6.4 6.5 6.4 10.4a6.4 6.4 0 0 1-12.8 0C5.6 9.3 8.6 5.8 12 2.8Z"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M8.7 12.4 11 14.7l4.5-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </SvgIcon>
  );
}

function MiniCheckIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 16 16" {...props}>
      <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.2" />
      <path
        d="m4.8 8.2 2 2 4.5-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </SvgIcon>
  );
}

export function PhilosophySection() {
  const theme = useTheme();
  const headingColor = theme.palette.brand.heading;
  const isLight = theme.palette.mode === "light";
  const accentColor = "#CFA99A";
  const rightCardBackground = (index: number) =>
    index === 0
      ? {
          backgroundImage: `linear-gradient(90deg, ${alpha("#2B1711", 0.6)}, ${alpha(
            "#2B1711",
            0.22,
          )}), url("/images/landing/inci-background.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      : {
          bgcolor: alpha("#fff", 0.44),
        };

  return (
    <Section
      id="philosophy"
      sx={{
        py: { xs: 5, md: 7 },
        background: "#EEDDD5",
      }}
    >
      <Stack spacing={{ xs: 3.5, md: 5 }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Stack spacing={{ xs: 1.5, md: 2 }} sx={{ width: "min(100%, 840px)" }}>
            <Typography
              variant="h2"
              sx={{
                color: headingColor,
                maxWidth: 760,
                mx: "auto",
              }}
            >
              Философия подбора ухода
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                maxWidth: 820,
                mx: "auto",
                lineHeight: { xs: 1.55, md: 1.65 },
                fontWeight: 400,
              }}
            >
              Осознанный уход начинается с понимания процессов, происходящих в коже.
              Эффективная схема строится с учётом состава средств, синергии компонентов
              и правильной приоритетности задач коррекции.
            </Typography>
          </Stack>
        </Box>

        <Grid container spacing={{ xs: 2.5, md: 3 }} columns={12} alignItems="stretch">
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                height: "100%",
                borderRadius: { xs: 3, md: 4 },
                border: `1px solid ${alpha("#8E6E62", 0.18)}`,
                bgcolor: alpha("#fff", 0.5),
                boxShadow: `0 22px 54px ${alpha("#8E6E62", 0.13)}`,
                px: { xs: 2.5, sm: 4, md: 5.5 },
                py: { xs: 4, md: 5 },
              }}
            >
              <Stack spacing={{ xs: 3, md: 3.5 }}>
                <Stack spacing={{ xs: 2, md: 2.5 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: alpha(headingColor, 0.48),
                      fontSize: { xs: 11, md: 12 },
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.32em",
                      textAlign: "center",
                    }}
                  >
                    Основа подбора
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      color: headingColor,
                      fontFamily: theme.typography.h2.fontFamily,
                      fontWeight: 400,
                      lineHeight: 1.08,
                    }}
                  >
                    Комплексный анализ кожи
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      maxWidth: 740,
                      color: "text.primary",
                      lineHeight: 1.75,
                    }}
                  >
                    Комплексный анализ характеристик кожи позволяет выстроить систему
                    ухода, которая будет работать именно в вашем случае.
                  </Typography>
                </Stack>

                <Grid container columns={12} alignItems="flex-start">
                  <Grid size={{ xs: 12 }}>
                    <Stack spacing={2.5}>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ color: "text.primary", fontWeight: 500, mb: 1.4 }}
                        >
                          Анкета разработана для определения:
                        </Typography>
                        <Box
                          component="ul"
                          sx={{
                            m: 0,
                            p: 0,
                            listStyle: "none",
                            display: "grid",
                            gap: 1.15,
                          }}
                        >
                          {analysisPoints.map((point) => (
                            <Box
                              key={point}
                              component="li"
                              sx={{
                                display: "grid",
                                gridTemplateColumns: "22px 1fr",
                                columnGap: 1.2,
                                alignItems: "flex-start",
                              }}
                            >
                              <MiniCheckIcon
                                sx={{ color: accentColor, fontSize: 18, mt: 0.25 }}
                                aria-hidden
                              />
                              <Typography
                                variant="body2"
                                sx={{ lineHeight: 1.65, pt: 0.05 }}
                              >
                                {point}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          pt: 2.5,
                          borderTop: `1px solid ${alpha(
                            headingColor,
                            isLight ? 0.12 : 0.2,
                          )}`,
                          lineHeight: 1.7,
                        }}
                      >
                        Рельеф, текстура и тон кожи дополнительно оцениваются по внешним
                        характеристикам на фото- и видеоматериалах.
                      </Typography>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: { xs: "1fr", sm: "44px 1fr" },
                          gap: { xs: 1.5, sm: 2 },
                          alignItems: "center",
                          mt: 0.5,
                          borderRadius: 2.5,
                          bgcolor: alpha(accentColor, 0.09),
                          px: { xs: 2, sm: 2.5 },
                          py: { xs: 2, sm: 2.25 },
                        }}
                      >
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            borderRadius: "50%",
                            display: "grid",
                            placeItems: "center",
                            color: "#fff",
                            bgcolor: alpha(accentColor, 0.7),
                          }}
                          aria-hidden
                        >
                          <AnalysisMarkIcon sx={{ fontSize: 25 }} />
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{ color: headingColor, lineHeight: 1.65 }}
                        >
                          Такой глубокий анализ помогает увидеть полную картину: понять,
                          что коже нужно в первую очередь, грамотно выстроить
                          приоритетные задачи коррекции и определить стратегию ухода.
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={{ xs: 2, md: 2.5 }} sx={{ height: "100%" }}>
              {supportCards.map((card, index) => (
                <Box
                  key={card.title}
                  sx={{
                    flex: 1,
                    minHeight: { xs: 148, md: 0 },
                    borderRadius: { xs: 2.5, md: 3 },
                    border: `1px solid ${alpha("#8E6E62", 0.15)}`,
                    boxShadow: `0 14px 36px ${alpha("#8E6E62", 0.1)}`,
                    px: { xs: 2.5, md: 3 },
                    py: { xs: 2.5, md: 3 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                    ...rightCardBackground(index),
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      width: { xs: 110, md: 140 },
                      height: { xs: 110, md: 140 },
                      borderRadius: "50%",
                      right: { xs: -40, md: -48 },
                      top: index === 1 ? "auto" : -48,
                      bottom: index === 1 ? -52 : "auto",
                      bgcolor: alpha(accentColor, 0.08),
                    }}
                    aria-hidden
                  />
                  <Stack spacing={1.25} sx={{ position: "relative" }}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: headingColor,
                        ...(index === 0 && { color: "#fff" }),
                        fontFamily: theme.typography.h2.fontFamily,
                        fontSize: index === 0 ? { xs: 28, md: 32 } : undefined,
                        fontWeight: 500,
                        lineHeight: 1.25,
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        maxWidth: 360,
                        lineHeight: 1.65,
                        ...(index === 0 && { color: alpha("#fff", 0.88) }),
                      }}
                    >
                      {card.body}
                    </Typography>
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Section>
  );
}
