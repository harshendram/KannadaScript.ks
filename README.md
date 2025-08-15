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

## Video Demo

[![Watch the demo](https://img.youtube.com/vi/RyXIUPj4gxc/hqdefault.jpg)](https://www.youtube.com/watch?v=RyXIUPj4gxc)

Click the thumbnail to watch the KannadaScript demo on YouTube.

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
