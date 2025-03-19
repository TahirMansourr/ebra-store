"use client";

import { useFilterContext } from "@/app/contexts/FilterContext";

const priceRanges = [
  { min: 0, max: Infinity, label: "All Prices" },
  { min: 0, max: 99, label: "$0 - $99" },
  { min: 100, max: 199, label: "$100 - $199" },
  { min: 200, max: 299, label: "$200 - $299" },
  { min: 300, max: 399, label: "$300 - $399" },
  { min: 400, max: Infinity, label: "$400+" },
];

const FilterByPrice = () => {
  const { selectedPriceRange, handleProductsAccordingToPrice } =
    useFilterContext();

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Price Range</h3>
      <div className="flex flex-col space-y-2">
        {priceRanges.map((range, index) => (
          <label
            key={index}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <span className="text-sm text-gray-600">{range.label}</span>
            <input
              type="checkbox"
              checked={selectedPriceRange?.label === range.label ? true : false}
              onChange={() => handleProductsAccordingToPrice({ range })}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterByPrice;
