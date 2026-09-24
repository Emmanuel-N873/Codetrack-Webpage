# CodeTrack - Emmanuel Nwauzobilom

A responsive landing page for CodeTrack, a habit-building app for people learning to code.

## Features

- Hero section with a coding-activity visual
- Social-proof statistics bar
- Feature cards with hover lift effects
- Responsive “How it works” cards
- Testimonial and call-to-action sections
- Responsive footer
- Mobile navigation menu icon (interaction is not implemented yet)

## Preview

The bundled image below is a design reference, not a verified screenshot of the current implementation. Open the page locally to see its current appearance.

![CodeTrack landing-page design reference](Image/CodeTrack%20Landing.png)

Live demo: no deployment URL is documented yet.

## Current status and limitations

This project is a static landing page, not a working habit-tracking application. It has no backend, account system, or data storage.

- The login and signup buttons have no actions attached.
- The mobile menu does not open or close and has no Escape-key behavior. `app.js` is empty, and `index.html` does not load a script.
- Activity heatmaps and learning entries are static visuals, not live user data.
- Links to `#features`, `#how-it-works`, and `#final-cta` have matching page sections.
- Footer links to pricing, changelog, guides, blog, community, help, about, careers, contact, terms, privacy, and cookies are placeholders without matching destinations.

## Technology and dependencies

- HTML for page structure and content.
- CSS for layout, responsive styles, and visual effects, with breakpoints at 600px and 900px.
- Boxicons 2.1.4, loaded from the unpkg CDN, for the menu icon.
- Local SVG and PNG assets in `Image/`.

No package installation, framework, or build step is required. An internet connection is needed to load the external Boxicons stylesheet and its icon font. Other page content and local images can load offline. The CSS lists Inter with system-font fallbacks; it does not bundle or load Inter.

## Project structure

```text
index.html       Main landing-page markup
style.css        Page styling, responsive layouts, and animations
app.js           Empty placeholder for future JavaScript; not loaded by the page
designsystem.md  Design guidance and intended product design tokens
README.md        Project documentation
Image/           Logo, activity visuals, and design-reference images
```

## Run locally

Prerequisites: a modern web browser and a local copy of the project.

1. Download or clone the project, preserving its folder structure.
2. Open `index.html` in your browser. Alternatively, serve the project folder with your editor's local static-server extension and open its preview URL.
3. Resize the browser to inspect desktop, tablet, and mobile layouts. The mobile menu icon is currently visual only.

## Customization

- Edit headings, descriptions, statistics, testimonials, and link destinations in `index.html`.
- Change colors, radii, and shadows in the `:root` variables at the top of `style.css`. Adjust typography, spacing, and responsive rules in the relevant CSS selectors.
- Replace images in `Image/`, then update their relative paths and descriptive `alt` text in `index.html`. Preserve filename capitalization for hosts with case-sensitive paths.
- Consult [the design system](designsystem.md) for brand and component guidance. It includes intended product components and fonts that are not all implemented on this landing page.
- To add interactions, implement them in `app.js` and load it from `index.html`, for example with `<script src="app.js" defer></script>`. Connect authentication and footer destinations when those pages or services exist.

## Verification

No automated test suite is included. Browser compatibility and accessibility testing have not been documented; the checklist below describes checks to perform, not completed test results.

1. Open the page in the browsers you intend to support. Record the browser/version, viewport, date, and results when testing.
2. Check narrow mobile and wide desktop layouts, including widths just below, at, and above the 600px and 900px breakpoints. Look for horizontal overflow, clipped text, and overlapping elements.
3. Confirm the logo, activity images, favicon, and menu icon load. Inspect the browser console and Network panel for errors or missing assets.
4. Follow the Features, How it works, and Start tracking links and confirm they reach the correct sections. Treat the documented placeholder links and inactive buttons as known limitations.
5. Navigate using Tab and Shift+Tab. Check visible focus, meaningful link/button names, and logical focus order. Once the menu is implemented, check keyboard activation, Escape handling, and its announced expanded state.
6. Check readability at 200% zoom, text contrast, image alternatives, and reduced-motion behavior. Run an HTML validator and investigate reported markup errors.

## Deployment

The page can be published to a static web host without a build command.

1. Prepare a publish folder containing `index.html`, `style.css`, and `Image/`, preserving their relative paths. Include `app.js` if you later implement and load it.
2. Upload that folder's contents to the host's public site directory, with `index.html` at its root. Exclude development metadata such as `.git`.
3. Open the published URL and repeat the image, link, and responsive checks above. Confirm the host allows the external Boxicons stylesheet and font to load.
4. Add the verified public URL to the Preview section of this README.

Publishing these files does not implement the missing account, menu, or tracking functionality.

## Author, credits, and licensing

- Project author: Emmanuel Nwauzobilom.
- Menu icon: Boxicons 2.1.4, delivered through unpkg. Third-party assets remain subject to their respective licenses.
- Local branding, screenshots, and design-reference images are stored in `Image/`. Their original sources and reuse permissions are not documented; add source credits and applicable license details when confirmed.

No project license file is currently included, and permitted reuse has not been specified. The maintainer should choose a license and add a `LICENSE` file before describing the project as available for reuse. This README does not grant rights to third-party assets.
