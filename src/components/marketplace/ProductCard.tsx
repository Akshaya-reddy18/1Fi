import React from 'react';
import { Product } from '../../types/product';
import { useShop } from '../../context/ShopContext';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { openProductDetails } = useShop();

  // Lowest 12-month No-Cost EMI monthly price
  const lowestMonthlyEmi = Math.round(product.basePrice / 12);

  return (
    <div
      onClick={() => openProductDetails(product)}
      className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-[#EAEBF0] shadow-fi-card hover:shadow-fi-card-hover hover:border-fi-purple-300 transition-all duration-200 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
    >
      {/* Top badges */}
      <div className="relative w-full aspect-square bg-[#F9FAFB] rounded-xl sm:rounded-2xl overflow-hidden mb-3 flex items-center justify-center p-2">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-fi-purple text-white text-[10px] font-bold tracking-tight shadow-sm">
            {product.badge}
          </span>
        )}

        {/* Partner Store Tag */}
        {product.partnerStore && (
          <span className="absolute bottom-2 left-2 right-2 px-1.5 py-0.5 rounded-md bg-white/90 backdrop-blur-sm text-[9px] font-medium text-neutral-600 truncate border border-neutral-100">
            {product.partnerStore}
          </span>
        )}
      </div>

      {/* Product Information */}
      <div className="flex-1 flex flex-col">
        {/* Brand */}
        <div className="flex items-center justify-between gap-1 mb-1">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-fi-purple">
            {product.brand}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-xs sm:text-sm font-bold text-[#111827] line-clamp-2 leading-snug group-hover:text-fi-purple transition-colors mb-2">
          {product.name}
        </h3>

        {/* Price & Discount */}
        <div className="mt-auto pt-1">
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className="text-sm sm:text-base font-extrabold text-[#111827]">
              ₹{product.basePrice.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-[11px] text-[#9CA3AF] line-through font-normal">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
            {product.discountPercentage && (
              <span className="text-[10px] font-bold text-emerald-600">
                {product.discountPercentage}% OFF
              </span>
            )}
          </div>

          {/* 1Fi No-Cost EMI Highlight */}
          <div className="mt-2 py-1 px-2 rounded-lg bg-fi-purple-50 border border-fi-purple-100 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-fi-purple flex-shrink-0" />
              <span className="text-[10.5px] font-bold text-fi-purple truncate">
                ₹{lowestMonthlyEmi.toLocaleString('en-IN')}/mo
              </span>
            </div>
            <span className="text-[9px] font-semibold text-emerald-700 bg-emerald-100/80 px-1 rounded">
              0% Interest
            </span>
          </div>

          {/* Action CTA Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              openProductDetails(product);
            }}
            className="w-full mt-2.5 py-2 px-3 rounded-xl bg-neutral-50 hover:bg-fi-purple hover:text-white group-hover:bg-fi-purple group-hover:text-white text-[#111827] text-xs font-bold transition-all duration-150 flex items-center justify-center gap-1 border border-neutral-200 group-hover:border-fi-purple shadow-sm"
          >
            <span>View EMI Plans</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
