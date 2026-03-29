import type { Metadata } from "next";
import { LegalStubPage } from "@/app/legal/LegalStubPage";

export const metadata: Metadata = {
  title: "Соцсети",
};

export default function SocialPage() {
  return <LegalStubPage titleKey="pages.social.title" />;
}
