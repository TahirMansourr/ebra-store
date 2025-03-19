"use client";

import { createContext, useContext, useState } from "react";

type FilterContextDTO = {
  categories: string[];
  selectedCategory: string | null;
  handleCategorySelection: (category: string) => void;
  filteredProducts: Product[] | null;
  selectedPriceRange?: {
    min: number;
    max: number;
    label: string;
  } | null;
  handleProductsAccordingToPrice: ({
    range,
  }: {
    range: { min: number; max: number; label: string };
  }) => void;
};

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const FilterContext = createContext<FilterContextDTO>({} as FilterContextDTO);

export const useFilterContext = () => {
  if (FilterContext === undefined) {
    throw new Error(
      `Error at FilterContext, You probably forgot to wrap the consumer component with the  FilterProvider`
    );
  } else {
    return useContext(FilterContext);
  }
};

export const FilterProvider = ({
  children,
  products,
}: {
  children: React.ReactNode;
  products: Product[] | null;
}) => {
  const [categories, setCategories] = useState<string[]>(getCategories());
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[] | null>(
    products
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState<{
    min: number;
    max: number;
    label: string;
  } | null>(null);

  console.log(filteredProducts);

  function getCategories() {
    if (products) {
      const uniqueCategories = [
        "All Products",
        ...new Set(products.map((product) => product.category)),
      ];
      return uniqueCategories;
    }
    return [];
  }

  function handleCategorySelection(category: string) {
    setSelectedCategory(category);
    let filtered = products;

    if (category !== "All Products") {
      filtered =
        products?.filter((product) => product.category === category) || null;
    }

    if (selectedPriceRange && filtered) {
      filtered = filtered.filter(
        (product) =>
          product.price >= selectedPriceRange.min &&
          product.price <= selectedPriceRange.max
      );
    }

    setFilteredProducts(filtered);
  }

  const handleProductsAccordingToPrice = ({
    range,
  }: {
    range: { min: number; max: number; label: string };
  }) => {
    setSelectedPriceRange(range);
    let filtered = products;

    if (selectedCategory && selectedCategory !== "All Products") {
      filtered =
        filtered?.filter((product) => product.category === selectedCategory) ||
        null;
    }

    if (range.label !== "All Prices" && filtered) {
      filtered = filtered.filter(
        (product) => product.price >= range.min && product.price <= range.max
      );
    }

    setFilteredProducts(filtered);
  };

  const value = {
    categories,
    selectedCategory,
    handleCategorySelection,
    filteredProducts,
    selectedPriceRange,
    handleProductsAccordingToPrice,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export default FilterContext;
