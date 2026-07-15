# CodeTrack Design System

This document records the core design system for CodeTrack, capturing colors, buttons, typography, spacing, forms, badges, and other reusable product design tokens.

---

## 1. Brand Overview

- Product: **CodeTrack**
- Purpose: Habit-building streak tracker for daily coding practice.
- Visual style: Clean, modern, high-contrast with green streak accents, soft shadows, and restrained neutral palette.

---

## 2. Colors

### Primary
- `--color-primary`: `#16A34A` (green)
- `--color-primary-dark`: `#15833D` (deep / hover)
- `--color-primary-soft`: `#DCF7E7` (soft fill)

### Accents
- `--color-teal`: `#0EA5E9`
- `--color-amber`: `#F59E0B`
- `--color-danger`: `#EF4444`

### Neutrals
- `--color-ink`: `#0F172A`
- `--color-body`: `#334155`
- `--color-muted`: `#64748B`
- `--color-subtle`: `#F8FAFC`
- `--color-border`: `#E2E8F0`

### Heatmap scale
- `--heatmap-1`: `#F1F5F9` (least)
- `--heatmap-2`: `#D9F2D4`
- `--heatmap-3`: `#8FCB84`
- `--heatmap-4`: `#16A34A`
- `--heatmap-5`: `#145E22`

---

## 3. Buttons

### Primary
- Solid green primary button, best for one main CTA per view.
- `Get started` style.

### Secondary / Ghost
- White or light ghost button with border.
- `See how it works` style.

### Dark / Destructive
- Dark button for strong alternative actions.
- `Create account` style.
- `Delete` style uses `--color-danger`.

### Sizes / states
- Small: compact label buttons.
- Medium: default button size.
- Large: prominent CTA button.
- State variants: success, saving, disabled.

---

## 4. Typography

### Display / Heading
- Font family: `Space Grotesk` (headline)
- Weight: `700`
- Usage: Large hero headline and major section titles.

### Body
- Font family: `Inter`
- Weight: `400-600`
- Usage: paragraph text, labels, subheadings.

### Mono
- Font family: `JetBrains Mono`
- Usage: data labels, code-like metadata, tags.

### Text scale examples
- Hero headline: large type for bold messaging.
- Secondary text: readable 14–18px UI body copy.
- Tag / stat text: smaller mono or caption size.

---

## 5. Spacing, Radius & Elevation

### Spacing scale
- `xs`, `sm`, `md`, `lg`, `xl`, etc.
- Visual scale shown from 4px base unit upward.

### Corner radius
- `0` / square
- `4px`
- `8px`
- `12px`
- `16px`
- `full` / pill
- `999px`

### Elevation
- Soft card shadows and light surface elevation.
- Use subtle blur and spread for panels and overlays.

---

## 6. Forms

### Input fields
- Border color: `--color-border`
- Focus ring: green accent.
- Validation state: red outline for errors.

### Field types
- Email input example: `you@example.com`
- Password field with strength indicator.
- Checkboxes for preferences.

### Form states
- Normal
- Focused
- Error
- Disabled

---

## 7. Badges, Tags & Avatars

### Badge types
- `On track` (green)
- `Streak at risk` (amber)
- `New` (teal)
- `Draft` (muted)

### Topic tags
- `#react`
- `#mastered`
- `#algorithms`

### Avatar chips
- Small circular initials: `AR`, `MC`, `SI`, `PT`, `TB`
- Used for community or team indication.

---

## 8. Brand / Signature Heatmap

### Heatmap style
- Use green scale for activity intensity.
- Include month labels and a legend from `Less` to `More`.
- Primary pattern: calendar-style grid of small squares.

### Card layout
- Light surface card with a label: `Your activity`.
- Streak badge: `12-day streak`.

---

## 9. Data / Stats / Activity

### Metrics cards
- Current streak block
- Days this month
- Hours / week

### Progress indicators
- Horizontal goals progress bars.
- Labeled metrics such as “Learn React” and “DS&A topics”.

### Activity chart
- 14-day activity bar chart with green columns.
- Use minimal grid backgrounds and green accent bars.

---

## 10. Notes

- Keep the page clean and spacious with generous white space.
- Use green as the primary trust/action color; keep accents limited.
- Maintain accessible contrast between text and background.
- Use soft rounded containers for the interface cards.
