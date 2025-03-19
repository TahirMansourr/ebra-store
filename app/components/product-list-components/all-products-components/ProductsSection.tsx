import DisplayProducts from "./display-products/DisplayProducts";
import FilterComponent from "./filter-components/FilterComponent";

const ProductsSection = () => {
  return (
    <div className="flex w-full mt-4">
      <div className="hidden md:flex md:w-[200px] lg:w-[300px]  md:mt-4">
        <FilterComponent />
      </div>
      <DisplayProducts />
    </div>
  );
};

export default ProductsSection;
