import { Ionicons, Octicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const provinces = [
  "Hồ Chí Minh",
  "Hà Nội",
  "Đà Nẵng",
  "Bình Dương",
  "Đồng Nai",
];

const SelectProvince = () => {
  const router = useRouter();
  const { provinceAddress } = useLocalSearchParams<{
    provinceAddress?: string;
  }>();
  const [selectedProvince, setSelectedProvince] = useState<string | null>(
    provinceAddress || null
  );
  const [search, setSearch] = useState("");

  const handleSelect = (province: string) => {
    setSelectedProvince(province);
    router.replace({
      pathname: "/selectAddress",
      params: { provinceAddress: province },
    });
  };

  const handleReset = () => {
    setSelectedProvince(null);
  };

  const filtered = provinces.filter((p) =>
    p.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center gap-4 p-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full border border-gray-200 justify-center items-center"
        >
          <Octicons name="x" size={20} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-bold">Tỉnh/ Thành</Text>
      </View>

      {/* Search */}
      <View className="px-4">
        <View className="flex-row items-center border border-gray-300 rounded-full px-4 bg-white mb-2">
          <Ionicons name="search" size={18} color="#9CA3AF" />
          <TextInput
            placeholder="Tìm kiếm"
            placeholderTextColor="#9CA3AF"
            value={search}
            onChangeText={setSearch}
            className="flex-1 py-3 text-[15px] text-gray-800 ml-2"
          />
        </View>
      </View>

      {/* Danh sách */}
      <ScrollView className="flex-1">
        {filtered.map((item) => {
          const isSelected = item === selectedProvince;
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

      {/* Nút bỏ chọn */}
      {selectedProvince && (
        <View className="px-4 py-3 border-t border-gray-200 bg-white">
          <TouchableOpacity
            onPress={() => {
              handleReset();
              router.replace({
                pathname: "/selectAddress",
                params: { provinceAddress: "" },
              });
            }}
            className="rounded-full border border-black py-3 items-center justify-center"
          >
            <Text className="text-black font-semibold text-base">Bỏ chọn</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SelectProvince;
