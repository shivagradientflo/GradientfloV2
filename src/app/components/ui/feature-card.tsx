import React from "react";
import { cn } from "../../../lib/utils";

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

/**
 * Feature Card Component
 * 
 * Displays a feature with an icon and title, used throughout the landing page.
 */
export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div 
      className={cn(
        "bg-black content-stretch flex flex-col gap-3 items-center justify-center px-0 py-4 relative shrink-0 w-[200px] border border-[#373737]",
        className
      )}
    >
      {icon}
      <div className="content-stretch flex flex-col items-center relative shrink-0">
        <div className="flex flex-col font-['Geist',sans-serif] font-normal justify-center leading-none relative shrink-0 text-base text-center text-nowrap text-white">
          <p className="leading-[24.96px]">{title}</p>
        </div>
      </div>
      {description && (
        <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-none relative shrink-0 text-sm text-center text-[rgba(250,250,250,0.7)] px-4">
          <p className="leading-[1.5]">{description}</p>
        </div>
      )}
    </div>
  );
}
