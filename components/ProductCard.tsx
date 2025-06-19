import { Text, TouchableOpacity, View } from "react-native";

export default function ProductCard({
  name,
  description,
  price,
  onAdd,
}: {
  name: string;
  description: string;
  price: number;
  onAdd: () => void;
}) {
  return (
    <View className="bg-white rounded p-4 mb-4 shadow">
      <Text className="text-lg font-bold">{name}</Text>
      <Text className="text-gray-500">{description}</Text>
      <Text className="mt-1">₱{price}</Text>
      <TouchableOpacity
        className="mt-2 bg-rose-500 py-2 rounded"
        onPress={onAdd}
      >
        <Text className="text-white text-center">Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
