import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getCanonicalPath } from "@/shared/config/site-url";

export const metadata: Metadata = {
  title: "Анкеты",
  description:
    "Анкеты перед консультацией и для подбора домашнего ухода: заполните форму — ответы откроются как черновик письма в почте.",
  alternates: {
    canonical: getCanonicalPath("/ankety"),
  },
};

export default function AnketyLayout({ children }: { children: ReactNode }) {
  return children;
}
