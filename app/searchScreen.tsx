// Modified Searchscreen with reset on tab change

import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome6,
  Ionicons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const popularSearchesMua = [
  { name: "Quận Tân Phú", count: 31746 },
  { name: "Quận 7", count: 31541 },
  { name: "Quận Bình Thạnh", count: 27287 },
  { name: "Thành Phố Thủ Đức", count: 23775 },
  { name: "Quận Gò Vấp", count: 22426 },
  { name: "Quận 12", count: 18922 },
  { name: "Quận 2", count: 18527 },
  { name: "Quận 9", count: 18399 },
  { name: "Quận Bình Tân", count: 18099 },
  { name: "Quận Tân Bình", count: 18070 },
];

const popularSearchesThue = [
  { name: "Quận Bình Thạnh", count: 26684 },
  { name: "Quận 7", count: 16882 },
  { name: "Quận 2", count: 14717 },
  { name: "Quận Tân Bình", count: 13485 },
  { name: "Quận Gò Vấp", count: 12991 },
  { name: "Quận 3", count: 12474 },
  { name: "Quận 1", count: 12204 },
  { name: "Quận 10", count: 10693 },
  { name: "Thành Phố Thủ Đức", count: 10678 },
  { name: "Quận Phú Nhuận", count: 10021 },
];

const Searchscreen = () => {
  const [index, setIndex] = useState(0);
  const [selectedDistrictsMua, setSelectedDistrictsMua] = useState<string[]>(
    []
  );
  const [selectedDistrictsThue, setSelectedDistrictsThue] = useState<string[]>(
    []
  );
  const [activeTab, setActiveTab] = useState<"mua" | "thue">("mua");

  const translateY = useRef(new Animated.Value(10)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const displayedData =
    activeTab === "mua" ? popularSearchesMua : popularSearchesThue;
  const selectedDistricts =
    activeTab === "mua" ? selectedDistrictsMua : selectedDistrictsThue;

  const rotatingTexts = ["Dự án", "Quận, huyện", "Phường, xã", "Đường phố"];

  useEffect(() => {
    animateText();
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
      animateText();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const animateText = () => {
    translateY.setValue(10);
    opacity.setValue(0);

    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleTabChange = (tab: "mua" | "thue") => {
    setActiveTab(tab);
    setSelectedDistrictsMua([]);
    setSelectedDistrictsThue([]);
  };

  const toggleDistrict = (name: string) => {
    const updateFn =
      activeTab === "mua" ? setSelectedDistrictsMua : setSelectedDistrictsThue;
    const districts =
      activeTab === "mua" ? selectedDistrictsMua : selectedDistrictsThue;

    if (districts.includes(name)) {
      updateFn(districts.filter((d) => d !== name));
    } else if (districts.length < 3) {
      updateFn([...districts, name]);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Header */}
      <View className="flex-row mt-10 mb-6 px-4">
        <TouchableOpacity onPress={() => router.back()}>
          <View className="border rounded-full bg-white border-border w-10 h-10 justify-center items-center">
            <Feather name="x" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <View className="flex-1 justify-center items-center">
          <View className="flex-row justify-center items-center mb-4">
            <TouchableOpacity
              onPress={() => handleTabChange("mua")}
              className={`py-2 px-4 rounded-full mr-2 ${
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
              onPress={() => handleTabChange("thue")}
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
          Tìm BĐS ở <Text className="underline">Hồ Chí Minh</Text>
        </Text>
        <FontAwesome6 name="pen-to-square" size={16} color="black" />
      </TouchableOpacity>

      {/* Content */}
      <View className="flex-1 bg-white rounded-t-3xl overflow-hidden">
        <ScrollView
          className="px-4"
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Search Box */}
          <View className="px-4 py-2 mt-4 border border-border rounded-[28px]">
            <View className="flex-row items-center gap-2">
              <Ionicons name="search-outline" size={24} color="black" />
              {selectedDistricts.length === 0 ? (
                <View className="flex-1 ml-2 flex-row">
                  <Text className="text-base text-gray-500">Thêm </Text>
                  <Animated.Text
                    className="text-base text-gray-500"
                    style={{ opacity, transform: [{ translateY }] }}
                  >
                    {rotatingTexts[index]}
                  </Animated.Text>
                </View>
              ) : (
                <View className="flex-row flex-wrap gap-2 ml-2 flex-1">
                  {selectedDistricts.map((name) => (
                    <View
                      key={name}
                      className="flex-row items-center bg-black px-4 py-2 rounded-full"
                    >
                      <Text className="text-white mr-2 text-sm">{name}</Text>
                      <TouchableOpacity onPress={() => toggleDistrict(name)}>
                        <AntDesign name="close" size={12} color="white" />
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              )}
            </View>
          </View>

          {selectedDistricts.length === 3 && (
            <Text className="text-sm mt-2 mb-6 text-red-500">
              Chọn tối đa 3
            </Text>
          )}

          <Text className="font-semibold mb-4 mt-2">Xu hướng tìm kiếm</Text>

          {displayedData.map((item) => (
            <TouchableOpacity
              key={item.name}
              onPress={() => toggleDistrict(item.name)}
              className="flex-row justify-between items-center mb-4"
            >
              <View className="flex-row gap-2">
                <View className="w-10 h-10 rounded-full bg-border justify-center items-center">
                  <Entypo name="flash" size={20} color="white" />
                </View>
                <View>
                  <Text className="font-semibold ">{item.name}</Text>
                  <Text className="text-text">
                    {item.count.toLocaleString("vi-VN")} lượt tìm kiếm
                  </Text>
                </View>
              </View>
              {selectedDistricts.includes(item.name) && (
                <AntDesign name="check" size={16} color="black" />
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Footer */}
        <View className="absolute bottom-0 left-0 right-0 bg-white px-5 pt-4 pb-6 border-t border-gray-200">
          <TouchableOpacity className="py-3 flex justify-center items-center bg-secondary rounded-full">
            <Text className="text-white font-bold">Tìm kiếm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Searchscreen;
