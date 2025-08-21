<p align="center">
  <img src="apps/docs/public/KannadaScriptlogo.png" alt="KannadaScript Logo" width="120" />
</p>

# KannadaScript

Modern, elegant, Kannada‑inspired programming language. Built with TypeScript. Designed for joy.

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node-18+-339933?logo=node.js&logoColor=white)
![Turbo](https://img.shields.io/badge/Build-Turborepo-000000?logo=vercel&logoColor=white)
![Next.js](https://img.shields.io/badge/Docs-Next.js-000000?logo=nextdotjs&logoColor=white)

### Why KannadaScript?

- **Kannada‑first syntax**: expressive keywords that feel native
- **Batteries included**: variables, conditionals, loops, functions, arrays, dictionaries
- **Robust toolchain**: parser, interpreter, CLI, and documentation site

### Hello, World

```kannadascript
namaskara
    helu "Namaskara, KannadaScript!";
matte sigona
```

## Video Demo (YouTube)

[![Watch the demo](https://img.youtube.com/vi/RyXIUPj4gxc/hqdefault.jpg)](https://www.youtube.com/watch?v=RyXIUPj4gxc)

Click the thumbnail to watch the KannadaScript demo on YouTube.


## Architecture

```mermaid
flowchart TD
    %% External Actors and Tools
    Developer["Developer / End User"]:::external
    Turborepo["Turborepo\n(turbo.json)"]:::infrastructure
    Vercel["Vercel Deployment\n(vercel.json & .vercelignore)"]:::infrastructure

    %% Monorepo Container
    subgraph "KannadaScript Monorepo"
        direction TB
        subgraph "packages"
            direction TB
            CLI["CLI Frontend\n(packages/cli)"]:::toolchain
            Parser["Parser Module\n(packages/parser)"]:::toolchain
            Interpreter["Interpreter Module\n(packages/interpreter)"]:::toolchain
            Config["Shared Config\n(packages/config & tsconfig)"]:::infrastructure
        end
        subgraph "apps"
            direction TB
            Docs["Docs Site (Next.js)\n(apps/docs)"]:::docs
        end
    end

    %% Relationships - Runtime Flow
    Developer -->|"invoke CLI"| CLI
    CLI -->|"parse .ks → AST"| Parser
    Parser -->|"AST"| Interpreter
    Interpreter -->|"stdout"| CLI
    CLI -->|"output"| Developer

    %% Relationships - Build/Test Flow
    Turborepo -->|"build & test"| CLI
    Turborepo -->|"build & test"| Parser
    Turborepo -->|"build & test"| Interpreter
    Turborepo -->|"build & test"| Config
    Turborepo -->|"build & test"| Docs

    %% Documentation Deployment
    Docs -->|"deploy docs"| Vercel

    %% Click Events
    click CLI "[https://github.com/harshendram/kannadascript.ks/blob/main/packages/cli/src/index.ts](https://github.com/harshendram/kannadascript.ks/blob/main/packages/cli/src/index.ts)"
    click CLI "[https://github.com/harshendram/kannadascript.ks/blob/main/packages/cli/package.json](https://github.com/harshendram/kannadascript.ks/blob/main/packages/cli/package.json)"
    click Parser "[https://github.com/harshendram/kannadascript.ks/blob/main/packages/parser/src/index.ts](https://github.com/harshendram/kannadascript.ks/blob/main/packages/parser/src/index.ts)"
    click Parser "[https://github.com/harshendram/kannadascript.ks/tree/main/packages/parser/src/components/parser](https://github.com/harshendram/kannadascript.ks/tree/main/packages/parser/src/components/parser)"
    click Interpreter "[https://github.com/harshendram/kannadascript.ks/blob/main/packages/interpreter/src/index.ts](https://github.com/harshendram/kannadascript.ks/blob/main/packages/interpreter/src/index.ts)"
    click Interpreter "[https://github.com/harshendram/kannadascript.ks/tree/main/packages/interpreter/src/components/visitor](https://github.com/harshendram/kannadascript.ks/tree/main/packages/interpreter/src/components/visitor)"
    click Config "[https://github.com/harshendram/kannadascript.ks/blob/main/packages/config/eslint-preset.js](https://github.com/harshendram/kannadascript.ks/blob/main/packages/config/eslint-preset.js)"
    click Config "[https://github.com/harshendram/kannadascript.ks/blob/main/packages/tsconfig/base.json](https://github.com/harshendram/kannadascript.ks/blob/main/packages/tsconfig/base.json)"
    click Config "[https://github.com/harshendram/kannadascript.ks/blob/main/packages/tsconfig/nextjs.json](https://github.com/harshendram/kannadascript.ks/blob/main/packages/tsconfig/nextjs.json)"
    click Config "[https://github.com/harshendram/kannadascript.ks/blob/main/packages/tsconfig/react-library.json](https://github.com/harshendram/kannadascript.ks/blob/main/packages/tsconfig/react-library.json)"
    click Docs "[https://github.com/harshendram/kannadascript.ks/blob/main/apps/docs/pages/_app.tsx](https://github.com/harshendram/kannadascript.ks/blob/main/apps/docs/pages/_app.tsx)"
    click Docs "[https://github.com/harshendram/kannadascript.ks/blob/main/apps/docs/pages/index.tsx](https://github.com/harshendram/kannadascript.ks/blob/main/apps/docs/pages/index.tsx)"
    click Docs "[https://github.com/harshendram/kannadascript.ks/tree/main/apps/docs/components/](https://github.com/harshendram/kannadascript.ks/tree/main/apps/docs/components/)"
    click Turborepo "[https://github.com/harshendram/kannadascript.ks/blob/main/turbo.json](https://github.com/harshendram/kannadascript.ks/blob/main/turbo.json)"
    click Vercel "[https://github.com/harshendram/kannadascript.ks/blob/main/vercel.json](https://github.com/harshendram/kannadascript.ks/blob/main/vercel.json)"
    click Vercel "[https://github.com/harshendram/kannadascript.ks/blob/main/.vercelignore](https://github.com/harshendram/kannadascript.ks/blob/main/.vercelignore)"

    %% Styles
    classDef toolchain fill:#e0f7fa,stroke:#006064,color:#006064
    classDef infrastructure fill:#e8f5e9,stroke:#2e7d32,color:#2e7d32
    classDef docs fill:#fff3e0,stroke:#ef6c00,color:#ef6c00
    classDef external fill:#f3e5f5,stroke:#6a1b9a,color:#6a1b9a

## Quick Start

### Option A — Use the CLI (recommended)

```bash
npm i -g kannadascript
kannadascript path/to/program.ks

# or without installing globally
npx kannadascript path/to/program.ks
```

### Option B — From source (monorepo)

```bash
git clone https://github.com/harshendram/KannadaScript.ks.git
cd KannadaScript.ks
npm install
npm run build

# Run the CLI from the repo
node packages/cli/bin/index.js examples/hello.ks
```

## Language Essentials

- **Program**: starts with `namaskara`, ends with `matte sigona`
- **Variables**: `idu name = "Harsh";`
- **Output**: `helu "Hello";`
- **Conditions**:

```kannadascript
namaskara
    idu score = 85;
    enadru (score >= 90) {
        helu "A";
    } illa andre (score >= 75) {
        helu "B";
    } illa andre {
        helu "C";
    }
matte sigona
```

- **Loops**:

```kannadascript
namaskara
    idu i = 1;
    ellivargu (i <= 3) {
        helu i;
        i = i + 1;
    }
matte sigona
```

- **Functions**:

```kannadascript
namaskara
    karya add(a, b) { vapasu a + b; }
    helu add(2, 3);
matte sigona
```

## Monorepo

```
kannada-script/
├── packages/
│   ├── parser/        # Language parser
│   ├── interpreter/   # Runtime interpreter
│   ├── cli/           # Command‑line interface
│   └── config/        # Shared configs
└── apps/
    └── docs/          # Documentation website (Next.js)
```

## Development

Prerequisites: Node.js 18+ (16+ supported), npm 8+

```bash
# 1) Install
npm install

# 2) Build everything
npm run build

# 3) Start docs site (http://localhost:3000 or 3001)
npm run dev

# 4) Test (where available)
npm test

# 5) Lint / Clean
npm run lint
npm run clean
```

### Working on the CLI locally

```bash
# Build the CLI package then run it
npm run build -w packages/cli
node packages/cli/bin/index.js path/to/program.ks
```

## Contributing

PRs welcome! Please:

- Use clear commit messages
- Add tests when relevant
- Keep the language elegant and the DX smooth

1. Fork → 2) Branch → 3) Commit → 4) PR

## License

MIT © 2025 `harshendram`. See [LICENSE](LICENSE).

— Happy coding with KannadaScript ✨
