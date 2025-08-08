import AccountSetting from "@/components/AccountSetting";
import BrokenRegister from "@/components/BrokenRegister";
import EditInfo from "@/components/EditInfo";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const AccountManage = () => {
  const [activeTab, setActiveTab] = useState<
    | "Chỉnh sửa thông tin"
    | "Cài đặt tài khoản"
    | "Đăng ký Môi giới chuyên nghiệp"
  >("Chỉnh sửa thông tin");

  // Hàm mở thư viện ảnh

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-4">
        <TouchableOpacity
          className="border-b border-gray-200 pb-4"
          onPress={() => router.back()}
        >
          <View className="border rounded-full border-border w-10 h-10 flex justify-center items-center">
            <Feather name="x" size={24} color="black" />
          </View>
        </TouchableOpacity>

        <View className="my-4">
          <Text className="text-center font-semibold">Quản lý tài khoản</Text>
        </View>
      </View>

      {/* Tabs */}
      <View className="border-b border-gray-200">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          className="mt-4 mx-[-16px]"
        >
          {[
            "Chỉnh sửa thông tin",
            "Cài đặt tài khoản",
            "Đăng ký Môi giới chuyên nghiệp",
          ].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab as any)}
              className="px-4 pb-3"
              style={{
                borderBottomWidth: 2,
                borderBottomColor:
                  activeTab === tab ? "#ef4444" : "transparent",
              }}
            >
              <Text
                className={
                  activeTab === tab ? "font-bold text-text" : "text-gray-500"
                }
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Content */}
      <View className="flex-1 px-4">
        {activeTab === "Chỉnh sửa thông tin" && <EditInfo />}

        {activeTab === "Cài đặt tài khoản" && <AccountSetting />}

        {activeTab === "Đăng ký Môi giới chuyên nghiệp" && <BrokenRegister />}
      </View>
    </SafeAreaView>
  );
};

export default AccountManage;
