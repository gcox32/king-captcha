# Development Workflow for KingCaptcha

This project is a lean, TypeScript-based React component library built with `vite`, `tsup`, and `vitest`.

---

## 🧱 Setup

Install dependencies:

```bash
npm install
```

---

## 🚧 Development

Start the Vite dev server to preview your component:

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

Edit your component in `src/KingCaptcha.tsx`. Changes will hot-reload.

---

## 🧪 Testing

Run all tests once:

```bash
npm run test
```

Or watch for changes:

```bash
npx vitest --watch
```

Tests live in `src/*.test.tsx`.

---

## 📦 Build for Distribution

Use `tsup` to generate CJS/ESM builds and type declarations:

```bash
npm run build
```

Build output goes to the `dist/` folder:
- `index.cjs`
- `index.mjs`
- `index.d.ts`

---

## 🔗 Local Linking

To test your component in another project locally:

```bash
npm link
cd ../your-app
npm link king-captcha
```

Then import normally:

```tsx
import { KingCaptcha } from 'king-captcha';
```

---

## 🚀 Publishing

1. Bump version:

```bash
npm version patch  # or minor / major
```

2. Update `CHANGELOG.md`

3. Publish:

```bash
npm publish --access public
```

---

## 📌 Notes

- Be sure your `package.json` has valid `main`, `module`, and `types` fields pointing to the `dist/` folder
- Peer dependencies for `react` and `react-dom` are required
- This project assumes an ESM-compatible setup (e.g. `vite.config.mts`, `"type": "module"` in `package.json`)

---

Happy shipping!
