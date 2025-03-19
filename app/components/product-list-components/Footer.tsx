"use client";
import { Product } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

const Footer = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/1");
        if (!response.ok) throw new Error("Failed to fetch product");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, []);

  return (
    <footer className="w-full bg-gray-100 shrink-0 mb-0 mt-4">
      <div className="relative w-full h-[200px] md:h-[300px]">
        {!isLoading && product ? (
          <>
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover brightness-50"
              sizes="100vw"
            />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="text-white text-center w-full max-w-4xl">
                <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
                  Join Our Newsletter
                </h2>
                <p className="text-base md:text-xl mb-4 md:mb-6">
                  Sign up for deals, new products and promotions
                </p>
                <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2 sm:gap-0">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full sm:w-auto flex-1 px-4 py-2 rounded-md sm:rounded-r-none text-black focus:outline-none"
                  />
                  <button className="w-full sm:w-auto bg-black text-white px-6 py-2 rounded-md sm:rounded-l-none hover:bg-gray-800 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="animate-pulse bg-gray-200 w-full h-full" />
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
