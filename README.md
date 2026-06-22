# 51 West Tolentino Inn — Static Website

A multi-page static website built with **React + Vite + SCSS (Sass)**, managed with **yarn**.

## Stack

- **React 18** — component-based UI
- **React Router v6** — client-side routing (HashRouter for static hosting)
- **Vite 5** — dev server and build tool
- **SCSS (Sass)** — styling via CSS custom properties + SCSS partials

## Getting started

```bash
# Install dependencies
yarn install

# Start the dev server (http://localhost:5173)
yarn dev

# Build for production → ./dist
yarn build

# Preview the production build locally
yarn preview
```

## Project structure

```
src/
├── components/        Shared components (Navbar, Footer, Icons, etc.)
├── data/
│   └── content.js     All site copy — swap real details in here
├── pages/             One file per page (Home, About, Stay, Location, FAQ, Contact)
└── styles/
    ├── _variables.scss   Design tokens (palette, type, spacing)
    ├── _mixins.scss      Shared mixins (breakpoints, container, focus)
    ├── _base.scss        Reset and global type styles
    ├── _buttons.scss     Button variants
    ├── _ridge.scss       Ridge/volcano SVG graphic styles
    ├── _navbar.scss      Navigation bar
    ├── _footer.scss      Footer
    ├── _components.scss  Shared component styles
    ├── pages/            Page-specific SCSS partials
    └── main.scss         Entry — imports all partials
```

## Customising

1. **Content & copy** → `src/data/content.js`
2. **Colours & fonts** → `src/styles/_variables.scss`
3. **Swap photo placeholders** → Replace `<PhotoPlaceholder />` components with `<img>` tags
4. **Contact form** → Wire up `src/pages/Contact.jsx` to Formspree, Netlify Forms, or EmailJS

## Deploying

The site uses `HashRouter`, so it works on any static host (Netlify, Vercel, GitHub Pages, etc.) without server-side redirects.

After `yarn build`, upload the `dist/` folder.
