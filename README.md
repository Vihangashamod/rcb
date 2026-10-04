# RCB Holdings website

Next.js App Router, TypeScript, Google Sans Flex (self-hosted), Tailwind CSS, shadcn/ui with Radix primitives, and Lucide interface icons.

## Run

```sh
npm install
npm run dev
```

For a production preview:

```sh
npm run build
npm run start
```

If port 3000 is reserved on Windows, use `npx next start --hostname 127.0.0.1 --port 3015` after building.

## Included

- Two-act photographic craftsman hero with scroll-controlled interlock paving, camera pullback, chapter jump controls, pointer parallax and a still-scene control; two confirmed awards, compacting sticky header, mobile navigation, desktop contact dock.
- Three solution highlights with native horizontal scrolling, previous/next controls and keyboard navigation; a scroll-linked “Made to build. Built to last.” section connects paving to machinery. Pointer-responsive product images and paver samples, paving image expansion and section entrances continue the existing interactions.
- Event-driven canvas reveal with a pinned desktop hero on eligible viewports and ordinary scrolling on phones. Reduced-motion support and a complete photographic fallback without JavaScript or canvas; the highlights remain scrollable and the typographic section stays readable without animation.
- Paving products, machinery, interactive before/after demonstration, live metric/imperial quantity estimator with cutting allowance, filtered gallery and lightbox.
- Company story, achievements, FAQs, enquiry composer, directions, social sharing and footer.
- Responsive images, preloaded local variable font, static rendering, metadata, sitemap and robots.

## Business content

Edit contact details and confirmed social destinations in `src/lib/site.ts`. Product sizes and calculation logic live in `src/lib/calculator.ts`. No pricing is displayed.

The form prepares an email using the visitor's email application. It does **not** claim to submit enquiries to a server. To receive submissions directly from a web form, connect an email delivery provider and implement a validated, rate-limited server endpoint.

Official social profiles and a dedicated WhatsApp destination were not provided. The current footer includes explicitly labelled social **sharing** links. Confirm business profile URLs before replacing those links. Listed phone, email, address and opening hours come from the supplied content inventory.

## Imagery and launch notes

Real business images come from the supplied `public` directory. Several originals are low resolution; replace with larger originals for sharper large displays.

`public/paving-craftsman.webp` and `public/paving-craftsman-base.webp` are matched, generated craftsmanship studies used by the hero. The worker is illustrative, not a claimed RCB employee. `public/paving-after.webp` and `public/paving-before.webp` remain the architectural comparison images. These scenes are labelled illustrative and must not be represented as actual completed RCB projects. Exact generation prompts and provenance are recorded in `.impeccable/asset-provenance.json`.

The original approved visual concept is `.impeccable/mocks/concept-b.png`. The interactive hero extends its blue photographic direction; its original implementation decisions are recorded in `.impeccable/review/direction.json`. The Apple-inspired animation extension is recorded in `.impeccable/review/apple-motion/direction.json`, with observed implementation details in `.impeccable/surfaces/home.json`. It reuses existing imagery. The favicon and text wordmark are interface treatments; confirm the final brand artwork before launch. The supplied white logo is retained at `public/logo_2.png`.

The metadata and sitemap use `https://rcb.lk`; update to the final canonical domain when deploying. No deployment or analytics tracking has been configured.

## Verification

`npm test` checks quantity calculation, imperial conversion, rounding and invalid input handling. `npm run build` checks the production build and TypeScript. Earlier browser checks cover navigation, calculator, gallery, comparison keyboard input, pointer response and the products/about routes in `.impeccable/review/browser-results.json`.

The animation-extension checks cover viewports from 320 to 1920 px, chapter transitions, reverse scrolling, the still-scene control, keyboard focus recovery, highlight controls and keyboard browsing, mobile section navigation, overflow, live reduced-motion changes, JavaScript-disabled fallback and canvas asset failure. Reports are stored in `.impeccable/review/apple-motion/browser-results.json` and `.impeccable/review/apple-motion/final-checks.json`. Local Lighthouse reports are stored in `work/` when run; local scores are not a guarantee of production PageSpeed results.
