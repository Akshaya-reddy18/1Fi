import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ShieldCheck, CheckCircle2, PieChart } from 'lucide-react';

export const LimitView: React.FC = () => {
  const { availableMFLimit, totalMFLimit } = useShop();

  return (
    <div className="space-y-4 pt-4 pb-24 animate-in fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#111827]">Credit Limit & Investments</h2>
      </div>

      <div className="bg-white rounded-3xl p-5 border border-[#EAEBF0] shadow-fi-card space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-neutral-500">1Fi Credit Line</span>
            <h3 className="text-2xl font-black text-fi-purple">₹{availableMFLimit.toLocaleString('en-IN')}</h3>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-fi-purple-50 text-fi-purple flex items-center justify-center">
            <PieChart className="w-5 h-5" />
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-1">
          <div className="w-full h-2.5 bg-neutral-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-fi-purple to-indigo-600 rounded-full" style={{ width: '83%' }} />
          </div>
          <div className="flex justify-between text-[11px] text-neutral-500 pt-1">
            <span>Available: ₹{availableMFLimit.toLocaleString('en-IN')}</span>
            <span>Total Limit: ₹{totalMFLimit.toLocaleString('en-IN')}</span>
          </div>
        </div>

        <div className="pt-2 border-t border-neutral-100 space-y-2 text-xs">
          <div className="flex items-center gap-2 text-emerald-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Backed by CAMS & KFintech Mutual Funds</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-600">
            <CheckCircle2 className="w-4 h-4 text-fi-purple" />
            <span>Zero impact on your mutual fund SIPs & compounding growth</span>
          </div>
        </div>
      </div>
    </div>
  );
};
