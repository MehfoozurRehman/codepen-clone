# Codepen Clone

A desktop and web clone of CodePen: write HTML, CSS and JavaScript side by side and see the result update live.

**Status:** Working demo. The editor, live preview and Electron wrapper are implemented and the build scripts are in place, but the repo has no tests, no saving or sharing beyond browser localStorage, and no evidence of a live deployment.

## The problem

Developers often want to try a snippet of front-end code without setting up a project. This app gives a single page with three code editors and a sandboxed preview, so a snippet can be written and seen immediately, in the browser or as a desktop app.

## What it does

- Three CodeMirror editors for HTML, CSS and JavaScript (`src/Editor.jsx`), using the HTML, CSS and JavaScript language packs and the One Dark theme.
- Live preview: the three sources are combined into one `srcDoc` document, debounced by 250 ms, and rendered in an iframe (`src/App.jsx`).
- The iframe uses `sandbox="allow-scripts"`, so previewed scripts run in an isolated origin.
- Code persists across reloads through a small `useLocalStorage` hook (`src/useLocalStorage.js`).
- A light/dark theme toggle that sets a `data-theme` attribute on the document root.
- An Electron entry point (`electron.js`) so the same UI can run as a desktop app.

## How it's built

- React 18 with Vite for the web build and dev server.
- CodeMirror 6 (`@uiw/react-codemirror`) for the editors.
- Electron for the desktop build, with `electron-builder` configured in `package.json`.
- Firebase Hosting for the web deploy (`firebase.json`, `.firebaserc`).
- Architecture: the preview is a pure function of the three editor values, so each change re-renders the whole `srcDoc`. The sandboxed iframe is the only place user code runs.

## Running it locally

```bash
npm install
npm run dev            # web app on Vite's dev server
npm run electron-dev   # Electron window against the dev server
npm run build          # production build into dist/
```

## What's left

- The theme toggle attaches a new `change` listener on every click, so listeners accumulate. It should be attached once in an effect.
- The preview template closes with `<html/>` instead of `</html>`.
- Only localStorage persistence exists. There is no save, share or project list.
- There are no tests.
- Electron entry code is duplicated across `electron.js`, `src/electron.js` and `public/electron.js`; one should be removed.
- No deployed URL is documented.

## Author

Mehfooz-ur-Rehman

## License

MIT
