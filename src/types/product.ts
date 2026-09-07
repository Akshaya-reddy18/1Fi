export type ProductCategory = 
  | 'all'
  | 'smartphones'
  | 'laptops'
  | 'audio'
  | 'wearables'
  | 'appliances';

export interface ProductVariant {
  id: string;
  name: string; // e.g. "256 GB - Natural Titanium" or "16GB RAM / 512GB SSD"
  type: 'storage' | 'color' | 'size' | 'combo';
  value: string;
  priceDelta: number; // additional cost over base price or adjustment
  image?: string;
  inStock: boolean;
}

export interface EMIPlan {
  id: string;
  durationMonths: number;
  monthlyAmount: number;
  totalAmount: number;
  interestRate: number; // 0 for No-Cost EMI
  isNoCost: boolean;
  processingFee: number;
  cashback?: number;
  popular?: boolean;
  savingsText?: string;
  monthlyPrincipal: number;
  monthlyInterest: number;
}

export interface ProductSpecification {
  category: string;
  items: { [key: string]: string };
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  rating: number;
  reviewCount: number;
  basePrice: number;
  originalPrice?: number;
  discountPercentage?: number;
  thumbnail: string;
  images: string[];
  shortDescription: string;
  description: string;
  highlights: string[];
  specifications: ProductSpecification[];
  variants?: {
    storage?: ProductVariant[];
    colors?: ProductVariant[];
  };
  inStock: boolean;
  badge?: string; // e.g., "Trending", "Bestseller", "New Launch"
  partnerStore?: string; // e.g., "Apple Authorised Reseller", "Croma", "Reliance Digital"
  deliveryDays?: string; // e.g., "Free Delivery by Tomorrow"
}

export type SortOption = 'featured' | 'price-low' | 'price-high' | 'rating';

export interface ProductFilterParams {
  category?: ProductCategory;
  searchQuery?: string;
  sortBy?: SortOption;
  minPrice?: number;
  maxPrice?: number;
  selectedBrand?: string;
}

export interface EMIApplicationRequest {
  productId: string;
  productName: string;
  variantDetails: string;
  totalAmount: number;
  emiPlanId: string;
  durationMonths: number;
  monthlyAmount: number;
}

export interface EMIApplicationResponse {
  success: boolean;
  orderId: string;
  firstEmiDate: string;
  monthlyAmount: number;
  durationMonths: number;
  pledgedMFAmount: number;
  timestamp: string;
}
