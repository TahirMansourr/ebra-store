"use client";

import { useFilterContext } from "@/app/contexts/FilterContext";

const FilterComponent = () => {
  const { categories, selectedCategory, handleCategorySelection } =
    useFilterContext();
  return (
    <div className="flex flex-col w-full lg:w-100">
      <h2 className="font-bold mb-3">Filter </h2>
      <h2>Categories</h2>
      <ul className="text-slate-600">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => handleCategorySelection(category)}
            className={`cursor-pointer ${
              selectedCategory === category ? "text-blue-500" : ""
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterComponent;
