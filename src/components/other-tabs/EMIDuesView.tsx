import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ReceiptText, ArrowRight } from 'lucide-react';

export const EMIDuesView: React.FC = () => {
  const { setActiveNavTab, setActiveShopTab } = useShop();

  return (
    <div className="space-y-4 pt-4 pb-24 animate-in fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#111827]">EMI Dues & Schedule</h2>
        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
          Auto-Debit Active
        </span>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-[#EAEBF0] shadow-fi-card text-center space-y-3">
        <div className="w-12 h-12 bg-neutral-100 text-neutral-400 rounded-full flex items-center justify-center mx-auto">
          <ReceiptText className="w-6 h-6" />
        </div>
        <h3 className="text-base font-bold text-neutral-900">No active EMI dues</h3>
        <p className="text-xs text-neutral-500 max-w-xs mx-auto">
          When you purchase items from the 1Fi Marketplace or Top Brands on EMI, your repayment schedule will show here.
        </p>
        <button
          onClick={() => {
            setActiveNavTab('shop');
            setActiveShopTab('marketplace');
          }}
          className="mt-2 inline-flex items-center gap-1.5 px-5 py-2.5 bg-fi-purple text-white text-xs font-bold rounded-full shadow-fi-purple hover:bg-fi-purple-700 transition-all cursor-pointer"
        >
          <span>Shop on 1Fi Marketplace</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
