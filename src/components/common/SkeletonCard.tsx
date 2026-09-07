import React from 'react';

interface SkeletonProps {
  type?: 'brand' | 'product' | 'details' | 'store';
  count?: number;
}

export const SkeletonCard: React.FC<SkeletonProps> = ({ type = 'product', count = 4 }) => {
  const items = Array.from({ length: count });

  if (type === 'brand' || type === 'store') {
    return (
      <div className="space-y-3.5">
        {items.map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-4 border border-[#EAEBF0] shadow-fi-card flex items-center gap-4 animate-pulse"
          >
            <div className="w-16 h-16 bg-neutral-200 rounded-xl flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-neutral-200 rounded w-2/4" />
              <div className="h-3 bg-neutral-100 rounded w-3/4" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === 'details') {
    return (
      <div className="p-4 space-y-4 animate-pulse">
        <div className="w-full h-72 bg-neutral-200 rounded-3xl" />
        <div className="space-y-2">
          <div className="h-6 bg-neutral-200 rounded w-3/4" />
          <div className="h-4 bg-neutral-100 rounded w-1/2" />
        </div>
        <div className="h-12 bg-neutral-200 rounded-2xl w-full" />
        <div className="grid grid-cols-2 gap-3">
          <div className="h-20 bg-neutral-100 rounded-2xl" />
          <div className="h-20 bg-neutral-100 rounded-2xl" />
        </div>
      </div>
    );
  }

  // Product cards skeleton
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
      {items.map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl p-3 sm:p-4 border border-[#EAEBF0] shadow-fi-card flex flex-col animate-pulse"
        >
          <div className="w-full aspect-square bg-neutral-200 rounded-xl mb-3" />
          <div className="h-3.5 bg-neutral-200 rounded w-1/3 mb-2" />
          <div className="h-4 bg-neutral-200 rounded w-4/5 mb-2" />
          <div className="h-3 bg-neutral-100 rounded w-full mb-3" />
          <div className="mt-auto space-y-2">
            <div className="h-4 bg-neutral-200 rounded w-2/3" />
            <div className="h-7 bg-neutral-100 rounded-xl w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};
