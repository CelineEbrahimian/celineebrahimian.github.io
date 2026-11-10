# Celine Ebrahimian — Engineering Portfolio

Live at https://celineebrahimian.github.io

## What's where
- `index.html` — home page: header, short project summaries (zig-zag rows), labs, devices, contact
- `projects/` — one detail page per project (full photos, plots, What / How / Lessons)
- `styles.css` — all colours and layout, shared by every page
- `script.js` — photo enlarge-on-click and the menu underline, shared by every page
- `images/` — all photos

## Common edits
- **Change a project's full write-up:** edit its file in `projects/`, e.g. `projects/exoskeleton.html`.
- **Change a project's short summary or thumbnail on the home page:** edit its row in `index.html` (search for the project name).
- **Add a photo:** upload it to `images/`, then copy any `<figure>…</figure>` line in that project's page and change the file name and caption. Pages in `projects/` refer to photos as `../images/name.jpg`.
- **Colours:** the palette is at the top of `styles.css`.
