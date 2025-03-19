"use client";
import { useCartContext } from "@/app/contexts/CartContext";
import { Product } from "@/types";
import { useState, useEffect } from "react";
import CardTable from "./CardTable";
import CardSummary from "./CardSummary";

const CartTableWrapper = ({
  products,
  cart,
}: {
  products: Product[];
  cart: {
    id: number;
    userId: number;
    products: { productId: number; quantity: number }[];
  };
}) => {
  const { removeFromCart, updateQuantity, cartItems } = useCartContext();
  const [isDeleting, setIsDeleting] = useState<number | null>(null);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const filtered = products.filter((product) =>
        cart.products.some((item) => item.productId === product.id)
      );
      setDisplayedProducts(filtered);
    }
  }, [products, cart.products]);

  const handleDelete = async (productId: number) => {
    try {
      setIsDeleting(productId);

      const updatedCart = {
        userId: cart.userId,
        products: cart.products.filter((item) => item.productId !== productId),
      };

      const response = await fetch("https://fakestoreapi.com/carts/1", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCart),
      });

      if (!response.ok) {
        throw new Error("Failed to update cart");
      }

      const data = await response.json();
      console.log("Cart updated:", data);

      removeFromCart(productId);
      setDisplayedProducts((prev) => prev.filter((p) => p.id !== productId));
    } catch (error) {
      console.error("Error updating cart:", error);
    } finally {
      setIsDeleting(null);
    }
  };

  const handleUpdateQuantity = async (
    productId: number,
    newQuantity: number
  ) => {
    try {
      if (newQuantity < 1) return;

      const updatedCart = {
        userId: cart.userId,
        products: cart.products.map((item) =>
          item.productId === productId
            ? { ...item, quantity: newQuantity }
            : item
        ),
      };

      const response = await fetch("https://fakestoreapi.com/carts/1", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCart),
      });

      if (!response.ok) {
        throw new Error("Failed to update quantity");
      }

      await response.json();
      // Update local state after successful API call
      updateQuantity(productId, newQuantity);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-2 sm:px-4 py-4 sm:py-8">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8 text-center">
        Shopping Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center">
        <div className="w-full lg:flex-1 lg:max-w-[800px] overflow-x-auto">
          <CardTable
            cart={cart}
            displayedProducts={displayedProducts}
            handleDelete={handleDelete}
            handleUpdateQuantity={handleUpdateQuantity}
            isDeleting={isDeleting}
          />
        </div>
        <div className="w-full lg:w-[400px]">
          <CardSummary cart={cart} displayedProducts={displayedProducts} />
        </div>
      </div>
    </div>
  );
};

export default CartTableWrapper;
