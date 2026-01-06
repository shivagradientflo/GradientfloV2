import React from "react";
import { cn } from "../../../lib/utils";

export interface NavLinkProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

/**
 * Navigation Link Component
 * 
 * Reusable navigation link used in the header navigation.
 */
export function NavLink({ label, href, onClick, className }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <a
        href={href || "#"}
        onClick={handleClick}
        className={cn(
          "content-stretch flex items-center justify-center pb-[5.25px] pt-[3.75px] px-3 relative rounded-full shrink-0",
          className
        )}
      >
        <div className="flex flex-col font-['Geist_Mono',sans-serif] font-normal justify-center leading-none relative shrink-0 text-[15px] text-center text-nowrap text-white tracking-[-0.3px]">
          <p className="leading-normal">{label}</p>
        </div>
      </a>
    </div>
  );
}
