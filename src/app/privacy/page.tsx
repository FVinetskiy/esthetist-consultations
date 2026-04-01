import type { Metadata } from "next";
import { LegalStubPage } from "@/app/legal/LegalStubPage";
import { getCanonicalPath } from "@/shared/config/site-url";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Как обрабатываются персональные данные и cookies.",
  alternates: { canonical: getCanonicalPath("/privacy") },
};

export default function PrivacyPage() {
  return <LegalStubPage titleKey="pages.privacy.title" />;
}
