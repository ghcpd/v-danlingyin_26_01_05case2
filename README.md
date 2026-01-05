# New Year Cultural Celebration

A responsive Vue 3 + TypeScript + Vite site that showcases New Year history, regional traditions, and celebration events using local mock data only.

## Theme
Celebrates cultural diversity around New Year with accessible navigation, concise storytelling, and region-aware event filtering.

## Tech Stack
- Vue 3 (Composition API) + TypeScript
- Vite
- Vue Router 4 (lazy-loaded routes)
- Pinia (global region filter state)
- Tailwind CSS
- pnpm

## Getting Started
1) Install dependencies:
```bash
pnpm install
```
2) Run the dev server:
```bash
pnpm dev
```
3) Build for production:
```bash
pnpm build
```
4) Preview the production build:
```bash
pnpm preview
```

## Project Structure
- src/main.ts – app bootstrap
- src/App.vue – layout shell with navigation and footer
- src/router/ – Vue Router configuration
- src/stores/ – Pinia global state (region filter)
- src/types/ – shared TypeScript models
- src/data/ – mock data for history, traditions, and events
- src/components/ – reusable UI (hero, cards, filters, timeline, schedule)
- src/pages/ – page-level views for Home, History, Traditions, Events, Event Detail, About
- src/styles/tailwind.css – Tailwind base styles

## Features Implemented
- Global navigation with active-route highlighting
- Home hero with quick entry points
- History timeline with expandable details
- Traditions grouped by region (East Asia, Europe, Americas)
- Events listing with region filter (Pinia) and detail pages with schedules
- Responsive layouts for mobile/tablet/desktop
- Semantic HTML and focus-visible styles for accessibility
- Strict TypeScript typing; no `any`
- Purely local mock data (no backend calls)

## Manual Validation Checklist
- Home links navigate to History, Traditions, Events, About
- Active nav state updates on each route (including event detail pages)
- Timeline entries expand/collapse on History page
- Traditions page shows cards grouped by region
- Events page filter toggles between All/East Asia/Europe/Americas and updates cards
- Event detail page loads when selecting Details from an event card and shows schedule
- Layout adapts on mobile widths (cards stack, nav collapses)
- Keyboard navigation: tab through nav links, buttons, and cards; focus rings visible

## Known Limitations
- Content uses static mock data; add more entries as needed
- No persistence of selected filters across sessions
- No map or media assets included to keep bundle small
