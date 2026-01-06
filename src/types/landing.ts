/**
 * Type definitions for the landing page components
 */

export interface NavLinkProps {
  label: string;
  href?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

export interface StatCardProps {
  value: string;
  label: string;
  description?: string;
}

export interface SocialLinkProps {
  platform: string;
  icon: React.ReactNode;
  href?: string;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
}
