"use client";
import { useCartContext } from "@/app/contexts/CartContext";
import { CartDTO, Product } from "@/types";
import { useEffect, useState } from "react";
import { HiHeart, HiMinus, HiPlus } from "react-icons/hi";

const AddToCart = ({ product }: { product: Product }) => {
  const { addToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const [cart, setCart] = useState<CartDTO | null>(null);
  async function fetchCart() {
    const res = await fetch(`http://localhost:3000/api/cart`);
    const fetchedCart = await res.json();
    setCart(fetchedCart);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchCart();
  }, []);

  const handleAddToCart = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://fakestoreapi.com/carts/${cart?.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: cart?.id,
            userId: cart?.userId,
            products: [
              {
                productId: product.id,
                quantity: quantity,
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add to cart");
      }
      const data = await response.json();
      console.log("Added to cart:", data);
      addToCart(product, quantity);
      setQuantity(1);
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col space-y-4 lg:max-w-[600px] mt-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center bg-[#F5F5F5] rounded-md">
          <button
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            className="p-2 hover:bg-gray-100 hover:cursor-pointer"
            disabled={isLoading}
          >
            <HiMinus className="h-5 w-5" />
          </button>
          <span className="px-4 py-2 font-medium min-w-[40px] text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="p-2 hover:bg-gray-100 hover:cursor-pointer"
            disabled={isLoading}
          >
            <HiPlus className="h-5 w-5" />
          </button>
        </div>

        <button
          className="flex items-center justify-center text-center w-full gap-2 px-4 py-2 border rounded-md hover:bg-gray-50"
          disabled={isLoading}
        >
          <HiHeart className="h-5 w-5" />
          <span>Wishlist</span>
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        disabled={isLoading}
        className={`w-full bg-black text-white py-3 rounded-md transition-colors ${
          isLoading
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-800 hover:cursor-pointer"
        }`}
      >
        {isLoading ? "Adding to Cart..." : "Add to Cart"}
      </button>
    </div>
  );
};

export default AddToCart;
