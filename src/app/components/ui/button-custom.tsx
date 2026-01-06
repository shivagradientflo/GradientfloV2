import React from "react";
import { cn } from "../../../lib/utils";

export interface ButtonCustomProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "icon";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

/**
 * Custom Button Component
 * 
 * Reusable button with multiple variants for the landing page.
 */
export function ButtonCustom({ 
  children, 
  variant = "primary", 
  size = "md", 
  onClick, 
  className 
}: ButtonCustomProps) {
  const baseStyles = "content-stretch flex items-center justify-center relative shrink-0 cursor-pointer transition-colors";
  
  const variantStyles = {
    primary: "bg-white text-[#121212] rounded-lg hover:bg-gray-100",
    secondary: "bg-[rgba(255,255,255,0.2)] backdrop-blur-sm rounded-lg hover:bg-[rgba(255,255,255,0.3)]",
    icon: "bg-[rgba(255,255,255,0.2)] rounded-lg hover:bg-[rgba(255,255,255,0.3)] p-2",
  };
  
  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        baseStyles,
        variantStyles[variant],
        variant !== "icon" && sizeStyles[size],
        className
      )}
    >
      {typeof children === "string" ? (
        <div className="flex flex-col font-['Geist',sans-serif] font-medium justify-center leading-none relative shrink-0 text-center text-nowrap">
          <p className="leading-[1.3]">{children}</p>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
