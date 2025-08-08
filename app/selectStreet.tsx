import { Octicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const streets = [
  "Đường Lê Lợi",
  "Đường Nguyễn Huệ",
  "Đường CMT8",
  "Đường Trần Hưng Đạo",
  "Đường Võ Văn Tần",
];

const SelectStreet = () => {
  const router = useRouter();
  const { provinceAddress, district, ward, street } = useLocalSearchParams<{
    provinceAddress?: string;
    district?: string;
    ward?: string;
    street?: string;
  }>();

  const [selectedStreet, setSelectedStreet] = useState<string | null>(
    street || null
  );

  const handleSelect = (item: string) => {
    setSelectedStreet(item);
    router.replace({
      pathname: "/selectAddress",
      params: {
        provinceAddress,
        district,
        ward,
        street: item,
      },
    });
  };

  const handleReset = () => {
    router.replace({
      pathname: "/selectAddress",
      params: {
        provinceAddress,
        district,
        ward,
        street: "",
      },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center gap-4 p-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full border border-gray-200 justify-center items-center"
        >
          <Octicons name="x" size={20} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-bold">Đường/Phố</Text>
      </View>

      <ScrollView>
        {streets.map((item) => {
          const isSelected = item === selectedStreet;
          return (
            <TouchableOpacity key={item} onPress={() => handleSelect(item)}>
              <View className="flex-row justify-between items-center px-4 py-4 border-b border-gray-100">
                <Text className="text-[16px] text-gray-800">{item}</Text>
                <View
                  className={`w-5 h-5 rounded-full border items-center justify-center ${
                    isSelected ? "border-black" : "border-gray-300"
                  }`}
                >
                  {isSelected && (
                    <View className="w-3 h-3 rounded-full bg-black" />
                  )}
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {selectedStreet && (
        <View className="px-4 py-3 border-t border-gray-200 bg-white">
          <TouchableOpacity
            onPress={handleReset}
            className="rounded-full border border-black py-3 items-center justify-center"
          >
            <Text className="text-black font-semibold text-base">Bỏ chọn</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SelectStreet;
