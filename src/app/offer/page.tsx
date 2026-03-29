import type { Metadata } from "next";
import { LegalStubPage } from "@/app/legal/LegalStubPage";

export const metadata: Metadata = {
  title: "Публичная оферта",
};

export default function OfferPage() {
  return <LegalStubPage titleKey="pages.offer.title" />;
}
