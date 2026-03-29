"use client";

import type { MouseEvent } from "react";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Tooltip from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";
import type { AppLocale } from "@/entities/locale";
import { setLocale } from "@/entities/locale";
import { useAppDispatch, useAppSelector } from "@/shared/lib/store";

export function LanguageToggleButton() {
  const locale = useAppSelector((state) => state.locale.locale);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleLocale = (_: MouseEvent<HTMLElement>, value: AppLocale | null) => {
    if (value !== null) {
      dispatch(setLocale(value));
    }
  };

  return (
    <Tooltip title={t("header.language")} disableTouchListener enterDelay={400}>
      <Stack direction="row" alignItems="center" spacing={0.75} component="span">
        <PublicOutlinedIcon
          sx={{ color: "text.secondary", fontSize: 22 }}
          aria-hidden
        />
        <ToggleButtonGroup
          exclusive
          value={locale}
          onChange={handleLocale}
          size="small"
          aria-label={t("header.language")}
        >
          <ToggleButton value="ru" aria-label={t("header.langRu")}>
            RU
          </ToggleButton>
          <ToggleButton value="en" aria-label={t("header.langEn")}>
            EN
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Tooltip>
  );
}
