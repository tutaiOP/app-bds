import { AntDesign, EvilIcons, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Item = { label: string; image: any };

const items: Item[] = [
  { label: "Hà Nội", image: require("../assets/images/image-1.jpg") },
  { label: "Hồ Chí Minh", image: require("../assets/images/image-1.jpg") },
  { label: "Đà Nẵng", image: require("../assets/images/image-1.jpg") },
  { label: "Bình Dương", image: require("../assets/images/image-1.jpg") },
  { label: "Đồng nai", image: require("../assets/images/image-1.jpg") },
  { label: "Khánh hòa", image: require("../assets/images/image-1.jpg") },
];

// Chia thành 3 cột
const columns: Item[][] = [[], [], []];
items.forEach((item, index) => {
  columns[index % 3].push(item);
});

const listCity = [
  { name: "Hà Nội" },
  { name: "Hồ Chí Minh" },
  { name: "Đà Nẵng" },
  { name: "Bình Dương" },
  { name: "Đồng nai" },
  { name: "Khánh hòa" },
  { name: "An Giang" },
  { name: "Bà Rịa Vũng Tàu" },
  { name: "Bắc Giang" },
  { name: "Bắc Kạn" },
  { name: "Bạc Liêu" },
  { name: "Bắc Ninh" },
  { name: "Bến Tre" },
  { name: "Bình Định" },
];

const FindScreen = () => {
  const [activeTab, setActiveTab] = useState<"mua" | "thue">("mua");
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [activeCity, setActiveCity] = useState<string | null>(null);

  const screenWidth = Dimensions.get("window").width;

  // Auto chọn tỉnh nếu trùng
  useEffect(() => {
    const matched = listCity.find((city) =>
      items.some((item) => item.label === city.name)
    );
    if (matched) {
      setActiveCity(matched.name);
      setActiveItem(matched.name);
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <View className="flex-row mt-10 mb-6 px-4">
        <TouchableOpacity onPress={() => router.back()}>
          <View className="border rounded-full bg-white border-border w-10 h-10 justify-center items-center">
            <Feather name="x" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <View className="flex-1 justify-center items-center ">
          <View className="flex-row justify-center items-center mb-4 bg-gray-200 p-1 rounded-full ">
            <TouchableOpacity
              onPress={() => setActiveTab("mua")}
              className={`py-2 px-4 rounded-full  ${
                activeTab === "mua" ? "bg-black" : "bg-gray-200"
              }`}
            >
              <Text
                className={
                  activeTab === "mua" ? "text-white font-bold" : "text-black"
                }
              >
                Mua
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setActiveTab("thue")}
              className={`py-2 px-4 rounded-full ${
                activeTab === "thue" ? "bg-black" : "bg-gray-200"
              }`}
            >
              <Text
                className={
                  activeTab === "thue" ? "text-white font-bold" : "text-black"
                }
              >
                Thuê
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Location */}
      <TouchableOpacity
        onPress={() => router.push("/findScreen")}
        className="flex-row gap-2 justify-center items-center mb-4"
      >
        <Text className="text-xl font-bold">
          Tìm BĐS ở <Text>{activeCity ?? "..."}</Text>
        </Text>
      </TouchableOpacity>

      <View className="flex-1">
        <ScrollView
          className="px-4"
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Phổ biến */}
          <View>
            <Text className="text-base font-semibold">Phổ biến</Text>
          </View>

          <View className="flex-row justify-between my-4 gap-2">
            {columns.map((column, colIndex) => (
              <View key={colIndex} className="flex-1 gap-4 items-center">
                {column.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setActiveItem(item.label);
                      setActiveCity(item.label);
                    }}
                    className={`border w-full px-2 pt-2 pb-4 rounded-xl items-center ${
                      activeItem === item.label
                        ? "border-black border-2"
                        : "border-gray-200"
                    }`}
                  >
                    <View className="relative border border-gray-200 rounded-lg">
                      <Image
                        source={item.image}
                        className="p-[1px] rounded-lg"
                        style={{ width: 100, height: 60 }}
                      />
                      <View className="absolute left-[44%] -bottom-3">
                        <View className="w-6 h-6 bg-white shadow flex justify-center items-center rounded-full">
                          <EvilIcons name="location" size={18} color="black" />
                        </View>
                      </View>
                    </View>

                    <View className="mt-8">
                      <Text className="text-base font-bold">{item.label}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>

          {/* Danh sách tỉnh */}
          <View className="my-4">
            <Text className="text-text font-semibold">
              Danh sách tỉnh, thành phố
            </Text>
          </View>

          {listCity.map((item) => (
            <TouchableOpacity
              key={item.name}
              onPress={() => {
                setActiveCity(item.name);
                setActiveItem(item.name);
              }}
              className="flex-row justify-between items-center mb-4"
            >
              <View className="flex-row gap-2">
                <View className="w-10 h-10 rounded-full justify-center items-center">
                  <EvilIcons name="location" size={24} color="black" />
                </View>
                <View className="justify-center items-center">
                  <Text className="text-lg">{item.name}</Text>
                </View>
              </View>

              {activeCity === item.name && (
                <AntDesign name="check" size={16} color="black" />
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FindScreen;
