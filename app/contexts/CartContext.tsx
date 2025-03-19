import { createContext, useContext } from "react";

type CartContextDTO = {};

const CartContext = createContext<CartContextDTO>({} as CartContextDTO);

export const useCartContext = () => {
  if (CartContext === undefined) {
    throw new Error(
      `Error at CartContext, You probably forgot to wrap the consumer component with the  CartProvider`
    );
  } else {
    return useContext(CartContext);
  }
};

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const value = {};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
