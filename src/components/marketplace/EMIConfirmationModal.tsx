import React from 'react';
import { useShop } from '../../context/ShopContext';
import { CheckCircle2, X } from 'lucide-react';

export const EMIConfirmationModal: React.FC = () => {
  const {
    isProceedModalOpen,
    closeProceedModal,
    selectedProduct,
    selectedEMIPlan,
  } = useShop();

  if (!isProceedModalOpen || !selectedProduct || !selectedEMIPlan) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-sm rounded-3xl p-6 shadow-2xl border border-neutral-100 text-center space-y-4 animate-in zoom-in-95 duration-150 relative">
        
        {/* Close icon at top right */}
        <button
          onClick={closeProceedModal}
          className="absolute top-4 right-4 p-1.5 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* 1Fi Purple Success Icon Badge */}
        <div className="w-14 h-14 bg-fi-purple-50 text-fi-purple rounded-full flex items-center justify-center mx-auto border border-fi-purple-100 shadow-sm">
          <CheckCircle2 className="w-8 h-8 text-fi-purple" />
        </div>

        {/* Dynamic Confirmation Message */}
        <div className="space-y-1.5">
          <h3 className="text-lg font-extrabold text-[#111827]">
            You're all set!
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            You've selected the{' '}
            <strong className="text-fi-purple font-bold">
              {selectedEMIPlan.durationMonths} Months EMI plan
            </strong>{' '}
            at{' '}
            <strong className="text-[#111827] font-extrabold">
              ₹{selectedEMIPlan.monthlyAmount.toLocaleString('en-IN')}/month
            </strong>
            .
          </p>
          <p className="text-xs text-neutral-500 pt-0.5">
            Your selected EMI plan is ready to proceed.
          </p>
        </div>

        {/* Product preview tag */}
        <div className="bg-neutral-50 rounded-2xl p-2.5 border border-neutral-200/70 flex items-center gap-2.5 text-left">
          <img
            src={selectedProduct.thumbnail}
            alt={selectedProduct.name}
            className="w-10 h-10 object-contain rounded-lg bg-white p-0.5 border border-neutral-200 flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <span className="text-[9.5px] font-bold text-fi-purple uppercase tracking-wider block">
              {selectedProduct.brand}
            </span>
            <span className="text-xs font-semibold text-neutral-800 truncate block">
              {selectedProduct.name}
            </span>
          </div>
        </div>

        {/* Simple "Done" CTA Action */}
        <button
          onClick={closeProceedModal}
          className="w-full py-3 px-4 rounded-2xl bg-fi-purple hover:bg-fi-purple-700 active:scale-98 text-white text-xs font-bold shadow-fi-purple transition-all flex items-center justify-center gap-1.5"
        >
          <span>Done</span>
          
        </button>
      </div>
    </div>
  );
};
