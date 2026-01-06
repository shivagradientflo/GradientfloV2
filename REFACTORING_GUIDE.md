# Refactoring Guide

## How to Continue Refactoring the Landing Page

This guide provides step-by-step instructions for developers to continue refactoring the remaining sections of the ZBlack landing page.

## Overview

The original `ZBlack.tsx` file is 4,398 lines long with multiple sections. We've established a pattern with the `CodeIndexingSection` component that should be followed for all remaining sections.

## Refactoring Workflow

### Step 1: Identify the Section

1. Open `/src/imports/ZBlack.tsx`
2. Locate the section you want to refactor (look for component names like `Section`, `Frame`, etc.)
3. Identify the start and end of the section's code
4. Note all dependencies (images, SVGs, sub-components)

### Step 2: Extract Data

Create a data configuration object for any lists or repeated content.

**Example**:
```typescript
const FEATURES_DATA = [
  {
    id: "repo-intelligence",
    icon: <RepoIntelligenceIcon />,
    title: "Repo Intelligence",
  },
  // ... more features
];
```

### Step 3: Create Sub-Components

Break down the section into logical sub-components. Each sub-component should have a single responsibility.

**Example**:
```tsx
/**
 * Section Header Component
 */
function SectionHeader() {
  return (
    <div className="...">
      <h2>Section Title</h2>
      <p>Section description</p>
    </div>
  );
}
```

### Step 4: Add TypeScript Types

If needed, create new interfaces in `/src/types/landing.ts`:

```typescript
export interface YourSectionProps {
  title: string;
  description?: string;
  items: YourItemType[];
}
```

### Step 5: Create the Main Section Component

Create a new file in `/src/app/components/landing/sections/`:

```tsx
import React from "react";

/**
 * Your Section Component
 * 
 * Description of what this section displays and its purpose.
 * 
 * @example
 * ```tsx
 * <YourSection />
 * ```
 */
export function YourSection() {
  return (
    <section className="...">
      {/* Section content */}
    </section>
  );
}
```

### Step 6: Add Documentation

Include JSDoc comments:
- Component description
- Props documentation
- Usage examples
- Any important notes

### Step 7: Update the Landing Page

In `/src/app/components/landing/landing-page.tsx`, import and use your new section:

```tsx
import { YourSection } from "./sections/your-section";

export function LandingPage() {
  return (
    <div>
      <HeroSection />
      <YourSection />
      {/* Other sections */}
    </div>
  );
}
```

### Step 8: Verify Visual Consistency

1. Run the application
2. Compare the refactored section with the original
3. Ensure all styles, spacing, and functionality match
4. Test responsive behavior

## Code Quality Checklist

Before completing a refactoring, ensure:

- [ ] Component follows Single Responsibility Principle
- [ ] TypeScript interfaces defined for all props
- [ ] No `any` types used
- [ ] JSDoc comments added
- [ ] Semantic HTML elements used (`<section>`, `<article>`, `<nav>`, etc.)
- [ ] Accessibility attributes added (`alt`, `aria-label`, etc.)
- [ ] Images have proper `alt` text
- [ ] Tailwind classes are clean and organized
- [ ] `cn()` utility used for conditional classes
- [ ] Component is exported with proper name
- [ ] File follows naming convention (kebab-case)
- [ ] No hardcoded values (use constants or data objects)
- [ ] Responsive design maintained
- [ ] Visual output matches original

## Example: Full Refactoring Pattern

### Before (Original)

```tsx
function Features() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[12px] items-center justify-center px-0 py-[16px] relative shrink-0 w-[200px]">
      <div aria-hidden="true" className="absolute border border-[#373737] border-solid inset-0 pointer-events-none" />
      <Frame />
      <Heading1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p11feba00} stroke="white" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24.96px]">Repo Intelligence</p>
      </div>
    </div>
  );
}
```

### After (Refactored)

**Step 1**: Extract Icon → `/src/app/components/ui/icons.tsx`
```tsx
export function RepoIntelligenceIcon() {
  return (
    <div className="relative shrink-0 size-6">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p11feba00} stroke="white" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}
```

**Step 2**: Create Reusable Component → `/src/app/components/ui/feature-card.tsx`
```tsx
export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

/**
 * Feature Card Component
 * 
 * Displays a feature with an icon and title.
 */
export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={cn(
      "bg-black content-stretch flex flex-col gap-3 items-center justify-center px-0 py-4 relative shrink-0 w-[200px] border border-[#373737]",
      className
    )}>
      {icon}
      <div className="content-stretch flex flex-col items-center relative shrink-0">
        <div className="flex flex-col font-['Geist',sans-serif] font-normal justify-center leading-none relative shrink-0 text-base text-center text-nowrap text-white">
          <p className="leading-[24.96px]">{title}</p>
        </div>
      </div>
      {description && (
        <p className="text-sm text-[rgba(250,250,250,0.7)] text-center px-4">
          {description}
        </p>
      )}
    </div>
  );
}
```

**Step 3**: Use in Section
```tsx
import { FeatureCard } from "../../ui/feature-card";
import { RepoIntelligenceIcon } from "../../ui/icons";

export function FeaturesSection() {
  return (
    <section>
      <FeatureCard
        icon={<RepoIntelligenceIcon />}
        title="Repo Intelligence"
      />
    </section>
  );
}
```

## Common Patterns

### Pattern 1: Icon Components

Extract inline SVGs into named icon components in `/src/app/components/ui/icons.tsx`:

```tsx
export function YourIcon() {
  return (
    <div className="relative shrink-0 size-6">
      <svg className="block size-full" fill="none">
        {/* SVG content */}
      </svg>
    </div>
  );
}
```

### Pattern 2: Repeated Elements

Create a data array and map over it:

```tsx
const ITEMS = [
  { id: 1, title: "Item 1", icon: <Icon1 /> },
  { id: 2, title: "Item 2", icon: <Icon2 /> },
];

function Section() {
  return (
    <div>
      {ITEMS.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}
```

### Pattern 3: Sub-Components

Break complex sections into smaller pieces:

```tsx
function SectionHeader() { /* ... */ }
function SectionContent() { /* ... */ }
function SectionFooter() { /* ... */ }

export function MainSection() {
  return (
    <section>
      <SectionHeader />
      <SectionContent />
      <SectionFooter />
    </section>
  );
}
```

### Pattern 4: Conditional Rendering

Use TypeScript for type-safe conditional rendering:

```tsx
interface CardProps {
  title: string;
  description?: string;
  variant?: "default" | "highlighted";
}

export function Card({ title, description, variant = "default" }: CardProps) {
  return (
    <div className={cn(
      "card",
      variant === "highlighted" && "border-blue-500"
    )}>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
}
```

## Sections to Refactor

Here are the remaining sections that need refactoring:

1. **Quality Questions Section** - Questions and answers display
2. **Original Requests Section** - User testimonials/requests
3. **Stats Section** - Metrics and statistics
4. **Social Links Section** - Integration badges (Slack, GitHub, etc.)
5. **Generative Q&A Section** - AI-generated Q&A showcase
6. **Footer Section** - Footer with signup and navigation

## Tips and Best Practices

### DRY Principle
- If you see the same code twice, extract it into a component
- Use composition over duplication

### Component Naming
- Use PascalCase for components
- Use descriptive names (e.g., `SocialLinksSection` not `Section3`)
- Prefix with purpose (e.g., `FeatureCard`, `NavLink`)

### File Naming
- Use kebab-case for files (e.g., `social-links-section.tsx`)
- Match file name to component name

### Imports Organization
```tsx
// React imports
import React from "react";

// Third-party imports
import { motion } from "motion/react";

// UI components
import { Button } from "../../ui/button";

// Section components
import { HeroSection } from "./hero-section";

// Utilities
import { cn } from "../../../lib/utils";

// Types
import type { SectionProps } from "../../../types/landing";

// Assets
import imgHero from "figma:asset/...";
```

### Accessibility
- Use semantic HTML
- Add `alt` text to images
- Use `aria-label` for icon buttons
- Ensure keyboard navigation works
- Use proper heading hierarchy

### Performance
- Lazy load images when possible
- Use React.memo for expensive components
- Avoid inline function definitions in JSX

## Testing Your Refactoring

1. **Visual Testing**: Compare side-by-side with original
2. **Responsive Testing**: Test on different screen sizes
3. **Accessibility Testing**: Use browser dev tools
4. **Code Review**: Have another developer review
5. **Performance Testing**: Check bundle size impact

## Getting Help

- **Reference**: Look at `CodeIndexingSection` as a complete example
- **Documentation**: Read `/REFACTORING.md` for overview
- **Patterns**: Check existing UI components for patterns
- **Types**: Review `/src/types/landing.ts` for type definitions

## Summary

Follow this workflow for each section:

1. Identify section in original file
2. Extract data into constants
3. Create sub-components
4. Add TypeScript types
5. Create main section component
6. Add documentation
7. Update landing page
8. Verify visual consistency

By following this pattern, you'll maintain consistency across the codebase and make it easier for future developers to understand and maintain the landing page.
