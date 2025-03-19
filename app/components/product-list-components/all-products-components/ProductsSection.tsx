import DisplayProducts from "./display-products/DisplayProducts";
import FilterComponent from "./filter-components/FilterComponent";

const ProductsSection = () => {
  return (
    <div className="flex w-full mt-4">
      <FilterComponent />
      <DisplayProducts />
    </div>
  );
};

export default ProductsSection;
