# Project Plan: Buddhist Concepts from Nikaya

This document tracks the progress of the Buddhist Concepts website project.

## Tasks Done

- [x] **Project Setup:**
  - [x] Initialize project with Eleventy.
  - [x] Configure Eleventy (`.eleventy.js`).
  - [x] Set up `package.json` with necessary dependencies (Eleventy, Tailwind, etc.).
  - [x] Create basic project structure (`src`, `_data`, `_includes`, `content`, etc.).
- [x] **Core Functionality:**
  - [x] Define concept data structure (`src/_data/concepts.js`).
  - [x] Implement template for individual concept pages (`_includes/layouts/concept.njk` or similar - *needs verification of exact file*).
  - [x] Render Markdown content for concepts.
  - [x] Implement tree-based navigation (likely using data from `concepts.js`).
  - [x] Implement homepage (`src/index.njk`).
- [x] **Styling:**
  - [x] Integrate Tailwind CSS.
  - [x] Apply basic styling and layout using Tailwind.
  - [x] Use Tailwind Typography plugin for Markdown content styling.
- [x] **Development Workflow:**
  - [x] Set up `npm start` script for development server.
  - [x] Set up `npm run build` script for production build.
- [x] **Documentation:**
  - [x] Create `README.md` with project overview, setup, usage, and contribution guidelines.

## Tasks To Do

- [ ] **Content Population:**
  - [/] **Comprehensive Review:** Review existing markdown files in `src/content/` for completeness and accuracy against Nikaya sources. (*Initial review completed, identified missing files as primary gap*)
  - [ ] **Add Missing Concepts:** Identify and add missing core concepts from the Nikaya according to a chosen structure (e.g., Sutta Pitaka structure, thematic structure).
    - [x] Define concept IDs and labels in `src/_data/concepts.js` (*Data structure exists*).
    - [/] Create corresponding markdown files in `src/content/` (*Started with sinh.md*).
  - [ ] **Add Sutta References:** Include references to specific suttas within the content pages.
  - [ ] **Add Pali Terms:** Include relevant Pali terms with definitions or links.
- [ ] **Feature Enhancements:**
  - [ ] **Search Functionality:** Implement a site-wide search for concepts.
  - [ ] **Related Concepts:** Verify and potentially improve the "Related Concepts" display mentioned in the README (e.g., based on tags, explicit links in data, or content analysis).
  - [ ] **Glossary:** Create a glossary page for Pali terms or key concepts.
  - [ ] **Visualizations:** Explore adding more visualizations (beyond the README flowchart) if appropriate (e.g., interactive concept maps).
  - [ ] **Print Styles:** Add print-specific CSS for better printing of concept pages.
  - [ ] **Dark Mode:** Implement a dark mode toggle.
- [ ] **UI/UX Improvements:**
  - [ ] **Navigation Refinement:** Improve tree navigation, especially for large numbers of concepts (e.g., collapsible sections, filtering).
  - [ ] **Accessibility Review:** Conduct an accessibility audit (WCAG compliance) and implement improvements.
  - [ ] **Performance Optimization:** Optimize image sizes, CSS/JS delivery.
  - [ ] **Cross-Browser Testing:** Ensure consistent display and functionality across major browsers.
- [ ] **Maintenance & Deployment:**
  - [ ] **CI/CD:** Set up automated build and deployment (e.g., using GitHub Actions to deploy to GitHub Pages or Cloudflare Pages).
  - [ ] **Dependency Updates:** Regularly update dependencies.
- [ ] **Documentation Updates:**
  - [ ] Update `README.md` as new features are added or processes change.
  - [ ] Consider adding more detailed documentation within `src/_data/concepts.js` or separate content guidelines if the project grows complex. 