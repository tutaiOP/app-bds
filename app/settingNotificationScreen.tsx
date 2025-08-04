import {
  AntDesign,
  FontAwesome6,
  Ionicons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SettingNotificationScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <View className="px-4 pt-6 ">
        <View className="flex-row items-center gap-2 mb-4">
          <TouchableOpacity
            className="bg-white border border-gray-200 rounded-full p-1"
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-xl font-bold">Cài đặt thông báo</Text>
        </View>
      </View>
      <ScrollView
        style={{ backgroundColor: "#f3f4f6", flex: 1 }}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Thông tin chung */}
        <View className="mt-4  px-4 py-3">
          <Text className="text-base font-bold">
            Bạn đang cho phép nhận thông báo từ ứng dụng Diaocphongthuy.com
          </Text>
        </View>

        {/* Danh sách cài đặt thông báo */}
        <View className="px-4 pt-4">
          <View className="bg-white  p-4 rounded-xl shadow-sm border border-gray-200">
            <View className="flex-row gap-3 items-start mb-3">
              {/* Icon */}
              <View className="bg-green-100 rounded-full p-2 mt-1">
                <Ionicons name="newspaper-outline" size={24} color="green" />
              </View>

              {/* Nội dung */}
              <View className="flex-1 pb-2">
                <Text className=" font-semibold text-gray-700">Tin đăng</Text>
                <Text className="text-gray-500 text-sm  mt-1">
                  Quản lý tin đăng, hiệu quả của tin đăng của bạn
                </Text>
              </View>
            </View>
            <View className="flex-row gap-3 items-start mb-3">
              {/* Icon */}
              <View className="bg-gray-200 rounded-full p-2 mt-1">
                <FontAwesome6
                  name="money-check-dollar"
                  size={20}
                  color="purple"
                />
              </View>

              {/* Nội dung */}
              <View className="flex-1 pb-2">
                <Text className=" font-semibold text-gray-700">Tài chính</Text>
                <Text className="text-gray-500 text-sm  mt-1">
                  Thay đổi số dư tài khoản, cập nhập trạng thái giao dịch
                </Text>
              </View>
            </View>
            <View className="flex-row gap-3 items-start mb-3">
              {/* Icon */}
              <View
                style={{ backgroundColor: "#fee2e2" }}
                className=" rounded-full p-2 mt-1"
              >
                <Octicons name="tag" size={24} color="red" />
              </View>

              {/* Nội dung */}
              <View className="flex-1 pb-2">
                <Text className=" font-semibold text-gray-700">Khuyến mãi</Text>
                <Text className="text-gray-500 text-sm  mt-1">
                  Chương trình/ tin tức khuyến mãi
                </Text>
              </View>
            </View>
            <View className="flex-row gap-3 items-start mb-3">
              {/* Icon */}
              <View className="bg-gray-200 rounded-full p-2 mt-1">
                <MaterialIcons name="account-circle" size={24} color="black" />
              </View>

              {/* Nội dung */}
              <View className="flex-1 pb-2">
                <Text className=" font-semibold text-gray-700">Tài khoản</Text>
                <Text className="text-gray-500 text-sm  mt-1">
                  Thay đổi, cập nhập thông tin liên quan đến tài khoản của bạn
                </Text>
              </View>
            </View>
            <View className="flex-row gap-3 items-start">
              {/* Icon */}
              <View className="bg-gray-200 rounded-full p-2 mt-1">
                <AntDesign name="notification" size={20} color="blue" />
              </View>

              {/* Nội dung */}
              <View className="flex-1 pb-2">
                <Text className=" font-semibold text-gray-700">Khác</Text>
                <Text className="text-gray-500 text-sm  mt-1">
                  Thông báo lịch nghỉ lễ tết, gia hạn gói hội viên, tài khoản
                  pro...
                </Text>
              </View>
            </View>
          </View>
          <View className="mt-4">
            <Text className="text-center">
              Để tắt thông báo, vui lòng truy cập vào cài đặt ứng dụng trên
              thiết bị của bạn
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingNotificationScreen;
