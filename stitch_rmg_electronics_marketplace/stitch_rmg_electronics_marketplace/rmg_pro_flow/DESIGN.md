---
name: RMG Pro-Flow
colors:
  surface: '#0c141e'
  surface-dim: '#08090A'
  surface-bright: '#21262D'
  surface-container-lowest: '#070f19'
  surface-container-low: '#141c27'
  surface-container: '#161B22'
  surface-container-high: '#232a36'
  surface-container-highest: '#2d3541'
  on-surface: '#dbe3f2'
  on-surface-variant: '#b9cac6'
  inverse-surface: '#dbe3f2'
  inverse-on-surface: '#29313c'
  outline: '#839491'
  outline-variant: '#3a4a47'
  surface-tint: '#00decd'
  primary: '#ffffff'
  on-primary: '#003732'
  primary-container: '#08fdea'
  on-primary-container: '#007168'
  inverse-primary: '#006a62'
  secondary: '#c3c6cf'
  on-secondary: '#2d3137'
  secondary-container: '#454950'
  on-secondary-container: '#b5b8c1'
  tertiary: '#ffffff'
  on-tertiary: '#003642'
  tertiary-container: '#b3ebff'
  on-tertiary-container: '#006e85'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#08fdea'
  primary-fixed-dim: '#00decd'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#dfe2eb'
  secondary-fixed-dim: '#c3c6cf'
  on-secondary-fixed: '#181c22'
  on-secondary-fixed-variant: '#43474e'
  tertiary-fixed: '#b3ebff'
  tertiary-fixed-dim: '#4cd6fb'
  on-tertiary-fixed: '#001f27'
  on-tertiary-fixed-variant: '#004e5f'
  background: '#0c141e'
  on-background: '#dbe3f2'
  surface-variant: '#2d3541'
  status-success: '#23C55E'
  status-warning: '#F59E0B'
  status-error: '#EF4444'
  data-viz-1: '#14FFEC'
  data-viz-2: '#7928CA'
  data-viz-3: '#FF0080'
typography:
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
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
    letterSpacing: 0.05em
  mono-data:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  container-max: 1440px
---

## Brand & Style

This design system is engineered for high-performance electronic ecosystems, balancing the rigorous density of enterprise B2B portals with the modern accessibility of community platforms. The aesthetic is "Technological Precision"—a fusion of high-density functionalism and high-contrast digital accents. 

The design style leverages **Minimalism with Tonal Layering**. It avoids unnecessary decorative elements, relying instead on a disciplined grid, strict typographic hierarchy, and a sophisticated dark-mode architecture. For the Admin and B2B segments, the UI prioritizes structural clarity and data throughput. For Community and Sustainability hubs, the same professional DNA is maintained but softened with increased whitespace and expressive accent placements.

**Key Visual Principles:**
- **High-Density Utility:** Information is prioritized over "breathability" in pro-tools, utilizing compact spacing and smaller scale typography.
- **Surface-Architecture:** Depth is communicated through color shifts (Surface-Dim to Surface-Container) rather than traditional skeuomorphism.
- **Technical Accents:** Vibrant teal and cyan are used surgically to denote interaction points and status, cutting through the neutral dark palette.

## Colors

The palette is optimized for long-duration usage in professional environments, utilizing a **Pure Dark** foundation to reduce eye strain and maximize the pop of functional accents.

- **Foundational Neutrals:** `surface-dim` acts as the global background. `surface-container` is used for content cards and sidebars, while `surface-bright` denotes active or hovered states.
- **Primary & Tertiary:** The `primary` Teal (#14FFEC) is the core action color. The `tertiary` Cyan (#00B4D8) is used for secondary actions, data visualization, and sustainability-related branding to provide a subtle shift in mood while remaining within the "Pro" spectrum.
- **Semantic Logic:** Success, Warning, and Error colors follow industry standards but are slightly desaturated to maintain harmony with the dark theme.
- **Data Viz:** High-contrast, wide-gamut hues are provided to ensure complex charts remain legible against dark backgrounds.

## Typography

The typographic system utilizes a dual-font approach to signify the "Electronics & Tech" heritage of the brand.

- **Headers & Data:** `JetBrains Mono` is used for all headlines and technical data points. Its monospaced nature reinforces the precision and "engineered" feel of the system.
- **UI & Reading:** `Inter` is the primary workhorse for body text and interface labels. It is chosen for its exceptional legibility at small sizes, which is critical for the high-density Admin and B2B portals.
- **Scale usage:** 
    - Use `headline-md` for primary section titles.
    - Use `body-sm` for dense data tables and secondary metadata.
    - Use `label-bold` for all buttons, tab headers, and form labels to ensure they are immediately distinguishable from content.

## Layout & Spacing

The system follows a **4px base grid** to allow for the extreme precision required by high-density dashboards.

- **Grid Model:** A 12-column fluid grid is used for standard layouts. In Admin/B2B contexts, gutters are reduced to `12px` (3 units) to maximize horizontal real estate. In Community/Sustainability hubs, gutters expand to `24px` (6 units) for better readability.
- **Density Toggles:** Components should support two density modes:
    - **Compact (Pro):** Used in Admin/B2B. Minimal padding, 4px/8px internal spacing.
    - **Default (Standard):** Used in Community/Sustainability. More generous 12px/16px internal spacing.
- **Breakpoints:**
    - Mobile (< 600px): Single column, margins reduced to 16px.
    - Tablet (600px - 1024px): 6-column reflow.
    - Desktop (> 1024px): Full 12-column layout with 32px margins.

## Elevation & Depth

This design system eschews traditional shadows in favor of **Tonal Layering and Low-Contrast Outlines**. Depth is created by "stepping up" the luminosity of the surface.

- **Base Layer:** `surface-dim` (#08090A). Used for the lowest level (background).
- **Content Layer:** `surface-container` (#161B22). Used for primary content blocks, cards, and tables.
- **Overlay Layer:** `surface-bright` (#21262D). Used for modals, tooltips, and floating menus.
- **Borders:** All container elements use a subtle `1px` solid border using `surface-bright` or a 10% opacity white to define boundaries without adding visual bulk. 
- **Interactions:** Hover states are indicated by a 5% increase in surface brightness or a primary teal bottom-border (2px).

## Shapes

The shape language is **Soft (0.25rem / 4px)**. This slight rounding provides a professional, modern feel that avoids the aggressiveness of sharp corners while maintaining the structured, "architectural" look required for an electronics enterprise.

- **Buttons & Inputs:** Use the base `4px` radius.
- **Large Cards/Containers:** May scale up to `rounded-lg` (8px) for Community hubs to feel more approachable.
- **Selection Indicators:** (e.g., active tab indicators) should remain sharp or use a `2px` radius to maintain a technical appearance.

## Components

### Buttons
- **Primary:** Background `primary`, text `surface-dim`, `label-bold` type. High visibility.
- **Secondary:** Transparent background, `primary` border (1px), `primary` text.
- **Ghost:** No background/border, `neutral` text, turns `primary` on hover.

### Input Fields
- **Style:** Dark background (`surface-dim`), `1px` border (`surface-bright`).
- **Focus State:** Border changes to `primary` with a subtle `2px` outer glow of the same color (0.3 opacity).
- **Labels:** Always use `label-bold` positioned above the input.

### Data Tables (Pro-Priority)
- **Header:** `surface-bright` background, `label-bold` text, no vertical borders.
- **Rows:** Alternating "Zebra" striping is discouraged; use `1px` horizontal dividers in `surface-bright`.
- **Density:** Row height for Admin portals should be fixed at `32px` or `40px`.

### Cards
- **Structure:** No shadows. `1px` border. Use `surface-container` for the body.
- **Sustainability Hub Variation:** Use a `tertiary` (Cyan) top-accent bar (4px) to distinguish sustainability content from standard B2B data.

### Navigation
- **B2B/Admin:** Vertical sidebar navigation using `surface-container`. Active states indicated by a `primary` teal vertical bar on the left edge.
- **Community:** Horizontal top-bar navigation to allow for more content-focused layouts. Use `headline-md` for the RMG brand mark.