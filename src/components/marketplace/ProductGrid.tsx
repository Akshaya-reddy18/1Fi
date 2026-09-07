import React, { useEffect, useState } from 'react';
import { Product } from '../../types/product';
import { MarketplaceApi } from '../../services/marketplaceApi';
import { useShop } from '../../context/ShopContext';
import { ProductCard } from './ProductCard';
import { SkeletonCard } from '../common/SkeletonCard';
import { ErrorState } from '../common/ErrorState';
import { EmptyState } from '../common/EmptyState';

export const ProductGrid: React.FC = () => {
  const { activeCategory, searchQuery, sortBy, setActiveCategory, setSearchQuery } = useShop();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await MarketplaceApi.getProducts({
        category: activeCategory,
        searchQuery,
        sortBy,
      });
      setProducts(data);
    } catch (err: any) {
      setError(err.message || 'Unable to load products. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [activeCategory, searchQuery, sortBy]);

  const handleClearFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
  };

  if (loading) {
    return <SkeletonCard type="product" count={6} />;
  }

  if (error) {
    return <ErrorState message={error} onRetry={fetchProducts} />;
  }

  if (products.length === 0) {
    return (
      <EmptyState
        title="No matching products"
        message={
          searchQuery
            ? `We couldn't find any products matching "${searchQuery}".`
            : 'No products found in this category.'
        }
        onClearFilters={handleClearFilters}
      />
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4 pb-20">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
