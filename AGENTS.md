---
name: Vibrant Creation Engine
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#434656'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#747688'
  outline-variant: '#c4c5d9'
  surface-tint: '#124af0'
  primary: '#0040e0'
  on-primary: '#ffffff'
  primary-container: '#2e5bff'
  on-primary-container: '#efefff'
  inverse-primary: '#b8c3ff'
  secondary: '#1b6b4f'
  on-secondary: '#ffffff'
  secondary-container: '#a6f2cf'
  on-secondary-container: '#247155'
  tertiary: '#903a00'
  on-tertiary: '#ffffff'
  tertiary-container: '#b25015'
  on-tertiary-container: '#ffece5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c3ff'
  on-primary-fixed: '#001356'
  on-primary-fixed-variant: '#0035be'
  secondary-fixed: '#a6f2cf'
  secondary-fixed-dim: '#8bd6b4'
  on-secondary-fixed: '#002115'
  on-secondary-fixed-variant: '#00513a'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb693'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7a3000'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-xl:
    fontFamily: Quicksand
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Quicksand
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Public Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is engineered to evoke a sense of creative playfulness while maintaining the precision of a high-end utility. It targets a diverse audience of creators, social media users, and casual pranksters who value speed and visual impact. 

The aesthetic is **Modern & Vibrant**, blending the approachability of soft, rounded geometry with the energy of high-saturation accents. The UI stays out of the way using a clean, systematic backdrop, allowing user-generated content and templates to remain the focal point. Movement should feel fluid, with bouncy transitions and tactile feedback that reinforce the "fun" aspect of generation.

## Colors

The palette is anchored by **Electric Blue**, used exclusively for primary calls-to-action and active states to drive the generation flow. **Soft Mint Green** serves as a refreshing secondary tone, primarily used for success indicators, "saved" states, and as a subtle background for preview containers. **Warm Orange** acts as the high-energy accent for badges, "New" features, and creative highlights.

The interface utilizes a "Clean Gray" foundation (`#F8F9FA`) to prevent visual fatigue. Surfaces are layered using white and very light gray values to create a sense of organized depth without relying on heavy borders.

## Typography

This design system uses a dual-font strategy to balance personality with readability. **Quicksand** provides a friendly, rounded geometric character for headlines, making the platform feel welcoming and modern. 

**Public Sans** is used for all functional text, including body copy, input labels, and tooltips. Its neutral, institutional clarity ensures that customization controls and technical instructions are easy to parse at a glance. On mobile, headlines scale down slightly to ensure high-impact text fits within the viewport without excessive wrapping.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a 12-column structure for desktop and a 4-column structure for mobile. Spacing is based on an 8px rhythmic scale. 

- **Desktop:** 40px outer margins with 24px gutters. Use wide containers for the "Editor" view to maximize the preview area.
- **Tablet:** 24px outer margins. Sidebar controls may collapse into a bottom drawer or a hidden off-canvas menu.
- **Mobile:** 16px outer margins. The primary "Sign Preview" should occupy the top 40% of the screen, with customization tools scrollable below.

Vertical spacing should be generous between sections (`lg`) to maintain a clean, airy feel, while related controls (like font size and color) should be grouped tightly (`sm`).

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Ambient Shadows**. Instead of harsh lines, surfaces are distinguished by slight shifts in background color and soft, diffused shadows.

- **Level 0 (Floor):** The main background (`#F8F9FA`).
- **Level 1 (Cards/Sidebar):** Pure white background with a very soft shadow (8px blur, 4% opacity, Blue-tinted) and a 1px neutral-200 stroke.
- **Level 2 (Active/Floating):** Higher elevation shadow (16px blur, 8% opacity) used for active template selection or hovering elements.
- **Glassmorphism:** Use a light background blur (12px) for sticky headers or modal overlays to maintain a sense of context with the underlying workspace.

## Shapes

The design system adopts a **Rounded** shape language to reinforce its friendly brand persona. 
- **Standard elements (Buttons, Inputs):** 0.5rem (8px).
- **Cards and Large Containers (`rounded-lg`):** 1rem (16px).
- **Feature/Hero sections (`rounded-xl`):** 1.5rem (24px).
- **Interactive UI Icons:** Should be contained within circular or highly rounded squares to match the soft aesthetic of the typography.

## Components

### Buttons
- **Primary:** Electric Blue background, white text, bold weight. On hover, the button should lift slightly (y-2px) and the shadow should deepen.
- **Ghost:** Transparent background with an Electric Blue border and text. Use for secondary actions like "Reset" or "Back."

### Cards (Template Selection)
- Cards should feature a large image preview with the template name below in `label-bold`.
- **Active State:** When selected, the card receives a 3px Electric Blue border and a Soft Mint Green checkmark icon in the top-right corner.

### Inputs & Controls
- **Font/Color Pickers:** Use segmented control buttons for quick selection. 
- **Text Inputs:** Soft gray backgrounds that turn white on focus with a blue glow.
- **Icons:** Use "Lucide" or similar thick-stroke, rounded icons for customization controls (font-size, alignment, download).

### Chips
- Use Warm Orange chips for status tags like "Trending" or "New Template." These should have white text and be fully pill-shaped.

### Lists
- For saved signs or history, use horizontal list items with rounded corners and a slight hover-fill of Soft Mint Green to indicate interactivity.



# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
