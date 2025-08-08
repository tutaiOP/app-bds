import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import clsx from "clsx";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const postnews = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [showAddressSearch, setShowAddressSearch] = useState(false);
  const [showDemand, setShowDemand] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  return (
    //  <VerityPhone />
    <SafeAreaView className="flex-1 bg-white">
      <View className="bg-white p-4">
        <View className="flex-row justify-between items-center">
          <Text className="font-bold text-2xl">Tạo tin đăng</Text>
          <View className="flex-row gap-4 items-center">
            <TouchableOpacity className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
              <AntDesign name="eyeo" size={24} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity className="border rounded-full px-4 py-3">
              <Text className="font-bold">Thoát</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="mt-6">
          <Text className="text-gray-500">Bước 1. Thông tin BĐS</Text>
          <View className="flex-row gap-1 justify-between mt-2">
            <View className="w-1/3 h-1 rounded-full bg-red-500"></View>
            <View className="w-1/3 h-1 rounded-full bg-gray-200"></View>
            <View className="w-1/3 h-1 rounded-full bg-gray-200"></View>
          </View>
        </View>
      </View>
      <ScrollView className="bg-gray-200">
        <View className="px-4 py-6">
          {/* Phần Nhu cầu */}
          <View className="bg-white p-4 rounded-xl">
            <TouchableOpacity
              onPress={() => setShowDemand(!showDemand)}
              className="flex-row justify-between items-center"
            >
              <Text className="font-bold">Nhu cầu</Text>
              <AntDesign name="down" size={20} color="black" />
            </TouchableOpacity>
            {showDemand && (
              <View className="flex-row gap-2 justify-between mt-4">
                <TouchableOpacity
                  className={clsx(
                    "w-1/2 items-start border rounded-xl p-4",
                    activeTab === "sell" ? "border-black" : "border-gray-200"
                  )}
                  onPress={() => {
                    setActiveTab("sell");
                    setShowAddressSearch(true);
                  }}
                >
                  <MaterialCommunityIcons
                    name="tag-outline"
                    size={24}
                    color="black"
                  />
                  <Text className="text-gray-500 mt-4">Bán</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className={clsx(
                    "w-1/2 items-start border rounded-xl p-4",
                    activeTab === "rent" ? "border-black" : "border-gray-200"
                  )}
                  onPress={() => {
                    setActiveTab("rent");
                    setShowAddressSearch(true);
                  }}
                >
                  <Octicons name="key" size={24} color="black" />
                  <Text className="text-gray-500 mt-4">Cho thuê</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* Phần Địa chỉ BĐS - Hiển thị khi có activeTab */}
          {showAddressSearch && (
            <View className="bg-white p-4 rounded-xl mt-4">
              <TouchableOpacity
                onPress={() => setShowSearch(!showSearch)}
                className="flex-row justify-between items-center"
              >
                <Text className="font-bold">Địa chỉ BĐS</Text>
                <AntDesign name="down" size={20} color="black" />
              </TouchableOpacity>
              {/* Search Box */}
              {!showSearch && (
                <View className="px-4 py-2 mt-4 border border-border rounded-[28px]">
                  <View className="flex-row items-center gap-2">
                    <Ionicons name="search-outline" size={24} color="black" />
                    <View className="flex-1 ml-2 flex-row">
                      <Text className="text-base text-gray-500">
                        Nhập địa chỉ
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </View>
          )}
        </View>
      </ScrollView>

      <View className="absolute bottom-0 right-0 left-0 p-4 bg-white">
        <TouchableOpacity className="bg-gray-200 rounded-full py-3">
          <Text className="text-gray-500 text-center">Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default postnews;
