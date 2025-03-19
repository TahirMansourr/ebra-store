"use client";
import { useFilterContext } from "@/app/contexts/FilterContext";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { BsGrid3X3GapFill, BsGrid } from "react-icons/bs";
import { TbLayoutListFilled } from "react-icons/tb";

const DisplayProductsHeader = () => {
  const { selectedCategory, handleSort, viewType, setViewType } =
    useFilterContext();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full items-center justify-between flex mb-4">
      <h1 className="text-xl font-semibold">{selectedCategory}</h1>

      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
          >
            Sort By
            <HiChevronDown className="h-5 w-5" />
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <button
                onClick={() => {
                  handleSort("price-asc");
                  setShowMenu(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Price: Low to High
              </button>
              <button
                onClick={() => {
                  handleSort("price-desc");
                  setShowMenu(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Price: High to Low
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 border border-gray-100 rounded-md p-1">
          <button
            onClick={() => setViewType("grid-3")}
            className={`p-2 rounded ${
              viewType === "grid-3"
                ? "bg-gray-100 text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <BsGrid3X3GapFill className="h-5 w-5" />
          </button>
          <button
            onClick={() => setViewType("grid-2")}
            className={`p-2 rounded ${
              viewType === "grid-2"
                ? "bg-gray-100 text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <BsGrid className="h-5 w-5" />
          </button>
          <button
            onClick={() => setViewType("grid-1")}
            className={`p-2 rounded ${
              viewType === "grid-1"
                ? "bg-gray-100 text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <TbLayoutListFilled className=" h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayProductsHeader;
