import React from "react";
import { cn } from "../../../lib/utils";

export interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Optional section ID for anchor links
   */
  id?: string;
  /**
   * Background color variant
   */
  bgVariant?: "black" | "transparent" | "gradient";
  /**
   * Whether to add border
   */
  bordered?: boolean;
  /**
   * Padding variant
   */
  padding?: "none" | "sm" | "md" | "lg";
}

/**
 * Section Wrapper Component
 * 
 * Reusable wrapper for landing page sections with consistent styling.
 * Provides options for background, borders, and padding.
 * 
 * @example
 * ```tsx
 * <SectionWrapper bgVariant="black" padding="lg" bordered>
 *   <YourContent />
 * </SectionWrapper>
 * ```
 */
export function SectionWrapper({
  children,
  className,
  id,
  bgVariant = "black",
  bordered = false,
  padding = "md",
}: SectionWrapperProps) {
  const bgStyles = {
    black: "bg-black",
    transparent: "bg-transparent",
    gradient: "bg-gradient-to-b from-black to-gray-900",
  };

  const paddingStyles = {
    none: "p-0",
    sm: "p-4",
    md: "p-8",
    lg: "p-16",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        bgStyles[bgVariant],
        paddingStyles[padding],
        bordered && "border border-[#373737]",
        className
      )}
    >
      {children}
    </section>
  );
}
