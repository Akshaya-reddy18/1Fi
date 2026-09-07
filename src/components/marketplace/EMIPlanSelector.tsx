import React from 'react';
import { useShop } from '../../context/ShopContext';
import { CheckCircle2, Circle, Sparkles, Shield, TrendingDown, RotateCcw, ArrowRight } from 'lucide-react';

export const EMIPlanSelector: React.FC = () => {
  const {
    availableEMIPlans,
    selectedEMIPlan,
    setSelectedEMIPlan,
    isLoadingEMIPlans,
    emiPlansError,
    refetchEMIPlans,
    openProceedModal,
  } = useShop();

  if (isLoadingEMIPlans) {
    return (
      <div className="py-4 space-y-3">
        <div className="h-5 bg-neutral-200 rounded w-1/3 animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-24 bg-neutral-100 rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (emiPlansError) {
    return (
      <div className="py-4 px-3 bg-red-50 rounded-2xl border border-red-200 text-center space-y-2">
        <p className="text-xs text-red-600 font-semibold">{emiPlansError}</p>
        <button
          onClick={refetchEMIPlans}
          className="inline-flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded-full text-xs font-bold"
        >
          <RotateCcw className="w-3 h-3" /> Retry Loading Plans
        </button>
      </div>
    );
  }

  return (
    <div className="py-3 space-y-3.5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-[#111827] flex items-center gap-1.5">
            <span>Select 1Fi EMI Plan</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
              0% Interest Options
            </span>
          </h3>
          <p className="text-xs text-[#6B7280] mt-0.5">
            Backed by your Mutual Funds • No Credit Score Check
          </p>
        </div>
      </div>

      {/* Plans List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {availableEMIPlans.map((plan) => {
          const isSelected = selectedEMIPlan?.id === plan.id;

          return (
            <div
              key={plan.id}
              onClick={() => setSelectedEMIPlan(plan)}
              className={`relative rounded-2xl p-3.5 border transition-all duration-200 cursor-pointer select-none flex flex-col justify-between ${
                isSelected
                  ? 'bg-fi-purple-50/80 border-fi-purple shadow-md ring-2 ring-fi-purple/20'
                  : 'bg-white border-[#E5E7EB] hover:border-fi-purple/40 hover:bg-neutral-50/50'
              }`}
            >
              {/* Top Row: Duration & Selection Radio */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-extrabold text-[#111827]">
                      {plan.durationMonths} Months
                    </span>
                    {plan.isNoCost && (
                      <span className="px-1.5 py-0.5 rounded bg-fi-purple text-white text-[9.5px] font-bold tracking-tight flex items-center gap-0.5">
                        <Sparkles className="w-2.5 h-2.5 text-yellow-300" />
                        No-Cost
                      </span>
                    )}
                    {plan.popular && (
                      <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 text-[9.5px] font-bold">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-lg font-black text-fi-purple">
                      ₹{plan.monthlyAmount.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-neutral-500 font-medium">/ month</span>
                  </div>
                </div>

                {/* Radio Indicator */}
                <div className="mt-0.5">
                  {isSelected ? (
                    <CheckCircle2 className="w-5 h-5 text-fi-purple fill-fi-purple-100" />
                  ) : (
                    <Circle className="w-5 h-5 text-neutral-300" />
                  )}
                </div>
              </div>

              {/* Bottom Row: Breakdown & Savings */}
              <div className="mt-3 pt-2.5 border-t border-neutral-200/70 flex items-center justify-between text-[11px] text-[#6B7280]">
                <span>
                  Total: <strong className="text-neutral-800">₹{plan.totalAmount.toLocaleString('en-IN')}</strong>
                </span>
                <span className="font-semibold text-emerald-600 flex items-center gap-0.5">
                  {plan.isNoCost ? 'Interest: ₹0' : `Interest: ${(plan.interestRate * 100).toFixed(0)}% p.a.`}
                </span>
              </div>

              {/* Savings callout if applicable */}
              {plan.savingsText && (
                <div className="mt-1.5 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                  <TrendingDown className="w-3 h-3 text-emerald-600" />
                  <span>{plan.savingsText}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 1Fi Collateral Info Footer */}
      <div className="bg-[#F3F0FF] rounded-2xl p-3 border border-fi-purple-200 flex items-start gap-2.5">
        <Shield className="w-4 h-4 text-fi-purple flex-shrink-0 mt-0.5" />
        <div className="text-xs text-[#42207A] leading-snug">
          <p className="font-bold text-fi-purple">1Fi Mutual Fund Backed Guarantee</p>
          <p className="text-[11px] text-[#553C9A] mt-0.5">
            Your mutual funds will stay invested and keep compounding returns while serving as loan collateral. Zero paperwork!
          </p>
        </div>
      </div>

      {/* Primary CTA Button directly below EMI Plans */}
      <div className="pt-2">
        <button
          disabled={!selectedEMIPlan}
          onClick={openProceedModal}
          className={`w-full py-3.5 px-5 rounded-2xl font-extrabold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
            selectedEMIPlan
              ? 'bg-fi-purple hover:bg-fi-purple-700 active:scale-[0.99] text-white shadow-fi-purple cursor-pointer'
              : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
          }`}
        >
          <span>
            {selectedEMIPlan
              ? `Proceed with ${selectedEMIPlan.durationMonths} Months EMI (₹${selectedEMIPlan.monthlyAmount.toLocaleString('en-IN')}/mo)`
              : 'Select an EMI Plan to Proceed'}
          </span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
