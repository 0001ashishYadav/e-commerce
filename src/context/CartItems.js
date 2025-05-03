import { createContext, useContext } from "react";

const CartContext = createContext();

export const CartProvider = CartContext.Provider;

export default function useCart() {
  return useContext(CartContext);
}
