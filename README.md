# mds-styles

Design system tokens for the MDS design system, available as **CSS custom properties** and **SCSS variables**.

---

## Installation

```bash
npm install mds-styles
```

---

## Usage

### CSS

Import all tokens (primitive + semantic):

```css
@import "mds-styles";
```

Or import only the layer you need:

```css
/* Primitive tokens only */
@import "mds-styles/primitive";

/* Semantic tokens only (requires primitives to be loaded first) */
@import "mds-styles/semantic";
```

### SCSS

```scss
/* All tokens */
@use "mds-styles/scss" as mds;

/* Primitive tokens only */
@use "mds-styles/primitive/scss" as primitive;

/* Semantic tokens only */
@use "mds-styles/semantic/scss" as semantic;
```

---

## Token Types

### Primitive Tokens

Primitive tokens map directly to raw values. They are the single source of truth for every design decision.

| Category      | Scale | Example                                      |
|---------------|-------|----------------------------------------------|
| Color         | 100–900 | `--mds-blue-100` → `hsl(210, 100%, 95%)`  |
| Border Radius | 100–600 | `--mds-border-radius-100` → `2px`         |
| Opacity       | 100–600 | `--mds-opacity-100` → `0.1`               |
| Box Shadow    | 100–600 | `--mds-shadow-100` → `0 1px 2px 0 …`     |

#### Colors

Colors are expressed as HSL values. `100` is the lightest shade; `900` is the darkest.

Available color palettes: **blue**, **red**, **green**, **yellow**, **orange**, **purple**, **gray**

```css
/* CSS */
color: var(--mds-blue-500);
background: var(--mds-gray-100);

/* SCSS */
color: $mds-blue-500;
background: $mds-gray-100;
```

#### Border Radius

```css
/* CSS */
border-radius: var(--mds-border-radius-300); /* 8px */

/* SCSS */
border-radius: $mds-border-radius-300;
```

#### Opacity

```css
/* CSS */
opacity: var(--mds-opacity-300); /* 0.4 */

/* SCSS */
opacity: $mds-opacity-300;
```

#### Box Shadow

```css
/* CSS */
box-shadow: var(--mds-shadow-200);

/* SCSS */
box-shadow: $mds-shadow-200;
```

---

### Semantic Tokens

Semantic tokens reference primitive tokens and describe their **purpose** rather than their value. They support light and dark themes automatically.

#### Theming

Apply `data-theme="dark"` to any ancestor element (typically `<html>`) to switch to dark mode:

```html
<html data-theme="dark">
```

#### Semantic Color Tokens

```css
/* CSS */
background-color: var(--mds-color-background-page);
color: var(--mds-color-text-primary);
border-color: var(--mds-color-border-default);
```

| Token                           | Light mode           | Dark mode            |
|---------------------------------|----------------------|----------------------|
| `--mds-color-background-page`   | `--mds-gray-100`     | `--mds-gray-900`     |
| `--mds-color-background-surface`| `--mds-gray-200`     | `--mds-gray-800`     |
| `--mds-color-background-neutral`| `--mds-gray-300`     | `--mds-gray-700`     |
| `--mds-color-text-primary`      | `--mds-gray-900`     | `--mds-gray-100`     |
| `--mds-color-text-secondary`    | `--mds-gray-600`     | `--mds-gray-400`     |
| `--mds-color-text-link`         | `--mds-blue-500`     | `--mds-blue-300`     |
| `--mds-color-border-default`    | `--mds-gray-300`     | `--mds-gray-700`     |
| `--mds-color-brand-primary`     | `--mds-blue-500`     | `--mds-blue-400`     |
| `--mds-color-status-success`    | `--mds-green-500`    | `--mds-green-400`    |
| `--mds-color-status-error`      | `--mds-red-500`      | `--mds-red-400`      |
| `--mds-color-status-warning`    | `--mds-yellow-500`   | `--mds-yellow-400`   |
| `--mds-color-status-info`       | `--mds-blue-500`     | `--mds-blue-400`     |

#### Semantic Border Radius, Opacity & Shadow Tokens

```css
border-radius: var(--mds-radius-md);     /* → --mds-border-radius-300 */
opacity:       var(--mds-opacity-disabled); /* → --mds-opacity-200 */
box-shadow:    var(--mds-shadow-card);   /* → --mds-shadow-200 */
```

---

## File Structure

```
src/
├── index.css                        ← CSS entry point (all tokens)
├── index.scss                       ← SCSS entry point (all tokens)
└── tokens/
    ├── primitive/
    │   ├── colors.css / colors.scss
    │   ├── border-radius.css / border-radius.scss
    │   ├── opacity.css / opacity.scss
    │   ├── box-shadow.css / box-shadow.scss
    │   └── index.css / index.scss
    └── semantic/
        ├── colors.css / colors.scss
        ├── border-radius.css / border-radius.scss
        ├── opacity.css / opacity.scss
        ├── box-shadow.css / box-shadow.scss
        └── index.css / index.scss
```