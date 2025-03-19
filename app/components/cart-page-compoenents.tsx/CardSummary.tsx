import { Product } from "@/types";
import { useState } from "react";

const CardSummary = ({
  displayedProducts,
  cart,
}: {
  displayedProducts: Product[];
  cart: {
    id: number;
    userId: number;
    products: { productId: number; quantity: number }[];
  };
}) => {
  const [selectedShipping, setSelectedShipping] = useState("free");

  const getSubtotal = () => {
    return displayedProducts.reduce((sum, product) => {
      const quantity =
        cart.products.find((item) => item.productId === product.id)?.quantity ||
        0;
      return sum + product.price * quantity;
    }, 0);
  };

  const getShippingCost = () => {
    switch (selectedShipping) {
      case "express":
        return 15;
      case "pickup":
        return getSubtotal() * -0.21; // 21% discount
      default:
        return 0;
    }
  };
  const getTotal = () => {
    return getSubtotal() + getShippingCost();
  };

  return (
    <div className="w-full lg:w-[400px] border border-gray-200 bg-white rounded-lg p-6 h-fit shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Cart Summary</h2>

      <div className="space-y-4 mb-6">
        <label className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-50 rounded">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="shipping"
              value="free"
              checked={selectedShipping === "free"}
              onChange={(e) => setSelectedShipping(e.target.value)}
              className="w-4 h-4"
            />
            <span>Free Shipping</span>
          </div>
          <span>$0.00</span>
        </label>

        <label className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-50 rounded">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="shipping"
              value="express"
              checked={selectedShipping === "express"}
              onChange={(e) => setSelectedShipping(e.target.value)}
              className="w-4 h-4"
            />
            <span>Express Shipping</span>
          </div>
          <span>+$15.00</span>
        </label>

        <label className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-50 rounded">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="shipping"
              value="pickup"
              checked={selectedShipping === "pickup"}
              onChange={(e) => setSelectedShipping(e.target.value)}
              className="w-4 h-4"
            />
            <span>Pickup</span>
          </div>
          <span>-21%</span>
        </label>
      </div>

      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>${getSubtotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>${getShippingCost().toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg pt-2 border-t">
          <span>Total</span>
          <span>${getTotal().toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={() => console.log("Checkout clicked")}
        className="w-full bg-black text-white py-3 rounded-md mt-6 hover:bg-gray-800 transition-colors"
      >
        Checkout
      </button>
    </div>
  );
};

export default CardSummary;
