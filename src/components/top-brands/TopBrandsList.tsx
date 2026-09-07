import React, { useEffect, useState } from 'react';
import { MarketplaceApi } from '../../services/marketplaceApi';
import { BrandItem } from '../../types/shop';
import { SearchBar } from '../common/SearchBar';
import { SkeletonCard } from '../common/SkeletonCard';
import { ErrorState } from '../common/ErrorState';
import { useShop } from '../../context/ShopContext';
import { Plane, Apple, Sparkles, Gem, Trees, Tv, Watch, Smartphone } from 'lucide-react';

export const TopBrandsList: React.FC = () => {
  const { searchQuery, setSearchQuery } = useShop();
  const [brands, setBrands] = useState<BrandItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBrands = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await MarketplaceApi.getTopBrands(searchQuery);
      setBrands(data);
    } catch (err: any) {
      setError(err.message || 'Failed to load top brands');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, [searchQuery]);

  const renderBrandLogo = (brand: BrandItem) => {
    switch (brand.logoIconType) {
      case 'air-india':
        return (
          <div className="w-16 h-16 rounded-2xl bg-[#E31837] flex flex-col items-center justify-center p-2 text-white shadow-sm flex-shrink-0">
            <Plane className="w-6 h-6 transform -rotate-45" />
            <span className="text-[9px] font-black tracking-tighter uppercase mt-0.5">Air India</span>
          </div>
        );
      case 'apple':
        return (
          <div className="w-16 h-16 rounded-2xl bg-black flex flex-col items-center justify-center p-2 text-white shadow-sm flex-shrink-0">
            <Apple className="w-6 h-6" />
            <span className="text-[7.5px] font-semibold tracking-tight text-neutral-300 mt-0.5">Premium Reseller</span>
          </div>
        );
      case 'caratlane':
        return (
          <div className="w-16 h-16 rounded-2xl bg-[#7B1879] flex flex-col items-center justify-center p-2 text-white shadow-sm flex-shrink-0">
            <Gem className="w-6 h-6 text-amber-200" />
            <span className="text-[8px] font-extrabold tracking-tight mt-0.5">CARATLANE</span>
          </div>
        );
      case 'cghearth':
        return (
          <div className="w-16 h-16 rounded-2xl bg-[#E8F5E9] border border-green-200 flex flex-col items-center justify-center p-2 text-[#2E7D32] shadow-sm flex-shrink-0">
            <Trees className="w-6 h-6" />
            <span className="text-[9px] font-bold tracking-tight mt-0.5">cghearth</span>
          </div>
        );
      case 'croma':
        return (
          <div className="w-16 h-16 rounded-2xl bg-[#00838F] flex flex-col items-center justify-center p-2 text-white shadow-sm flex-shrink-0">
            <Tv className="w-6 h-6" />
            <span className="text-[9px] font-bold tracking-wider uppercase mt-0.5">croma</span>
          </div>
        );
      case 'tanishq':
        return (
          <div className="w-16 h-16 rounded-2xl bg-[#6A1B29] flex flex-col items-center justify-center p-2 text-white shadow-sm flex-shrink-0">
            <Sparkles className="w-6 h-6 text-amber-300" />
            <span className="text-[8.5px] font-black tracking-widest uppercase mt-0.5">TANISHQ</span>
          </div>
        );
      case 'titan':
        return (
          <div className="w-16 h-16 rounded-2xl bg-[#1A1A1A] flex flex-col items-center justify-center p-2 text-white shadow-sm flex-shrink-0">
            <Watch className="w-6 h-6 text-amber-400" />
            <span className="text-[9px] font-black tracking-widest uppercase mt-0.5">TITAN</span>
          </div>
        );
      case 'reliance':
      default:
        return (
          <div className="w-16 h-16 rounded-2xl bg-[#003399] flex flex-col items-center justify-center p-2 text-white shadow-sm flex-shrink-0">
            <Smartphone className="w-6 h-6" />
            <span className="text-[8px] font-bold tracking-tight text-center leading-tight mt-0.5">reliance digital</span>
          </div>
        );
    }
  };

  return (
    <div className="space-y-4 pt-4 pb-20">
      {/* Search Bar matching screenshot */}
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search online stores..."
      />

      {/* Section Title */}
      <div className="pt-2">
        <h2 className="text-xl font-bold text-[#111827] tracking-tight">Top Brands</h2>
      </div>

      {/* Loading state */}
      {loading && <SkeletonCard type="brand" count={4} />}

      {/* Error state */}
      {error && !loading && (
        <ErrorState message={error} onRetry={fetchBrands} />
      )}

      {/* Brands List */}
      {!loading && !error && (
        <div className="space-y-3.5">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-2xl p-3.5 sm:p-4 border border-[#EAEBF0] shadow-fi-card flex items-center gap-4 hover:border-fi-purple-300 transition-all hover:shadow-fi-card-hover group cursor-pointer"
            >
              {renderBrandLogo(brand)}
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-[#111827] group-hover:text-fi-purple transition-colors truncate">
                  {brand.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B7280] font-normal mt-0.5 truncate">
                  {brand.emiOffer}
                </p>
              </div>
            </div>
          ))}

          {brands.length === 0 && (
            <div className="text-center py-8 text-gray-500 text-sm">
              No brands match "{searchQuery}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};
