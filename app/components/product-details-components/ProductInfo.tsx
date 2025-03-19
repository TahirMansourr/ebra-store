"use client";

import { Product } from "@/types";
import { useEffect, useState } from "react";
import { HiHeart, HiMinus, HiPlus } from "react-icons/hi";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import CartProvider, { useCartContext } from "@/app/contexts/CartContext";
import AddToCart from "./AddToCart";

type Rating = {
  rating: number;
  count: number;
};

const ProductInfo = ({ product }: { product: Product }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
    <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg p-3 md:min-w-[80px]">
      <span className=" text-lg md:text-2xl font-bold">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  );

  const renderStars = (rating: Rating) => {
    return Array.from({ length: 5 }, (_, index) => {
      const number = index + 1;

      if (number <= rating.rating) {
        return <FaStar key={index} className="text-black w-5 h-5" />;
      } else if (number - 0.5 <= rating.rating) {
        return <FaStarHalfAlt key={index} className="text-black w-5 h-5" />;
      } else {
        return <FaRegStar key={index} className="text-black w-5 h-5" />;
      }
    });
  };

  return (
    <div className="flex flex-col w-full space-y-6">
      <div className="flex items-center gap-2">
        <div className="flex">{renderStars(product.rating)}</div>
        <span className="text-sm text-gray-600">
          ({product.rating.rating} out of 5 - {product.rating.count} reviews)
        </span>
      </div>

      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="text-gray-600">{product.description}</p>
      <h1 className="text-3xl font-bold">$ {product.price}</h1>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Offer Expires in:</h2>
        <div className="flex gap-2 md:gap-4">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Minutes" />
          <TimeBox value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
      <CartProvider>
        <AddToCart product={product} />
      </CartProvider>
    </div>
  );
};

export default ProductInfo;
