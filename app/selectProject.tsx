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

const projects = [
  "Vinhomes Central Park",
  "Masteri Thảo Điền",
  "Sunrise City",
  "The Manor",
  "Palm Heights",
  "City Garden",
];

const SelectProject = () => {
  const router = useRouter();
  const { provinceAddress, district, ward, street, project } =
    useLocalSearchParams<{
      provinceAddress?: string;
      district?: string;
      ward?: string;
      street?: string;
      project?: string;
    }>();

  const [selectedProject, setSelectedProject] = useState<string | null>(
    project || null
  );

  const handleSelect = (item: string) => {
    setSelectedProject(item);
    router.replace({
      pathname: "/selectAddress",
      params: {
        provinceAddress: provinceAddress ?? "",
        district: district ?? "",
        ward: ward ?? "",
        street: street ?? "",
        project: item,
      },
    });
  };

  const handleReset = () => {
    router.replace({
      pathname: "/selectAddress",
      params: {
        provinceAddress: provinceAddress ?? "",
        district: district ?? "",
        ward: ward ?? "",
        street: street ?? "",
        project: "",
      },
    });
  };

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
        <Text className="text-xl font-bold">Dự án</Text>
      </View>

      {/* Danh sách dự án */}
      <ScrollView>
        {projects.map((item) => {
          const isSelected = item === selectedProject;
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
      {selectedProject && (
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

export default SelectProject;
