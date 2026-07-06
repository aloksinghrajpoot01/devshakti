# Devshakti Vastralaya

Static website for Devshakti Vastralaya.

## Project Structure

```text
.
├── index.html
├── aboutus.html
├── css/
│   ├── index.css
│   └── aboutus.css
├── scss/
│   ├── index.scss
│   └── aboutus.scss
├── assets/
│   └── images/
│       ├── about-hero.jpg
│       └── products/
└── js/
    └── index.js
```

- `index.html` contains the main website markup.
- `aboutus.html` contains the About Us page markup.
- `scss/` contains the source stylesheets.
- `css/` contains the compiled stylesheets used by the HTML pages.
- `assets/images/` contains website image assets.
- `js/` contains website scripts.

## Compile SCSS

```powershell
npx sass --no-source-map scss/index.scss css/index.css
npx sass --no-source-map scss/aboutus.scss css/aboutus.css
```