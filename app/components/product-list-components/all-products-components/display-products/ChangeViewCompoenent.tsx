"use client";

import { useFilterContext } from "@/app/contexts/FilterContext";
import { BsGrid, BsGrid3X3GapFill } from "react-icons/bs";
import { TbLayoutListFilled } from "react-icons/tb";

const ChangeViewComponent = () => {
  const { setViewType, viewType } = useFilterContext();
  return (
    <div className="flex items-center gap-2 border border-gray-100 rounded-md p-1">
      <button
        onClick={() => setViewType("grid-3")}
        className={`hidden md:block p-2 rounded hover:cursor-pointer ${
          viewType === "grid-3"
            ? "bg-gray-100 text-gray-900"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        <BsGrid3X3GapFill className="h-5 w-5" />
      </button>

      <button
        onClick={() => setViewType("grid-2")}
        className={`p-2 rounded hover:cursor-pointer ${
          viewType === "grid-2"
            ? "bg-gray-100 text-gray-900"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        <BsGrid className="h-5 w-5" />
      </button>

      <button
        onClick={() => setViewType("grid-1")}
        className={`p-2 rounded  hover:cursor-pointer ${
          viewType === "grid-1"
            ? "bg-gray-100 text-gray-900"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        <TbLayoutListFilled className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ChangeViewComponent;
