"use client";

import { useFilterContext } from "@/app/contexts/FilterContext";
import Image from "next/image";

const DisplayProducts = () => {
  const { filteredProducts } = useFilterContext();

  return (
    <div className="h-[calc(100vh-400px)]  px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProducts?.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg  p-4 flex flex-col"
          >
            <div className="relative h-48 w-full mb-4">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-col ">
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                {product.description.slice(0, 90)}...
              </p>
              <div className="mt-auto flex justify-between items-center">
                <span className="text-xl font-bold text-blue-600">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-500 px-2 py-1 bg-gray-100 rounded-full">
                  {product.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayProducts;
