import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getCanonicalPath } from "@/shared/config/site-url";

export const metadata: Metadata = {
  title: "Обо мне",
  description:
    "Косметолог-эстетист Татьяна: индивидуальный подбор ухода и разбор составов — спокойно, структурно, без лишнего шума.",
  alternates: {
    canonical: getCanonicalPath("/about"),
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
