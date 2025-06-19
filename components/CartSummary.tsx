import { Text, TextInput, View } from "react-native";

export default function CartSummary({
  total,
  discountCode,
  setDiscountCode,
}: {
  total: number;
  discountCode: string;
  setDiscountCode: (text: string) => void;
}) {
  return (
    <View className="mt-4">
      <Text className="font-bold text-lg">Total: ₱{total.toFixed(2)}</Text>
      <TextInput
        className="border border-gray-300 mt-2 rounded p-2"
        placeholder="Enter voucher code"
        value={discountCode}
        onChangeText={setDiscountCode}
      />
      {discountCode === "discount10" && (
        <Text className="text-rose-500 mt-2 font-semibold">
          10% discount applied!
        </Text>
      )}
    </View>
  );
}
