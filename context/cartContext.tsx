import { useCart } from "@/hooks/useCart";
import { createContext, ReactNode, useContext } from "react";

// set up the context with the same shape as useCart's return value
const CartContext = createContext<ReturnType<typeof useCart> | null>(null);

// wraps the app and provides cart-related state and functions to all components
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const cart = useCart(); // use the custom hook

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

// custom hook to use the cart context from anywhere
export const useCartContext = () => {
  const context = useContext(CartContext);

  // just to make sure it's used inside <CartProvider>
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return context;
};
