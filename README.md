# Ocarina Tabs

A small, phone-first viewer for the 12 Ocarina of Time songs, shown as fingering tabs for a **12-hole alto C ocarina**. Each song shows only its in-game input sequence.

## Develop

```sh
npm install
npm run dev
```

## Fingerings

All fingerings are in `src/data/fingerings.js`, and the song sequences are in `src/data/songs.js`. Fingerings can differ between ocarina makers, so check the five notes (D, F, A, B, high D) against your ocarina's chart.

## Deploy

On every push to `main`, `.github/workflows/deploy.yml` builds the Vite app and publishes `dist/` to GitHub Pages.

One-time setup:

1. Create a GitHub repo and push this project to `main`.
2. In the repo, open **Settings → Pages** and set **Source** to **GitHub Actions**.

The Vite `base` is `./`, so the build works under any repo name.
