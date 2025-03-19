"use client";
import { useCartContext } from "@/app/contexts/CartContext";
import { CgShoppingBag } from "react-icons/cg";
import { useEffect, useState } from "react";
import Link from "next/link";

const ShoppingIconWithQuantity = () => {
  const { cartItems } = useCartContext();
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const totalQuantity = cartItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    setItemCount(totalQuantity);
  }, [cartItems]);

  return (
    <Link href="/cart" className="relative inline-block cursor-pointer">
      <CgShoppingBag className="w-6 h-6" />
      {itemCount > 0 && (
        <div className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {itemCount}
        </div>
      )}
    </Link>
  );
};

export default ShoppingIconWithQuantity;
