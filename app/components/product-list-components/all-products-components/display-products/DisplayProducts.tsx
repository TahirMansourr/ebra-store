"use client";

import { useFilterContext } from "@/app/contexts/FilterContext";
import Image from "next/image";
import DisplayProductsHeader from "./DisplayProductsHeader";
import ProductCard from "./ProductCard";

const DisplayProducts = () => {
  const { filteredProducts, viewType } = useFilterContext();

  const gridClass = {
    "grid-1": "grid-cols-1",
    "grid-2": "grid-cols-1 md:grid-cols-2",
    "grid-3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  }[viewType];

  if (
    (Array.isArray(filteredProducts) && filteredProducts.length === 0) ||
    !filteredProducts
  ) {
    return (
      <div className="w-full">
        <DisplayProductsHeader />
        <h1 className="text-2xl text-center mt-8  mx-auto">
          No Products Found With these Filters
        </h1>
      </div>
    );
  } else {
    return (
      <div className="h-[calc(100vh-400px)]  w-full px-4 flex flex-col gap-4">
        <DisplayProductsHeader />
        <div className={`grid gap-6 ${gridClass}`}>
          {filteredProducts?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    );
  }
};

export default DisplayProducts;
