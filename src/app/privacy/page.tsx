import type { Metadata } from "next";
import { LegalStubPage } from "@/app/legal/LegalStubPage";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
};

export default function PrivacyPage() {
  return <LegalStubPage titleKey="pages.privacy.title" />;
}
