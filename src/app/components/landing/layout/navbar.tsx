import React from "react";
import { Logo } from "../../ui/logo";
import { NavLink } from "../../ui/nav-link";
import { ButtonCustom } from "../../ui/button-custom";
import { NAV_LINKS } from "../../../../lib/constants";
import svgPaths from "../../../../imports/svg-t8r1oo2mbu";

/**
 * Discord Logo Icon Component
 */
function DiscordLogo() {
  return (
    <div className="relative shrink-0 size-4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="DiscordLogo">
          <path d={svgPaths.p2f915e80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Navigation Bar Component
 * 
 * Main navigation bar with logo, navigation links, and action buttons.
 */
export function Navbar() {
  return (
    <nav className="relative rounded-2xl shrink-0 w-[1024px]" data-name="Nav bar">
      <div className="content-stretch flex items-center justify-between overflow-clip px-6 py-8 relative rounded-[inherit] w-full">
        {/* Logo */}
        <Logo />
        
        {/* Navigation Links */}
        <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div className="content-stretch flex gap-1 items-center justify-center relative shrink-0">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.label} label={link.label} href={link.href} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-row items-center self-stretch">
          <div className="content-stretch flex gap-2.5 h-full items-center relative shrink-0">
            <ButtonCustom variant="icon">
              <DiscordLogo />
            </ButtonCustom>
            <ButtonCustom variant="primary">
              Beta Access
            </ButtonCustom>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.6px] border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-2xl" />
    </nav>
  );
}