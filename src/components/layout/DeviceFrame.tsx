import React, { useState } from 'react';
import { Smartphone, Monitor } from 'lucide-react';

interface DeviceFrameProps {
  children: React.ReactNode;
}

export const DeviceFrame: React.FC<DeviceFrameProps> = ({ children }) => {
  const [isPhoneFrame, setIsPhoneFrame] = useState(false); // Default to fluid responsive, toggleable to phone shell

  return (
    <div className="min-h-screen bg-[#F0F2F8] text-[#111827] flex flex-col items-center">
      
      {/* Top Evaluation & Viewport Toolbar for Reviewers (Hidden on small mobile screens) */}
      <header className="w-full bg-white/80 backdrop-blur-md border-b border-neutral-200/80 px-4 py-2 flex items-center justify-between z-50 text-xs shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-fi-purple text-white flex items-center justify-center font-black text-[11px] shadow-sm">
            1Fi
          </div>
          <span className="font-extrabold text-[#111827] tracking-tight hidden sm:inline">
            1Fi Shop & Marketplace
          </span>
          <span className="px-2 py-0.5 rounded-full bg-fi-purple-50 text-fi-purple text-[10.5px] font-bold border border-fi-purple-200">
            SDE Intern Assignment
          </span>
        </div>

        {/* View Mode Toggle Buttons */}
        <div className="flex items-center gap-1.5 bg-neutral-100 p-1 rounded-full border border-neutral-200">
          <button
            onClick={() => setIsPhoneFrame(false)}
            className={`flex items-center gap-1 px-3 py-1 rounded-full font-semibold transition-all ${
              !isPhoneFrame
                ? 'bg-white text-fi-purple shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Responsive</span>
          </button>
          <button
            onClick={() => setIsPhoneFrame(true)}
            className={`flex items-center gap-1 px-3 py-1 rounded-full font-semibold transition-all ${
              isPhoneFrame
                ? 'bg-white text-fi-purple shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Mobile Shell</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full flex-1 flex justify-center py-0 sm:py-4 md:py-6 px-0 sm:px-4">
        {isPhoneFrame ? (
          /* Sleek Mobile Device Mockup Frame */
          <div className="w-full max-w-[420px] bg-white rounded-[44px] shadow-2xl border-[10px] border-[#1F242D] overflow-hidden relative flex flex-col min-h-[850px] max-h-[92vh]">
            {/* Top Phone Notch / Dynamic Island */}
            <div className="bg-[#12002E] pt-2 px-6 flex justify-between items-center text-[10px] text-white/80 select-none flex-shrink-0">
              <span className="font-bold">9:52</span>
              <div className="w-20 h-4 bg-black rounded-full mx-auto -mt-1" />
              <div className="flex items-center gap-1">
                <span>5G</span>
                <div className="w-4 h-2 border border-white/60 rounded-sm p-0.5">
                  <div className="w-full h-full bg-white rounded-2xs" />
                </div>
              </div>
            </div>

            {/* Scrollable Mobile App Area */}
            <div className="flex-1 overflow-y-auto no-scrollbar bg-[#F8F9FD]">
              {children}
            </div>
          </div>
        ) : (
          /* Fluid Responsive View (Max width container with native mobile & desktop adaptation) */
          <div className="w-full max-w-2xl bg-[#F8F9FD] min-h-screen sm:rounded-3xl sm:shadow-xl sm:border sm:border-neutral-200/80 overflow-hidden relative">
            {children}
          </div>
        )}
      </main>
    </div>
  );
};
