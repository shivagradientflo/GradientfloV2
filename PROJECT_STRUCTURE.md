# Project Structure

## Directory Tree

```
src/
├── app/
│   ├── App.tsx                          # Main app entry point
│   └── components/
│       ├── landing/                      # Landing page components
│       │   ├── index.ts                 # Barrel export
│       │   ├── landing-page.tsx         # Main landing page wrapper
│       │   ├── layout/                  # Layout components
│       │   │   └── navbar.tsx           # Navigation bar
│       │   └── sections/                # Page sections
│       │       ├── hero-section.tsx     # Hero section ✅
│       │       └── code-indexing-section.tsx  # Code indexing ✅
│       │
│       ├── ui/                          # Reusable UI components
│       │   ├── index.ts                 # Barrel export
│       │   ├── button-custom.tsx        # Button component
│       │   ├── feature-card.tsx         # Feature card
│       │   ├── icons.tsx                # Icon library
│       │   ├── logo.tsx                 # Company logo
│       │   ├── nav-link.tsx             # Navigation link
│       │   └── section-wrapper.tsx      # Section container
│       │
│       └── figma/                       # Figma-generated (protected)
│           └── ImageWithFallback.tsx    # Image fallback component
│
├── imports/                             # Figma imports
│   ├── ZBlack.tsx                       # Original component (preserved)
│   ├── LandingPage.tsx                  # Previous import
│   ├── svg-t8r1oo2mbu.ts               # SVG path data
│   └── svg-m86mj.tsx                    # SVG components
│
├── lib/                                 # Utilities and helpers
│   ├── utils.ts                         # Utility functions (cn)
│   └── constants.ts                     # App constants
│
├── styles/                              # Global styles
│   ├── fonts.css                        # Font imports
│   └── theme.css                        # Theme tokens
│
└── types/                               # TypeScript types
    └── landing.ts                       # Landing page types
```

## Component Relationships

```
App.tsx
└── LandingPage
    ├── Original ZBlack (currently)
    └── Future structure:
        ├── HeroSection ✅
        │   ├── Navbar
        │   │   ├── Logo
        │   │   ├── NavLink (x6)
        │   │   └── ButtonCustom (x2)
        │   ├── AnnouncementBadge
        │   ├── SignupForm
        │   └── DecorativeSVG
        │
        ├── CodeIndexingSection ✅
        │   ├── SectionHeader
        │   ├── FeaturesGrid
        │   │   └── FeatureCard (x5)
        │   │       └── Icon components
        │   └── PreviewImage
        │
        ├── QualityQuestionsSection ⏳
        ├── OriginalRequestsSection ⏳
        ├── StatsSection ⏳
        ├── SocialLinksSection ⏳
        ├── GenerativeQASection ⏳
        └── FooterSection ⏳
```

## Import Flow

```
Components Import From:
┌─────────────────────────────────────────────────────────┐
│ UI Components (ui/)                                     │
│ ├── Imports: lib/utils, types/landing                  │
│ └── Exports: Reusable components                       │
└─────────────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────────────┐
│ Layout Components (landing/layout/)                     │
│ ├── Imports: ui/, lib/constants, imports/svgs          │
│ └── Exports: Navbar, Footer, etc.                      │
└─────────────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────────────┐
│ Section Components (landing/sections/)                  │
│ ├── Imports: ui/, layout/, lib/*, imports/assets       │
│ └── Exports: HeroSection, CodeIndexingSection, etc.    │
└─────────────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────────────┐
│ Landing Page (landing/landing-page.tsx)                │
│ ├── Imports: All sections                              │
│ └── Exports: Complete landing page                     │
└─────────────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────────────┐
│ App (App.tsx)                                           │
│ └── Renders: LandingPage                               │
└─────────────────────────────────────────────────────────┘
```

## File Sizes

### Before Refactoring
```
imports/ZBlack.tsx: 4,398 lines (monolithic)
```

### After Refactoring
```
UI Components:
├── ui/nav-link.tsx: ~40 lines
├── ui/button-custom.tsx: ~55 lines
├── ui/feature-card.tsx: ~45 lines
├── ui/logo.tsx: ~15 lines
├── ui/icons.tsx: ~120 lines
├── ui/section-wrapper.tsx: ~50 lines
└── ui/index.ts: ~25 lines

Layout Components:
└── landing/layout/navbar.tsx: ~65 lines

Section Components:
├── landing/sections/hero-section.tsx: ~160 lines
└── landing/sections/code-indexing-section.tsx: ~155 lines

Infrastructure:
├── lib/utils.ts: ~10 lines
├── lib/constants.ts: ~50 lines
└── types/landing.ts: ~35 lines

Documentation:
├── REFACTORING.md: ~400 lines
├── REFACTORING_GUIDE.md: ~600 lines
└── REFACTORING_SUMMARY.md: ~500 lines

Total: ~2,325 lines (including documentation)
```

## Data Flow

```
Constants (lib/constants.ts)
    ↓
Components (receives data as props)
    ↓
Render (displays UI)
```

### Example: Navigation Links
```typescript
// 1. Define data
constants.ts:
  NAV_LINKS = [{ label: "Why", href: "#why" }, ...]

// 2. Import in component
navbar.tsx:
  import { NAV_LINKS } from "lib/constants"

// 3. Map to components
  NAV_LINKS.map(link => <NavLink {...link} />)

// 4. Render
  <a href={link.href}>{link.label}</a>
```

## Styling Approach

```
Tailwind CSS Classes
    ↓
cn() Utility (for conditional classes)
    ↓
Component className Prop
    ↓
Final Rendered Classes
```

### Example
```typescript
// Component with conditional styles
<div className={cn(
  "base-classes",
  variant === "primary" && "variant-classes",
  className  // Allow override
)}>
```

## Type System

```
types/landing.ts (Type Definitions)
    ↓
Component Props (Strongly Typed)
    ↓
TypeScript Validation
    ↓
IDE Autocomplete & Error Checking
```

### Example
```typescript
// 1. Define type
types/landing.ts:
  export interface ButtonCustomProps {
    variant?: "primary" | "secondary";
    // ...
  }

// 2. Use in component
button-custom.tsx:
  export function ButtonCustom({ variant }: ButtonCustomProps)

// 3. TypeScript enforces
<ButtonCustom variant="invalid" />  // ❌ Error!
<ButtonCustom variant="primary" />  // ✅ Valid
```

## Icon System

```
SVG Path Data (imports/svg-*.ts)
    ↓
Icon Components (ui/icons.tsx)
    ↓
Used in Feature Cards & Buttons
```

### Example
```typescript
// 1. Import SVG paths
import svgPaths from "imports/svg-t8r1oo2mbu"

// 2. Create icon component
export function RepoIcon() {
  return <svg><path d={svgPaths.p11feba00} /></svg>
}

// 3. Use in components
<FeatureCard icon={<RepoIcon />} title="..." />
```

## Asset Management

```
Figma Assets
├── figma:asset/* (Raster images - PNG, JPG)
└── imports/svg-*.ts (Vector graphics - SVG paths)
    ↓
Imported in Components
    ↓
Rendered as <img> or inline <svg>
```

### Examples
```typescript
// Raster image
import heroImg from "figma:asset/abc123.png"
<img src={heroImg} alt="..." />

// Vector graphic
import svgPaths from "imports/svg-*.ts"
<svg><path d={svgPaths.pathName} /></svg>
```

## Future Sections Structure

Each remaining section should follow this pattern:

```
section-name-section.tsx
├── Data constants (at top)
├── Sub-components (private)
│   ├── SectionHeader
│   ├── SectionContent
│   └── SectionFooter
└── Main export (public)
    └── export function SectionNameSection()
```

## Testing Strategy (Future)

```
Unit Tests
├── ui/*.test.tsx (Component tests)
└── lib/*.test.ts (Utility tests)

Integration Tests
└── landing/sections/*.test.tsx (Section tests)

E2E Tests
└── landing-page.e2e.test.tsx (Full page tests)
```

## Build Output (Conceptual)

```
Production Build
├── Chunks
│   ├── ui-components.chunk.js (Shared UI)
│   ├── hero-section.chunk.js (Lazy loaded)
│   ├── features-section.chunk.js (Lazy loaded)
│   └── ...
└── Main bundle (App + routing)
```

## Key Principles

1. **Separation of Concerns**: UI, logic, data, types are separate
2. **Reusability**: Components can be used multiple times
3. **Composability**: Small components build larger ones
4. **Type Safety**: TypeScript catches errors early
5. **Maintainability**: Easy to find, understand, and modify
6. **Scalability**: Easy to add new features
7. **Documentation**: Code is self-documenting with comments

## Color Coding Legend

- ✅ = Completed
- ⏳ = To be implemented
- 🔒 = Protected (don't modify)
- 📦 = Third-party/Generated

---

This structure provides a solid foundation for a scalable, maintainable React application with clear separation of concerns and excellent developer experience.
