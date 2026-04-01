import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getCanonicalPath } from "@/shared/config/site-url";

export const metadata: Metadata = {
  title: "Статьи",
  description:
    "Материалы о базовом уходе: очищение, барьер кожи, SPF, увлажнение и аккуратное введение активов. Образовательные тексты.",
  alternates: {
    canonical: getCanonicalPath("/articles"),
  },
};

export default function ArticlesLayout({ children }: { children: ReactNode }) {
  return children;
}
