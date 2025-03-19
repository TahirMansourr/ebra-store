"use client";
import { useEffect, useState } from "react";
import ProductsSection from "./components/product-list-components/all-products-components/ProductsSection";
import Hero from "./components/product-list-components/Hero";
import NavBar from "./components/product-list-components/navigation-components/NavBar";
import { FilterProvider } from "./contexts/FilterContext";
import { Product } from "@/types";

export default function Home() {
  const [products, setProducts] = useState<Product[] | null>(null);

  async function fetchProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    setProducts(products);
  }

  async function setCartCookie() {
    await fetch(`http://localhost:3000/api/cart`);
  }

  useEffect(() => {
    setCartCookie();
    fetchProducts();
  }, []);

  if (!products) return <div>Loading...</div>;

  const productToShow = products[2];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 p-[20px] md:px-[160px]">
        <NavBar />
        <Hero product={productToShow} />
        <FilterProvider products={products}>
          <ProductsSection />
        </FilterProvider>
      </div>
    </div>
  );
}
