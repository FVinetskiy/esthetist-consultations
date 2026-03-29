"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export type ReviewSlide = { author: string; text: string };

type ReviewsSliderProps = {
  slides: ReviewSlide[];
};

const AUTOPLAY_MS = 3000;

export function ReviewsSlider({ slides }: ReviewsSliderProps) {
  const theme = useTheme();
  const { t } = useTranslation();
  const h = theme.palette.brand.heading;
  const light = theme.palette.mode === "light";

  if (slides.length === 0) return null;

  const canLoop = slides.length > 1;

  return (
    <Box
      role="region"
      aria-roledescription="carousel"
      aria-label={t("landing.reviews.title")}
      aria-live="polite"
      sx={{
        position: "relative",
        maxWidth: 720,
        mx: "auto",
        px: { xs: 0, sm: 1 },
        "& .swiper": {
          overflow: "hidden",
          paddingBottom: theme.spacing(5),
        },
        "& .swiper-wrapper": {
          alignItems: "stretch",
        },
        "& .swiper-slide": {
          height: "auto",
          display: "flex",
          justifyContent: "center",
          boxSizing: "border-box",
        },
        "& .swiper-pagination": {
          bottom: `${theme.spacing(0.5)} !important`,
        },
        "& .swiper-pagination-bullet": {
          width: 8,
          height: 8,
          margin: "0 5px !important",
          background: alpha(h, light ? 0.28 : 0.45),
          opacity: "1 !important",
          transition: "width 0.35s ease, background-color 0.25s ease",
        },
        "& .swiper-pagination-bullet-active": {
          width: 26,
          borderRadius: 999,
          background: `${theme.palette.primary.main} !important`,
        },
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={0}
        speed={650}
        loop={canLoop}
        loopAdditionalSlides={canLoop ? 2 : 0}
        grabCursor
        touchStartPreventDefault={false}
        preventClicks={false}
        preventClicksPropagation={false}
        autoplay={
          canLoop
            ? {
                delay: AUTOPLAY_MS,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: true,
              }
            : false
        }
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 4,
        }}
      >
        {slides.map((rev, index) => (
          <SwiperSlide key={`${rev.author}-${index}`}>
            <Box
              sx={{
                width: "100%",
                maxWidth: 620,
                mx: "auto",
                px: { xs: 2.5, sm: 4 },
                py: { xs: 3, sm: 4 },
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: { xs: 200, sm: 220 },
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 3,
                  borderRadius: 999,
                  bgcolor: "primary.main",
                  opacity: 0.45,
                  mb: 2.5,
                }}
                aria-hidden
              />
              <Typography
                component="blockquote"
                sx={{
                  m: 0,
                  fontSize: { xs: "1.05rem", sm: "1.15rem" },
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: "text.primary",
                  letterSpacing: "0.01em",
                  fontStyle: "italic",
                }}
              >
                {rev.text}
              </Typography>
              <Typography
                component="cite"
                variant="subtitle2"
                sx={{
                  mt: 3,
                  fontStyle: "normal",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontSize: "0.72rem",
                  color: "primary.main",
                }}
              >
                {rev.author}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
