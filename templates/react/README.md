# FSD React Application

A modern React application built with Feature-Sliced Design architecture.

## Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Zustand** - State management
- **Axios** - HTTP client
- **React Query** - Server state management
- **i18next** - Internationalization
- **TailwindCSS v4** - Styling

## Project Structure

```
src/
├── app/              # Application initialization
│   ├── providers/    # Context providers (router, i18n)
│   └── styles/       # Global styles
├── pages/            # Page components
├── widgets/          # Composite UI components
├── features/         # Business features
├── entities/         # Business entities
└── shared/           # Shared code
    ├── api/          # API client configuration
    ├── store/        # Global stores
    └── ui/           # Reusable UI components
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Configuration

- **API URL**: Set `VITE_API_URL` in `.env` file
- **Languages**: Configure in `src/app/providers/i18n/index.js`
- **Routes**: Define in `src/app/providers/router/index.jsx`
- **Tailwind**: Customize in `src/app/styles/index.css`

## Learn More

- [Feature-Sliced Design](https://feature-sliced.design/)
- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
