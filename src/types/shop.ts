export type ShopTabType = 'top-brands' | 'nearby-stores' | 'marketplace';

export type MainNavTab = 'home' | 'shop' | 'emi-dues' | 'limit' | 'profile';

export interface BrandItem {
  id: string;
  name: string;
  emiOffer: string;
  logoBgColor: string;
  logoTextColor: string;
  logoUrl?: string;
  logoText?: string;
  logoIconType?: 'air-india' | 'apple' | 'caratlane' | 'cghearth' | 'croma' | 'reliance' | 'tanishq' | 'titan';
  category: string;
  maxMonths: number;
}

export interface NearbyStoreItem {
  id: string;
  name: string;
  distanceKm: number;
  address: string;
  city: string;
  logoBgColor: string;
  logoText: string;
  logoIconType?: 'tripbouquet' | 'charger' | 'suzuki' | 'reliance' | 'croma';
  category: string;
}
