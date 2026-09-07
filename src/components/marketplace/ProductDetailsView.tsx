import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { VariantSelector } from './VariantSelector';
import { EMIPlanSelector } from './EMIPlanSelector';
import { EMIConfirmationModal } from './EMIConfirmationModal';
import { SkeletonCard } from '../common/SkeletonCard';
import { ErrorState } from '../common/ErrorState';
import {
  ArrowLeft,
  Share2,
  Heart,
  Star,
  ShieldCheck,
  Truck,
  Sparkles,
  CheckCircle,
} from 'lucide-react';

export const ProductDetailsView: React.FC = () => {
  const {
    selectedProduct,
    selectedProductId,
    isLoadingProductDetails,
    productDetailsError,
    openProductDetailsById,
    closeProductDetails,
    currentEffectivePrice,
    selectedEMIPlan,
    openProceedModal,
  } = useShop();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState<'emi' | 'specs' | 'highlights'>('emi');

  if (isLoadingProductDetails) {
    return (
      <div className="min-h-screen bg-[#F8F9FD] pb-32 pt-2">
        <div className="sticky top-0 bg-white/95 px-4 py-3 border-b flex items-center justify-between z-30">
          <button onClick={closeProductDetails} className="flex items-center gap-1.5 text-xs font-bold text-neutral-700">
            <ArrowLeft className="w-5 h-5" /> Back
          </button>
        </div>
        <SkeletonCard type="details" />
      </div>
    );
  }

  if (productDetailsError) {
    return (
      <div className="min-h-screen bg-[#F8F9FD] p-4">
        <button onClick={closeProductDetails} className="flex items-center gap-1.5 text-xs font-bold text-neutral-700 mb-4">
          <ArrowLeft className="w-5 h-5" /> Back to Marketplace
        </button>
        <ErrorState
          title="Failed to Load Product"
          message={productDetailsError}
          onRetry={() => selectedProductId && openProductDetailsById(selectedProductId)}
        />
      </div>
    );
  }

  if (!selectedProduct) return null;

  const images = selectedProduct.images?.length > 0 ? selectedProduct.images : [selectedProduct.thumbnail];
  const lowestEmi = Math.round(currentEffectivePrice / 12);

  return (
    <div className="min-h-screen bg-[#F8F9FD] pb-32 pt-2 animate-in fade-in duration-200">
      
      {/* Top Navigation Bar */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-md px-4 py-3 border-b border-neutral-100 flex items-center justify-between z-30 shadow-sm">
        <button
          onClick={closeProductDetails}
          className="flex items-center gap-1.5 p-1.5 -ml-1.5 rounded-full text-neutral-700 hover:bg-neutral-100 active:scale-95 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5 text-neutral-800" />
          <span className="text-xs font-bold text-neutral-700">Back</span>
        </button>

        <div className="flex items-center gap-1">
          <span className="text-xs font-bold uppercase tracking-wider text-fi-purple bg-fi-purple-50 px-2.5 py-1 rounded-full border border-fi-purple-100">
            {selectedProduct.brand}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="p-2 rounded-full text-neutral-600 hover:bg-neutral-100 transition-colors"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isLiked ? 'text-red-500 fill-red-500' : 'text-neutral-500'
              }`}
            />
          </button>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: selectedProduct.name,
                  text: `Check out ${selectedProduct.name} on 1Fi with No-Cost EMIs backed by Mutual Funds!`,
                  url: window.location.href,
                }).catch(() => {});
              }
            }}
            className="p-2 rounded-full text-neutral-600 hover:bg-neutral-100 transition-colors"
          >
            <Share2 className="w-5 h-5 text-neutral-500" />
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pt-3 space-y-4">
        
        {/* Main Image & Gallery */}
        <div className="bg-white rounded-3xl p-4 border border-[#EAEBF0] shadow-fi-card">
          <div className="relative w-full aspect-square max-h-80 mx-auto flex items-center justify-center p-4">
            <img
              src={images[activeImageIndex] || selectedProduct.thumbnail}
              alt={selectedProduct.name}
              className="max-h-full max-w-full object-contain mix-blend-multiply transition-all duration-300"
            />
            {selectedProduct.badge && (
              <span className="absolute top-2 left-2 px-3 py-1 rounded-full bg-fi-purple text-white text-xs font-bold tracking-tight shadow-md">
                {selectedProduct.badge}
              </span>
            )}
          </div>

          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <div className="flex items-center justify-center gap-2.5 mt-3 pt-3 border-t border-neutral-100">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-14 h-14 rounded-xl p-1 bg-neutral-50 border-2 overflow-hidden transition-all ${
                    activeImageIndex === idx
                      ? 'border-fi-purple ring-2 ring-fi-purple/20'
                      : 'border-neutral-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-contain mix-blend-multiply" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Title, Rating, and Price Info */}
        <div className="bg-white rounded-3xl p-5 border border-[#EAEBF0] shadow-fi-card space-y-3">
          
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-fi-purple">
              {selectedProduct.brand} • {selectedProduct.partnerStore || 'Official 1Fi Partner'}
            </span>
            <div className="flex items-center gap-1 text-xs font-bold text-neutral-800 bg-amber-50 px-2 py-1 rounded-lg border border-amber-200">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>{selectedProduct.rating}</span>
              <span className="text-neutral-400 font-normal">({selectedProduct.reviewCount})</span>
            </div>
          </div>

          <h1 className="text-lg sm:text-xl font-extrabold text-[#111827] leading-snug">
            {selectedProduct.name}
          </h1>

          {/* Pricing Block */}
          <div className="pt-1 flex items-baseline gap-2 flex-wrap">
            <span className="text-2xl sm:text-3xl font-black text-[#111827]">
              ₹{currentEffectivePrice.toLocaleString('en-IN')}
            </span>
            {selectedProduct.originalPrice && (
              <span className="text-sm text-[#9CA3AF] line-through font-normal">
                ₹{(selectedProduct.originalPrice + (currentEffectivePrice - selectedProduct.basePrice)).toLocaleString('en-IN')}
              </span>
            )}
            {selectedProduct.discountPercentage && (
              <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                {selectedProduct.discountPercentage}% OFF
              </span>
            )}
          </div>

          {/* 1Fi Benefit Banner */}
          <div className="rounded-2xl p-3.5 bg-gradient-to-r from-fi-purple-50 via-purple-50/50 to-indigo-50 border border-fi-purple-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-fi-purple text-white flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-fi-purple">
                  No-Cost EMI from ₹{lowestEmi.toLocaleString('en-IN')}/mo
                </p>
                <p className="text-[10px] text-neutral-600">
                  Pay via Mutual Funds • 0 Foreclosure Fees
                </p>
              </div>
            </div>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
              0% Interest
            </span>
          </div>

          {/* Delivery & Trust highlights */}
          <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-neutral-600 border-t border-neutral-100">
            <div className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-fi-purple" />
              <span>{selectedProduct.deliveryDays || 'Free Express Delivery'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>1 Year Brand Warranty</span>
            </div>
          </div>
        </div>

        {/* Variant Selection Component */}
        <div className="bg-white rounded-3xl p-5 border border-[#EAEBF0] shadow-fi-card">
          <VariantSelector
            storageVariants={selectedProduct.variants?.storage}
            colorVariants={selectedProduct.variants?.colors}
          />
        </div>

        {/* Details Navigation Tabs (EMI Plans | Specifications | Highlights) */}
        <div className="bg-white rounded-3xl p-5 border border-[#EAEBF0] shadow-fi-card space-y-4">
          
          <div className="flex items-center border-b border-neutral-200 pb-2 gap-4">
            <button
              onClick={() => setActiveTab('emi')}
              className={`text-xs sm:text-sm font-bold pb-2 relative transition-colors ${
                activeTab === 'emi' ? 'text-fi-purple' : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              <span>1Fi EMI Plans</span>
              {activeTab === 'emi' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-fi-purple rounded-full" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('highlights')}
              className={`text-xs sm:text-sm font-bold pb-2 relative transition-colors ${
                activeTab === 'highlights' ? 'text-fi-purple' : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              <span>Key Highlights</span>
              {activeTab === 'highlights' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-fi-purple rounded-full" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('specs')}
              className={`text-xs sm:text-sm font-bold pb-2 relative transition-colors ${
                activeTab === 'specs' ? 'text-fi-purple' : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              <span>Specifications</span>
              {activeTab === 'specs' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-fi-purple rounded-full" />
              )}
            </button>
          </div>

          {/* Tab 1: EMI Plans & In-line Proceed CTA */}
          {activeTab === 'emi' && <EMIPlanSelector />}

          {/* Tab 2: Key Highlights */}
          {activeTab === 'highlights' && (
            <div className="space-y-3 py-2">
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {selectedProduct.description}
              </p>
              <div className="space-y-2 pt-2">
                {selectedProduct.highlights?.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                    <CheckCircle className="w-4 h-4 text-fi-purple flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Technical Specifications */}
          {activeTab === 'specs' && (
            <div className="space-y-4 py-2">
              {selectedProduct.specifications?.map((specGroup, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                    {specGroup.category}
                  </h4>
                  <div className="bg-neutral-50 rounded-2xl p-3 divide-y divide-neutral-200/60 border border-neutral-200/60 text-xs">
                    {Object.entries(specGroup.items).map(([key, val]) => (
                      <div key={key} className="py-2 flex justify-between gap-4">
                        <span className="text-neutral-500 font-medium w-2/5">{key}</span>
                        <span className="text-neutral-900 font-semibold text-right flex-1">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Sticky Bottom Bar for Proceed CTA */}
      <div className="fixed bottom-0 inset-x-0 bg-white border-t border-[#EEF0F6] shadow-2xl p-4 z-40 max-w-2xl mx-auto rounded-t-3xl">
        <div className="flex items-center justify-between gap-3">
          
          {/* Selected Plan Snapshot */}
          <div className="min-w-0">
            {selectedEMIPlan ? (
              <div>
                <span className="text-[10px] text-neutral-500 font-medium block">
                  {selectedEMIPlan.durationMonths} Months Plan
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg sm:text-xl font-black text-fi-purple">
                    ₹{selectedEMIPlan.monthlyAmount.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-neutral-500 font-medium">/mo</span>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-[10px] text-neutral-400 block">Select a plan</span>
                <span className="text-base font-bold text-neutral-800">
                  ₹{currentEffectivePrice.toLocaleString('en-IN')}
                </span>
              </div>
            )}
          </div>

          {/* Proceed Button */}
          <button
            disabled={!selectedEMIPlan}
            onClick={openProceedModal}
            className={`px-6 sm:px-8 py-3.5 rounded-2xl font-extrabold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
              selectedEMIPlan
                ? 'bg-fi-purple text-white shadow-fi-purple hover:bg-fi-purple-700 active:scale-95'
                : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
            }`}
          >
            <span>Proceed with EMI</span>
            <Sparkles className="w-4 h-4 text-yellow-300" />
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      <EMIConfirmationModal />
    </div>
  );
};
