import { products } from "@/data/products";
import { useMemo, useState } from "react";

// this hook handles all the cart logic
export function useCart() {
  // stores the items added to cart
  const [cart, setCart] = useState<typeof products>([]);

  // tracks the user's discount code input
  const [discountCode, setDiscountCode] = useState("");

  // adds a product to the cart array
  const addToCart = (product: (typeof products)[0]) => {
    setCart((prev) => [...prev, product]);
  };

  // removes a product from cart based on its index
  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // calculates the total price of all cart items
  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price, 0),
    [cart]
  );

  // checks if the discount code is valid
  const hasDiscount = discountCode === "discount10";

  // if valid, apply 10% discount
  const discountedTotal = hasDiscount ? total * 0.9 : total;

  return {
    cart,
    addToCart,
    removeFromCart,
    discountCode,
    setDiscountCode,
    total,
    discountedTotal,
    hasDiscount,
  };
}
