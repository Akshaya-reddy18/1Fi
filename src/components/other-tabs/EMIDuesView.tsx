import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ReceiptText, CheckCircle2, ArrowRight } from 'lucide-react';

export const EMIDuesView: React.FC = () => {
  const { selectedProduct, selectedEMIPlan, isOrderPlaced, setActiveNavTab, setActiveShopTab } = useShop();

  return (
    <div className="space-y-4 pt-4 pb-24 animate-in fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#111827]">EMI Dues & Schedule</h2>
        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
          Auto-Debit Active
        </span>
      </div>

      {isOrderPlaced && selectedProduct && selectedEMIPlan ? (
        <div className="bg-white rounded-3xl p-5 border border-fi-purple-200 shadow-fi-card space-y-4">
          <div className="flex items-center gap-3">
            <img
              src={selectedProduct.thumbnail}
              alt={selectedProduct.name}
              className="w-14 h-14 object-contain rounded-xl bg-neutral-50 p-1 border border-neutral-200"
            />
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-bold text-fi-purple uppercase tracking-wider">Active Loan</span>
              <h4 className="text-sm font-bold text-neutral-900 truncate">{selectedProduct.name}</h4>
              <p className="text-xs text-neutral-500">Plan: {selectedEMIPlan.durationMonths} Months @ 0% No-Cost EMI</p>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-2xl p-3 border border-neutral-200 flex justify-between items-center text-xs">
            <div>
              <span className="text-neutral-500 block">Upcoming Installment</span>
              <span className="text-base font-extrabold text-fi-purple">₹{selectedEMIPlan.monthlyAmount.toLocaleString('en-IN')}</span>
            </div>
            <div className="text-right">
              <span className="text-neutral-500 block">Due Date</span>
              <span className="font-bold text-neutral-800">5th of Next Month</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 p-2.5 rounded-xl">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600" />
            <span>Mutual fund collateral auto-pledged. No manual transfer needed.</span>
          </div>
        </div>
      ) : (
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
            className="mt-2 inline-flex items-center gap-1.5 px-5 py-2.5 bg-fi-purple text-white text-xs font-bold rounded-full shadow-fi-purple hover:bg-fi-purple-700 transition-all"
          >
            <span>Shop on 1Fi Marketplace</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
};
