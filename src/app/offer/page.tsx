import type { Metadata } from "next";
import { LegalStubPage } from "@/app/legal/LegalStubPage";
import { getCanonicalPath } from "@/shared/config/site-url";

export const metadata: Metadata = {
  title: "Публичная оферта",
  description: "Условия оказания услуг и публичная оферта.",
  alternates: { canonical: getCanonicalPath("/offer") },
};

export default function OfferPage() {
  return <LegalStubPage titleKey="pages.offer.title" />;
}
