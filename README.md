# CLC website

Static site: HTML + CSS + JS (fonts: Fraunces + Nunito Sans via Google Fonts), Bootstrap 5.3 loaded from CDN. No build step.

## Files
- `index.html` page markup
- `css/style.css` all styles
- `js/main.js` therapies and centres data, booking form, video player, menu

## Setup
Put these files in the project root next to the existing `assets/` folder
(`assets/logo`, `assets/team`, `assets/centre`, `assets/services`). Image paths are unchanged.

## Common edits
- Therapies and centres: edit the `services` and `centres` arrays at the top of `js/main.js`.
- Phone / WhatsApp: search for `919004460650`.
- More videos: copy the video block in `index.html` and change `data-video` to the YouTube video ID.

## Deploy
Any static host works (Vercel, Netlify, GitHub Pages). Upload the folder as is.
