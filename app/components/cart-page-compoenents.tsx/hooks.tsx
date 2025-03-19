"use client";
import { Product } from "@/types";
import { useEffect, useState } from "react";

const useGetProductsByIdArray = (productIdArray: number[]) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  //   console.log(products);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const productPromises = productIdArray.map((id) =>
          fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
            res.json()
          )
        );

        const fetchedProducts = await Promise.all(productPromises);
        setProducts(fetchedProducts);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch products"
        );
      } finally {
        setLoading(false);
      }
    };

    if (productIdArray.length > 0) {
      fetchProducts();
    }
  }, []);

  return { products, loading, error };
};

export default useGetProductsByIdArray;
