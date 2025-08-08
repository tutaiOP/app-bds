import { Octicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const districts = [
  "Quận 1",
  "Quận 2",
  "Quận 3",
  "Quận 4",
  "Thủ Đức",
  "Bình Thạnh",
];

const SelectDistrict = () => {
  const router = useRouter();
  const { provinceAddress, district } = useLocalSearchParams<{
    provinceAddress?: string;
    district?: string;
  }>();

  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(
    district || null
  );

  // ✅ Sync lại nếu district param thay đổi
  useEffect(() => {
    if (district) {
      setSelectedDistrict(district);
    }
  }, [district]);

  const handleSelect = (item: string) => {
    setSelectedDistrict(item);
    router.replace({
      pathname: "/selectAddress",
      params: {
        provinceAddress: provinceAddress ?? "",
        district: item,
      },
    });
  };

  const handleReset = () => {
    router.replace({
      pathname: "/selectAddress",
      params: {
        provinceAddress: provinceAddress ?? "",
        district: "",
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
        <Text className="text-xl font-bold">Quận/ Huyện</Text>
      </View>

      <ScrollView>
        {districts.map((item) => {
          const isSelected = item === selectedDistrict;
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

      {selectedDistrict && (
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

export default SelectDistrict;
