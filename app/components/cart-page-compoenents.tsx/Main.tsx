"use client";
import useGetProductsByIdArray from "./hooks";
import { BiError } from "react-icons/bi";
import { CgSpinner } from "react-icons/cg";
import CartTableWrapper from "./CartTableWrapper";
import CartProvider from "@/app/contexts/CartContext";

const Main = ({
  cart,
}: {
  cart: {
    id: number;
    userId: number;
    products: { productId: number; quantity: number }[];
  };
}) => {
  function getProductIds() {
    const productsIds = cart.products.map((product) => product.productId);
    return productsIds;
  }

  const { products, loading, error } = useGetProductsByIdArray(getProductIds());

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <CgSpinner className="w-8 h-8 animate-spin text-black" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <BiError className="w-12 h-12 text-red-500" />
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-gray-500">No products found in cart</p>
      </div>
    );
  }

  return (
    <CartProvider>
      <CartTableWrapper products={products} cart={cart} />
    </CartProvider>
  );
};

export default Main;
