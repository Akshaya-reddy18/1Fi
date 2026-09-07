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

### 3. Interactive EMI Plan Selection & Checkout Flow
- **Dynamic Tenures**: 3, 6, 9, 12, 18, and 24 months EMI calculations.
- **0% No-Cost EMI**: Highlighted with zero-interest badges and credit card savings comparison.
- **Interactive State**: Clearly visible selected state with purple glow border, checked radio badge, and repayment breakdown (Principal, Interest: ₹0, Processing Fee: ₹0).
- **Proceed with EMI Flow**:
  - Sticky bottom CTA bar activating upon plan selection.
  - Interactive **EMI Checkout Summary & Mutual Fund Pledge Modal**.
  - Repayment schedule preview & auto-debit timeline.
  - Instant order approval simulation with celebratory **confetti animation** and direct link to EMI Dues.

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
- **Animations & Effects**: Canvas Confetti, Tailwind transitions & keyframes

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
    │   ├── product.ts          # Strict TypeScript interfaces (Product, Variant, EMIPlan, FilterState)
    │   └── shop.ts             # Navigation and store interfaces
    ├── data/
    │   ├── mockProducts.ts     # Realistic curated electronics catalog
    │   ├── mockBrands.ts       # Top Brands matching screenshot 1 (Air India, Apple, CaratLane, etc.)
    │   └── mockStores.ts       # Nearby Stores matching screenshot 2 (TripBouquet, Charger On Wheels, etc.)
    ├── services/
    │   └── marketplaceApi.ts   # Asynchronous service layer with simulated latency, filtering & EMI math
    ├── context/
    │   └── ShopContext.tsx     # Global/feature state management for navigation, filters & active order flow
    └── components/
        ├── layout/
        │   ├── HeroHeader.tsx      # 1Fi purple gradient banner matching screenshots
        │   ├── ShopTabs.tsx        # 3-way pill tab switcher
        │   ├── BottomNav.tsx       # Bottom navigation bar
        │   └── DeviceFrame.tsx     # Mobile shell & responsive viewport toggle
        ├── common/
        │   ├── SearchBar.tsx       # Reusable 1Fi search input
        │   ├── SkeletonCard.tsx    # Skeleton loading cards
        │   ├── ErrorState.tsx      # Error state with retry action
        │   └── EmptyState.tsx      # Empty search/filter state
        ├── top-brands/
        │   └── TopBrandsList.tsx   # Parity implementation of Screenshot 1
        ├── nearby-stores/
        │   └── NearbyStoresList.tsx# Parity implementation of Screenshot 2 (distance + city dropdown)
        ├── marketplace/
        │   ├── MarketplaceView.tsx     # Main marketplace container
        │   ├── CategoryFilters.tsx     # Category pill filters & sort dropdown
        │   ├── ProductCard.tsx         # 1Fi styled product card
        │   ├── ProductGrid.tsx         # Responsive product grid
        │   ├── ProductDetailsView.tsx  # Immersive product details page
        │   ├── VariantSelector.tsx     # Dynamic storage & color selector
        │   ├── EMIPlanSelector.tsx     # Interactive EMI plan list
        │   └── EMIProceedModal.tsx     # Checkout summary & pledge confirmation modal
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

3. Open your browser at `http://localhost:5173` (or the URL shown in terminal).

4. To test production build:
   ```bash
   npm run build
   npm run preview
   ```

---

## 🔍 Verification & Testing Guide

| Feature / Checklist Item | How to Verify |
|---|---|
| **Top Brands Tab** | Click `Top Brands` tab. Verify Air India, Apple Premium Reseller, CaratLane, etc. match screenshot 1. |
| **Nearby Stores Tab** | Click `Nearby Stores` tab. Verify TripBouquet, Charger on Wheels, Ashoka Suzuki, distance tags, and Ranga Reddy location dropdown match screenshot 2. |
| **1Fi Marketplace Tab** | Click `1Fi Marketplace` tab. Browse smartphones, laptops, audio devices. Filter by category or search. |
| **Product Details View** | Click on any product card or "View EMI Plans". Inspect image gallery, specifications, and warranty badges. |
| **Dynamic Variant Updates** | Select different storage sizes (e.g. 256GB vs 512GB) or color options. Notice base price and EMI calculations update instantly. |
| **EMI Plan Selection** | Select 3, 6, 9, 12, 18, or 24 months. Notice selected purple border highlight, interest calculation, and active Proceed button. |
| **Proceed Flow & Modal** | Click `Proceed with EMI`. Review order summary and Mutual Fund collateral breakdown. Click `Confirm & Activate EMI Plan` to trigger the confetti celebration. |
| **Simulated Error Handling** | Go to `Profile` tab → click `Simulate API Network Error` → return to `Shop` to verify graceful error display with `Try Again` retry button. |
| **Responsive Viewports** | Use the toggle in the top evaluation bar to switch between `Responsive` and `Mobile Shell` frames. |

---

## 📄 Assumptions & Limitations

- As per assignment guidelines, financial transactions, credit score API calls, and real banking integrations are simulated client-side via asynchronous mock service abstractions (`marketplaceApi.ts`).
- Focus was kept exclusively on the Shop experience and 1Fi Marketplace feature without altering the 1Fi design system or introducing redundant frameworks.
