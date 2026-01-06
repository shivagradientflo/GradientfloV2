import React from "react";
import { FeatureCard } from "../../ui/feature-card";
import imgVector from "figma:asset/2b1d9a5e6cf7343e4b5597e8a6b1e3d742df6b36.png";
import imgImage2931 from "figma:asset/fc4c1da3e4d3751f17961237b85c2eacf57a532a.png";
import {
  RepoIntelligenceIcon,
  LearningIntelligenceIcon,
  PRApplicationRateIcon,
  DeveloperIntelligenceIcon,
  RecommendationsIcon,
} from "../../ui/icons";

/**
 * Features data configuration
 */
const FEATURES_DATA = [
  {
    id: "repo-intelligence",
    icon: <RepoIntelligenceIcon />,
    title: "Repo Intelligence",
  },
  {
    id: "learning-intelligence",
    icon: <LearningIntelligenceIcon />,
    title: "Learning Intelligence",
  },
  {
    id: "pr-application-rate",
    icon: <PRApplicationRateIcon />,
    title: "PR & Application Rate",
  },
  {
    id: "developer-intelligence",
    icon: <DeveloperIntelligenceIcon />,
    title: "Developer Intelligence",
  },
  {
    id: "recommendations",
    icon: <RecommendationsIcon />,
    title: "Recommendations",
  },
];

/**
 * Section Header Component
 */
function SectionHeader() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border-[#373737] border-[0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-4 items-start justify-center p-8 relative size-full">
          {/* Section Title */}
          <div className="content-stretch flex flex-col items-center relative shrink-0">
            <div className="flex flex-col font-['Geist',sans-serif] font-normal justify-center leading-none relative shrink-0 text-[0px] text-center text-nowrap text-white tracking-[-0.8px]">
              <p className="leading-[44px]">
                <span className="font-['mac\'s_Extended_Minecraft',sans-serif] not-italic text-[36px]">Code</span>
                <span className="text-[40px]"> Indexing</span>
              </p>
            </div>
          </div>
          
          {/* Section Description */}
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
            <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-none not-italic relative shrink-0 text-base text-[rgba(250,250,250,0.7)] w-full">
              <p className="leading-[24px]">
                Automated knowledge distillation. We turn raw commits into high-fidelity neural tokens that power your team&apos;s collective intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Features Grid Component
 */
function FeaturesGrid() {
  const topRowFeatures = FEATURES_DATA.slice(0, 2);
  const bottomRowFeatures = FEATURES_DATA.slice(2, 4);
  const recommendationFeature = FEATURES_DATA[4];

  return (
    <div className="content-stretch flex gap-8 items-center justify-end p-8 relative self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border-[#373737] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      
      {/* Decorative Vector Image */}
      <div className="absolute h-[134px] left-[141px] top-[77px] w-[466px]">
        <div className="absolute inset-[-1.49%_-0.43%_-1.49%_0]">
          <img 
            alt="" 
            className="block max-w-none size-full" 
            height="138" 
            src={imgVector} 
            width="468" 
          />
        </div>
      </div>
      
      {/* Feature Cards Grid */}
      <div className="content-stretch flex flex-col gap-8 items-center relative shrink-0">
        {/* Top Row */}
        <div className="content-stretch flex gap-8 items-start justify-center relative shrink-0">
          {topRowFeatures.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
            />
          ))}
        </div>
        
        {/* Bottom Row */}
        <div className="content-stretch flex gap-8 items-start justify-center relative shrink-0">
          {bottomRowFeatures.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
            />
          ))}
        </div>
      </div>
      
      {/* Recommendations Feature */}
      <FeatureCard
        icon={recommendationFeature.icon}
        title={recommendationFeature.title}
        className="p-4"
      />
    </div>
  );
}

/**
 * Preview Image Component
 */
function PreviewImage() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#373737] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-center px-0.5 py-8 relative w-full">
          <div className="h-[589px] relative rounded-[113px] shrink-0 w-[1160px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[113px]">
              <img 
                alt="Code indexing visualization" 
                className="absolute h-[173.17%] left-[-32.76%] max-w-none top-[-50.53%] w-[165.52%]" 
                src={imgImage2931} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Code Indexing Section Component
 * 
 * Displays the code indexing features with visual representation.
 * Includes section header, feature grid, and preview image.
 * 
 * @example
 * ```tsx
 * <CodeIndexingSection />
 * ```
 */
export function CodeIndexingSection() {
  return (
    <section className="relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[240px] py-0 relative w-full bg-black">
          {/* Border Top */}
          <div className="h-20 relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#373737] border-[0px_1px_1px] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col items-center size-full">
              <div className="bg-clip-padding border-0 border-transparent border-solid size-full" />
            </div>
          </div>
          
          {/* Main Content */}
          <div className="relative shrink-0 w-full">
            <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex items-start relative w-full">
              <SectionHeader />
              <FeaturesGrid />
            </div>
          </div>
          
          {/* Preview Image */}
          <PreviewImage />
        </div>
      </div>
    </section>
  );
}
