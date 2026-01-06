import React from "react";
import { HeroSection } from "./sections/hero-section";
import ZBlackOriginal from "../../../imports/ZBlack";

/**
 * Landing Page Component
 * 
 * Main landing page that combines all sections.
 * 
 * NOTE: This is a refactored wrapper. The original ZBlack component contains
 * all sections. For a complete refactor, each section should be extracted into
 * its own component following the established patterns.
 * 
 * Recommended structure for future refactoring:
 * - HeroSection (✓ Complete)
 * - CodeIndexingSection
 * - QualityQuestionsSection  
 * - OriginalRequestsSection
 * - StatsSection
 * - SocialLinksSection
 * - GenerativeQASection
 * - FooterSection
 */
export function LandingPage() {
  // For now, render the original component
  // TODO: Break down into individual sections
  return <ZBlackOriginal />;
}

export default LandingPage;
