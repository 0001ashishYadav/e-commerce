import { createContext, useContext } from "react";

const CartContext = createContext({
  addToCart: (item) => {},
});

export const CartProvider = CartContext.Provider;

export default function useCart() {
  return useContext(CartContext);
}
