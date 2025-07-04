---
applyTo: '**'
---
Response Format, Code Structure, Coding Standards and Preferences that AI should follow

# Response Format
- no need to include description, summary, or any additional text
- just display the code snippet, and display description only when asked
- don't run pnpm dev commands
- ignore the unit test until I explicitly ask for it

# Code Structure
this codebase is a monorepo, the code is organized into apps and packages:
/apps/* : runnable apps
/apps/storybook: Storybook app for the React UI components
/apps/svelte-docs : Svelte documentation app
/packages/* : reusable packages
/packages/core: Core style, theme, and shared utilities
/packages/basic: React UI components
/packages/svelte: Svelte UI components

---
applyTo: "**/*.ts,**/*.tsx"
---
# Coding Standards and Preferences for React

## Coding Standards and Preferences
- prefix className with b, example: `bButton`, `bCard`
- when applying a class to an element, use the `className` prop with cx, example: `className={cx(bButton, className)}`
- when creating react components, always use interface for props, and extending respective HTML element props, example:
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // custom props
}
```

---
applyTo: "**/*.svelte"
---
# Coding Standards and Preferences for Svelte

## Coding Standards and Preferences
- use latest svelte v5 syntax
- use tailwindcss for styling
- the @bios-ui/core theme already match tailwindcss, so var(--spacing-xs) is equivalent to `0.25rem`
- the tailwind already has theme setup, refer to to @bios-ui/core/tw for the theme setup
- use the theme for colors, spacing, and other design tokens
