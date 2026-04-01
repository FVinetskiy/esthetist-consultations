"use client";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export type ReviewSlide = { author: string; text: string };

type ReviewsSliderProps = {
  slides: ReviewSlide[];
};

const AVATARS = [
  "https://i.pravatar.cc/120?img=32",
  "https://i.pravatar.cc/120?img=47",
  "https://i.pravatar.cc/120?img=5",
  "https://i.pravatar.cc/120?img=26",
] as const;

export function ReviewsSlider({ slides }: ReviewsSliderProps) {
  const theme = useTheme();
  const { t } = useTranslation();
  const heading = theme.palette.brand.heading;
  const light = theme.palette.mode === "light";

  if (slides.length === 0) return null;

  return (
    <Box
      role="region"
      aria-roledescription="carousel"
      aria-label={t("landing.reviews.title")}
      sx={{
        position: "relative",
        maxWidth: 1140,
        mx: "auto",
        px: { xs: 0, sm: 0.5 },
        "& .swiper": {
          overflow: "visible",
          pt: 1,
          pb: 1.5,
        },
        "& .swiper-slide": {
          height: "auto",
          py: 0.75,
          transition: "transform 0.35s ease, opacity 0.35s ease",
          opacity: 0.55,
        },
        "& .swiper-slide-active": {
          opacity: 1,
        },
        "& .swiper-pagination": {
          position: "relative",
          mt: 1,
        },
        "& .swiper-pagination-bullet": {
          width: 8,
          height: 8,
          opacity: "1 !important",
          background: alpha(heading, light ? 0.28 : 0.4),
        },
        "& .swiper-pagination-bullet-active": {
          width: 22,
          borderRadius: 999,
          background: `${theme.palette.primary.main} !important`,
        },
      }}
    >
      <Swiper
        modules={[Navigation, Autoplay, EffectCoverflow, Pagination]}
        navigation={{
          prevEl: ".reviews-prev",
          nextEl: ".reviews-next",
        }}
        effect="coverflow"
        centeredSlides
        grabCursor
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 1.35,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        slidesPerView={1.06}
        spaceBetween={16}
        loop
        speed={780}
        breakpoints={{
          700: { slidesPerView: 1.6, spaceBetween: 18 },
          1024: { slidesPerView: 2.2, spaceBetween: 20 },
          1320: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {slides.map((rev, index) => (
          <SwiperSlide key={`${rev.author}-${index}`}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                border: `1px solid ${alpha(heading, light ? 0.12 : 0.2)}`,
                bgcolor: alpha(theme.palette.background.paper, light ? 0.76 : 0.36),
                overflow: "hidden",
                position: "relative",
                transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
                boxShadow: light
                  ? `0 12px 24px ${alpha(heading, 0.08)}`
                  : "0 10px 22px rgba(0,0,0,0.28)",
                "@media (hover: hover)": {
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: alpha(theme.palette.primary.main, light ? 0.45 : 0.5),
                    boxShadow: light
                      ? `0 18px 30px ${alpha(heading, 0.12)}`
                      : "0 14px 30px rgba(0,0,0,0.34)",
                  },
                },
              }}
            >
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: (th) =>
                    `linear-gradient(90deg, ${th.palette.primary.main} 0%, ${alpha(th.palette.primary.main, 0.2)} 100%)`,
                }}
              />
              <Box sx={{ p: { xs: 2, md: 2.25 }, flexGrow: 1 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.72,
                    minHeight: { xs: "unset", md: 165 },
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {rev.text}
                </Typography>
              </Box>

              <Box
                sx={{
                  borderTop: `1px solid ${alpha(heading, light ? 0.1 : 0.16)}`,
                  px: { xs: 2, md: 2.25 },
                  py: 1.5,
                }}
              >
                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Avatar
                      src={AVATARS[index % AVATARS.length]}
                      alt={rev.author}
                      sx={{
                        width: 38,
                        height: 38,
                        border: `2px solid ${alpha(theme.palette.primary.main, 0.35)}`,
                      }}
                    />
                    <Typography variant="subtitle2" sx={{ color: heading, fontWeight: 700 }}>
                      {rev.author}
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={0.2} aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarRoundedIcon key={i} sx={{ fontSize: 16, color: "#E9B949" }} />
                    ))}
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      <Stack direction="row" justifyContent="center" spacing={1.25} sx={{ mt: 2 }}>
        <Box
          component="button"
          className="reviews-prev"
          aria-label={t("a11y.carouselPrev")}
          sx={{
            width: 44,
            height: 30,
            borderRadius: 999,
            border: "none",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: alpha(heading, light ? 0.12 : 0.22),
            color: alpha(heading, 0.75),
            transition: "transform 0.2s ease, background-color 0.2s ease",
            "@media (hover: hover)": {
              "&:hover": {
                transform: "translateY(-1px)",
                bgcolor: alpha(heading, light ? 0.18 : 0.3),
              },
            },
          }}
        >
          <ArrowBackRoundedIcon sx={{ fontSize: 18 }} />
        </Box>
        <Box
          component="button"
          className="reviews-next"
          aria-label={t("a11y.carouselNext")}
          sx={{
            width: 44,
            height: 30,
            borderRadius: 999,
            border: "none",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "primary.main",
            color: "#fff",
            transition: "transform 0.2s ease, filter 0.2s ease",
            "@media (hover: hover)": {
              "&:hover": {
                transform: "translateY(-1px)",
                filter: "brightness(1.07)",
              },
            },
          }}
        >
          <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
        </Box>
      </Stack>
    </Box>
  );
}
