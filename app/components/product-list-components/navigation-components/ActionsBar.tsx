"use client";
import CartProvider from "@/app/contexts/CartContext";
import { CgShoppingBag } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";
import ShoppingIconWithQuantity from "./ShoppingIconWithQuantity";

const ActionsBar = () => {
  return (
    <div className="actions-bar">
      <CiSearch size={25} />
      <RiAccountCircleLine size={25} />
      <CartProvider>
        <ShoppingIconWithQuantity />
      </CartProvider>
    </div>
  );
};

export default ActionsBar;
