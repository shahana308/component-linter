# Component Linter

A lightweight CLI tool to statically analyze your **React + TypeScript** components and help you write cleaner, more consistent code.

## What it Does

- Warns if component names aren't in **PascalCase**
- Ensures the **filename matches the component name**
- Detects **low cohesion** (e.g., too many hooks or a massive JSX block)
- Suggests reusable patterns (e.g., avoid inline styles, extract subcomponents)

## Built With

- **TypeScript** – for type-safe tooling
- **ts-morph** – to parse and walk the AST
- **commander** – for building the CLI interface
- **chalk** – for pretty terminal output

## Getting Started

```bash
git clone https://github.com/your-username/component-linter
cd component-linter
npm install
npm run dev lint example/MyComponent.tsx
