import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SearchPostTabs = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View className="flex-1 px-4">
        <View className="flex-row items-center gap-3 mt-4 ">
          {/* Nút back */}
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-12 h-12 bg-white border border-gray-200 rounded-full items-center justify-center"
          >
            <Feather className="" name="x" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 h-12 border border-border rounded-[28px] px-4 justify-center">
            <View className="flex-row items-center">
              <Ionicons
                name="search-outline"
                size={20}
                color="black"
                className="mr-2"
              />
              <Text className="text-sm text-gray-500">
                Nhập mã tin hoặc tiêu đề tin
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 0,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View className="mt-6">
            <Text className="font-bold">Lịch sử tìm kiếm</Text>
            <View className="py-4 border-b border-gray-200">
              <Text>Đất nhà ở Hồ Chí Minh</Text>
            </View>
            <View className="py-4 border-b border-gray-200">
              <Text>Dự án đầu tư của SBGSC</Text>
            </View>
            <View className="py-4 border-b border-gray-200">
              <Text>Tin đăng từ năm 2025</Text>
            </View>
            <View className="py-4 border-b border-gray-200">
              <Text>Những dự án bất động sản nổi bật năm 2024-2025</Text>
            </View>
            <View className="py-4 border-b border-gray-200">
              <Text>Chung cư cho thuê giá rẻ ở quận Gò vấp</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View className="absolute bottom-0 left-0 right-0 h-10 bg-white" />
    </SafeAreaView>
  );
};

export default SearchPostTabs;
