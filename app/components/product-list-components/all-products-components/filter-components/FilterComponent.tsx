"use client";

import { useFilterContext } from "@/app/contexts/FilterContext";
import FilterByPrice from "./FilterByPrice";
import { useState } from "react";
import { HiAdjustments, HiX } from "react-icons/hi";

const FilterComponent = () => {
  const { categories, selectedCategory, handleCategorySelection } =
    useFilterContext();
  const [isOpen, setIsOpen] = useState(false);

  const FilterContent = () => (
    <>
      <h2 className="font-bold mb-3 text-xl">Filter </h2>
      <h2 className="font-bold">Categories</h2>
      <ul className="text-slate-600">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => {
              handleCategorySelection(category);
              setIsOpen(false);
            }}
            className={`cursor-pointer my-2 text-sm ${
              selectedCategory === category ? "text-black underline" : ""
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
      <FilterByPrice />
    </>
  );

  return (
    <>
      <button
        className="md:hidden  p-4  flex items-center gap-2"
        onClick={() => setIsOpen(true)}
      >
        {/* <HiAdjustments className="h-5 w-5" /> */}
        Filter
      </button>

      {isOpen && (
        <div className="lg:hidden flex w-full h-full z-50">
          <div className="absolute right-0 top-0 h-full w-80 bg-white p-6 shadow-xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2"
            >
              <HiX className="" />
            </button>
            <div className="mt-12">
              <FilterContent />
            </div>
          </div>
        </div>
      )}

      <div className="hidden lg:flex flex-col w-full lg:w-100 mt-3">
        <FilterContent />
      </div>
    </>
  );
};

export default FilterComponent;
