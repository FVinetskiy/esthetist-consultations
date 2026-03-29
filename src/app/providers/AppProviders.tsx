"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { I18nextProvider } from "react-i18next";
import { useMemo, type ReactNode } from "react";
import { createAppTheme } from "@/shared/config/mui-theme";
import { i18n, SyncI18nLocale } from "@/shared/lib/i18n";
import { StoreProvider, useAppSelector } from "@/shared/lib/store";

type AppProvidersProps = {
  children: ReactNode;
};

function MuiThemeGate({ children }: { children: ReactNode }) {
  const colorMode = useAppSelector((state) => state.theme.colorMode);
  const theme = useMemo(() => createAppTheme(colorMode), [colorMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <StoreProvider>
      <I18nextProvider i18n={i18n}>
        <SyncI18nLocale />
        <MuiThemeGate>{children}</MuiThemeGate>
      </I18nextProvider>
    </StoreProvider>
  );
}
