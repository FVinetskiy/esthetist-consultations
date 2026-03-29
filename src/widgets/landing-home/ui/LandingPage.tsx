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
      <RevealOnScroll>
        <ShowcaseSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <TariffsSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <FreeGuideSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <InfoSections />
      </RevealOnScroll>
      <RevealOnScroll>
        <BenefitsSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <ReviewsSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <FaqSection />
      </RevealOnScroll>
    </Box>
  );
}
