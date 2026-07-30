# Vintech Global

Premium light-theme laptop catalogue for Vintech Global Communications & Services Ltd.

## Included

- Alienware-led premium homepage and performance collection
- 230 foreign-used and open-box laptop listings
- Search, brand, category, processor, use-case and availability filters
- Individual product specification pages
- Gaming, business, 2-in-1, workstation and MacBook categories
- Dedicated laptop accessories collection
- Product and contact WhatsApp enquiry actions
- Light blue Vintech enquiry receipt
- Verified phone, WhatsApp and Computer Village address
- Responsive desktop and mobile layouts
- SEO metadata, social sharing image, structured product data and branded favicon

## Requirements

- Node.js 22
- npm

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js, usually <http://localhost:3000>.

## Production build

```bash
npm run build
```

The static export is written to `out`.

## Netlify

- Build command: `npm run build`
- Publish directory: `out`
- Node version: `22`

The same settings are committed in `netlify.toml`.

## Catalogue

The catalogue data is stored in `app/data/catalogue.generated.json`. Product transformation,
categorisation, local photos and URL slugs are handled in `app/data/products.ts`.

Supplied Vintech product photography is stored in `public/products`. Catalogue entries without
an exact supplied photo use a model-specific image thumbnail until the photographed unit is added.
