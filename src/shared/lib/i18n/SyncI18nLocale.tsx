"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/shared/lib/store";

export function SyncI18nLocale() {
  const locale = useAppSelector((state) => state.locale.locale);
  const { i18n } = useTranslation();

  useEffect(() => {
    void i18n.changeLanguage(locale);
    document.documentElement.lang = locale === "ru" ? "ru" : "en";
  }, [locale, i18n]);

  return null;
}
