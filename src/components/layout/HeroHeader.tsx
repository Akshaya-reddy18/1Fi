import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { ShopTabs } from './ShopTabs';

export const HeroHeader: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#12002E] via-[#24065D] to-[#450F8E] text-white pt-3 pb-8 px-4 sm:px-6 overflow-hidden rounded-b-[32px] sm:rounded-b-[40px] shadow-lg">
      {/* Glow / Light effect circles */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-fi-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl pointer-events-none" />

      {/* Hero content container */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="grid grid-cols-12 gap-2 items-center">
          
          {/* Left Text Column */}
          <div className="col-span-7 sm:col-span-7 pt-2">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-semibold tracking-wide text-white/95 mb-3 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
              <span>NO-COST EMIs</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.15] text-white">
              Shop today,<br />
              <span className="text-white">Pay later using</span><br />
              <span className="text-white">Mutual funds.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-2.5 text-[11px] sm:text-xs lg:text-sm text-purple-200/90 leading-relaxed font-normal">
              No credit score required. No interest.<br />
              Backed by your investments.
            </p>

            {/* Trust badge */}
            <div className="mt-3 flex items-center gap-1 text-[10px] sm:text-xs text-emerald-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>0% Interest • 0 Foreclosure Charges</span>
            </div>
          </div>

          {/* Right Visual Graphics Column */}
          <div className="col-span-5 sm:col-span-5 relative flex items-center justify-center">
            {/* 3D Composite illustration representing shop items backed by investments */}
            <div className="relative w-full aspect-square max-w-[200px] flex items-center justify-center">
              
              {/* Confetti & Gold Sparkles */}
              <div className="absolute -top-1 right-3 w-3 h-3 bg-yellow-400 rounded-sm rotate-45 animate-bounce" style={{ animationDuration: '3s' }} />
              <div className="absolute top-8 left-0 w-2.5 h-2.5 bg-yellow-300 rounded-full animate-pulse" />
              <div className="absolute bottom-4 right-1 w-2 h-4 bg-amber-400 rotate-12 opacity-80" />
              <div className="absolute -top-3 left-6 w-3 h-1.5 bg-amber-300 rotate-45" />

              {/* Glowing aura under bag & gadgets */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-purple-500/30 to-indigo-400/20 rounded-full blur-xl" />

              {/* Visual Showcase Collage */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* 3D Yellow Shopping Bag */}
                <div className="absolute bottom-0 w-24 sm:w-28 h-24 sm:h-28 bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 rounded-2xl shadow-xl transform rotate-3 flex items-center justify-center border-t-2 border-yellow-200">
                  <div className="w-10 h-10 border-4 border-yellow-100 rounded-full -mt-6 border-b-transparent transform -rotate-3" />
                  <div className="absolute bottom-3 text-amber-900/60 font-black text-xs tracking-tighter">1Fi</div>
                </div>

                {/* Red Sportscar & Bike vector representation */}
                <div className="absolute -top-2 -right-1 w-16 sm:w-20 h-12 bg-red-600 rounded-xl shadow-lg transform -rotate-12 flex items-center justify-center border border-red-400/50 backdrop-blur-sm overflow-hidden">
                  <div className="text-[10px] font-bold text-white uppercase tracking-tighter">Luxury</div>
                  <div className="absolute bottom-0 inset-x-0 h-2 bg-neutral-900" />
                </div>

                {/* Laptop & Gadget floating representation */}
                <div className="absolute -top-5 left-1 w-16 sm:w-20 h-12 bg-neutral-900 rounded-lg shadow-2xl transform rotate-6 border border-neutral-700 flex flex-col items-center justify-center p-1">
                  <div className="w-full h-full bg-indigo-600 rounded-sm flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white/80 animate-ping" />
                  </div>
                  <div className="w-6 h-0.5 bg-neutral-500 rounded-full mt-0.5" />
                </div>

                {/* Smartphone */}
                <div className="absolute bottom-2 -left-2 w-8 sm:w-10 h-16 bg-neutral-900 rounded-xl border border-neutral-600 shadow-2xl transform -rotate-12 flex items-center justify-center p-0.5">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <div className="text-[8px] text-white font-bold">1Fi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The 3-way Tab Navigator docked inside/at the bottom of the hero */}
        <div className="mt-5">
          <ShopTabs />
        </div>
      </div>
    </div>
  );
};
