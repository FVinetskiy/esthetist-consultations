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
    body: "Формирую подборки из современных сильных формул, где важна вся конструкция состава: активы, база средства, рабочие концентрации и доказательность компонентов.",
  },
  {
    title: "Синергия схемы",
    body: "Каждая позиция ухода дополняет другую и работает по разным звеньям проблемы, чтобы схема максимально эффективно вела к задачам коррекции.",
  },
  {
    title: "Приоритетность задач",
    body: "Сначала стабилизация барьера, чувствительности и сосудистых реакций. Затем — активы под пигментацию, воспаления, текстуру и anti-age коррекцию.",
  },
];

const priorityScheme = {
  main: "Сначала стабилизация барьера, чувствительности и сосудистых реакций",
  bridge: "Затем - активы под",
  items: ["Пигментация", "Воспаления", "Текстура", "Anti-age коррекция"],
};

function AnalysisMarkIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        d="M12 4.4c1.9 0 3.4 1.5 3.4 3.4v7.7a3.4 3.4 0 0 1-6.8 0V7.8c0-1.9 1.5-3.4 3.4-3.4Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <path
        d="M8.6 15.3c-1.4.2-2.5 1.4-2.5 2.8 0 1.1.9 2 2 2h7.8c1.1 0 2-.9 2-2 0-1.4-1.1-2.6-2.5-2.8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </SvgIcon>
  );
}

function MiniCheckIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 16 16" {...props}>
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
          bgcolor: alpha("#fff", 0.44),
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
                background: "#FBF7F1",
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
                          bgcolor: "#F8F2EC",
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
                    {index === 2 ? (
                      <Box
                        sx={{
                          pt: 0.4,
                          display: "grid",
                          gap: 1.15,
                        }}
                      >
                        <Box
                          sx={{
                            mx: "auto",
                            width: "min(100%, 276px)",
                            borderRadius: 2,
                            border: `1px solid ${alpha("#8E6E62", 0.13)}`,
                            bgcolor: alpha("#fff", 0.58),
                            boxShadow: `0 10px 28px ${alpha("#8E6E62", 0.11)}`,
                            px: { xs: 1.35, sm: 1.6 },
                            py: 1.15,
                            textAlign: "center",
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: headingColor,
                              fontSize: { xs: 12.5, sm: 13 },
                              lineHeight: 1.28,
                              fontWeight: 500,
                            }}
                          >
                            {priorityScheme.main}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            mx: "auto",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            position: "relative",
                            pb: 1.1,
                            "&::before": {
                              content: '""',
                              position: "absolute",
                              left: "50%",
                              bottom: 0,
                              width: 2,
                              height: 9,
                              transform: "translate(-1px, 0)",
                              bgcolor: "#8E6E62",
                            },
                            "&::after": {
                              content: '""',
                              position: "absolute",
                              left: "50%",
                              bottom: 0,
                              width: "100%",
                              maxWidth: "76%",
                              height: 2,
                              transform: "translate(-50%, 0)",
                              bgcolor: "#8E6E62",
                            },
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 999,
                              border: `1px solid ${alpha("#8E6E62", 0.1)}`,
                              bgcolor: alpha("#fff", 0.58),
                              px: 1,
                              py: 0.35,
                              color: alpha(headingColor, 0.5),
                              fontSize: 9.5,
                              lineHeight: 1.2,
                              fontWeight: 500,
                              whiteSpace: "nowrap",
                            }}
                          >
                            {priorityScheme.bridge}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            display: "grid",
                            gridTemplateColumns: {
                              xs: "repeat(2, minmax(0, 1fr))",
                              sm: "repeat(4, minmax(0, 1fr))",
                            },
                            gap: 0.75,
                          }}
                        >
                          {priorityScheme.items.map((item) => (
                            <Box
                              key={item}
                              sx={{
                                position: "relative",
                                minHeight: 48,
                                borderRadius: 1.5,
                                border: `1px solid ${alpha("#8E6E62", 0.12)}`,
                                bgcolor: alpha("#fff", 0.52),
                                boxShadow: `0 7px 16px ${alpha("#8E6E62", 0.08)}`,
                                display: "grid",
                                placeItems: "center",
                                px: 0.55,
                                textAlign: "center",
                                "&::before": {
                                  content: '""',
                                  position: "absolute",
                                  left: "50%",
                                  top: -12,
                                  width: 2,
                                  height: 12,
                                  transform: "translate(-1px, 0)",
                                  bgcolor: "#8E6E62",
                                },
                              }}
                            >
                              <Typography
                                variant="caption"
                                sx={{
                                  color: "text.secondary",
                                  fontSize: { xs: 9.8, sm: 9.4 },
                                  lineHeight: 1.18,
                                  fontWeight: 500,
                                }}
                              >
                                {item}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    ) : (
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
                    )}
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
