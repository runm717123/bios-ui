---
applyTo: '**'
---
Coding standards, domain knowledge, and preferences that AI should follow.

# Response Format
- no need to include description or summary
- just display the code snippet, and display description only when asked

# Code Structure
- apps
  
 # demo app for the UI components
 - storybook
- packages

  # UI components
  - @bios-ui/core
  # basic components, e.g button, input, etc.
  - @bios-ui/basic

# Coding Standards and Preferences
## General Coding Standards
- prefix className with b, example: `bButton`, `bCard`
- when applying a class to an element, use the `className` prop with cx, example: `className={cx(bButton, className)}`
- when creating components, always use interface for props, and extending respective HTML element props, example:
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // custom props
}