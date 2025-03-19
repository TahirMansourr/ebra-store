"use client";

import { useFilterContext } from "@/app/contexts/FilterContext";
import { HiChevronDown } from "react-icons/hi";
import ChangeViewComponent from "./ChangeViewCompoenent";
import SortComponent from "./SortComponent";
import FilterComponent from "../filter-components/FilterComponent";

const DisplayProductsHeader = () => {
  const { selectedCategory } = useFilterContext();

  return (
    <div className="w-full mb-4">
      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        <div className="flex items-center justify-between">
          <FilterComponent />
          <ChangeViewComponent />
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">{selectedCategory}</h2>
          <SortComponent />
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between">
        <h1 className="text-xl lg:text-2xl font-semibold">
          {selectedCategory}
        </h1>
        <div className="flex items-center gap-4">
          <SortComponent />
          <ChangeViewComponent />
        </div>
      </div>
    </div>
  );
};

export default DisplayProductsHeader;
