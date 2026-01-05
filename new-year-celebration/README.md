# New Year Cultural Celebration Website 🎊

A cultural-themed website introducing New Year celebrations, traditions, and historical background from around the world. This project allows users to explore how New Year is celebrated across different cultures and eras.

## 🌟 New Year Cultural Theme

The New Year represents one of humanity's oldest and most universal celebrations. Across cultures and throughout history, people have marked the passage from one year to the next with rituals, festivities, and traditions meant to honor the past and welcome new beginnings.

This website celebrates this rich tapestry of cultural heritage by presenting:
- **Historical Evolution**: From ancient Babylonian Akitu festivals to modern Times Square celebrations
- **Regional Traditions**: Customs from East Asia, Europe, and the Americas
- **Global Events**: Famous celebration events that bring millions together
- **Symbolic Meanings**: The deeper significance behind various New Year customs

## 🛠️ Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Language**: TypeScript (strict mode enabled)
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Routing**: Vue Router 4 (with lazy loading)
- **State Management**: Pinia
- **Package Manager**: pnpm

## 📦 Installation

```bash
# Clone the repository or navigate to project directory
cd new-year-celebration

# Install dependencies
pnpm install
```

## 🚀 Development

```bash
# Start the development server
pnpm dev

# The application will be available at http://localhost:3000
```

## 🏗️ Build

```bash
# Type check and build for production
pnpm build

# Preview the production build
pnpm preview
```

## 📁 Project Structure

```
new-year-celebration/
├── public/
│   └── favicon.svg           # Site favicon
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── NavBar.vue        # Global navigation with active route highlighting
│   │   ├── FooterBar.vue     # Site footer with navigation links
│   │   ├── HighlightCard.vue # Home page feature cards
│   │   ├── TimelineItem.vue  # Expandable history timeline items
│   │   ├── TraditionCard.vue # Tradition display cards
│   │   ├── EventCard.vue     # Event listing cards
│   │   ├── EventSchedule.vue # Event schedule display
│   │   ├── RegionFilter.vue  # Region filter buttons
│   │   ├── PageHeader.vue    # Consistent page headers
│   │   └── index.ts          # Component exports
│   ├── pages/                # Page-level views
│   │   ├── HomePage.vue      # Landing page with hero and highlights
│   │   ├── HistoryPage.vue   # Timeline of New Year origins
│   │   ├── TraditionsPage.vue# Regional traditions listing
│   │   ├── EventsPage.vue    # Events with region filtering
│   │   ├── EventDetailPage.vue # Detailed event view
│   │   ├── AboutPage.vue     # Project purpose and mission
│   │   ├── NotFoundPage.vue  # 404 error page
│   │   └── index.ts          # Page exports
│   ├── router/               # Vue Router configuration
│   │   └── index.ts          # Route definitions with lazy loading
│   ├── stores/               # Pinia stores
│   │   ├── appStore.ts       # Global state (region filter, timeline)
│   │   └── index.ts          # Store exports
│   ├── types/                # TypeScript type definitions
│   │   └── index.ts          # All type interfaces
│   ├── utils/                # Helper functions
│   │   ├── helpers.ts        # Utility functions
│   │   └── index.ts          # Utility exports
│   ├── data/                 # Mock cultural data
│   │   └── mockData.ts       # Timeline, traditions, events data
│   ├── styles/               # Global styles
│   │   └── main.css          # Tailwind imports and custom styles
│   ├── App.vue               # Root component
│   ├── main.ts               # Application entry point
│   └── vite-env.d.ts         # Vite type declarations
├── index.html                # HTML entry point
├── package.json              # Project dependencies
├── tsconfig.json             # TypeScript configuration (strict)
├── tsconfig.node.json        # Node TypeScript config
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
└── README.md                 # This file
```

## ✨ Implemented Features

### Pages
- [x] **Home Page**: Hero banner, introduction text, highlight cards, navigation entry points
- [x] **History Page**: Interactive timeline with ancient/modern filter, expandable items
- [x] **Traditions Page**: Traditions by region (East Asia, Europe, Americas) with symbolic meanings
- [x] **Events Page**: Event listings with region filter
- [x] **Event Detail Page**: Full event description, cultural background, schedule
- [x] **About Page**: Project purpose and cultural preservation message
- [x] **404 Page**: User-friendly not found page

### Functional Requirements
- [x] Global navigation bar with responsive mobile menu
- [x] Active route highlighting in navigation
- [x] Responsive layout for mobile, tablet, and desktop
- [x] Global state management with Pinia (selected region filter)
- [x] All data loaded from local mock files
- [x] Page transitions and animations
- [x] Lazy-loaded routes for performance

### Non-Functional Requirements
- [x] No backend API calls (all mock data)
- [x] No authentication required
- [x] Focus on content presentation and navigation clarity
- [x] Semantic HTML structure
- [x] ARIA labels for accessibility
- [x] Keyboard navigable UI
- [x] Reduced motion support

### Technical Quality
- [x] TypeScript strict mode enabled
- [x] No usage of `any` type
- [x] Strong typing for all data structures
- [x] Vue 3 Composition API with `<script setup>`
- [x] Proper component organization
- [x] Clean, maintainable code

## 🧪 Manual UI Validation Steps

1. **Home Page Validation**
   - Navigate to `/` and verify hero banner displays
   - Check that highlight cards link to correct pages
   - Test responsive layout at different screen sizes

2. **Navigation Testing**
   - Click each navigation link and verify routing
   - Check active state highlighting
   - Test mobile menu toggle on small screens

3. **History Page Validation**
   - Navigate to `/history`
   - Click timeline items to expand/collapse
   - Test ancient/modern era filters
   - Verify expandable functionality works correctly

4. **Traditions Page Validation**
   - Navigate to `/traditions`
   - Test region filter buttons
   - Verify traditions display with symbolic meanings
   - Check region badges on cards

5. **Events Page Validation**
   - Navigate to `/events`
   - Test region filter functionality
   - Verify event count updates with filter
   - Click event cards to navigate to details

6. **Event Detail Page Validation**
   - Navigate to `/events/[id]` (e.g., `/events/times-square-nyc`)
   - Verify full description, cultural background, and schedule display
   - Test back navigation link
   - Check handling of invalid event IDs

7. **About Page Validation**
   - Navigate to `/about`
   - Verify content displays correctly
   - Test navigation links at bottom

8. **Responsive Design Testing**
   - Test all pages at: 320px, 768px, 1024px, 1440px widths
   - Verify navigation collapses to mobile menu
   - Check card grids adjust appropriately

9. **Accessibility Testing**
   - Navigate using keyboard only (Tab, Enter, Escape)
   - Verify focus indicators are visible
   - Check ARIA labels on interactive elements

## ⚠️ Known Limitations

1. **Mock Data Only**: All cultural data is static and for demonstration purposes
2. **No Backend Integration**: Data cannot be updated or filtered server-side
3. **Limited Regions**: Currently covers only East Asia, Europe, and Americas
4. **Event Dates**: Dates shown are placeholder/mock data
5. **No Search Feature**: Text search is not implemented
6. **No User Preferences**: Region filter resets on page reload
7. **Images**: Uses emoji icons instead of actual images

## 📄 License

This project is for educational and demonstration purposes.

---

Built with ❤️ for cultural enthusiasts everywhere
