import React from "react";
import svgPaths from "../../../../imports/svg-t8r1oo2mbu";
import imgAsset from "figma:asset/e74ed57f623576498a1f0340b9ad5bdc7f657aa9.png";
import imgLandingPage from "figma:asset/650d86442a820f91b924773434726a411940b840.png";
import { Navbar } from "../layout/navbar";

/**
 * Badge Component - "NEW" badge with arrow
 */
function AnnouncementBadge() {
  return (
    <div className="backdrop-blur-[6px] backdrop-filter bg-[rgba(255,255,255,0.15)] content-stretch flex gap-2.5 items-center pl-1 pr-2 py-1 relative rounded-[60px] shrink-0">
      <div className="bg-white content-stretch flex flex-col items-start px-2 py-0.5 relative rounded-[60px] shadow-[0px_2px_4px_0px_rgba(255,255,255,0.05)] shrink-0">
        <div className="flex flex-col font-['Inter',sans-serif] font-medium justify-center leading-none not-italic relative shrink-0 text-[#222] text-xs text-nowrap uppercase">
          <p className="leading-[18px]">new</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0">
        <div className="flex flex-col font-['Inter',sans-serif] font-medium justify-center leading-none not-italic relative shrink-0 text-sm text-nowrap text-white">
          <p className="leading-[21px]">Agentic Learning Platform for Developers</p>
        </div>
      </div>
      <div className="relative shrink-0 size-4">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="SVG">
            <path d={svgPaths.p31ca0d00} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

/**
 * Email Signup Form Component
 */
function SignupForm() {
  return (
    <form className="backdrop-blur-[6px] backdrop-filter bg-[rgba(255,255,255,0.15)] content-stretch flex gap-1.5 items-center p-1.5 relative rounded-xl shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-xl" />
      
      {/* Email Input */}
      <div className="h-8 relative shrink-0 w-[249.41px]">
        <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start overflow-clip px-3 py-[6.5px] relative rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
            <input
              type="email"
              placeholder="Email address"
              className="flex flex-col font-['Inter',sans-serif] font-medium justify-center leading-none not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.5)] w-full bg-transparent border-none outline-none placeholder:text-[rgba(255,255,255,0.5)]"
            />
          </div>
        </div>
      </div>
      
      {/* Submit Button */}
      <button
        type="submit"
        className="bg-white relative rounded-lg shrink-0 cursor-pointer hover:bg-gray-100 transition-colors"
      >
        <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex gap-2 items-center justify-center px-4 py-2 relative">
          <div className="flex flex-col font-['Geist',sans-serif] font-medium justify-center leading-none relative shrink-0 text-[#121212] text-xs text-center text-nowrap">
            <p className="leading-[1.3]">Beta Access</p>
          </div>
        </div>
      </button>
    </form>
  );
}

/**
 * Decorative SVG Background Element
 */
function DecorativeSVG() {
  return (
    <div className="absolute flex h-[291.667px] items-center justify-center left-[306.23px] top-[-1197.36px] w-[1069.444px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
      <div className="flex-none rotate-[270deg]">
        <div className="h-[1069.444px] relative w-[291.667px]">
          <div className="absolute inset-[-0.52%_-3.81%_-1.56%_-3.81%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 313.864 1091.64">
              <g filter="url(#filter0_d_1_127)" id="Union">
                <mask fill="white" id="path-1-inside-1_1_127">
                  <path d={svgPaths.p3f89ec00} />
                </mask>
                <path d={svgPaths.p2f2bf780} fill="var(--stroke-0, #FFB88C)" mask="url(#path-1-inside-1_1_127)" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1091.64" id="filter0_d_1_127" width="313.864" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="5.54932" />
                  <feGaussianBlur stdDeviation="5.54932" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_127" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_127" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Hero Section Component
 * 
 * Main hero section containing the headline, description, signup form, and hero image.
 */
export function HeroSection() {
  return (
    <section className="content-stretch flex flex-col h-[1114px] items-center overflow-clip pb-[30px] pt-0 px-0 relative shrink-0 w-full">
      {/* Background Image */}
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLandingPage} />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <div className="basis-0 content-stretch flex flex-col gap-16 grow items-center min-h-px min-w-px px-0 py-10 relative shrink-0 w-full">
        <DecorativeSVG />
        
        {/* Header Content */}
        <div className="content-stretch flex flex-col gap-8 items-center relative shrink-0 w-[870px]">
          <AnnouncementBadge />
          
          {/* Main Headline */}
          <h1 className="flex flex-col font-['Geist',sans-serif] font-semibold justify-center leading-[80px] min-w-full relative shrink-0 text-[0px] text-center text-white tracking-[1.28px] w-[min-content]">
            <span className="mb-0">
              <span className="font-['Geist',sans-serif] font-bold text-[56px]">Learning </span>
              <span className="font-['mac\'s_Extended_Minecraft',sans-serif] not-italic text-[42px]">Infrastructure</span>
              <span className="font-['Geist',sans-serif] font-bold text-[56px]"> </span>
            </span>
            <span className="font-['Geist',sans-serif] font-bold text-[56px]">for Engineering Teams</span>
          </h1>
          
          {/* Description */}
          <p className="flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-none not-italic relative shrink-0 text-lg text-center text-white tracking-[0.36px] w-[580px]">
            <span className="leading-[1.4]">Transform code activities into learning moments. Gradientflo identifies growth areas and supports improvement.</span>
          </p>
          
          {/* Signup Form */}
          <SignupForm />
        </div>
        
        {/* Hero Image */}
        <div className="h-[832px] pointer-events-none relative rounded-2xl shrink-0 w-[1248px]">
          <img alt="Platform preview showing the Gradientflo interface" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-2xl size-full" src={imgAsset} />
          <div aria-hidden="true" className="absolute border-[#222859] border-[12px] border-solid inset-[-12px] rounded-[28px]" />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[297px] left-0 to-[#000000] top-[769px] w-[1728px]" />
      </div>
    </section>
  );
}
