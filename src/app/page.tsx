import type { Metadata } from "next";
import { LandingPage } from "@/widgets/landing-home";
import { getCanonicalPath } from "@/shared/config/site-url";

export const metadata: Metadata = {
  alternates: {
    canonical: getCanonicalPath("/"),
  },
};

export default function HomePage() {
  return <LandingPage />;
}
