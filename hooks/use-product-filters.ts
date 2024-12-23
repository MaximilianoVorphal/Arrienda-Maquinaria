'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { Filters } from '@/types/filters';
import { products } from '@/data/products';

const initialFilters: Filters = {
  operation: [],
  categories: [],
  priceRange: { min: 0, max: 10000000 },
  search: ''
};

export function useProductFilters() {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    const filtered = products.filter(product => {
      const matchesOperation = filters.operation.length === 0 || 
        product.operationType.some(opType => filters.operation.includes(opType));
      
      const matchesCategory = filters.categories.length === 0 || 
        filters.categories.includes(product.category);
      
      const matchesPrice = product.priceValue >= filters.priceRange.min && 
        product.priceValue <= filters.priceRange.max;
      
      const matchesSearch = !filters.search || 
        product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.search.toLowerCase());

      return matchesOperation && matchesCategory && matchesPrice && matchesSearch;
    });

    setFilteredProducts(filtered);
  }, [filters]);

  const updateFilters = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  return { filteredProducts, filters, updateFilters };
}
