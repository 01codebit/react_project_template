# React + Vite Map Project Template

This Template include Mapbox GL JS to show a map and shadcn/ui to import components.

[Vite](https://vite.dev/)
[React](https://react.dev/)
[Mapbox GL JS](https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/?step=0)
[shadcn/ui](https://ui.shadcn.com/)

During the creation of the app with:
npm create vite@latest

the options selected were:

framework: React
variant: Javascript
linter: OxLint

# NOTE

After cloning the repository:
- execute npm install to install all the dependencies
- create a file .env.local where set the VITE_MAPBOX_TOKEN, mandatory to create the Mapbox GL map component


## React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
