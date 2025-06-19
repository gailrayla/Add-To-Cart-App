import { Slot } from "expo-router";
import { CartProvider } from "@/context/cartContext";
import "../global.css";

export default function Layout() {
  return (
    <CartProvider>
      <Slot />
    </CartProvider>
  );
}
