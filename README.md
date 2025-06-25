# Component Linter

A CLI tool to statically analyze and suggest improvements for React/TypeScript components.

## Goals

- Warn on component naming violations
- Enforce filename = component name
- Check for cohesion (too many hooks, big JSX)
- Suggest reusable patterns (avoid inline styles, extract subcomponents)
- Warns on usage of **inline styles** (`style={{ ... }}`)

## Tech Stack

- **TypeScript**
- **ts-morph** for AST parsing
- **commander** for CLI
- **chalk** for colorful output

## Getting Started

```bash
git clone https://github.com/your-username/component-linter
cd component-linter
npm install
npm run dev lint example/MyComponent.tsx
```
