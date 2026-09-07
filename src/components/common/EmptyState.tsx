import React from 'react';
import { ShoppingBag, X } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  message?: string;
  onClearFilters?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No products found',
  message = 'We could not find any products matching your search criteria. Try checking for typos or clear your filters.',
  onClearFilters,
}) => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-[#EAEBF0] shadow-fi-card text-center my-6 max-w-md mx-auto">
      <div className="w-16 h-16 bg-purple-50 text-fi-purple rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-100">
        <ShoppingBag className="w-8 h-8 opacity-80" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-1.5">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-6">{message}</p>
      {onClearFilters && (
        <button
          onClick={onClearFilters}
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-gray-700 text-sm font-semibold rounded-full transition-all"
        >
          <X className="w-4 h-4" />
          <span>Clear Filters</span>
        </button>
      )}
    </div>
  );
};
