import { createContext, useContext, useEffect, useState } from "react";
import { cartItems } from "../data/cartData";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(cartItems);

  console.log(cartItem);
  useEffect(() => {
    setCartItem((prev) => prev);
  }, [cartItem]);

  const value = {
    cartItem,
    setCartItem,
  };
  return (
    <CartContext.Provider value={value}>
      <div>{children}</div>
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
