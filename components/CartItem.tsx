import { Text, TouchableOpacity, View } from "react-native";

export default function CartItem({
  name,
  price,
  onRemove,
}: {
  name: string;
  price: number;
  onRemove: () => void;
}) {
  return (
    <View className="flex-row justify-between items-center mb-2">
      <Text>{name}</Text>
      <View className="flex-row gap-2 items-center">
        <Text>₱{price}</Text>
        <TouchableOpacity
          className="bg-teal-500 rounded px-2 py-1"
          onPress={onRemove}
        >
          <Text className="text-white text-sm">Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
