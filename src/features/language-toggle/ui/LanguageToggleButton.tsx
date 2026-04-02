"use client";

import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Tooltip from "@mui/material/Tooltip";
import { alpha, useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import type { AppLocale } from "@/entities/locale";
import { setLocale } from "@/entities/locale";
import { useAppDispatch, useAppSelector } from "@/shared/lib/store";

const LOCALES: AppLocale[] = ["ru", "en"];

export function LanguageToggleButton() {
  const locale = useAppSelector((state) => state.locale.locale);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  const glassBorder = alpha(isLight ? "#ffffff" : "#ffffff", isLight ? 0.45 : 0.14);
  const glassOuterShadow = alpha(theme.palette.brand.heading, isLight ? 0.09 : 0.35);
  const trackBg = alpha(
    isLight ? "#ffffff" : "#1a1818",
    isLight ? 0.2 : 0.22,
  );
  const insetHighlight = alpha("#ffffff", isLight ? 0.65 : 0.12);

  return (
    <Tooltip title={t("header.language")} disableTouchListener enterDelay={400}>
      <Box
        component="span"
        role="group"
        aria-label={t("header.language")}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          p: "3px",
          gap: "2px",
          borderRadius: 999,
          position: "relative",
          isolation: "isolate",
          bgcolor: trackBg,
          backdropFilter: "blur(16px) saturate(165%)",
          WebkitBackdropFilter: "blur(16px) saturate(165%)",
          border: `1px solid ${glassBorder}`,
          boxShadow: `
            inset 0 1px 0 ${insetHighlight},
            0 2px 12px ${glassOuterShadow},
            0 1px 0 ${alpha("#ffffff", isLight ? 0.25 : 0.04)}
          `,
        }}
      >
        {LOCALES.map((code) => {
          const selected = locale === code;
          const label = code.toUpperCase();
          return (
            <ButtonBase
              key={code}
              type="button"
              disableRipple
              aria-pressed={selected}
              aria-label={code === "ru" ? t("header.langRu") : t("header.langEn")}
              onClick={() => dispatch(setLocale(code))}
              sx={{
                position: "relative",
                zIndex: 1,
                minWidth: 40,
                py: 0.45,
                px: 1.1,
                borderRadius: 999,
                fontSize: "0.7rem",
                fontWeight: 700,
                fontFamily: "var(--font-manrope), system-ui, sans-serif",
                letterSpacing: "0.04em",
                color: selected
                  ? theme.palette.brand.heading
                  : alpha(theme.palette.text.primary, isLight ? 0.72 : 0.65),
                bgcolor: selected
                  ? alpha(isLight ? "#ffffff" : "#ffffff", isLight ? 0.52 : 0.14)
                  : "transparent",
                boxShadow: selected
                  ? `inset 0 1px 0 ${alpha("#ffffff", isLight ? 0.85 : 0.2)},
                     0 2px 8px ${alpha(theme.palette.brand.heading, isLight ? 0.12 : 0.25)}`
                  : "none",
                transition:
                  "color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  bgcolor: selected
                    ? alpha(isLight ? "#ffffff" : "#ffffff", isLight ? 0.62 : 0.2)
                    : alpha("#ffffff", isLight ? 0.14 : 0.08),
                },
                "&:focus-visible": {
                  outline: `2px solid ${theme.palette.primary.main}`,
                  outlineOffset: 2,
                },
              }}
            >
              {label}
            </ButtonBase>
          );
        })}
      </Box>
    </Tooltip>
  );
}
