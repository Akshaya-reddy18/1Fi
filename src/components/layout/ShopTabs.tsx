import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ShopTabType } from '../../types/shop';

export const ShopTabs: React.FC = () => {
  const { activeShopTab, setActiveShopTab, selectedProduct, closeProductDetails } = useShop();

  const tabs: { id: ShopTabType; label: string }[] = [
    { id: 'top-brands', label: 'Top Brands' },
    { id: 'nearby-stores', label: 'Nearby Stores' },
    { id: 'marketplace', label: '1Fi Marketplace' },
  ];

  const handleTabClick = (tabId: ShopTabType) => {
    if (selectedProduct) {
      closeProductDetails();
    }
    setActiveShopTab(tabId);
  };

  return (
    <div className="w-full bg-[#EAE8F7]/95 p-1 sm:p-1.5 rounded-full shadow-md backdrop-blur-md flex items-center justify-between border border-white/40">
      {tabs.map((tab) => {
        const isActive = activeShopTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`relative flex-1 py-2 sm:py-2.5 px-2 text-center rounded-full transition-all duration-200 ease-out font-semibold text-xs sm:text-sm select-none ${
              isActive
                ? 'bg-white text-fi-purple shadow-sm'
                : 'text-[#52527A] hover:text-[#2E2E48] active:scale-98'
            }`}
          >
            <span>{tab.label}</span>

            {/* Active Purple Underline Indicator centered under text */}
            {isActive && (
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-5 sm:w-6 h-[2.5px] bg-fi-purple rounded-full transition-all" />
            )}
          </button>
        );
      })}
    </div>
  );
};
