# r0963033043.github.io

Personal landing page hosted at https://r0963033043.github.io

## Structure

- `index.html` — redirects to `projects.html`
- `projects.html` — dark-themed landing page with project cards
- `about.html` — LinkedIn-style profile page
- `styles.css` — shared dark theme (CSS variables) for both pages
- `theme.js` — theme toggle (persists to `localStorage`)
- `ootd/` — Outfit of the Day project
- `trip-planner/` — Trip planning project

## Projects

| Project | Path |
| --- | --- |
| OOTD | [/ootd/](https://r0963033043.github.io/ootd/) |
| Plan a Trip | [/trip-planner/](https://r0963033043.github.io/trip-planner/) |

## Project list

Project cards are generated from the `projects` array in `projects.html`. Each entry has `href`, `icon`, `title`, and `desc` fields.

## Theming

`styles.css` exposes two themes via the `data-theme` attribute on `<html>`:

- `cosmic` (default) — purple/blue gradients on near-black
- `mono` — monochrome black/gray with a faint grid background and monospace labels for a more technical feel

The fixed top-right button toggles between them; `theme.js` applies the saved theme before paint to avoid a flash.

Colors, card backgrounds, borders, and background images are all driven by CSS variables, so adding a new theme means adding a new `[data-theme="..."]` block.
