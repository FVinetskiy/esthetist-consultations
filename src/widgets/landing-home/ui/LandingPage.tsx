"use client";

import Box from "@mui/material/Box";
import { RevealOnScroll } from "@/shared/ui/reveal-on-scroll";
import { BenefitsSection } from "./BenefitsSection";
import { FaqSection } from "./FaqSection";
import { FreeGuideSection } from "./FreeGuideSection";
import { HeroSection } from "./HeroSection";
import { InfoSections } from "./InfoSections";
import { ReviewsSection } from "./ReviewsSection";
import { ShowcaseSection } from "./showcase/ShowcaseSection";
import { TariffsSection } from "./TariffsSection";

export function LandingPage() {
  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <HeroSection />
      <RevealOnScroll direction="left" offsetPx={52} durationSec={0.62}>
        <InfoSections />
      </RevealOnScroll>
      <RevealOnScroll direction="right" offsetPx={52} durationSec={0.62}>
        <ShowcaseSection />
      </RevealOnScroll>
      <RevealOnScroll direction="left" offsetPx={52} durationSec={0.62}>
        <TariffsSection />
      </RevealOnScroll>
      <RevealOnScroll direction="right" offsetPx={52} durationSec={0.62}>
        <FreeGuideSection />
      </RevealOnScroll>
      <RevealOnScroll direction="left" offsetPx={52} durationSec={0.62}>
        <BenefitsSection />
      </RevealOnScroll>
      <RevealOnScroll direction="right" offsetPx={52} durationSec={0.62}>
        <ReviewsSection />
      </RevealOnScroll>
      <RevealOnScroll direction="left" offsetPx={52} durationSec={0.62}>
        <FaqSection />
      </RevealOnScroll>
    </Box>
  );
}
