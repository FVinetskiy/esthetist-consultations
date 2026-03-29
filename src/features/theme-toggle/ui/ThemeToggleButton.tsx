"use client";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";
import { toggleColorMode } from "@/entities/theme";
import { useAppDispatch, useAppSelector } from "@/shared/lib/store";

export function ThemeToggleButton() {
  const colorMode = useAppSelector((state) => state.theme.colorMode);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const isLight = colorMode === "light";
  const label = isLight ? t("theme.useDark") : t("theme.useLight");

  return (
    <Tooltip title={label} disableTouchListener enterDelay={400}>
      <IconButton
        type="button"
        color="inherit"
        onClick={() => {
          dispatch(toggleColorMode());
        }}
        aria-label={label}
        size="medium"
      >
        {isLight ? (
          <DarkModeOutlinedIcon fontSize="medium" />
        ) : (
          <LightModeOutlinedIcon fontSize="medium" />
        )}
      </IconButton>
    </Tooltip>
  );
}
