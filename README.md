<div align="center">

# 🚀 @t1ep1l0t/create-fsd

**Scaffold modern frontend applications with Feature-Sliced Design architecture and generate FSD structures on-the-fly**

[![npm version](https://img.shields.io/npm/v/@t1ep1l0t/create-fsd.svg)](https://www.npmjs.com/package/@t1ep1l0t/create-fsd)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)

</div>

---

## 📖 About

**@t1ep1l0t/create-fsd** is a powerful CLI tool that helps you quickly bootstrap production-ready React applications following the [Feature-Sliced Design (FSD)](https://feature-sliced.design/) architectural methodology. Not only can you create fully configured projects in seconds, but you can also generate FSD-compliant structures for features, entities, widgets, and pages on-demand!

> 🎯 Currently supports **React** template. More frameworks (Vue, Next, Nuxt, Svelte) coming soon!

---

## ✨ Features

### 🏗️ **Architecture**
- **Feature-Sliced Design (FSD)** - Scalable and maintainable project structure
- **FSD Structure Generator** - Quickly generate features, entities, widgets, and pages
- Clear separation of concerns across layers
- Ready-to-use folder structure with automated scaffolding

### ⚡ **Modern Stack**
- **React 18** - Latest React with concurrent features
- **Vite** - Lightning-fast build tool and dev server
- **TailwindCSS v4** - Utility-first CSS framework

### 📦 **Pre-configured Libraries**
- **React Router DOM** - Declarative routing
- **Zustand** - Lightweight state management
- **Axios** - HTTP client with interceptors configured
- **React Query** - Powerful server state management
- **i18next** - Internationalization (i18n) support
- **ESLint & Prettier** - Code quality and consistency

### 🎨 **Developer Experience**
- Path aliases configured (`@app`, `@pages`, `@widgets`, `@features`, `@entities`, `@shared`)
- Example code demonstrating best practices
- Zero configuration needed - start coding immediately

---

## 🚀 Quick Start

### Using npm

```bash
npm create @t1ep1l0t/fsd my-app
cd my-app
npm run dev
```

### Using npx

```bash
npx @t1ep1l0t/create-fsd my-app
cd my-app
npm run dev
```

### With template option

```bash
npx @t1ep1l0t/create-fsd my-app --template react
```

---

## 🏗️ FSD Structure Generator

After creating your project, you can use the `fsd` command to quickly generate FSD-compliant directory structures for features, entities, widgets, and pages.

### Usage

```bash
create-fsd fsd [options]
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

```bash
# Create a feature with UI and model segments
create-fsd fsd -f user -s ui model -i

# Result:
# src/features/user/
# ├── ui/
# │   └── index.js
# ├── model/
# │   └── index.js
# └── index.js (exports all segments)

# Create an entity with API and lib segments
create-fsd fsd -e product -s api lib -i

# Create a widget without index files (uses .gitkeep)
create-fsd fsd -w header -s ui model

# Create a page
create-fsd fsd -p home -s ui api -i

# Add more segments to existing structure
create-fsd fsd -f user -s api config -i
# This will add api/ and config/ folders and update the root index.js
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
│   └── App.jsx          # Root component
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
    ├── store/           # Zustand stores
    └── ui/              # UI kit components
```

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

| Template | Status | Description |
|----------|--------|-------------|
| **React** | ✅ Available | React 18 + Vite + FSD architecture |
| **Vue** | 🔜 Coming Soon | Vue 3 + Vite + FSD architecture |
| **Next.js** | 🔜 Coming Soon | Next.js + FSD architecture |
| **Nuxt** | 🔜 Coming Soon | Nuxt 3 + FSD architecture |
| **Svelte** | 🔜 Coming Soon | Svelte + Vite + FSD architecture |

---

## 📋 CLI Commands

### Create Project

```bash
create-fsd <project-name> [options]
```

#### Options

| Option | Alias | Description | Default |
|--------|-------|-------------|---------|
| `--template <name>` | `-t` | Template to use | `react` |

#### Examples

```bash
# Create project with React template (default)
npx @t1ep1l0t/create-fsd my-app

# Explicitly specify template
npx @t1ep1l0t/create-fsd my-app --template react

# Short form
npx @t1ep1l0t/create-fsd my-app -t react
```

### Generate FSD Structure

```bash
create-fsd fsd [options]
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
create-fsd fsd -f authentication -s ui model api -i

# Create entity without index files
create-fsd fsd -e user -s model api

# Create widget
create-fsd fsd -w sidebar -s ui lib -i

# Create page
create-fsd fsd -p dashboard -s ui model -i
```

---

## 🎓 Learn More

- [Feature-Sliced Design Documentation](https://feature-sliced.design/)
- [React Documentation](https://react.dev/)
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