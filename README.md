# AYO Pâtisserie

Website source for https://ayobakery.store.

## Files

- `dist/index.html`: page markup
- `dist/assets/site.css`: styling
- `dist/assets/site.js`: interactions and product content
- `dist/assets/*.jpg`: website photos

## Preview

Run `python3 -m http.server 8000 --directory dist` and open http://localhost:8000.

## Editing and publishing

Every push to `main` publishes `dist/` to GitHub Pages (see `.github/workflows/pages.yml`), served at https://ayobakery.store.

Imported from website source commit `a334fdf55b7fd4b5079952deba2519a5debd3fb0` (Sites version 18).
