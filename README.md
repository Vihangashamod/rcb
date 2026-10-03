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

- Cinematic hero and two confirmed awards, compacting sticky header, mobile navigation, desktop contact dock.
- Scroll-driven hero parallax, paving image expansion, text ribbon and section entrances. Reduced-motion support and visible content without animation.
- Paving products, machinery, interactive before/after demonstration, live metric/imperial quantity estimator with cutting allowance, filtered gallery and lightbox.
- Company story, achievements, FAQs, enquiry composer, directions, social sharing and footer.
- Responsive images, preloaded local variable font, static rendering, metadata, sitemap and robots.

## Business content

Edit contact details and confirmed social destinations in `src/lib/site.ts`. Product sizes and calculation logic live in `src/lib/calculator.ts`. No pricing is displayed.

The form prepares an email using the visitor's email application. It does **not** claim to submit enquiries to a server. To receive submissions directly from a web form, connect an email delivery provider and implement a validated, rate-limited server endpoint.

Official social profiles and a dedicated WhatsApp destination were not provided. The current footer includes explicitly labelled social **sharing** links. Confirm business profile URLs before replacing those links. Listed phone, email, address and opening hours come from the supplied content inventory.

## Imagery and launch notes

Real business images come from the supplied `public` directory. Several originals are low resolution; replace with larger originals for sharper large displays.

`public/paving-after.webp` and `public/paving-before.webp` were produced with the built-in image generator as architectural design visualization. The hero and comparison clearly label them illustrative; they must not be represented as actual completed RCB projects. Their prompts and provenance are recorded in `.impeccable/asset-provenance.json`.

The approved visual concept is `.impeccable/mocks/concept-b.png`. The favicon and text wordmark are interface treatments; confirm the final brand artwork before launch. The supplied white logo is retained at `public/logo_2.png`.

The metadata and sitemap use `https://rcb.lk`; update to the final canonical domain when deploying. No deployment or analytics tracking has been configured.

## Verification

`npm test` checks quantity calculation, imperial conversion, rounding and invalid input handling. `npm run build` checks the production build and TypeScript. Browser checks cover phone/desktop overflow, navigation, calculator, gallery, comparison keyboard input and reduced motion. Local Lighthouse reports are stored in `work/` when run; local scores are not a guarantee of production PageSpeed results.
