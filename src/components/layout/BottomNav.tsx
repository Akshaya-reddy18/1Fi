import React from 'react';
import { Home, Store, ReceiptText, TrendingUp, User } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { MainNavTab } from '../../types/shop';

export const BottomNav: React.FC = () => {
  const { activeNavTab, setActiveNavTab, closeProductDetails } = useShop();

  const navItems: { id: MainNavTab; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'shop', label: 'Shop', icon: Store },
    { id: 'emi-dues', label: 'EMI Dues', icon: ReceiptText },
    { id: 'limit', label: 'Limit', icon: TrendingUp },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const handleTabSelect = (id: MainNavTab) => {
    if (id === 'shop') {
      closeProductDetails();
    }
    setActiveNavTab(id);
  };

  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-[#EEF0F6] shadow-fi-sheet z-40 max-w-md mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-t-3xl">
      <div className="flex items-center justify-around px-2 py-1.5 sm:py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeNavTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleTabSelect(item.id)}
              className="relative flex flex-col items-center justify-center py-1 px-3 min-w-[56px] transition-colors group focus:outline-none"
            >
              {/* Active top indicator bar (matching screenshot active tab treatment) */}
              {isActive && (
                <span className="absolute -top-1.5 sm:-top-2 w-7 h-1 bg-fi-purple rounded-full" />
              )}

              {/* Icon */}
              <div
                className={`p-1 transition-transform group-hover:scale-105 ${
                  isActive ? 'text-fi-purple' : 'text-[#8C8CA1]'
                }`}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Label */}
              <span
                className={`text-[11px] font-medium tracking-tight mt-0.5 ${
                  isActive ? 'text-fi-purple font-bold' : 'text-[#8C8CA1]'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
