# Quick Reference Guide

## 🚀 Common Tasks

### Creating a New UI Component

```tsx
// 1. Create file: src/app/components/ui/my-component.tsx
import React from "react";
import { cn } from "../../../lib/utils";

export interface MyComponentProps {
  title: string;
  className?: string;
}

/**
 * My Component
 * 
 * Description of what this component does.
 */
export function MyComponent({ title, className }: MyComponentProps) {
  return (
    <div className={cn("base-classes", className)}>
      {title}
    </div>
  );
}

// 2. Export from ui/index.ts
export { MyComponent } from "./my-component";
export type { MyComponentProps } from "./my-component";

// 3. Use in your section
import { MyComponent } from "../../ui";
<MyComponent title="Hello" />
```

### Creating a New Section

```tsx
// 1. Create file: src/app/components/landing/sections/my-section.tsx
import React from "react";
import { SectionWrapper } from "../../ui/section-wrapper";

/**
 * My Section Component
 * 
 * Description of this section.
 */
export function MySection() {
  return (
    <SectionWrapper bgVariant="black" padding="lg">
      {/* Section content */}
    </SectionWrapper>
  );
}

// 2. Export from landing/index.ts
export { MySection } from "./sections/my-section";

// 3. Add to landing page
import { MySection } from "./sections/my-section";

export function LandingPage() {
  return (
    <>
      <HeroSection />
      <MySection />
    </>
  );
}
```

### Adding New Icons

```tsx
// In src/app/components/ui/icons.tsx
import svgPaths from "../../../imports/svg-t8r1oo2mbu";

export function MyIcon() {
  return (
    <div className="relative shrink-0 size-6">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
        <path d={svgPaths.myPath} stroke="white" strokeWidth="2" />
      </svg>
    </div>
  );
}

// Export from ui/index.ts
export { MyIcon } from "./icons";

// Use it
import { MyIcon } from "@/app/components/ui";
<MyIcon />
```

### Adding Constants

```tsx
// In src/lib/constants.ts
export const MY_DATA = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
] as const;

// Use it
import { MY_DATA } from "@/lib/constants";
MY_DATA.map(item => <div key={item.id}>{item.name}</div>)
```

### Adding Types

```tsx
// In src/types/landing.ts
export interface MyType {
  id: string;
  name: string;
  optional?: boolean;
}

// Use it
import type { MyType } from "@/types/landing";
const myData: MyType = { id: "1", name: "Test" };
```

## 📁 File Locations

| What | Where |
|------|-------|
| Reusable UI components | `/src/app/components/ui/` |
| Layout components (navbar, footer) | `/src/app/components/landing/layout/` |
| Page sections | `/src/app/components/landing/sections/` |
| Utility functions | `/src/lib/` |
| Constants & config | `/src/lib/constants.ts` |
| TypeScript types | `/src/types/` |
| Figma imports | `/src/imports/` |

## 🎨 Styling Patterns

### Using cn() Utility
```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  variant === "primary" && "primary-classes",
  className // Allow prop override
)} />
```

### Component Variants
```tsx
const variants = {
  primary: "bg-white text-black",
  secondary: "bg-black text-white",
};

<div className={cn(variants[variant], className)} />
```

### Responsive Classes
```tsx
<div className="text-sm md:text-base lg:text-lg" />
```

## 🔧 Import Patterns

### Order of Imports
```tsx
// 1. React
import React from "react";

// 2. Third-party libraries
import { motion } from "motion/react";

// 3. UI components
import { Button, Card } from "../../ui";

// 4. Section components
import { HeroSection } from "./hero-section";

// 5. Utils
import { cn } from "../../../lib/utils";

// 6. Constants
import { NAV_LINKS } from "../../../lib/constants";

// 7. Types
import type { MyProps } from "../../../types/landing";

// 8. Assets
import imgHero from "figma:asset/abc123.png";
import svgPaths from "../../../imports/svg-*.ts";
```

### Barrel Exports
```tsx
// Instead of:
import { Button } from "../../ui/button-custom";
import { Card } from "../../ui/feature-card";

// Use:
import { Button, Card } from "../../ui";
```

## 🖼️ Asset Patterns

### Figma Raster Images
```tsx
import myImage from "figma:asset/hash.png";
<img src={myImage} alt="Description" />
```

### SVG Paths
```tsx
import svgPaths from "imports/svg-*.ts";
<svg>
  <path d={svgPaths.pathName} />
</svg>
```

### SVG Components
```tsx
import { imgSvg } from "imports/svg-*.tsx";
<img src={imgSvg} alt="" />
```

## 📝 Documentation Patterns

### Component JSDoc
```tsx
/**
 * Component Name
 * 
 * Brief description of what this component does.
 * Can include multiple paragraphs.
 * 
 * @example
 * ```tsx
 * <MyComponent title="Hello" />
 * ```
 */
export function MyComponent({ title }: MyComponentProps) {
  // ...
}
```

### Inline Comments
```tsx
// Use for complex logic
const result = calculateSomethingComplex(); // Explain why

// Or multi-line for context
/**
 * This calculates X based on Y because of Z.
 * See: https://link-to-docs
 */
```

## 🎯 Component Patterns

### Basic Component
```tsx
export function MyComponent({ prop1, prop2 }: MyProps) {
  return <div>{prop1}</div>;
}
```

### Component with Sub-components
```tsx
function SubComponent() {
  return <div>Sub</div>;
}

export function MainComponent() {
  return (
    <div>
      <SubComponent />
    </div>
  );
}
```

### Component with Data
```tsx
const DATA = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

export function MyComponent() {
  return (
    <div>
      {DATA.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

### Component with Conditional Rendering
```tsx
export function MyComponent({ showExtra }: MyProps) {
  return (
    <div>
      <p>Always shown</p>
      {showExtra && <p>Sometimes shown</p>}
    </div>
  );
}
```

## 🔍 Finding Things

| Looking for... | Check... |
|----------------|----------|
| Reusable button | `/src/app/components/ui/button-custom.tsx` |
| Navigation bar | `/src/app/components/landing/layout/navbar.tsx` |
| Hero section | `/src/app/components/landing/sections/hero-section.tsx` |
| Icon library | `/src/app/components/ui/icons.tsx` |
| Nav links data | `/src/lib/constants.ts` → `NAV_LINKS` |
| Type definitions | `/src/types/landing.ts` |
| Utility functions | `/src/lib/utils.ts` |
| Original component | `/src/imports/ZBlack.tsx` |

## ⚡ Common Code Snippets

### Map Over Data
```tsx
{items.map((item) => (
  <Component key={item.id} {...item} />
))}
```

### Conditional Classes
```tsx
className={cn(
  "base",
  isActive && "active",
  variant === "primary" && "primary"
)}
```

### Props Spreading
```tsx
const props = { title: "Hello", description: "World" };
<Component {...props} />
```

### Default Props
```tsx
export function Component({ 
  variant = "default",
  size = "md"
}: Props) {
  // ...
}
```

## 🐛 Common Issues

### Issue: Component not rendering
**Check**: 
- Is it exported?
- Is it imported correctly?
- Is the file path correct?

### Issue: Types not working
**Check**:
- Is the interface exported?
- Is it imported with `type` keyword?
- Are all required props provided?

### Issue: Styles not applying
**Check**:
- Is Tailwind class correct?
- Is there a more specific class overriding?
- Is `cn()` being used correctly?

### Issue: Image not loading
**Check**:
- For figma assets: Use `figma:asset/hash.png`
- For SVG paths: Import from `imports/svg-*.ts`
- Don't add `./` or `../` before `figma:asset`

## 📋 Checklist for New Components

- [ ] Component created in correct directory
- [ ] TypeScript interface defined
- [ ] JSDoc comment added
- [ ] Exported from index.ts (if UI component)
- [ ] Uses `cn()` for class merging
- [ ] Props have sensible defaults
- [ ] No `any` types used
- [ ] Semantic HTML elements used
- [ ] Accessibility attributes added
- [ ] Component is reusable
- [ ] Follows naming conventions

## 🎓 Best Practices

1. **Keep components small** - Under 150 lines
2. **Single responsibility** - One job per component
3. **Props over hardcoding** - Make it flexible
4. **Types over `any`** - Always type your props
5. **Composition** - Build complex from simple
6. **Document** - Add JSDoc comments
7. **Test** - Verify visual consistency
8. **Consistent naming** - Follow conventions

## 📚 Resources

- **Overview**: `/REFACTORING.md`
- **Step-by-step guide**: `/REFACTORING_GUIDE.md`
- **Summary**: `/REFACTORING_SUMMARY.md`
- **Structure**: `/PROJECT_STRUCTURE.md`
- **This guide**: `/QUICK_REFERENCE.md`

---

**💡 Tip**: Keep this file open while developing for quick reference!
