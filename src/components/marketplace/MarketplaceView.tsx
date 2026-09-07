import React from 'react';
import { useShop } from '../../context/ShopContext';
import { SearchBar } from '../common/SearchBar';
import { CategoryFilters } from './CategoryFilters';
import { ProductGrid } from './ProductGrid';
import { ProductDetailsView } from './ProductDetailsView';
import { Zap } from 'lucide-react';

export const MarketplaceView: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedProduct,
    availableMFLimit,
  } = useShop();

  // If a product is currently selected, render the dedicated product details experience
  if (selectedProduct) {
    return <ProductDetailsView />;
  }

  return (
    <div className="space-y-4 pt-4">
      {/* Search Input for Marketplace */}
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search smartphones, laptops, audio..."
      />

      {/* Credit Limit / MF Collateral Quick Banner */}
      <div className="bg-gradient-to-r from-fi-purple-50 via-indigo-50/60 to-purple-50 rounded-2xl p-3.5 border border-fi-purple-200 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-fi-purple text-white flex items-center justify-center shadow-sm">
            <Zap className="w-4 h-4 fill-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-black text-[#111827]">
                ₹{availableMFLimit.toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] font-bold text-fi-purple bg-white px-1.5 py-0.2 rounded-full border border-fi-purple-200">
                1Fi Limit
              </span>
            </div>
            <p className="text-[10.5px] text-neutral-600 mt-0.5">
              Instant 0% EMI backed by your Mutual Funds portfolio
            </p>
          </div>
        </div>
      </div>

      {/* Category Pills & Sort Bar */}
      <CategoryFilters />

      {/* Main Product Grid */}
      <ProductGrid />
    </div>
  );
};
