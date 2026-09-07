import React from 'react';
import { AlertCircle, RotateCcw } from 'lucide-react';

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Unable to load marketplace',
  message = 'Something went wrong while retrieving data. Please check your network or try again.',
  onRetry,
}) => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-red-100 shadow-fi-card text-center my-6 max-w-md mx-auto">
      <div className="w-14 h-14 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-200">
        <AlertCircle className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-1.5">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-6">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-fi-purple hover:bg-fi-purple-700 active:scale-95 text-white text-sm font-semibold rounded-full shadow-fi-purple transition-all"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Try Again</span>
        </button>
      )}
    </div>
  );
};
