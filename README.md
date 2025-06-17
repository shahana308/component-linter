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

### Install via npm

```bash
npm install -D component-linter
```

### Run the linter
```
npx component-linter lint path/to/YourComponent.tsx
# or
npx component-linter lint src/components/
```

### Add a script to package,json
```
"scripts": {
  "lint:components": "component-linter lint src/components/"
}
```

Then run:
```
npm run lint:components
```

More rules and features coming soon! 
