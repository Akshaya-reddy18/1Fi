import React from 'react';
import { ProductVariant } from '../../types/product';
import { useShop } from '../../context/ShopContext';
import { Check } from 'lucide-react';

interface VariantSelectorProps {
  storageVariants?: ProductVariant[];
  colorVariants?: ProductVariant[];
}

export const VariantSelector: React.FC<VariantSelectorProps> = ({
  storageVariants,
  colorVariants,
}) => {
  const { selectedStorage, setSelectedStorage, selectedColor, setSelectedColor } = useShop();

  return (
    <div className="space-y-4 py-2">
      {/* Storage / Configuration Variants */}
      {storageVariants && storageVariants.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#111827] uppercase tracking-wider">
              Select Configuration / Storage
            </span>
            {selectedStorage && (
              <span className="text-xs font-semibold text-fi-purple">
                {selectedStorage.name}
              </span>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {storageVariants.map((variant) => {
              const isSelected = selectedStorage?.id === variant.id;
              return (
                <button
                  key={variant.id}
                  onClick={() => setSelectedStorage(variant)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border text-center transition-all duration-150 flex flex-col items-center justify-center gap-0.5 ${
                    isSelected
                      ? 'border-fi-purple bg-fi-purple-50 text-fi-purple ring-2 ring-fi-purple/20'
                      : 'border-[#E5E7EB] bg-white text-[#374151] hover:border-fi-purple/40'
                  }`}
                >
                  <span>{variant.name}</span>
                  {variant.priceDelta !== 0 && (
                    <span className="text-[10px] text-[#6B7280]">
                      {variant.priceDelta > 0
                        ? `+₹${variant.priceDelta.toLocaleString('en-IN')}`
                        : `-₹${Math.abs(variant.priceDelta).toLocaleString('en-IN')}`}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Color Variants */}
      {colorVariants && colorVariants.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#111827] uppercase tracking-wider">
              Color
            </span>
            {selectedColor && (
              <span className="text-xs font-semibold text-fi-purple">
                {selectedColor.name}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2.5 flex-wrap">
            {colorVariants.map((variant) => {
              const isSelected = selectedColor?.id === variant.id;
              return (
                <button
                  key={variant.id}
                  onClick={() => setSelectedColor(variant)}
                  className={`flex items-center gap-2 py-1.5 px-3 rounded-full text-xs font-medium border transition-all duration-150 ${
                    isSelected
                      ? 'border-fi-purple bg-fi-purple-50 text-fi-purple ring-2 ring-fi-purple/20 font-bold'
                      : 'border-[#E5E7EB] bg-white text-[#4B5563] hover:border-fi-purple/40'
                  }`}
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-sm flex items-center justify-center"
                    style={{ backgroundColor: variant.value }}
                  >
                    {isSelected && <Check className="w-2.5 h-2.5 text-white filter drop-shadow" />}
                  </span>
                  <span>{variant.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
