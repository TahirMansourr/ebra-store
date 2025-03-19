"use client";

import { useFilterContext } from "@/app/contexts/FilterContext";
import FilterByPrice from "./FilterByPrice";

const FilterComponent = () => {
  const { categories, selectedCategory, handleCategorySelection } =
    useFilterContext();
  return (
    <div className="flex flex-col w-full lg:w-100 mt-3">
      <h2 className="font-bold mb-3 text-xl">Filter </h2>
      <h2 className="font-bold">Categories</h2>
      <ul className="text-slate-600">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => handleCategorySelection(category)}
            className={`cursor-pointer my-2 text-sm ${
              selectedCategory === category ? "text-black underline" : ""
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
      <FilterByPrice />
    </div>
  );
};

export default FilterComponent;
