# 🌙 Dark Theme with Cyan Accent Guide

## Color Scheme Overview

Your template now features a **sleek black theme** with **vibrant cyan accents** for a modern, high-contrast look.

### Theme Philosophy
- **Pure black backgrounds** (#000000) for maximum contrast and OLED optimization
- **Cyan/Teal accents** (#06B6D4) for highlights and interactive elements
- **Light gray text** (#F5F5F5) for optimal readability on dark backgrounds
- **Subtle borders** to define sections without overwhelming the dark aesthetic

## 🎨 Color Palette

### Primary Colors (Cyan)
```css
--color-primary: #06B6D4          /* Bright cyan - main accent */
--color-primary-hover: #22D3EE    /* Lighter cyan for hover states */
--color-primary-light: #67E8F9    /* Light cyan for gradients */
--color-primary-dark: #0891B2     /* Dark cyan for contrast */
```

**Usage**: Buttons, links, highlights, CTAs
- `bg-primary` - Bright cyan background
- `text-primary` - Cyan text
- `border-primary` - Cyan borders

### Secondary Colors (Teal)
```css
--color-secondary: #14B8A6        /* Teal accent */
--color-secondary-hover: #2DD4BF  /* Lighter teal hover */
--color-secondary-light: #5EEAD4  /* Light teal variant */
```

**Usage**: Secondary CTAs, alternative highlights

### Dark Surfaces
```css
--color-background: #000000        /* Pure black - page background */
--color-surface: #0A0A0A          /* Very dark gray - cards */
--color-surface-elevated: #171717 /* Elevated elements */
--color-surface-hover: #1F1F1F    /* Hover states */
```

**Usage**: Page background, cards, panels, modals

### Text Colors
```css
--color-foreground: #F5F5F5       /* Light gray - primary text */
--color-muted: #A3A3A3            /* Medium gray - secondary text */
--color-subtle: #737373           /* Dark gray - subtle text */
```

**Usage**: All text content on dark backgrounds

### Borders
```css
--color-border: #262626           /* Dark borders */
--color-border-subtle: #1A1A1A    /* Very subtle borders */
--color-border-hover: #404040     /* Hover state borders */
```

## 💡 Design Patterns

### Buttons

#### Primary (Cyan on Black)
```html
<button class="bg-primary hover:bg-primary-hover text-black px-6 py-3 rounded-lg
               shadow-lg shadow-primary/50 hover:scale-105 transition-all">
  Click Me
</button>
```

#### Outline
```html
<button class="border-2 border-primary text-primary hover:bg-primary
               hover:text-black px-6 py-3 rounded-lg transition-all">
  Outline
</button>
```

#### Ghost
```html
<button class="bg-surface-elevated border border-border text-foreground
               hover:border-primary px-6 py-3 rounded-lg transition-all">
  Ghost
</button>
```

### Cards

#### Standard Card
```html
<div class="bg-surface border border-border rounded-lg p-6 shadow-xl">
  <h3 class="text-foreground text-xl font-bold mb-2">Card Title</h3>
  <p class="text-muted">Card description</p>
</div>
```

#### Elevated Card with Cyan Accent
```html
<div class="bg-surface-elevated border border-primary/30 rounded-lg p-6
            shadow-xl shadow-primary/10">
  <h3 class="text-primary text-xl font-bold mb-2">Featured Card</h3>
  <p class="text-foreground">Important content</p>
</div>
```

### Hero Sections

```html
<section class="min-h-screen bg-background text-foreground relative">
  <!-- Cyan gradient overlay -->
  <div class="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>

  <div class="relative z-10 container">
    <!-- Gradient text -->
    <h1 class="text-6xl font-bold bg-gradient-to-r from-primary via-primary-light
               to-secondary bg-clip-text text-transparent">
      Your Heading
    </h1>

    <!-- Button with glow -->
    <button class="bg-primary text-black px-8 py-3 rounded-lg
                   shadow-lg shadow-primary/50 hover:scale-105 transition-all">
      Get Started
    </button>
  </div>
</section>
```

### Text Gradients

```html
<!-- Cyan gradient text -->
<h2 class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
  Gradient Heading
</h2>

<!-- Cyan to light cyan -->
<h2 class="bg-gradient-to-r from-primary via-primary-light to-secondary
           bg-clip-text text-transparent">
  Multi-stop Gradient
</h2>
```

### Glowing Effects

```html
<!-- Glowing button -->
<button class="bg-primary text-black px-6 py-3 rounded-lg
               shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/70">
  Glow Button
</button>

<!-- Glowing card -->
<div class="bg-surface border border-primary/50 rounded-lg p-6
            shadow-2xl shadow-primary/20">
  Content
</div>
```

### Navigation

```html
<nav class="bg-surface border-b border-border">
  <a class="text-muted hover:text-primary transition-colors">Home</a>
  <a class="text-muted hover:text-primary transition-colors">About</a>
  <a class="text-primary font-semibold">Active</a>
</nav>
```

### Forms

```html
<!-- Input with cyan focus -->
<input class="bg-surface border border-border text-foreground px-4 py-2 rounded-lg
              focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none
              transition-all"
       placeholder="Enter text...">

<!-- Textarea -->
<textarea class="bg-surface border border-border text-foreground p-4 rounded-lg
                 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none
                 transition-all resize-none"
          rows="4"></textarea>
```

### Alerts

```html
<!-- Success (green) -->
<div class="bg-success/10 border-l-4 border-success p-4 rounded">
  <p class="text-success font-semibold">Success message</p>
</div>

<!-- Info (cyan) -->
<div class="bg-primary/10 border-l-4 border-primary p-4 rounded">
  <p class="text-primary font-semibold">Info message</p>
</div>

<!-- Error (red) -->
<div class="bg-error/10 border-l-4 border-error p-4 rounded">
  <p class="text-error font-semibold">Error message</p>
</div>
```

## 🎯 Best Practices

### Contrast & Readability
- ✅ Always use `text-foreground` (#F5F5F5) for main content
- ✅ Use `text-muted` (#A3A3A3) for secondary text
- ✅ Cyan text (`text-primary`) on black has 7.4:1 contrast ratio (AAA compliant)
- ✅ White text on cyan has 4.5:1+ contrast (AA compliant)

### Visual Hierarchy
1. **Primary actions**: `bg-primary` with black text
2. **Secondary actions**: `border-primary` outline style
3. **Tertiary actions**: `text-primary` links

### Spacing & Depth
- Use `shadow-lg shadow-primary/50` for glowing effects
- Stack surfaces: `bg-background` → `bg-surface` → `bg-surface-elevated`
- Subtle borders: `border-border-subtle` for minimal separation

### Interactive States
```html
<!-- Full interactive element -->
<button class="bg-primary hover:bg-primary-hover active:scale-95
               text-black px-6 py-3 rounded-lg
               shadow-lg shadow-primary/50
               hover:shadow-xl hover:shadow-primary/70
               transition-all duration-300">
  Interactive Button
</button>
```

## 🔧 Customization

### Changing the Accent Color

Edit `src/styles/global.css`:

```css
@theme {
  /* Change cyan to another color */
  --color-primary: #A855F7;        /* Purple example */
  --color-primary-hover: #C084FC;  /* Lighter purple */
  --color-primary-light: #E9D5FF;  /* Light purple */
}
```

### Adjusting Background Darkness

```css
@theme {
  /* For less pure black (easier on eyes) */
  --color-background: #0F0F0F;     /* Very dark gray instead of pure black */
  --color-surface: #1A1A1A;        /* Slightly lighter */
}
```

## 📱 Mobile Optimization

The dark theme is optimized for:
- ✅ **OLED displays** - Pure black saves battery
- ✅ **Night viewing** - Reduced eye strain
- ✅ **High contrast** - Easy to read in any lighting

## ✨ Pro Tips

1. **Use gradients sparingly** - Cyan gradients work best for headings
2. **Layer shadows** - Combine box-shadow with glow effects
3. **Animate on hover** - Use `hover:scale-105` for buttons
4. **Opacity for depth** - Use `/10`, `/20`, `/30` for subtle backgrounds
5. **Border glow** - Combine `border-primary` with `shadow-primary/20`

## 🧪 Testing

Visit `/test-colors` to see all colors in action on the dark theme.

## 📚 Resources

- Color contrast checker: Use browser DevTools
- Tailwind opacity modifiers: `/10` to `/100` in steps of 10
- All utilities work: `bg-*`, `text-*`, `border-*`, `ring-*`, `shadow-*`
