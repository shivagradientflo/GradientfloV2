/**
 * Application Constants
 * 
 * Centralized configuration and data for the landing page.
 */

/**
 * Navigation links configuration
 */
export const NAV_LINKS = [
  { label: "Why", href: "#why" },
  { label: "Agents", href: "#agents" },
  { label: "Enterprise", href: "#enterprise" },
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Blogs", href: "#blogs" },
] as const;

/**
 * Features configuration for Code Indexing section
 */
export const CODE_INDEXING_FEATURES = [
  {
    id: "repo-intelligence",
    title: "Repo Intelligence",
    description: "Deep analysis of your repository structure and patterns",
  },
  {
    id: "learning-intelligence",
    title: "Learning Intelligence",
    description: "AI-powered insights from code history",
  },
  {
    id: "pr-application-rate",
    title: "PR & Application Rate",
    description: "Track and improve code review efficiency",
  },
  {
    id: "developer-intelligence",
    title: "Developer Intelligence",
    description: "Personalized learning recommendations",
  },
  {
    id: "recommendations",
    title: "Recommendations",
    description: "Actionable suggestions for improvement",
  },
] as const;

/**
 * Social platform links
 */
export const SOCIAL_LINKS = [
  { platform: "Discord", href: "#" },
  { platform: "GitHub", href: "#" },
  { platform: "Slack", href: "#" },
  { platform: "Linear", href: "#" },
] as const;

/**
 * App metadata
 */
export const APP_METADATA = {
  name: "Gradientflo",
  tagline: "Learning Infrastructure for Engineering Teams",
  description:
    "Transform code activities into learning moments. Gradientflo identifies growth areas and supports improvement.",
  announcement: "Agentic Learning Platform for Developers",
} as const;
