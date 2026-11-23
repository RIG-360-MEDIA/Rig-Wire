# Rig Wire

Six ways to read the world: a news reader that offers the same day's news in six reading lengths.

| Route | Mode | Length |
|---|---|---|
| `/minute` | Flash | 60 sec |
| `/digest` | Newsletter | 5 min |
| `/all-sides` | All Sides | 8 min |
| `/long-view` | Aftermath | 12 min |
| `/queue` | Pocket | ∞ |
| `/today` | Today | — |

The six-mode landing page is at `/`. Mode names and colours live in `src/lib/modes.ts`. `STRUCTURE.md` maps the folders.

All content is static sample data that sits next to each mode's components, so the site needs no database or API keys.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
```

`npm run build && npm start` makes a production build. Set `NEXT_PUBLIC_SITE_URL` for the sitemap and social cards.

Next.js 15, React 19, Tailwind 3, framer-motion. Fonts are vendored in `fonts/google`.
