# Home-Health-Care (JS)

### Apps and Packages

- `apps/react-vite-web`: A [ReactJS](https://reactjs.org/) App bootstrapped with [vite](https://vitejs.dev/)

- `packages/alias`: To use absolute paths for importing in `packages/ui` instead of relatively referring a path. Can also alias for other packages.
- `packages/config`: To add configuration files like `env` to share across the app
- `eslint-config-custom`: `eslint` configurations to share across apps and packages
- `packages/logger`: isomorphic logger (a small wrapper around console.log)
- `packages/ui`: A React component library (atoms, components) shared to apps

### Utilities

This monorepo has some additional tools already setup:

- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Develop

To develop all apps and packages, run the following command:

```
npm run dev
```

### Build

To build all apps and packages, run the following command:

```
npm run build
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
