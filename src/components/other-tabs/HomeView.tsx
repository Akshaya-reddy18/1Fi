import React from 'react';
import { useShop } from '../../context/ShopContext';
import { TrendingUp, ShieldCheck, Store, ArrowRight } from 'lucide-react';

export const HomeView: React.FC = () => {
  const { setActiveNavTab, setActiveShopTab, availableMFLimit, totalMFLimit } = useShop();

  const handleGoToMarketplace = () => {
    setActiveNavTab('shop');
    setActiveShopTab('marketplace');
  };

  return (
    <div className="space-y-4 pt-4 pb-24 animate-in fade-in">
      {/* Portfolio & Limit Summary Card */}
      <div className="bg-gradient-to-br from-[#12002E] via-[#24065D] to-[#450F8E] text-white rounded-3xl p-5 shadow-lg relative overflow-hidden">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs text-purple-200 font-medium">Available 1Fi Credit Limit</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">₹{availableMFLimit.toLocaleString('en-IN')}</h2>
            <p className="text-xs text-purple-300 mt-0.5">Total Portfolio Value: ₹{totalMFLimit.toLocaleString('en-IN')}</p>
          </div>
          <div className="p-2.5 bg-white/10 rounded-2xl backdrop-blur-md">
            <TrendingUp className="w-6 h-6 text-emerald-400" />
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-white/15 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-emerald-300 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>0% Interest EMI Available</span>
          </div>
          <button
            onClick={handleGoToMarketplace}
            className="px-3 py-1.5 bg-white text-fi-purple font-bold rounded-full hover:bg-purple-50 transition-colors flex items-center gap-1 shadow-sm"
          >
            <span>Explore Shop</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Quick Marketplace Action Promo */}
      <div className="bg-white rounded-3xl p-5 border border-[#EAEBF0] shadow-fi-card">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-extrabold text-neutral-900 text-sm sm:text-base">
            New: 1Fi Marketplace
          </h3>
          <span className="text-xs font-bold text-fi-purple bg-fi-purple-50 px-2.5 py-0.5 rounded-full border border-fi-purple-100">
            Live
          </span>
        </div>
        <p className="text-xs text-neutral-600 leading-relaxed mb-4">
          Shop the latest smartphones, laptops, and electronics with 0% No-Cost EMIs backed by your mutual funds without breaking investments.
        </p>
        <button
          onClick={handleGoToMarketplace}
          className="w-full py-3 rounded-2xl bg-fi-purple text-white text-xs font-bold shadow-fi-purple hover:bg-fi-purple-700 transition-all flex items-center justify-center gap-2"
        >
          <Store className="w-4 h-4" />
          <span>Browse 1Fi Marketplace</span>
        </button>
      </div>
    </div>
  );
};
