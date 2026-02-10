# Color System Guide

This template uses a flexible, semantic color system built with **Tailwind CSS v4** and the `@theme` directive.

## 🔧 How It Works

In Tailwind v4, colors are defined in `src/styles/global.css` using the `@theme` directive:
- Variables with `--color-*` naming automatically become Tailwind utilities
- `--color-primary` → `bg-primary`, `text-primary`, `border-primary`, etc.
- No need for separate `tailwind.config.mjs` color definitions (v4 feature!)

## ✅ Quick Test

Visit `/test-colors` in your browser to verify all colors are working correctly.

## 🎨 Available Colors

All colors work with standard Tailwind utilities: `bg-*`, `text-*`, `border-*`, `ring-*`, etc.

### Brand Colors

```html
<!-- Primary (Main brand color) -->
<div class="bg-primary text-white">Primary background</div>
<button class="bg-primary hover:bg-primary-hover">Hover state</button>
<div class="bg-primary-light">Light variant</div>

<!-- Secondary -->
<div class="bg-secondary text-white">Secondary background</div>
<button class="bg-secondary hover:bg-secondary-hover">Hover state</button>

<!-- Accent -->
<div class="bg-accent">Accent highlights</div>
<button class="bg-accent hover:bg-accent-hover">Hover state</button>
```

### Surfaces & Backgrounds

```html
<body class="bg-background">Page background</body>
<div class="bg-surface">Card/panel background</div>
<div class="bg-surface-elevated">Elevated surface</div>
```

### Text Colors

```html
<h1 class="text-foreground">Primary text</h1>
<p class="text-muted">Secondary/muted text</p>
<span class="text-subtle">Subtle text</span>
```

### State Colors

```html
<!-- Success -->
<div class="bg-success text-white">Success message</div>
<p class="text-success">Success text</p>

<!-- Error -->
<div class="bg-error text-white">Error message</div>
<p class="text-error">Error text</p>

<!-- Warning -->
<div class="bg-warning text-white">Warning message</div>
<p class="text-warning">Warning text</p>

<!-- Info -->
<div class="bg-info text-white">Info message</div>
<p class="text-info">Info text</p>
```

### Borders

```html
<div class="border border-border">Default border</div>
<div class="border border-border-subtle">Subtle border</div>
<input class="focus:ring-2 focus:ring-focus">Focus ring</input>
```

## 🔧 Opacity Support

All colors support Tailwind's opacity modifiers:

```html
<div class="bg-primary/50">50% opacity</div>
<div class="bg-primary/75">75% opacity</div>
<div class="text-foreground/80">80% opacity text</div>
<div class="border-primary/30">30% opacity border</div>
```

## 🎯 Common Patterns

### Buttons

```html
<!-- Primary Button -->
<button class="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded">
  Primary Action
</button>

<!-- Secondary Button -->
<button class="bg-secondary hover:bg-secondary-hover text-white px-4 py-2 rounded">
  Secondary Action
</button>

<!-- Outline Button -->
<button class="border-2 border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded">
  Outline Button
</button>

<!-- Ghost Button -->
<button class="text-primary hover:bg-primary/10 px-4 py-2 rounded">
  Ghost Button
</button>
```

### Cards

```html
<div class="bg-surface border border-border rounded-lg p-6 shadow-sm">
  <h2 class="text-foreground text-xl font-bold mb-2">Card Title</h2>
  <p class="text-muted">Card description text</p>
</div>

<!-- Elevated Card -->
<div class="bg-surface-elevated border border-border-subtle rounded-lg p-6 shadow-md">
  <h2 class="text-foreground text-xl font-bold mb-2">Elevated Card</h2>
  <p class="text-muted">More prominent card</p>
</div>
```

### Alerts/Notifications

```html
<!-- Success Alert -->
<div class="bg-success/10 border-l-4 border-success p-4 rounded">
  <p class="text-success font-semibold">Success!</p>
  <p class="text-foreground/80">Operation completed successfully.</p>
</div>

<!-- Error Alert -->
<div class="bg-error/10 border-l-4 border-error p-4 rounded">
  <p class="text-error font-semibold">Error!</p>
  <p class="text-foreground/80">Something went wrong.</p>
</div>

<!-- Warning Alert -->
<div class="bg-warning/10 border-l-4 border-warning p-4 rounded">
  <p class="text-warning font-semibold">Warning!</p>
  <p class="text-foreground/80">Please review this information.</p>
</div>

<!-- Info Alert -->
<div class="bg-info/10 border-l-4 border-info p-4 rounded">
  <p class="text-info font-semibold">Info</p>
  <p class="text-foreground/80">Here's some helpful information.</p>
</div>
```

### Forms

```html
<input
  class="border border-border rounded px-3 py-2 focus:ring-2 focus:ring-focus focus:border-focus outline-none"
  type="text"
  placeholder="Enter text..."
/>

<input
  class="border-2 border-error rounded px-3 py-2 focus:ring-2 focus:ring-error outline-none"
  type="text"
  placeholder="Error state..."
/>
```

### Navigation

```html
<nav class="bg-surface border-b border-border">
  <a class="text-foreground hover:text-primary">Home</a>
  <a class="text-muted hover:text-primary">About</a>
  <a class="text-primary font-semibold">Active</a>
</nav>
```

## 📝 Customization Guide

### Changing Colors

Edit `src/styles/global.css` in the `@theme` block:

```css
@theme {
  /* Change primary color - use RGB values without commas */
  --color-primary: 37 99 235;  /* Blue example: #2563eb */

  /* Update hover state (usually darker) */
  --color-primary-hover: 29 78 216;  /* Darker blue: #1d4ed8 */
}
```

### Adding New Colors

1. Add to `global.css` `@theme` block:
```css
--color-brand: 168 85 247;  /* Your custom color */
```

2. Add to `tailwind.config.mjs`:
```js
colors: {
  brand: 'rgb(var(--color-brand) / <alpha-value>)',
}
```

3. Use it:
```html
<div class="bg-brand text-white">Custom brand color</div>
```

### Extended Color Scales

For more granular control, uncomment and customize the scale example in `global.css`:

```css
--color-primary-50: 240 249 255;   /* Lightest */
--color-primary-100: 224 242 254;
/* ... */
--color-primary-500: 25 100 96;    /* Base */
/* ... */
--color-primary-950: 4 47 46;      /* Darkest */
```

Then use: `bg-primary-50`, `bg-primary-100`, etc.

### Dark Mode Support

To add dark mode, update `global.css`:

```css
@theme {
  --color-background: 255 255 255;  /* Light mode */
  --color-foreground: 39 39 39;

  @media (prefers-color-scheme: dark) {
    --color-background: 15 23 42;   /* Dark mode */
    --color-foreground: 241 245 249;
  }
}
```

Or use class-based dark mode:

```css
@theme {
  --color-background: 255 255 255;

  .dark {
    --color-background: 15 23 42;
  }
}
```

## 🚀 Pro Tips

1. **Consistency**: Always use semantic colors (`primary`, `surface`) instead of direct values
2. **Opacity**: Use `/` modifier for transparency: `bg-primary/50`
3. **Hover States**: Pre-defined hover variants: `bg-primary-hover`
4. **Accessibility**: Ensure sufficient contrast ratios for text
5. **Testing**: Test color changes across all components before committing

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [RGB to Hex Converter](https://www.rapidtables.com/convert/color/rgb-to-hex.html)
