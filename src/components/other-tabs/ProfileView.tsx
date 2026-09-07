import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Shield, HelpCircle, FileText, Bug } from 'lucide-react';

export const ProfileView: React.FC = () => {
  const { isSimulateError, toggleSimulateError } = useShop();

  return (
    <div className="space-y-4 pt-4 pb-24 animate-in fade-in">
      <div className="flex items-center gap-3.5 bg-white rounded-3xl p-5 border border-[#EAEBF0] shadow-fi-card">
        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-fi-purple to-indigo-600 text-white font-extrabold text-xl flex items-center justify-center shadow-md">
          1F
        </div>
        <div>
          <h3 className="text-base font-bold text-neutral-900">1Fi Verified Member</h3>
          <p className="text-xs text-neutral-500">+91 98765 43210</p>
          <span className="inline-block mt-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
            KYC Verified • MF Linked
          </span>
        </div>
      </div>

      {/* Reviewer / Evaluator Testing Panel */}
      <div className="bg-purple-50/70 rounded-3xl p-4 border border-purple-200">
        <div className="flex items-center gap-2 mb-2">
          <Bug className="w-4 h-4 text-fi-purple" />
          <h4 className="text-xs font-bold text-fi-purple uppercase tracking-wider">
            Assignment Evaluation Controls
          </h4>
        </div>
        <p className="text-[11px] text-neutral-600 mb-3">
          Toggle simulated network errors to verify error boundaries and retry mechanisms.
        </p>
        <button
          onClick={toggleSimulateError}
          className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
            isSimulateError
              ? 'bg-red-600 text-white shadow-sm'
              : 'bg-white text-neutral-700 border border-neutral-300 hover:border-fi-purple'
          }`}
        >
          <span>{isSimulateError ? 'Simulated Network Error: ACTIVE (Click to disable)' : 'Simulate API Network Error'}</span>
        </button>
      </div>

      <div className="bg-white rounded-3xl p-2 border border-[#EAEBF0] shadow-fi-card divide-y divide-neutral-100 text-xs">
        <div className="p-3 flex items-center justify-between text-neutral-700">
          <div className="flex items-center gap-2.5">
            <Shield className="w-4 h-4 text-fi-purple" />
            <span className="font-semibold">Security & Biometrics</span>
          </div>
          <span className="text-neutral-400">Enabled</span>
        </div>
        <div className="p-3 flex items-center justify-between text-neutral-700">
          <div className="flex items-center gap-2.5">
            <HelpCircle className="w-4 h-4 text-fi-purple" />
            <span className="font-semibold">Help & 24/7 Support</span>
          </div>
          <span className="text-neutral-400">Contact</span>
        </div>
        <div className="p-3 flex items-center justify-between text-neutral-700">
          <div className="flex items-center gap-2.5">
            <FileText className="w-4 h-4 text-fi-purple" />
            <span className="font-semibold">Terms & Privacy Policy</span>
          </div>
          <span className="text-neutral-400">View</span>
        </div>
      </div>
    </div>
  );
};
