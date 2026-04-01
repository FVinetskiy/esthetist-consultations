import type { Metadata, Viewport } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { DM_Serif_Display, Manrope } from "next/font/google";
import { AppShell } from "@/app/AppShell";
import { AppProviders } from "@/app/providers/AppProviders";
import { SiteJsonLd } from "@/app/site-json-ld";
import { getSiteUrl } from "@/shared/config/site-url";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Консультации по подбору ухода за кожей",
    template: "%s · Татьяна — косметолог-эстетист",
  },
  description:
    "Персональные схемы ухода без универсальных рекомендаций и перегруза: консультации косметолога-эстетиста, разбор составов (INCI), спокойный формат.",
  applicationName: "Консультации по уходу за кожей",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Консультации по подбору ухода за кожей",
    url: siteUrl,
    title: "Консультации по подбору ухода за кожей",
    description:
      "Персональные схемы ухода без универсальных рекомендаций и перегруза: консультации косметолога-эстетиста, разбор составов (INCI), спокойный формат.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="ru"
      className={`${dmSerif.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <body>
        <SiteJsonLd />
        <AppRouterCacheProvider>
          <AppProviders>
            <AppShell>{children}</AppShell>
          </AppProviders>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
