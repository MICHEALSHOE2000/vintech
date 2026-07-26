# CHEX Computers

Static catalogue website for CHEX Computers Ltd, built with Next.js, React, and TypeScript for GitHub and Netlify deployment.

## Included

- 227 foreign-used laptop listings
- Search, brand, category, processor, use-case, and availability filters
- Load-more catalogue pagination
- Individual product specification pages
- WhatsApp enquiry buttons
- Responsive desktop and mobile layouts
- Product imagery with CHEX-supplied photos preferred where available
- No product prices
- No NeoStore product links

## Requirements

- Node.js 22 (Netlify is configured to use Node 22)
- npm
- Windows PowerShell, Command Prompt, macOS Terminal, or Linux shell

## Windows installation

1. Install Node.js 22 from <https://nodejs.org/>.
2. Clone the repository from GitHub.
3. Open Windows PowerShell in the repository folder.
4. Install dependencies:

```powershell
npm install
```

## Local development

Start the standard Next.js development server:

```powershell
npm run dev
```

Open the local URL printed by Next.js, usually <http://localhost:3000>.

## Production build

Create the static export used by Netlify:

```powershell
npm run build
```

The generated static site is written to:

```text
out
```

## Netlify deployment

Use these Netlify build settings:

- Build command: `npm run build`
- Publish directory: `out`
- Node version: `22`

The same settings are committed in `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "22"
```

## Catalogue data

The complete catalogue is stored in:

```text
app/data/catalogue.generated.json
```

Product transformation, categorisation, images, and URL slugs are handled in:

```text
app/data/products.ts
```

## Main folders

```text
app/                 Pages, components, styling, and catalogue data
public/products/     CHEX-supplied product photography
scripts/             Catalogue import utility
out/                 Generated static export after npm run build (ignored by Git)
```

## Important image note

CHEX-supplied photos are stored locally in `public/products`. Other catalogue entries use model-specific remote image thumbnails. Replace those remote images with CHEX photographs whenever exact available-unit photos become available.
