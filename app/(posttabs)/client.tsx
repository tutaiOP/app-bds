import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const client = () => {
  const router = useRouter();
  const [onlyUnread, setOnlyUnread] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View className="px-4 mt-2">
        <View className="flex-row justify-between items-center">
          <View className="flex-row gap-4 items-center mt-4">
            <Text className="text-2xl font-bold">Quản lý khách hàng</Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/notificationScreen")}
            className="relative"
          >
            <Ionicons name="notifications-outline" size={24} color="black" />
            <View
              style={{ top: -4, right: -3 }}
              className="absolute   w-4 h-4 flex items-center rounded-full bg-red-500"
            >
              <Text className="font-bold text-xs text-white">4</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="mt-3">
          <Text className="text-gray-500">
            Danh sách khách hàng đã có tương tác với tin đăng của bạn
          </Text>
        </View>
        <View className="flex-row items-center gap-3 mt-4 ">
          <TouchableOpacity
            onPress={() => router.push("/searchPostTabs")}
            className="flex-1 h-12 border border-border rounded-[28px] px-4 justify-center"
          >
            <View className="flex-row items-center">
              <Ionicons
                name="search-outline"
                size={20}
                color="black"
                className="mr-2"
              />
              <Text className="text-sm text-gray-500">
                Tìm theo tên KH, sđt hoặc email
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* Số lượng khách hàng Tabs */}
        <View className="flex-row justify-between items-center mt-3">
          <View>
            <Text className="text-gray-500">
              <Text className="font-bold">0</Text> khách hàng
            </Text>
          </View>

          <View className="flex-row items-center space-x-2">
            <Text className="text-gray-700">Chỉ chưa đọc</Text>
            <Switch
              className=""
              value={onlyUnread}
              onValueChange={setOnlyUnread}
              trackColor={{ false: "#ccc", true: "#16a34a" }} // màu xám khi tắt, xanh khi bật
              thumbColor={"white"}
              style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }} // tăng size 20%
            />
          </View>
        </View>
      </View>
      <ScrollView>
        <View className="pt-4 px-6 flex-col gap-3 justify-center items-center">
          <Image
            className="object-contain rounded-lg border-gray-200 border"
            source={require("../../assets/images/chua-co-khach-hang.png")}
            style={{ width: "100%", height: 200 }}
          />
          <View className="">
            <Text className="text-2xl font-bold">Chưa có khách hàng nào</Text>
          </View>
          <View>
            <Text className="text-base">Hiện tại chưa có khách hàng nào</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default client;
