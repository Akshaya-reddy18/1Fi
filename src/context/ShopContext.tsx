import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Product,
  ProductVariant,
  EMIPlan,
  ProductCategory,
  SortOption,
  EMIApplicationResponse,
} from '../types/product';
import { ShopTabType, MainNavTab } from '../types/shop';
import { MarketplaceApi } from '../services/marketplaceApi';

interface ShopContextType {
  // Navigation
  activeNavTab: MainNavTab;
  setActiveNavTab: (tab: MainNavTab) => void;
  activeShopTab: ShopTabType;
  setActiveShopTab: (tab: ShopTabType) => void;
  
  // Search & Filter
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: ProductCategory;
  setActiveCategory: (cat: ProductCategory) => void;
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;

  // Selected Product & Details dynamic state
  selectedProductId: string | null;
  selectedProduct: Product | null;
  isLoadingProductDetails: boolean;
  productDetailsError: string | null;
  openProductDetailsById: (productId: string) => Promise<void>;
  openProductDetails: (product: Product) => void;
  closeProductDetails: () => void;

  // Variant & dynamic price calculation
  selectedStorage: ProductVariant | null;
  setSelectedStorage: (v: ProductVariant | null) => void;
  selectedColor: ProductVariant | null;
  setSelectedColor: (v: ProductVariant | null) => void;
  currentEffectivePrice: number;

  // EMI selection & dynamic state
  selectedEMIPlan: EMIPlan | null;
  setSelectedEMIPlan: (plan: EMIPlan | null) => void;
  availableEMIPlans: EMIPlan[];
  isLoadingEMIPlans: boolean;
  emiPlansError: string | null;
  refetchEMIPlans: () => void;
  
  // Proceed flow modal & submission
  isProceedModalOpen: boolean;
  openProceedModal: () => void;
  closeProceedModal: () => void;
  isOrderPlaced: boolean;
  orderConfirmation: EMIApplicationResponse | null;
  submitOrder: () => Promise<void>;

  // Testing & Error simulation
  isSimulateError: boolean;
  toggleSimulateError: () => void;

  // User credit limit info
  availableMFLimit: number;
  totalMFLimit: number;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeNavTab, setActiveNavTab] = useState<MainNavTab>('shop');
  const [activeShopTab, setActiveShopTab] = useState<ShopTabType>('top-brands');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [selectedCity, setSelectedCity] = useState('Ranga Reddy');

  // Product details state
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLoadingProductDetails, setIsLoadingProductDetails] = useState(false);
  const [productDetailsError, setProductDetailsError] = useState<string | null>(null);

  // Variants
  const [selectedStorage, setSelectedStorage] = useState<ProductVariant | null>(null);
  const [selectedColor, setSelectedColor] = useState<ProductVariant | null>(null);

  // EMI state
  const [selectedEMIPlan, setSelectedEMIPlan] = useState<EMIPlan | null>(null);
  const [availableEMIPlans, setAvailableEMIPlans] = useState<EMIPlan[]>([]);
  const [isLoadingEMIPlans, setIsLoadingEMIPlans] = useState(false);
  const [emiPlansError, setEmiPlansError] = useState<string | null>(null);

  // Order submission
  const [isProceedModalOpen, setIsProceedModalOpen] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState<EMIApplicationResponse | null>(null);

  // Error simulation
  const [isSimulateError, setIsSimulateError] = useState(false);

  // Mock 1Fi mutual fund limits
  const availableMFLimit = 250000;
  const totalMFLimit = 300000;

  // Dynamic fetch of product details by ID through API service layer
  const openProductDetailsById = async (productId: string) => {
    try {
      setSelectedProductId(productId);
      setIsLoadingProductDetails(true);
      setProductDetailsError(null);
      setSelectedEMIPlan(null);
      setIsOrderPlaced(false);
      setOrderConfirmation(null);

      const product = await MarketplaceApi.getProductById(productId);
      setSelectedProduct(product);
      setSelectedStorage(product.variants?.storage?.[0] || null);
      setSelectedColor(product.variants?.colors?.[0] || null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      setProductDetailsError(err.message || 'Failed to load product details');
    } finally {
      setIsLoadingProductDetails(false);
    }
  };

  const openProductDetails = (product: Product) => {
    setSelectedProductId(product.id);
    setSelectedProduct(product);
    setSelectedStorage(product.variants?.storage?.[0] || null);
    setSelectedColor(product.variants?.colors?.[0] || null);
    setSelectedEMIPlan(null);
    setIsOrderPlaced(false);
    setOrderConfirmation(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeProductDetails = () => {
    setSelectedProductId(null);
    setSelectedProduct(null);
    setSelectedStorage(null);
    setSelectedColor(null);
    setSelectedEMIPlan(null);
    setIsProceedModalOpen(false);
    setIsOrderPlaced(false);
    setOrderConfirmation(null);
  };

  // Compute effective price based on selected storage/color variant
  const currentEffectivePrice = React.useMemo(() => {
    if (!selectedProduct) return 0;
    const storageDelta = selectedStorage?.priceDelta || 0;
    const colorDelta = selectedColor?.priceDelta || 0;
    return Math.max(0, selectedProduct.basePrice + storageDelta + colorDelta);
  }, [selectedProduct, selectedStorage, selectedColor]);

  // Fetch EMI plans dynamically via API service layer whenever price/product changes
  const fetchEMIPlans = async () => {
    if (!selectedProduct || currentEffectivePrice <= 0) {
      setAvailableEMIPlans([]);
      return;
    }

    try {
      setIsLoadingEMIPlans(true);
      setEmiPlansError(null);
      const plans = await MarketplaceApi.getEMIPlans(selectedProduct.id, currentEffectivePrice);
      setAvailableEMIPlans(plans);

      // Keep previously selected tenure or default to 6-month popular plan
      if (!selectedEMIPlan) {
        const defaultPlan = plans.find((p) => p.durationMonths === 6) || plans[0];
        setSelectedEMIPlan(defaultPlan || null);
      } else {
        const matchingUpdated = plans.find((p) => p.durationMonths === selectedEMIPlan.durationMonths);
        setSelectedEMIPlan(matchingUpdated || plans[0] || null);
      }
    } catch (err: any) {
      setEmiPlansError(err.message || 'Failed to load EMI plans');
    } finally {
      setIsLoadingEMIPlans(false);
    }
  };

  useEffect(() => {
    fetchEMIPlans();
  }, [selectedProduct?.id, currentEffectivePrice]);

  const submitOrder = async () => {
    if (!selectedProduct || !selectedEMIPlan) return;

    const res = await MarketplaceApi.submitEMIApplication({
      productId: selectedProduct.id,
      productName: selectedProduct.name,
      variantDetails: `${selectedStorage?.name || ''} ${selectedColor?.name || ''}`.trim(),
      totalAmount: currentEffectivePrice,
      emiPlanId: selectedEMIPlan.id,
      durationMonths: selectedEMIPlan.durationMonths,
      monthlyAmount: selectedEMIPlan.monthlyAmount,
    });

    setOrderConfirmation(res);
    setIsOrderPlaced(true);
  };

  const toggleSimulateError = () => {
    const nextVal = !isSimulateError;
    setIsSimulateError(nextVal);
    MarketplaceApi.setSimulateError(nextVal);
  };

  const openProceedModal = () => {
    if (selectedEMIPlan) {
      setIsProceedModalOpen(true);
    }
  };

  const closeProceedModal = () => {
    setIsProceedModalOpen(false);
  };

  return (
    <ShopContext.Provider
      value={{
        activeNavTab,
        setActiveNavTab,
        activeShopTab,
        setActiveShopTab,
        searchQuery,
        setSearchQuery,
        activeCategory,
        setActiveCategory,
        sortBy,
        setSortBy,
        selectedCity,
        setSelectedCity,
        selectedProductId,
        selectedProduct,
        isLoadingProductDetails,
        productDetailsError,
        openProductDetailsById,
        openProductDetails,
        closeProductDetails,
        selectedStorage,
        setSelectedStorage,
        selectedColor,
        setSelectedColor,
        currentEffectivePrice,
        selectedEMIPlan,
        setSelectedEMIPlan,
        availableEMIPlans,
        isLoadingEMIPlans,
        emiPlansError,
        refetchEMIPlans: fetchEMIPlans,
        isProceedModalOpen,
        openProceedModal,
        closeProceedModal,
        isOrderPlaced,
        orderConfirmation,
        submitOrder,
        isSimulateError,
        toggleSimulateError,
        availableMFLimit,
        totalMFLimit,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
