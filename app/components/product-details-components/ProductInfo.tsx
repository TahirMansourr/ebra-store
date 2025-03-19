"use client";

import { Product } from "@/types";
import { useEffect, useState } from "react";
import { HiHeart, HiMinus, HiPlus } from "react-icons/hi";

const ProductInfo = ({ product }: { product: Product }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg p-3 min-w-[80px]">
      <span className="text-2xl font-bold">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-col w-full space-y-6">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="text-gray-600">{product.description}</p>
      <h1 className="text-3xl font-bold">$ {product.price}</h1>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Offer Expires in:</h2>
        <div className="flex gap-4">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Minutes" />
          <TimeBox value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>

      <div className="flex flex-col space-y-4 lg:max-w-[600px]">
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-[#F5F5F5] rounded-md ">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="p-2 hover:bg-gray-100 hover:cursor-pointer"
            >
              <HiMinus className="h-5 w-5" />
            </button>
            <span className="px-4 py-2 font-medium min-w-[40px] text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="p-2 hover:bg-gray-100  hover:cursor-pointer"
            >
              <HiPlus className="h-5 w-5" />
            </button>
          </div>

          <button className="flex items-center justify-center text-center w-full gap-2 px-4 py-2 border rounded-md hover:bg-gray-50">
            <HiHeart className="h-5 w-5" />
            <span>Wishlist</span>
          </button>
        </div>

        <button
          onClick={() => console.log("Add to cart:", quantity, "items")}
          className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
