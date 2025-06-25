# Component Linter

A CLI tool to statically analyze and suggest improvements for React/TypeScript components.

It checks for naming conventions, file-structure consistency, code size, and inline styles to help maintain clean and reusable components.

## Installation

Install the package as a dev dependency:

```bash
npm install -D component-linter
```

## Usage

### Run on a single component

```bash
npx component-linter lint path/to/YourComponent.tsx
```

### Run on an entire folder

```bash
npx component-linter lint src/components/
```

### Add a script in your package.json

```bash
"scripts": {
  "lint:components": "component-linter lint src/components/"
}
```

Then run it with:

```bash
npm run lint:components
```

## What It Checks

- Component names should be in PascalCase
- File name should match the component name
- Component length should not be too long
- Too many hooks (e.g. useState, useEffect) in one file triggers a warning
- Warns if inline styles (style={{ ... }}) are used in JSX

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

## Contributing

Each rule is located in src/rules/ and should export a function that takes a source file and file path, returning a list of issues.
