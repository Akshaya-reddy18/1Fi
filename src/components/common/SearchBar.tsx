import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (val: string) => void;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search online stores...',
  value,
  onChange,
  className = '',
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative flex items-center">
        <Search className="absolute left-4 w-4 h-4 text-[#9CA3AF] pointer-events-none" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-white text-[#111827] placeholder-[#9CA3AF] text-sm font-normal py-3 pl-11 pr-10 rounded-full border border-[#E5E7EB] focus:outline-none focus:border-fi-purple focus:ring-2 focus:ring-fi-purple/20 transition-all shadow-sm"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-3.5 p-1 rounded-full text-[#9CA3AF] hover:text-[#4B5563] hover:bg-neutral-100 transition-colors"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
