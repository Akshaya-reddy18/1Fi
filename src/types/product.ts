export type ProductCategory = 
  | 'all'
  | 'smartphones'
  | 'laptops'
  | 'audio'
  | 'wearables'
  | 'appliances';

export interface ProductVariant {
  id: string;
  name: string;
  type: 'storage' | 'color' | 'size' | 'combo';
  value: string;
  priceDelta: number;
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
  badge?: string;
  partnerStore?: string;
  deliveryDays?: string;
}

export type SortOption = 'featured' | 'price-low' | 'price-high';

export interface ProductFilterParams {
  category?: ProductCategory;
  searchQuery?: string;
  sortBy?: SortOption;
  minPrice?: number;
  maxPrice?: number;
  selectedBrand?: string;
}
