import {
  Product,
  EMIPlan,
  ProductFilterParams,
  ProductCategory,
} from '../types/product';
import { BrandItem, NearbyStoreItem } from '../types/shop';
import { MOCK_PRODUCTS } from '../data/mockProducts';
import { MOCK_BRANDS } from '../data/mockBrands';
import { MOCK_STORES } from '../data/mockStores';
import { EMI_TENURE_POLICIES, STANDARD_CREDIT_CARD_ANNUAL_RATE } from '../data/emiPlans';

const API_LATENCY_MS = 250;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * 1Fi Marketplace API Service Layer
 * Clean data-access layer for products, stores, brands, and EMI calculations.
 */
export class MarketplaceApi {
  private static simulateNetworkError = false;

  public static setSimulateError(enable: boolean) {
    this.simulateNetworkError = enable;
  }

  public static getSimulateError(): boolean {
    return this.simulateNetworkError;
  }

  /**
   * Fetch products with optional filtering & sorting
   */
  public static async getProducts(filters?: ProductFilterParams): Promise<Product[]> {
    await delay(API_LATENCY_MS);

    if (this.simulateNetworkError) {
      throw new Error('Network Error: Unable to connect to 1Fi Marketplace server.');
    }

    let results = [...MOCK_PRODUCTS];

    if (filters) {
      if (filters.category && filters.category !== 'all') {
        results = results.filter((p) => p.category === filters.category);
      }

      if (filters.searchQuery && filters.searchQuery.trim() !== '') {
        const q = filters.searchQuery.toLowerCase().trim();
        results = results.filter((p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
        );
      }

      if (filters.selectedBrand) {
        results = results.filter((p) => p.brand.toLowerCase() === filters.selectedBrand?.toLowerCase());
      }

      if (filters.sortBy) {
        switch (filters.sortBy) {
          case 'price-low':
            results.sort((a, b) => a.basePrice - b.basePrice);
            break;
          case 'price-high':
            results.sort((a, b) => b.basePrice - a.basePrice);
            break;
          case 'rating':
            results.sort((a, b) => b.rating - a.rating);
            break;
          case 'featured':
          default:
            break;
        }
      }
    }

    return results;
  }

  /**
   * Fetch single product details dynamically by Product ID
   */
  public static async getProductById(id: string): Promise<Product> {
    await delay(API_LATENCY_MS / 1.5);

    if (this.simulateNetworkError) {
      throw new Error(`Failed to load product details for ID: ${id}`);
    }

    const product = MOCK_PRODUCTS.find((p) => p.id === id);
    if (!product) {
      throw new Error(`Product with ID '${id}' not found in 1Fi catalog.`);
    }

    return product;
  }

  /**
   * Fetch & dynamically compute 1Fi EMI Plans for a product and given effective price
   */
  public static async getEMIPlans(productId: string, effectivePrice: number): Promise<EMIPlan[]> {
    await delay(100);

    if (this.simulateNetworkError) {
      throw new Error('Failed to retrieve EMI rate cards.');
    }

    if (!effectivePrice || effectivePrice <= 0) {
      return [];
    }

    return EMI_TENURE_POLICIES.map((policy) => {
      const { durationMonths, interestRate, isNoCost, processingFee, popular } = policy;

      const totalInterest = isNoCost ? 0 : Math.round(effectivePrice * interestRate * (durationMonths / 12));
      const totalAmount = effectivePrice + totalInterest;
      const monthlyAmount = Math.round(totalAmount / durationMonths);
      const monthlyPrincipal = Math.round(effectivePrice / durationMonths);
      const monthlyInterest = isNoCost ? 0 : Math.round(totalInterest / durationMonths);

      const standardCCInterest = Math.round(effectivePrice * STANDARD_CREDIT_CARD_ANNUAL_RATE * (durationMonths / 12));
      const savings = isNoCost ? standardCCInterest : Math.max(0, standardCCInterest - totalInterest);

      return {
        id: `emi-plan-${productId}-${durationMonths}m`,
        durationMonths,
        monthlyAmount,
        totalAmount,
        interestRate,
        isNoCost,
        processingFee,
        popular: Boolean(popular),
        monthlyPrincipal,
        monthlyInterest,
        savingsText: isNoCost ? `Save ₹${savings.toLocaleString('en-IN')} vs Credit Cards` : undefined,
      };
    });
  }

  /**
   * Fetch Top Brands matching screenshot 1
   */
  public static async getTopBrands(searchQuery?: string): Promise<BrandItem[]> {
    await delay(API_LATENCY_MS / 2);

    if (!searchQuery || searchQuery.trim() === '') {
      return MOCK_BRANDS;
    }

    const q = searchQuery.toLowerCase().trim();
    return MOCK_BRANDS.filter((b) =>
      b.name.toLowerCase().includes(q) ||
      b.emiOffer.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q)
    );
  }

  /**
   * Fetch Nearby Stores matching screenshot 2
   */
  public static async getNearbyStores(searchQuery?: string, city?: string): Promise<NearbyStoreItem[]> {
    await delay(API_LATENCY_MS / 2);

    let stores = [...MOCK_STORES];
    if (city) {
      stores = stores.filter((s) => s.city.toLowerCase() === city.toLowerCase());
    }

    if (!searchQuery || searchQuery.trim() === '') {
      return stores;
    }

    const q = searchQuery.toLowerCase().trim();
    return stores.filter((s) =>
      s.name.toLowerCase().includes(q) ||
      s.address.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q)
    );
  }

  /**
   * Categories list
   */
  public static getCategories(): { id: ProductCategory; label: string }[] {
    return [
      { id: 'all', label: 'All Products' },
      { id: 'smartphones', label: 'Smartphones' },
      { id: 'laptops', label: 'Laptops' },
      { id: 'audio', label: 'Audio' },
      { id: 'wearables', label: 'Wearables' },
      { id: 'appliances', label: 'Appliances' },
    ];
  }
}
