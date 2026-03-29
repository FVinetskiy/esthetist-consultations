import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { landingEn } from "@/shared/config/landing/content.en";
import { landingRu } from "@/shared/config/landing/content.ru";
import enJson from "@/shared/config/locales/en.json";
import ruJson from "@/shared/config/locales/ru.json";

const ruTranslation = {
  ...ruJson,
  landing: landingRu,
};

const enTranslation = {
  ...enJson,
  landing: landingEn,
};

const resources = {
  ru: { translation: ruTranslation },
  en: { translation: enTranslation },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init(
    {
      resources,
      lng: "ru",
      fallbackLng: "ru",
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
    },
    () => undefined,
  );
}

export { i18n };
