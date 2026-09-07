import React, { useEffect, useState } from 'react';
import { MarketplaceApi } from '../../services/marketplaceApi';
import { NearbyStoreItem } from '../../types/shop';
import { SearchBar } from '../common/SearchBar';
import { SkeletonCard } from '../common/SkeletonCard';
import { ErrorState } from '../common/ErrorState';
import { useShop } from '../../context/ShopContext';
import { ChevronDown, MapPin, Navigation, Zap, Compass, Store } from 'lucide-react';

export const NearbyStoresList: React.FC = () => {
  const { searchQuery, setSearchQuery, selectedCity, setSelectedCity } = useShop();
  const [stores, setStores] = useState<NearbyStoreItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);

  const cities = ['Ranga Reddy', 'Hyderabad', 'Bengaluru', 'Gurugram', 'Mumbai', 'Delhi'];

  const fetchStores = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await MarketplaceApi.getNearbyStores(searchQuery);
      setStores(data);
    } catch (err: any) {
      setError(err.message || 'Failed to load nearby stores');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStores();
  }, [searchQuery, selectedCity]);

  const renderStoreLogo = (store: NearbyStoreItem) => {
    switch (store.logoIconType) {
      case 'tripbouquet':
        return (
          <div className="w-16 h-16 rounded-2xl bg-white border border-[#E5E7EB] flex flex-col items-center justify-center p-2 shadow-sm flex-shrink-0">
            <Compass className="w-6 h-6 text-[#E31837]" />
            <span className="text-[7.5px] font-extrabold text-[#111827] mt-0.5 tracking-tight">TripBouquet</span>
          </div>
        );
      case 'charger':
        return (
          <div className="w-16 h-16 rounded-2xl bg-white border border-[#E5E7EB] flex flex-col items-center justify-center p-1.5 shadow-sm flex-shrink-0">
            <div className="flex items-center gap-0.5 text-neutral-900 font-black text-[8px] leading-tight text-center">
              CHARGER <Zap className="w-3 h-3 text-emerald-500 fill-emerald-500" />
            </div>
            <span className="text-[7px] font-bold text-emerald-600 tracking-tighter uppercase">ON WHEELS</span>
          </div>
        );
      case 'suzuki':
        return (
          <div className="w-16 h-16 rounded-2xl bg-white border border-[#E5E7EB] flex flex-col items-center justify-center p-2 shadow-sm flex-shrink-0">
            <div className="w-6 h-6 bg-red-600 text-white rounded-md flex items-center justify-center font-black text-xs">
              S
            </div>
            <span className="text-[8px] font-bold text-neutral-800 tracking-wider mt-0.5 uppercase">SUZUKI</span>
          </div>
        );
      default:
        return (
          <div className="w-16 h-16 rounded-2xl bg-[#003399] flex flex-col items-center justify-center p-2 text-white shadow-sm flex-shrink-0">
            <Store className="w-6 h-6" />
            <span className="text-[8px] font-semibold text-center mt-0.5">Store</span>
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
        placeholder="Search stores..."
      />

      {/* Header with City location selector matching screenshot 2 */}
      <div className="flex items-center justify-between pt-2">
        <h2 className="text-xl font-bold text-[#111827] tracking-tight">Nearby Stores</h2>

        {/* Location Dropdown Pill */}
        <div className="relative">
          <button
            onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-fi-purple/30 bg-white text-fi-purple text-xs font-semibold shadow-sm hover:border-fi-purple transition-all"
          >
            <span>{selectedCity}</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>

          {isCityDropdownOpen && (
            <div className="absolute right-0 mt-1.5 w-40 bg-white rounded-2xl shadow-xl border border-neutral-100 py-1.5 z-30 animate-in fade-in zoom-in-95">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => {
                    setSelectedCity(city);
                    setIsCityDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3.5 py-2 text-xs font-medium transition-colors flex items-center justify-between ${
                    selectedCity === city
                      ? 'bg-fi-purple-50 text-fi-purple font-bold'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  <span>{city}</span>
                  {selectedCity === city && <MapPin className="w-3.5 h-3.5 text-fi-purple" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Loading state */}
      {loading && <SkeletonCard type="store" count={4} />}

      {/* Error state */}
      {error && !loading && (
        <ErrorState message={error} onRetry={fetchStores} />
      )}

      {/* Store cards matching screenshot 2 */}
      {!loading && !error && (
        <div className="space-y-3.5">
          {stores.map((store) => (
            <div
              key={store.id}
              className="bg-white rounded-2xl p-3.5 sm:p-4 border border-[#EAEBF0] shadow-fi-card flex items-start gap-3.5 hover:border-fi-purple-300 transition-all hover:shadow-fi-card-hover group cursor-pointer"
            >
              {renderStoreLogo(store)}

              <div className="flex-1 min-w-0">
                {/* Store Name & Distance Badge */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#111827] group-hover:text-fi-purple transition-colors truncate">
                    {store.name}
                  </h3>
                  <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-[#F3F4F6] text-[#4B5563] text-[10.5px] font-bold tracking-tight whitespace-nowrap flex-shrink-0">
                    <Navigation className="w-2.5 h-2.5 text-neutral-400" />
                    {store.distanceKm >= 100 ? `${store.distanceKm} KM` : `${store.distanceKm} km`}
                  </span>
                </div>

                {/* Address */}
                <p className="text-xs text-[#6B7280] font-normal mt-1 leading-relaxed line-clamp-2">
                  {store.address}
                </p>
              </div>
            </div>
          ))}

          {stores.length === 0 && (
            <div className="text-center py-8 text-gray-500 text-sm">
              No stores found matching "{searchQuery}" in {selectedCity}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
