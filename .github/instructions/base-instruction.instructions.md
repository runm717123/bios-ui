---
applyTo: '**'
---
Coding standards, domain knowledge, and preferences that AI should follow.

# Response Format
- no need to include description , summary, or any additional text
- just display the code snippet, and display description only when asked
- don't run pnpm dev commands

# Code Structure
this codebase is a monorepo, the code is organized into apps and packages:
/apps/* : runnable apps
/apps/storybook: Storybook app for the React UI components
/apps/svelte-docs : Svelte documentation app
/packages/* : reusable packages
/packages/core: Core style and shared utilities
/packages/basic: React UI components
/packages/svelte: Svelte UI components

# Coding Standards and Preferences
## General Coding Standards
- prefix className with b, example: `bButton`, `bCard`
- when applying a class to an element, use the `className` prop with cx, example: `className={cx(bButton, className)}`
- when creating react components, always use interface for props, and extending respective HTML element props, example:
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // custom props
}