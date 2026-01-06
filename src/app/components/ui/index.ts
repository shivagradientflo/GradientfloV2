/**
 * UI Components Index
 * 
 * Centralized exports for all reusable UI components.
 * Makes imports cleaner throughout the application.
 * 
 * @example
 * ```tsx
 * import { Button, FeatureCard, Logo } from "@/components/ui";
 * ```
 */

export { NavLink } from "./nav-link";
export type { NavLinkProps } from "./nav-link";

export { ButtonCustom } from "./button-custom";
export type { ButtonCustomProps } from "./button-custom";

export { FeatureCard } from "./feature-card";
export type { FeatureCardProps } from "./feature-card";

export { Logo } from "./logo";

export { SectionWrapper } from "./section-wrapper";
export type { SectionWrapperProps } from "./section-wrapper";

export {
  RepoIntelligenceIcon,
  LearningIntelligenceIcon,
  PRApplicationRateIcon,
  DeveloperIntelligenceIcon,
  RecommendationsIcon,
  DiscordIcon,
  ArrowIcon,
} from "./icons";
