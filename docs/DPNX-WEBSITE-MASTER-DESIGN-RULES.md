# DPNX! Website Master Design Rules

Authoritative design principles for the DPNX! marketing website. Apply when designing, refining, or reviewing any homepage section or repeated content block.

---

## Golden Rules

1. **One website = one presentation system** — shared grid, gutters, page tones, and component families across every section.
2. **Same component family = same proportion** — twin card types (e.g. Services + Numbers) share the same aspect ratio and editorial logic.
3. **TOP and LEFT establish the grid** — master alignment guides content; centering is intentional, not accidental drift.
4. **Typography hierarchy** — headlines, supporting copy, labels, and CTAs each have a clear, consistent role.
5. **Change only what was requested** — do not expand scope into unrelated sections, assets, or layout systems.
6. **One meaningful visual change at a time** — isolate refinements so each pass has a clear before/after.

---

## Presentation System

- **Content width:** `max-w-[1280px]` with shared gutters (`px-5 md:px-8 lg:px-10`).
- **Page tones:** alternate **A** (`bg-background`) and **B** (`bg-surface-subtle`) only.
- **Hero / portfolio media:** 16:9 presentation standard.
- **Services / Numbers cards:** 3:5 portrait editorial cards.
- **Small / supporting UI text:** `font-[650]` via shared layout tokens.

---

## Typography / Visual System

### Six-Level Global Typography System

DPNX uses a deliberately limited six-level typography system across the entire website: **64px**, **54px**, **45px**, **40px**, **24px**, and **16px**. No seventh font size. Responsive layouts solve smaller screens through available width, natural wrapping, line-height, spacing, and composition — not additional font sizes.

**Levels:**

| Level | Size | Name | Use | Token / location |
|-------|------|------|-----|------------------|
| 1 | **64px** | **Hero primary display** | Page 1 primary headline ("Your Idea." / "Our Expertise.") | Page-local — `Hero.tsx` |
| 2 | **54px** | **Large display / numeric display** | Numbers stat values, approved large display content | `textHeroDisplayClassName` |
| 3 | **45px** | **Section / major heading** | Presentation page section headings (standard h2) | `textLargeSectionClassName` |
| 4 | **40px** | **Hero secondary display** | Page 1 Hero tagline ("We Got You.") | Page-local — `Hero.tsx` |
| 5 | **24px** | **Content heading / lead / card title** | Service titles, statement leads, portfolio titles, numbers labels, editorial box titles, approved larger supporting copy | `textMediumContentClassName`, `textLevel3SupportingClassName` |
| 6 | **16px** | **Body / supporting / metadata / UI** | Body copy, standard supporting descriptions, categories, labels, nav, footer, buttons, form fields, eyebrows | `textSmallCompactClassName` |

**Example — What We Do:**

- "What We Do" → Level 3 (45px)
- "Events across every scale and format." → Level 5 (24px)
- "Corporate Events" → Level 5 (24px)
- "Gatherings built around your team's goals." → Level 6 (16px)

**Scale relationship:** Hero primary (64px) → large display (54px) → section heading (45px) → hero secondary (40px) → content heading (24px) → body/UI (16px).

**Shared spacing tokens:** `compactTextGapClassName` (related title → description), `sectionHeadlineGapClassName` (section heading → supporting copy).

### Hierarchy

- Headlines lead; supporting copy follows with clearly subordinate weight and scale.
- Section eyebrows use uppercase, tracked labels at small scale.
- Do not make headlines heavier when refining supporting text.

### Small Text Standard

- Navbar links, footer links, CTAs, card descriptions, stat supporting text, and section eyebrows use approximately `font-weight: 650`.

### Compact Text Relationship Rule

Across the entire website, related text elements should have compact, intentional vertical spacing.

When a heading/title is followed by supporting copy, the relationship should feel visually connected rather than widely separated.

**Principles:**

- Heading → supporting copy should generally use a compact gap.
- Avoid excessive vertical spacing between text elements that belong to the same content group.
- Supporting copy should use a controlled, readable line-height.
- Multi-line supporting copy should feel visually grouped rather than stretched vertically.
- The goal is a clean editorial/product-style relationship similar to Apple's typography hierarchy.
- This does NOT mean every component must use identical pixel spacing.
- Each component can have its own appropriate spacing based on scale, content, and layout.
- Preserve the established typography hierarchy and visual breathing room.

**Apply consistently when designing or fine-tuning:**

- Hero
- Service cards
- Numbers
- Portfolio
- About
- Contact
- Other repeated content blocks

---

## Color / Visual Atmosphere

### Pastel · Candy · Neon Color Direction

DPNX uses an Apple-inspired but DPNX-owned color direction combining **pastel**, **candy**, and **neon** sensibilities.

**Core color families:**

- Sky / Soft Blue
- Periwinkle / Indigo
- Lavender / Violet
- Pink / Rose
- Mint / Green
- Aqua / Cyan
- Soft Yellow
- Orange / Coral

Each family may include soft pastel versions, brighter candy versions, and stronger neon versions.

Use these colors intentionally for gradients, subtle image atmospheres, accents, card treatments, highlights, interactive states, and visual transitions.

The overall result should feel **youthful**, **lively**, **modern**, **sophisticated**, **energetic**, and **visually fresh**.

**Avoid:**

- Overly corporate color treatment
- Excessive dark overlays
- Random rainbow usage
- Making every section use every color
- Childish or cartoony results
- Uncontrolled saturation

Photography remains important and should not be overwhelmed by color treatment.

This is inspired by the visual language observed on Apple's website — **do not** copy Apple's branding or create literal Apple colors.

---

## Change Discipline

- Do not retroactively redesign every section when adding a new principle.
- Implement new rules in the section under active work unless explicitly asked to roll out site-wide.
- Preserve layout, carousel behavior, image assets, and content unless the task explicitly includes them.
