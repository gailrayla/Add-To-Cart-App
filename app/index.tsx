import { ScrollView, Text, View } from "react-native";
import { useCartContext } from "@/context/cartContext";
import { products } from "@/data/products";
import ProductList from "@/components/ProductList";
import CartItem from "@/components/CartItem";
import CartSummary from "@/components/CartSummary";

export default function HomeScreen() {
  const {
    cart,
    addToCart,
    removeFromCart,
    discountCode,
    setDiscountCode,
    discountedTotal,
  } = useCartContext();

  return (
    <ScrollView
      className="p-16"
      contentContainerStyle={{ paddingBottom: 100 }}
      keyboardShouldPersistTaps="handled"
    >
      <Text
        className="justify-center text-center mb-4 mt-4 font-semibold"
        style={{ fontSize: 32 }}
      >
        Meryenda{"\n"}ni Aling Nena
      </Text>
      <ProductList products={products} onAdd={addToCart} />
      <View className="mt-6">
        <Text className="text-xl font-bold mb-2">🛒 Cart ({cart.length})</Text>
        {cart.map((item, index) => (
          <CartItem
            key={index}
            name={item.productName}
            price={item.price}
            onRemove={() => removeFromCart(index)}
          />
        ))}
        <View className="mb-4 mt-4">
          <CartSummary
            total={discountedTotal}
            discountCode={discountCode}
            setDiscountCode={setDiscountCode}
          />
        </View>
      </View>
    </ScrollView>
  );
}
