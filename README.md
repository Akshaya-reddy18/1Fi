# 1Fi Shop & Marketplace — SDE Intern Assignment

A pixel-perfect, production-ready implementation of the **1Fi Marketplace** seamlessly integrated into the existing **1Fi Shop Experience**, preserving the existing *Top Brands* and *Nearby Stores* functionality while adhering 100% to 1Fi's visual language, design system, and fintech user experience.

---

## 🌟 Visual Parity & Design Language

The design faithfully replicates the 1Fi mobile application aesthetics:
- **Hero Promotional Banner**: Deep purple gradient (`#12002E` → `#24065D` → `#450F8E`), "✦ NO-COST EMIs" pill badge, and bold typography ("Shop today, Pay later using Mutual funds").
- **3-Way Shop Tabs**: Integrated pill switcher `[ Top Brands ] [ Nearby Stores ] [ 1Fi Marketplace ]` with white active pill background, purple text, and active underline indicator.
- **Search Bar**: Full-radius search input with instant clear and debounce support.
- **Fintech Card Aesthetics**: Rounded surfaces (`rounded-2xl` / `rounded-3xl`), subtle border lines (`#EAEBF0`), elevation shadows, and active purple accents (`#5E2BE9`).
- **Bottom Navigation**: 5 tabs (`Home`, `Shop` [Active Purple], `EMI Dues`, `Limit`, `Profile`).
- **Responsive Viewport + Mobile Shell**: Built mobile-first with a toggleable Mobile Device Frame for evaluation on desktop browsers.

---

## 🚀 Key Features

### 1. 1Fi Marketplace
- **Curated Catalog**: Realistic mock data spanning Smartphones, Laptops, Audio, Wearables, and Appliances.
- **Dynamic Search & Filters**: Search across products, brands, and categories; sort by Price (Low/High), Featured, or Ratings.
- **Product Card**: High-resolution imagery, brand badges, rating stars, current price, strike-through MRP, discount percentage, and dynamic starting No-Cost EMI calculation (`₹X/mo`).

### 2. Immersive Product Details Experience
- **Multi-Angle Gallery**: High-res product imagery with interactive thumbnail switcher.
- **Dynamic Variant Selector**: Storage options (e.g., 128GB, 256GB, 512GB) and color swatches (Desert Titanium, Natural Titanium, Black) that **dynamically recalculate product price and EMI amounts in real time**.
- **Specifications & Highlights Tabs**: Detailed technical specifications and key feature lists.
- **Mutual Fund Guarantee Banner**: Highlights 1Fi's core value proposition (no credit checks, 100% investment-backed loan).

### 3. Interactive EMI Plan Selection & CTA Proceed Flow
- **Dynamic Tenures**: 3, 6, 9, 12, 18, and 24 months EMI calculations.
- **0% No-Cost EMI**: Highlighted with zero-interest badges and credit card savings comparison.
- **Interactive State**: Clearly visible selected state with purple glow border and checked radio badge.
- **Primary Proceed CTA**:
  - Primary button placed below the EMI plan options and in the sticky bottom bar: `"Proceed with EMI"`.
  - Disabled/inactive until an EMI plan is selected.
  - Activates with purple theme once a plan is chosen.
  - Clicking displays a small, clean confirmation modal showing the dynamic selection:
    > **You're all set!**  
    > You've selected the **{X} Months EMI plan** at **₹{Y}/month**.  
    > *Your selected EMI plan is ready to proceed.*
  - Includes a simple **"Done"** action to close.

### 4. Robust UX States
- **Skeleton Loaders**: Polished animated skeletons for product cards, brands, and details screens.
- **Error Boundaries & Network Resilience**: Reusable error state with retry actions. Includes a **Simulate API Network Error** toggle in the Profile tab for evaluator testing.
- **Empty State**: Friendly fallback when search or category filters return 0 results with a "Clear Filters" action.

---

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Bundler**: Vite 6
- **Styling**: Tailwind CSS with custom 1Fi design system extension
- **Icons**: Lucide React
- **Animations & Effects**: Tailwind transitions & keyframes

---

## 🏗️ Architecture & Project Structure

```
d:/1Fi/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── README.md
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── types/
    │   ├── product.ts          # Strict TypeScript interfaces (Product, Variant, EMIPlan, FilterParams)
    │   └── shop.ts             # Navigation and store interfaces
    ├── data/
    │   ├── mockProducts.ts     # Curated electronics catalog
    │   ├── emiPlans.ts         # EMI tenure policies and interest matrices
    │   ├── mockBrands.ts       # Top Brands matching screenshot 1 (Air India, Apple, CaratLane, etc.)
    │   └── mockStores.ts       # Nearby Stores matching screenshot 2 (TripBouquet, Charger On Wheels, etc.)
    ├── services/
    │   └── marketplaceApi.ts   # Asynchronous service layer with simulated latency, filtering & EMI math
    ├── context/
    │   └── ShopContext.tsx     # Global/feature state management for navigation, filters & active selection
    └── components/
        ├── layout/
        │   ├── HeroHeader.tsx          # 1Fi purple gradient banner matching screenshots
        │   ├── ShopTabs.tsx            # 3-way pill tab switcher
        │   ├── BottomNav.tsx           # Bottom navigation bar
        │   └── DeviceFrame.tsx         # Mobile shell & responsive viewport toggle
        ├── common/
        │   ├── SearchBar.tsx           # Reusable 1Fi search input
        │   ├── SkeletonCard.tsx        # Skeleton loading cards
        │   ├── ErrorState.tsx          # Error state with retry action
        │   └── EmptyState.tsx          # Empty search/filter state
        ├── top-brands/
        │   └── TopBrandsList.tsx       # Parity implementation of Screenshot 1
        ├── nearby-stores/
        │   └── NearbyStoresList.tsx    # Parity implementation of Screenshot 2 (distance + city dropdown)
        ├── marketplace/
        │   ├── MarketplaceView.tsx         # Main marketplace container
        │   ├── CategoryFilters.tsx         # Category pill filters & sort dropdown
        │   ├── ProductCard.tsx             # 1Fi styled product card
        │   ├── ProductGrid.tsx             # Responsive product grid
        │   ├── ProductDetailsView.tsx      # Immersive product details page
        │   ├── VariantSelector.tsx         # Dynamic storage & color selector
        │   ├── EMIPlanSelector.tsx         # Interactive EMI plan list with primary Proceed CTA
        │   └── EMIConfirmationModal.tsx    # Small confirmation dialog with dynamic summary & Done action
        └── other-tabs/
            ├── HomeView.tsx
            ├── EMIDuesView.tsx
            ├── LimitView.tsx
            └── ProfileView.tsx
```

---

## 🚦 How to Run Locally

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn or pnpm

### Steps
1. Clone repository and install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open your browser at `http://localhost:5173`.
