"use client";

import { createContext, useContext, useState } from "react";

// Update the FilterContextDTO type to include filteredProducts
type FilterContextDTO = {
  categories: string[];
  selectedCategory: string | null;
  handleCategorySelection: (category: string) => void;
  filteredProducts: Product[] | null;
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
    if (category === "All Products") {
      setFilteredProducts(products);
    } else {
      const filtered =
        products?.filter((product) => product.category === category) || null;
      setFilteredProducts(filtered);
    }
  }

  const value = {
    categories,
    selectedCategory,
    handleCategorySelection,
    filteredProducts,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export default FilterContext;
