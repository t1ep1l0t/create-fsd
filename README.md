<div align="center">

# 🚀 @t1ep1l0t/create-fsd

**Scaffold modern frontend applications with Feature-Sliced Design architecture and generate FSD structures on-the-fly**

[![npm version](https://img.shields.io/npm/v/@t1ep1l0t/create-fsd.svg)](https://www.npmjs.com/package/@t1ep1l0t/create-fsd)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)

</div>

---

## 📖 About

**@t1ep1l0t/create-fsd** is a powerful CLI tool that helps you quickly bootstrap production-ready frontend applications following the [Feature-Sliced Design (FSD)](https://feature-sliced.design/) architectural methodology. Create fully configured projects with **JavaScript** or **TypeScript** in seconds, and generate FSD-compliant structures for features, entities, widgets, and pages on-demand!

> 🎯 **Supports both JavaScript and TypeScript** with automatic project type detection

---

## ✨ Features

### 🏗️ **Architecture**
- **Feature-Sliced Design (FSD)** - Scalable and maintainable project structure
- **FSD Structure Generator** - Quickly generate features, entities, widgets, and pages
- **Auto-detection** - Automatically detects TypeScript/JavaScript and creates appropriate files
- Clear separation of concerns across layers
- Ready-to-use folder structure with automated scaffolding

### ⚡ **Language Support**
- **JavaScript & TypeScript** - Full support for both languages
- **Smart Detection** - Automatically detects project type when generating structures
- **Type Safety** - TypeScript templates with proper typing for all libraries
- **Zero Config** - Works out of the box with optimal settings

### 📦 **Modern Stack** (React Template)
- **React 18** - Latest React with concurrent features
- **Vite** - Lightning-fast build tool and dev server
- **TailwindCSS v4** - Utility-first CSS framework
- **React Router DOM** - Declarative routing
- **Zustand** - Lightweight state management
- **Axios** - HTTP client with interceptors configured
- **React Query** - Powerful server state management
- **i18next** - Internationalization (i18n) support
- **ESLint & Prettier** - Code quality and consistency

### 🎨 **Developer Experience**
- Path aliases configured (`@app`, `@pages`, `@widgets`, `@features`, `@entities`, `@shared`)
- Example code demonstrating best practices
- Full TypeScript support with type definitions
- Zero configuration needed - start coding immediately

---

## 🚀 Quick Start

### Create a JavaScript Project

```bash
npx @t1ep1l0t/create-fsd app my-app
cd my-app
npm run dev
```

### Create a TypeScript Project

```bash
npx @t1ep1l0t/create-fsd app my-app --typescript
cd my-app
npm run dev
```

### With npm create

```bash
npm create @t1ep1l0t/fsd app my-app
cd my-app
npm run dev
```

---

## 🏗️ FSD Architecture Generator

After creating your project, you can use the `arch` command to quickly generate FSD-compliant directory structures for features, entities, widgets, and pages. The command **automatically detects** whether your project uses TypeScript or JavaScript and creates the appropriate files.

### Usage

```bash
create-fsd arch [options]
```

### Options

| Option | Alias | Description |
|--------|-------|-------------|
| `--feature <name>` | `-f` | Create feature in `features/` |
| `--entity <name>` | `-e` | Create entity in `entities/` |
| `--widget <name>` | `-w` | Create widget in `widgets/` |
| `--page <name>` | `-p` | Create page in `pages/` |
| `--segments <segments...>` | `-s` | Segments to create (e.g., model ui api lib) |
| `--index` | `-i` | Create index files in root and all segments |

### Examples

#### TypeScript Project
```bash
# The CLI detects tsconfig.json and creates .ts files automatically
create-fsd arch -f user-auth -s ui model api -i

# Result in TypeScript project:
# src/features/user-auth/
# ├── ui/
# │   └── index.ts
# ├── model/
# │   └── index.ts
# ├── api/
# │   └── index.ts
# └── index.ts (exports all segments)
```

#### JavaScript Project
```bash
# The CLI detects no tsconfig.json and creates .js files automatically
create-fsd arch -e product -s model ui -i

# Result in JavaScript project:
# src/entities/product/
# ├── model/
# │   └── index.js
# ├── ui/
# │   └── index.js
# └── index.js (exports all segments)
```

#### More Examples
```bash
# Create a widget without index files (uses .gitkeep)
create-fsd arch -w header -s ui model

# Create a page
create-fsd arch -p home -s ui api -i

# Add more segments to existing structure
create-fsd arch -f user-auth -s config types -i
# This will add new folders and update the root index file
```

### Common Segment Names

| Segment | Purpose |
|---------|---------|
| `ui` | UI components |
| `model` | Business logic, state, hooks |
| `api` | API requests and endpoints |
| `lib` | Helper functions and utilities |
| `config` | Configuration and constants |
| `types` | TypeScript types/interfaces |

---

## 📂 Project Structure

The generated project follows the FSD architecture with clear layer separation:

```
src/
├── 📱 app/              # Application initialization layer
│   ├── providers/       # App providers (Router, i18n, Query Client)
│   ├── styles/          # Global styles
│   └── App.tsx/jsx      # Root component
│
├── 📄 pages/            # Pages layer - route components
│   ├── home/            # Home page
│   └── about/           # About page
│
├── 🧩 widgets/          # Widgets layer - composite UI blocks
│   ├── Header/          # Header widget
│   └── layouts/         # Layout components
│
├── ⚙️ features/         # Features layer - user scenarios
│   └── .gitkeep         # (Ready for your features)
│
├── 🗂️ entities/         # Entities layer - business entities
│   └── .gitkeep         # (Ready for your entities)
│
└── 🔧 shared/           # Shared layer - reusable code
    ├── api/             # API client configuration
    ├── store/           # State management stores
    └── ui/              # UI kit components
```

> **Note:** TypeScript projects include `.tsx`/`.ts` files, while JavaScript projects use `.jsx`/`.js`

### Layer Responsibilities

| Layer | Purpose | Examples |
|-------|---------|----------|
| **app** | Application initialization and setup | Providers, global styles, routing setup |
| **pages** | Route-level components | HomePage, AboutPage, ProfilePage |
| **widgets** | Complex composite components | Header, Footer, Sidebar, UserCard |
| **features** | User interactions and business features | LoginForm, CommentsList, ProductFilters |
| **entities** | Business domain models | User, Product, Order |
| **shared** | Reusable utilities and UI | Button, Input, formatDate, API client |

---

## 🎯 What's Included

### Example Implementations

The generated project includes working examples for all included libraries:

- ✅ **Routing** - Multi-page setup with React Router
- ✅ **State Management** - Counter example with Zustand
- ✅ **API Integration** - Axios client with interceptors
- ✅ **Data Fetching** - React Query setup and usage
- ✅ **Internationalization** - i18n configuration with language switching
- ✅ **Styling** - TailwindCSS components and utilities
- ✅ **Code Quality** - ESLint rules configured

---

## 🛠️ Available Templates

| Template | Language | Status | Description |
|----------|----------|--------|-------------|
| **React** | JS / TS | ✅ Available | React 18 + Vite + FSD architecture |
| **Vue** | JS / TS | 🔜 Coming Soon | Vue 3 + Vite + FSD architecture |
| **Next.js** | JS / TS | 🔜 Coming Soon | Next.js + FSD architecture |
| **Nuxt** | JS / TS | 🔜 Coming Soon | Nuxt 3 + FSD architecture |
| **Svelte** | JS / TS | 🔜 Coming Soon | Svelte + Vite + FSD architecture |

---

## 📋 CLI Commands

### Main Commands

```bash
create-fsd                    # Show help
create-fsd app <name> [opts]  # Create new project
create-fsd arch [opts]        # Generate FSD structure
```

### `create-fsd app` - Create Project

Create a new project from template

```bash
create-fsd app <project-name> [options]
```

#### Options

| Option | Alias | Description | Default |
|--------|-------|-------------|---------|
| `--template <name>` | `-t` | Template to use | `react` |
| `--typescript` | `-ts` | Use TypeScript instead of JavaScript | `false` |

#### Examples

```bash
# Create JavaScript project (default)
npx @t1ep1l0t/create-fsd app my-app

# Create TypeScript project
npx @t1ep1l0t/create-fsd app my-app --typescript
npx @t1ep1l0t/create-fsd app my-app -ts

# Specify template explicitly
npx @t1ep1l0t/create-fsd app my-app -t react -ts
```

### `create-fsd arch` - Generate FSD Structure

Generate FSD-compliant architecture structures. Automatically detects project type (TS/JS) and creates appropriate files.

```bash
create-fsd arch [options]
```

#### Options

| Option | Alias | Description | Required |
|--------|-------|-------------|----------|
| `--feature <name>` | `-f` | Create feature in `features/` | One layer required |
| `--entity <name>` | `-e` | Create entity in `entities/` | One layer required |
| `--widget <name>` | `-w` | Create widget in `widgets/` | One layer required |
| `--page <name>` | `-p` | Create page in `pages/` | One layer required |
| `--segments <segments...>` | `-s` | Segments to create | Yes |
| `--index` | `-i` | Create index files | No |

#### Examples

```bash
# Create feature with index files
create-fsd arch -f authentication -s ui model api -i

# Create entity without index files
create-fsd arch -e user -s model api

# Create widget
create-fsd arch -w sidebar -s ui lib -i

# Create page
create-fsd arch -p dashboard -s ui model -i

# Add more segments to existing structure
create-fsd arch -f authentication -s config types -i
```

#### Auto-Detection

The `arch` command automatically detects your project type:

- **TypeScript projects** (with `tsconfig.json`) → creates `.ts`/`.tsx` files
- **JavaScript projects** (without `tsconfig.json`) → creates `.js`/`.jsx` files

---

## 🎓 Learn More

### Core Concepts
- [Feature-Sliced Design Documentation](https://feature-sliced.design/)
- [FSD Best Practices](https://feature-sliced.design/docs/guides)

### Technologies (React Template)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/)

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests
- Add new framework templates

---

## 📄 License

MIT © [t1ep1l0t](https://github.com/t1ep1l0t)

---

<div align="center">

**Made with ❤️ for the developer community**

[Report Bug](https://github.com/t1ep1l0t/create-fsd/issues) · [Request Feature](https://github.com/t1ep1l0t/create-fsd/issues)

</div>