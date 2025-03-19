"use client";
import { useFilterContext } from "@/app/contexts/FilterContext";
import { HiChevronDown } from "react-icons/hi";

const SortComponent = () => {
  const { handleSort, showSortMenu, setShowSortMenu } = useFilterContext();

  return (
    <div className="relative">
      <button
        onClick={() => setShowSortMenu(!showSortMenu)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
      >
        Sort By
        <HiChevronDown className="h-5 w-5" />
      </button>

      {showSortMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <button
            onClick={() => {
              handleSort("price-asc");
              setShowSortMenu(false);
            }}
            className="block hover:cursor-pointer w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Price: Low to High
          </button>
          <button
            onClick={() => {
              handleSort("price-desc");
              setShowSortMenu(false);
            }}
            className="block  hover:cursor-pointer w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Price: High to Low
          </button>
        </div>
      )}
    </div>
  );
};

export default SortComponent;
