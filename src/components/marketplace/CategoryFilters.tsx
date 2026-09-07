import React from 'react';
import { useShop } from '../../context/ShopContext';
import { SortOption } from '../../types/product';
import { MarketplaceApi } from '../../services/marketplaceApi';
import { ArrowUpDown } from 'lucide-react';

export const CategoryFilters: React.FC = () => {
  const { activeCategory, setActiveCategory, sortBy, setSortBy } = useShop();
  const categories = MarketplaceApi.getCategories();

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
  ];

  return (
    <div className="space-y-2.5 pt-1">
      {/* Category Pills - Horizontal scrollable */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 -mx-4 px-4 sm:mx-0 sm:px-0">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 select-none ${
                isActive
                  ? 'bg-fi-purple text-white shadow-fi-purple'
                  : 'bg-white text-[#4B5563] border border-[#E5E7EB] hover:border-fi-purple/40 hover:text-fi-purple'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Sort & Filter controls */}
      <div className="flex items-center justify-between text-xs text-[#6B7280] pt-1">
        <div className="flex items-center gap-1.5">
          <span className="font-medium text-[#111827]">1Fi Marketplace</span>
          <span className="w-1 h-1 rounded-full bg-neutral-300" />
          <span>Pay via Mutual Funds</span>
        </div>

        {/* Sort Selector */}
        <div className="flex items-center gap-1">
          <ArrowUpDown className="w-3.5 h-3.5 text-neutral-400" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="bg-transparent text-xs font-semibold text-fi-purple focus:outline-none cursor-pointer pr-1"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
