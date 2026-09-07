import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import confetti from 'canvas-confetti';
import {
  X,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Receipt,
  AlertCircle,
} from 'lucide-react';

export const EMIProceedModal: React.FC = () => {
  const {
    isProceedModalOpen,
    closeProceedModal,
    selectedProduct,
    selectedStorage,
    selectedColor,
    currentEffectivePrice,
    selectedEMIPlan,
    isOrderPlaced,
    orderConfirmation,
    submitOrder,
    closeProductDetails,
    setActiveNavTab,
    availableMFLimit,
  } = useShop();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  if (!isProceedModalOpen || !selectedProduct || !selectedEMIPlan) {
    return null;
  }

  const handleConfirmOrder = async () => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);
      await submitOrder();

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#5E2BE9', '#10B981', '#FFB800', '#EC4899'],
      });
    } catch (err: any) {
      setSubmitError(err.message || 'Failed to submit EMI application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleViewEMIDues = () => {
    closeProceedModal();
    closeProductDetails();
    setActiveNavTab('emi-dues');
  };

  const handleContinueShopping = () => {
    closeProceedModal();
    closeProductDetails();
  };

  // Preview date for display before final server confirmation
  const today = new Date();
  const estimatedFirstEmiDate = new Date(today.setMonth(today.getMonth() + 1)).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl border border-neutral-100 max-h-[90vh] overflow-y-auto overflow-x-hidden">
        
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-5 py-4 border-b border-neutral-100 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-fi-purple-50 text-fi-purple flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-base font-extrabold text-[#111827]">
              {isOrderPlaced ? 'Order Approved & Confirmed!' : '1Fi EMI Checkout Summary'}
            </h3>
          </div>
          <button
            onClick={closeProceedModal}
            className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 space-y-5">
          {!isOrderPlaced ? (
            <>
              {/* Product Brief Summary Card */}
              <div className="bg-neutral-50 rounded-2xl p-3.5 border border-neutral-200/80 flex items-center gap-3.5">
                <img
                  src={selectedProduct.thumbnail}
                  alt={selectedProduct.name}
                  className="w-16 h-16 object-contain rounded-xl bg-white p-1 border border-neutral-200"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-fi-purple uppercase tracking-wider">
                    {selectedProduct.brand}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-neutral-900 truncate">
                    {selectedProduct.name}
                  </h4>
                  <p className="text-[11px] text-neutral-500 mt-0.5">
                    {selectedStorage?.name ? `${selectedStorage.name} • ` : ''}
                    {selectedColor?.name || ''}
                  </p>
                  <p className="text-xs font-black text-neutral-900 mt-1">
                    Total: ₹{currentEffectivePrice.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>

              {/* Chosen EMI Plan Highlights */}
              <div className="bg-fi-purple-50/60 rounded-2xl p-4 border border-fi-purple-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#111827]">Selected EMI Option</span>
                  <span className="px-2 py-0.5 rounded-full bg-fi-purple text-white text-[10px] font-bold">
                    {selectedEMIPlan.isNoCost ? '0% No-Cost EMI' : 'Low Interest EMI'}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="bg-white rounded-xl p-2.5 border border-fi-purple-100">
                    <span className="text-[10px] text-neutral-500 block">Monthly Installment</span>
                    <span className="text-base font-extrabold text-fi-purple">
                      ₹{selectedEMIPlan.monthlyAmount.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-neutral-500"> / month</span>
                  </div>
                  <div className="bg-white rounded-xl p-2.5 border border-fi-purple-100">
                    <span className="text-[10px] text-neutral-500 block">Tenure</span>
                    <span className="text-base font-extrabold text-neutral-900">
                      {selectedEMIPlan.durationMonths} Months
                    </span>
                    <span className="text-[10px] text-emerald-600 block font-semibold">Zero processing fee</span>
                  </div>
                </div>

                {/* Repayment Breakdown */}
                <div className="space-y-1.5 pt-2 border-t border-fi-purple-100 text-xs">
                  <div className="flex justify-between text-neutral-600">
                    <span>Principal Amount:</span>
                    <span className="font-semibold text-neutral-900">₹{currentEffectivePrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Interest ({selectedEMIPlan.isNoCost ? '0% No-Cost' : `${(selectedEMIPlan.interestRate * 100).toFixed(0)}%`}):</span>
                    <span className="font-semibold text-emerald-600">
                      {selectedEMIPlan.isNoCost ? '₹0 (Waived)' : `₹${(selectedEMIPlan.totalAmount - currentEffectivePrice).toLocaleString('en-IN')}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>First EMI Due Date:</span>
                    <span className="font-semibold text-neutral-900">{estimatedFirstEmiDate}</span>
                  </div>
                </div>
              </div>

              {/* Mutual Fund Collateral Info */}
              <div className="rounded-2xl p-3.5 bg-emerald-50/70 border border-emerald-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-emerald-950">
                  <p className="font-bold text-emerald-900">100% Backed by Mutual Funds</p>
                  <p className="text-[11px] text-emerald-800/90 mt-0.5">
                    ₹{currentEffectivePrice.toLocaleString('en-IN')} will be pledged from your portfolio limit (₹{availableMFLimit.toLocaleString('en-IN')} available). Your funds continue to generate compounding market returns!
                  </p>
                </div>
              </div>

              {submitError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Terms & Action button */}
              <div className="space-y-3 pt-2">
                <button
                  disabled={isSubmitting}
                  onClick={handleConfirmOrder}
                  className="w-full py-3.5 px-4 rounded-2xl bg-fi-purple hover:bg-fi-purple-700 active:scale-[0.99] text-white text-sm font-bold shadow-fi-purple transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Securing Mutual Fund Pledge...</span>
                    </div>
                  ) : (
                    <>
                      <span>Confirm & Activate EMI Plan</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-[10px] text-center text-neutral-400">
                  By continuing, you authorize 1Fi to set up monthly auto-debit against your mutual fund collateral.
                </p>
              </div>
            </>
          ) : (
            /* Order Success State from API Response */
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-neutral-900">
                  Congratulations!
                </h3>
                <p className="text-xs text-neutral-600 mt-1 max-w-xs mx-auto">
                  Your order for <strong>{selectedProduct.name}</strong> has been confirmed on a <strong>{selectedEMIPlan.durationMonths}-month No-Cost EMI</strong> plan!
                </p>
              </div>

              {/* Order receipt details from API confirmation */}
              <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200 text-left space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Order Reference:</span>
                  <span className="font-mono font-bold text-neutral-800">
                    {orderConfirmation?.orderId || `1FI-${Math.floor(100000 + Math.random() * 900000)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Monthly EMI:</span>
                  <span className="font-bold text-fi-purple">₹{selectedEMIPlan.monthlyAmount.toLocaleString('en-IN')} / mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">First Auto-Debit:</span>
                  <span className="font-semibold text-neutral-800">
                    {orderConfirmation?.firstEmiDate || estimatedFirstEmiDate}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Estimated Delivery:</span>
                  <span className="font-semibold text-emerald-600">{selectedProduct.deliveryDays || 'Within 2-3 Business Days'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleViewEMIDues}
                  className="w-full py-3 px-4 rounded-xl bg-fi-purple text-white text-xs font-bold shadow-fi-purple hover:bg-fi-purple-700 transition-all flex items-center justify-center gap-2"
                >
                  <Receipt className="w-4 h-4" />
                  <span>View in EMI Dues</span>
                </button>
                <button
                  onClick={handleContinueShopping}
                  className="w-full py-2.5 px-4 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-semibold transition-all"
                >
                  Continue Browsing Marketplace
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
