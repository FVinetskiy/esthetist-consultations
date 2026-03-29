"use client";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import { alpha, useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const SHOW_AFTER = 320;

export function ScrollToTopFab() {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Fade in={visible} timeout={280} mountOnEnter unmountOnExit>
      <Fab
        color="primary"
        aria-label={t("a11y.scrollToTop")}
        onClick={scrollTop}
        size="medium"
        sx={{
          position: "fixed",
          right: { xs: "max(12px, env(safe-area-inset-right))", sm: 24 },
          bottom: { xs: "max(12px, env(safe-area-inset-bottom))", sm: 24 },
          zIndex: (th) => th.zIndex.snackbar,
          boxShadow:
            theme.palette.mode === "light"
              ? `0 10px 28px ${alpha(theme.palette.primary.main, 0.42)}, 0 2px 8px ${alpha(theme.palette.brand.heading, 0.12)}`
              : 8,
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow:
              theme.palette.mode === "light"
                ? `0 14px 36px ${alpha(theme.palette.primary.main, 0.5)}`
                : 12,
          },
          "@media (prefers-reduced-motion: reduce)": {
            transition: "none",
            "&:hover": { transform: "none" },
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Fade>
  );
}
