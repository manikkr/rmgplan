---
name: RMG Marketplace
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#cfc4c5'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#988e90'
  outline-variant: '#4c4546'
  surface-tint: '#c6c6c6'
  primary: '#c6c6c6'
  on-primary: '#303030'
  primary-container: '#000000'
  on-primary-container: '#757575'
  inverse-primary: '#5e5e5e'
  secondary: '#c8c6c5'
  on-secondary: '#303030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#00decb'
  on-tertiary: '#003732'
  tertiary-container: '#000000'
  on-tertiary-container: '#008478'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#41fce7'
  tertiary-fixed-dim: '#00decb'
  on-tertiary-fixed: '#00201c'
  on-tertiary-fixed-variant: '#005048'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 12px
  price-display:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.25rem
  sm: 0.5rem
  md: 1rem
  lg: 1.5rem
  xl: 2rem
  gutter: 1rem
  margin-desktop: 2.5rem
  margin-mobile: 1rem
---

## Brand & Style
The design system is engineered for a high-volume, enterprise-grade electronics marketplace. It prioritizes clarity, technical precision, and commercial urgency. The aesthetic is **Corporate Modern** with a focus on high information density, allowing users to compare specifications and pricing across vast inventories efficiently.

The visual language balances a sophisticated dark foundation with a vibrant, high-energy accent to drive conversion. It evokes a sense of reliability and cutting-edge technology, catering to tech-savvy consumers and professional buyers who value efficiency over decorative flair.

## Colors
The palette is rooted in a "Tech-Noir" foundation, utilizing deep blacks and dark grays in a **native Dark Mode** configuration to provide a premium backdrop for product photography. 

- **Primary & Secondary:** Used for global navigation, footers, and primary surfaces to establish authority. In this dark theme, these provide the deep structural layers.
- **Accent (Teal/Cyan):** Reserved strictly for call-to-action elements, price highlights, and active states. This color (#00e5d1) is optimized for high vibrance and contrast against the dark UI.
- **System States:** Success is represented by the accent teal, while errors use a high-visibility red to signal inventory or payment issues.

## Typography
The system utilizes **Inter** for its exceptional legibility at small sizes and its neutral, systematic character. The scale is intentionally compact to support high-density layouts common in enterprise retail.

- **Headlines:** Use tighter letter spacing and heavy weights to create a strong visual anchor for product sections.
- **Data Density:** `body-sm` and `body-md` are the workhorses for technical specifications and attribute lists.
- **Pricing:** Price displays use a dedicated bold weight to ensure immediate scannability within product cards.

## Layout & Spacing
The layout follows a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

- **Density:** We employ a tight 16px (1rem) gutter to maximize horizontal real estate, allowing for more product cards per row.
- **Alignment:** Content should strictly adhere to the grid. Product sliders may "bleed" off the edge on mobile to indicate horizontal scrollability.
- **Rhythm:** Vertical spacing between major sections (e.g., "Trending Audio" to "Laptops") should be consistent at `spacing.xl` to maintain a structured hierarchy.

## Elevation & Depth
Depth is handled through **Tonal Layering** and **Low-Contrast Outlines** rather than heavy shadows, specifically optimized for dark surfaces.

- **Level 0 (Floor):** Deep Black (#000000) for the primary background.
- **Level 1 (Cards):** Surface color (#1d1d1d) with a subtle 1px border (#2d2d2d) to define boundaries.
- **Level 2 (Hover/Active):** A soft, subtle ambient glow or tonal shift to lift the product card slightly when a user interacts.
- **Modals/Overlays:** High-contrast borders with a 20% backdrop blur to maintain focus on the transaction.

## Shapes
The shape language is professional and refined. 
- **Standard UI:** 8px (`0.5rem`) radius for buttons, input fields, and product cards.
- **Large Elements:** 16px (`1rem`) for promotional banners and category hero sections.
- **Interactive Small:** 4px for small badges or icon containers to maintain a sharp, technical feel.

## Components

### Search Bar
The primary search bar is an "Always-On" component. It features a high-contrast border and a prominent "Search" button using the accent Teal. Integrated "Quick Results" should appear in a Level 2 elevation dropdown.

### Product Cards
Dense but organized. Elements include:
- Product Image (Center-aligned)
- Badge (e.g., "Bestseller", "20% Off") top-left.
- Product Title (Limit to 2 lines).
- Price Display (Bold Tertiary accent color).
- Technical Tagline (e.g., "8GB RAM | 256GB SSD").
- Secondary "Add to Cart" button or icon.

### Category Grids
Circular or soft-square icons with 12px labels. These use dark gray backgrounds in rest states and the accent teal for active/hover states.

### Pricing Labels & Badges
- **Discount Badges:** Inset labels with the accent teal background and black text for maximum urgency and contrast.
- **Strikethrough Price:** Secondary gray, smaller font size to emphasize the current savings.

### Horizontal Sliders
Used for "Featured Brands" or "Recently Viewed". Sliders must include visible navigation arrows (chevron style) that appear on hover to assist desktop users.