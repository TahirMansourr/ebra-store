"use client";
import { useEffect, useState } from "react";
import Main from "../components/cart-page-compoenents.tsx/Main";
import { CartDTO } from "@/types";

const Cart = () => {
  const [cart, setCart] = useState<CartDTO | null>(null);
  async function fetchCart() {
    const res = await fetch(`http://localhost:3000/api/cart`);
    const fetchedCart = await res.json();
    console.log(fetchedCart.id);
    fetch(`https://fakestoreapi.com/carts/2`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCart(data);
      });
  }
  useEffect(() => {
    fetchCart();
  }, []);
  if (!cart) {
    return <h1>loading</h1>;
  }

  return <Main cart={cart} />;
};

export default Cart;
