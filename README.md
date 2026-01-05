# New Year Cultural Celebration Website

A comprehensive, production-ready cultural-themed website introducing New Year celebrations, traditions, and historical background from around the world. Built with Vue 3, TypeScript, and Vite.

## 🎊 Project Overview

This website serves as a digital platform for exploring how different cultures celebrate New Year. It features:

- **Interactive History Timeline**: Journey through ancient civilizations and modern calendar systems
- **Cultural Traditions**: Discover unique traditions from East Asia, Europe, and the Americas
- **Global Events**: Explore major New Year celebration events worldwide
- **Detailed Event Information**: Learn about cultural backgrounds and event schedules
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

## 🌏 New Year Cultural Theme

New Year celebrations represent humanity's universal desire to mark time, honor traditions, and embrace new beginnings. This website explores:

- **Historical Context**: How New Year celebrations evolved from ancient agricultural cycles to modern global events
- **Cultural Diversity**: The rich variety of traditions across different regions and communities
- **Symbolic Meanings**: The deeper significance behind cultural practices and rituals
- **Modern Celebrations**: Contemporary events that blend tradition with modern spectacle
- **Cultural Preservation**: The importance of maintaining and sharing cultural heritage

## 🛠️ Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Language**: TypeScript (strict mode)
- **Build Tool**: Vite
- **Routing**: Vue Router 4 (with lazy loading)
- **State Management**: Pinia
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm

## 📋 Prerequisites

- Node.js 16.x or higher
- pnpm 8.x or higher

## 🚀 Installation

1. Clone the repository or navigate to the project directory:

```bash
cd new-year-cultural-celebration
```

2. Install dependencies using pnpm:

```bash
pnpm install
```

## 💻 Development Usage

Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000` and will automatically open in your browser.

## 🏗️ Build Instructions

Create a production build:

```bash
pnpm build
```

The built files will be in the `dist` directory.

Preview the production build:

```bash
pnpm preview
```

## 📁 Project Structure

```
new-year-cultural-celebration/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── NavigationBar.vue       # Global navigation with active states
│   │   ├── HighlightCard.vue       # Home page feature cards
│   │   ├── TimelineItem.vue        # Expandable history timeline items
│   │   ├── TraditionCard.vue       # Tradition display cards
│   │   ├── EventCard.vue           # Event preview cards
│   │   └── RegionFilter.vue        # Region selection filter
│   ├── pages/               # Page-level views
│   │   ├── HomePage.vue            # Landing page with hero banner
│   │   ├── HistoryPage.vue         # Interactive history timeline
│   │   ├── TraditionsPage.vue      # Traditions by region
│   │   ├── EventsPage.vue          # Events list with filtering
│   │   ├── EventDetailPage.vue     # Detailed event information
│   │   └── AboutPage.vue           # Project purpose and values
│   ├── router/              # Vue Router configuration
│   │   └── index.ts                # Route definitions with lazy loading
│   ├── stores/              # Pinia stores
│   │   └── app.ts                  # Global state (region filter)
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts                # Shared interfaces and types
│   ├── data/                # Mock cultural data
│   │   ├── history.ts              # Historical timeline data
│   │   ├── traditions.ts           # Cultural traditions data
│   │   ├── events.ts               # Celebration events data
│   │   └── regions.ts              # Region definitions
│   ├── App.vue              # Root component
│   ├── main.ts              # Application entry point
│   └── style.css            # Global styles with Tailwind
├── public/                  # Static assets
├── index.html               # HTML entry point
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration (strict mode)
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Project dependencies and scripts
```

## ✨ Implemented Features

### Pages

- ✅ **Home Page**: Hero banner, introduction text, navigation entry points, highlight cards
- ✅ **History Page**: Timeline view with ancient/modern sections, expandable items
- ✅ **Traditions Page**: Traditions organized by region (East Asia, Europe, Americas)
- ✅ **Events Page**: Event list with region filtering capability
- ✅ **Event Detail Page**: Full event description, cultural background, schedule
- ✅ **About Page**: Project purpose and cultural preservation message

### Functionality

- ✅ Global navigation bar with active route highlighting
- ✅ Responsive layouts for mobile, tablet, and desktop
- ✅ Region filter with global state management (Pinia)
- ✅ Lazy-loaded routes for optimal performance
- ✅ Smooth scrolling and transitions
- ✅ Expandable/collapsible timeline items
- ✅ Event detail routing with URL parameters
- ✅ 404 handling with redirect to home

### Code Quality

- ✅ TypeScript strict mode enabled
- ✅ Strong typing throughout (no `any` usage)
- ✅ Vue 3 Composition API with `<script setup lang="ts">`
- ✅ Semantic HTML with ARIA labels
- ✅ Accessible keyboard navigation
- ✅ Clean component architecture
- ✅ DRY principles applied
- ✅ Comprehensive mock data

## 🧪 Manual UI Validation Steps

### Navigation Testing
1. Open the application and verify all navigation links work
2. Check that the active route is highlighted in the navigation bar
3. Test navigation on mobile view (hamburger menu should be visible)
4. Verify smooth scrolling to top on route changes

### Home Page Testing
1. Verify hero banner displays correctly
2. Check that all three highlight cards link to correct pages
3. Ensure responsive layout on mobile and desktop

### History Page Testing
1. Verify timeline items display in chronological order
2. Test expand/collapse functionality on timeline items
3. Check that ancient and modern sections are clearly separated
4. Verify responsive layout

### Traditions Page Testing
1. Verify traditions are organized by region (East Asia, Europe, Americas)
2. Check that all tradition cards display title, description, and symbolic meaning
3. Ensure responsive grid layout

### Events Page Testing
1. Test region filter dropdown functionality
2. Verify events filter correctly by selected region
3. Check that "All Regions" shows all events
4. Test event card click navigation to detail page
5. Verify responsive grid layout

### Event Detail Page Testing
1. Click on an event card and verify detail page loads
2. Check that all event information displays (name, date, location, description)
3. Verify cultural background section appears if available
4. Test schedule display with numbered items
5. Test "Back to Events" navigation
6. Test invalid event ID handling (should show "Event Not Found")

### About Page Testing
1. Verify all content sections display correctly
2. Check navigation links to other pages work
3. Ensure responsive layout

### Responsive Design Testing
1. Test on desktop (1920x1080)
2. Test on tablet (768x1024)
3. Test on mobile (375x667)
4. Verify navigation adapts on mobile
5. Check that all layouts remain readable and functional

### Accessibility Testing
1. Test keyboard navigation (Tab, Enter, Arrow keys)
2. Verify semantic HTML structure
3. Check ARIA labels on interactive elements
4. Test with screen reader if available

## 🎯 Known Limitations

- No backend API integration (uses static mock data)
- No authentication system (not required per specification)
- Mobile menu button is visible but doesn't toggle (simplified implementation)
- No advanced filtering beyond region selection
- No search functionality
- No image galleries (text-focused content presentation)

## 📊 Performance Optimizations

- Lazy-loaded route components
- Optimized Vite build configuration
- Tailwind CSS purging for minimal bundle size
- Efficient state management with Pinia
- Semantic HTML for fast rendering

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This is a demonstration project created for UI case evaluation purposes.

## 👥 Target Users

- General public interested in cultural education
- Students researching New Year traditions
- Cultural enthusiasts exploring global celebrations
- Educators teaching about cultural diversity

---

**Built with ❤️ celebrating cultural diversity and unity**
