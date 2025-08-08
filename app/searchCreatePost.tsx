import { Ionicons, Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const addresses = [
  { street: "Đường 19", district: "Quận 2", province: "Khu đô thị mới" },
  {
    street: "Đường 19",
    district: "TP. Thủ Đức",
    province: "Khu công nghệ cao",
  },
  {
    street: "Đường Nguyễn Văn Linh",
    district: "Quận 7",
    province: "Phú Mỹ Hưng",
  },
  {
    street: "Đường Lê Văn Việt",
    district: "Quận 9",
    province: "Khu đô thị Sala",
  },
  {
    street: "Đường Võ Văn Ngân",
    district: "TP. Thủ Đức",
    province: "Khu dân cư",
  },
  {
    street: "Đường Mai Chí Thọ",
    district: "Quận 2",
    province: "Vinhomes Grand Park",
  },
  {
    street: "Đường Nguyễn Duy Trinh",
    district: "Quận 2",
    province: "Khu biệt thự",
  },
  {
    street: "Đường Lê Đức Thọ",
    district: "Quận Gò Vấp",
    province: "Trung tâm thương mại",
  },
  {
    street: "Đường Phạm Văn Đồng",
    district: "Quận Bình Thạnh",
    province: "Khu dân cư cao cấp",
  },
  {
    street: "Đường Xa lộ Hà Nội",
    district: "Quận 9",
    province: "Khu công nghiệp",
  },
];
const SearchCreatePost = () => {
  //   const handleAddressPress = (address) => {
  //   console.log('Đã chọn:', address);
  //   // Thêm logic xử lý khi chọn địa chỉ ở đây
  //   // Ví dụ: navigation.navigate('Map', { address })
  // };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row justify-center items-center gap-2  p-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-12 h-12 rounded-full border border-gray-200 flex justify-center items-center shadow-black"
        >
          <Octicons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <View className="flex-1 items-center justify-center px-4 py-2  border border-border rounded-[28px]">
          <View className="flex-row items-center justify-center gap-2">
            <Ionicons name="search-outline" size={24} color="black" />
            <View className="flex-1 ml-2 flex-row">
              <Text className="text-base text-gray-500">Nhập địa chỉ</Text>
            </View>
            <TouchableOpacity>
              <Text className="text-lg font-bold">x</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView className="mx-4 bg-white">
        <View className=" ">
          {addresses.map((address, index) => (
            <TouchableOpacity
              key={index}
              className={`py-4  ${index !== addresses.length - 1 ? "border-b border-gray-100" : ""}`}
              activeOpacity={0.7}
              //      onPress={() => handleAddressPress(address)}
            >
              <Text className="">
                <Text className="font-semibold">{address.street}</Text>,{" "}
                {address.district}
                <Text className=""> - {address.province}</Text>
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="items-center mt-4">
          {/* Thêm items-center để căn giữa */}
          <Text className="text-gray-500 mb-2">Hoặc</Text>
          <TouchableOpacity
            onPress={() => router.push("/selectAddress")}
            className="px-6 py-3 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <Text className="font-bold">Chọn địa chỉ</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchCreatePost;
