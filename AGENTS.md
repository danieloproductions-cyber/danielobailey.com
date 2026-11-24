# Agent guidance

## Project

- This repository is the static website for [danielobailey.com](https://danielobailey.com/), hosted with GitHub Pages.
- The site uses plain HTML, CSS, JavaScript, and local image assets. There is no package manager, build step, or backend.
- `index.html` is the canonical source for the site's biography, portfolio, metadata, structured data, and outbound links.

## Editing

- Keep changes focused and preserve the existing visual style, responsive behavior, accessibility, and reduced-motion support.
- Do not invent biographical details, credits, publication links, or claims. Verify new factual content against a primary source before adding it.
- Keep profile links, JSON-LD `sameAs` values, page metadata, and the site's LLM-facing summary consistent when updating identity or affiliations.
- Prefer local assets and avoid adding third-party trackers, scripts, or dependencies without an explicit request.
- Preserve the canonical domain `https://danielobailey.com/` and the existing GitHub Pages setup.

## Validation

- For HTML edits, check the page structure and links; for CSS or JavaScript edits, manually verify the affected responsive and interactive behavior.
- There is no configured automated test or build command.
