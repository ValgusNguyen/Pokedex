# AGENTS.md

## TypeScript 6.0 defaults
- `types` now defaults to `[]` (empty). `tsconfig.json` explicitly sets `"types": ["node"]` so `@types/node` is resolved.
- If you add another global type package (e.g. `@types/jest`), add it to the `types` array or it won't be picked up.

## ESM / nodenext
- `package.json` has `"type": "module"` and `tsconfig.json` uses `"module": "nodenext"`, `"moduleResolution": "nodenext"`.
- **Import `.ts` files using `.js` extensions** (e.g. `import "./repl.js"`). Do not change them to `.ts`.

## Entry points
- Source entry point is `src/main.ts`. The compiled entry point is `dist/main.js`.
- `package.json` `"main"` says `"index.js"`, but the `start` and `dev` scripts correctly use `dist/main.js`.

## Commands
- `npm run dev` — compile (`tsc`) then run (`node dist/main.js`).
- `npm run build` — compile only.
- `npm run start` — run compiled output (requires build first).
- `npm test` — run `vitest --run`.

## Testing
- `vitest` is configured implicitly by defaults. There is no `vitest.config.ts`.
- `vitest` scans both `src/` and `dist/`, so it currently runs `src/repl.test.ts` **and** `dist/repl.test.js`. Be aware tests are executed twice.
- Only `repl.test.ts` exists; the rest of the codebase is untested.

## Files to ignore
- `note.md` is in `.gitignore` and is local developer scratch. Do not rely on it for project truth or try to commit it.
