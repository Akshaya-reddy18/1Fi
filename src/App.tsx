import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { DeviceFrame } from './components/layout/DeviceFrame';
import { HeroHeader } from './components/layout/HeroHeader';
import { BottomNav } from './components/layout/BottomNav';
import { TopBrandsList } from './components/top-brands/TopBrandsList';
import { NearbyStoresList } from './components/nearby-stores/NearbyStoresList';
import { MarketplaceView } from './components/marketplace/MarketplaceView';
import { ProductDetailsView } from './components/marketplace/ProductDetailsView';
import { HomeView } from './components/other-tabs/HomeView';
import { EMIDuesView } from './components/other-tabs/EMIDuesView';
import { LimitView } from './components/other-tabs/LimitView';
import { ProfileView } from './components/other-tabs/ProfileView';

const ShopContent: React.FC = () => {
  const { activeNavTab, activeShopTab, selectedProduct } = useShop();

  // If a product details page is open, display product details full screen
  if (activeNavTab === 'shop' && selectedProduct) {
    return <ProductDetailsView />;
  }

  // Render respective main bottom navigation tab
  if (activeNavTab === 'home') {
    return (
      <div className="px-4">
        <HomeView />
      </div>
    );
  }

  if (activeNavTab === 'emi-dues') {
    return (
      <div className="px-4">
        <EMIDuesView />
      </div>
    );
  }

  if (activeNavTab === 'limit') {
    return (
      <div className="px-4">
        <LimitView />
      </div>
    );
  }

  if (activeNavTab === 'profile') {
    return (
      <div className="px-4">
        <ProfileView />
      </div>
    );
  }

  // Active Nav Tab is 'shop'
  return (
    <div className="flex flex-col min-h-full">
      {/* 1Fi Purple Hero Header with the 3 Shop Tabs */}
      <HeroHeader />

      {/* Main Body Content for the Active Shop Tab */}
      <div className="flex-1 px-4 sm:px-6">
        {activeShopTab === 'top-brands' && <TopBrandsList />}
        {activeShopTab === 'nearby-stores' && <NearbyStoresList />}
        {activeShopTab === 'marketplace' && <MarketplaceView />}
      </div>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ShopProvider>
      <DeviceFrame>
        <ShopContent />
        <BottomNav />
      </DeviceFrame>
    </ShopProvider>
  );
};

export default App;
