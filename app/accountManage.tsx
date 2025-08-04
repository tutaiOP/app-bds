import { AntDesign, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const AccountManage = () => {
  const [text, setText] = useState("");

  const [activeTab, setActiveTab] = useState<
    | "Chỉnh sửa thông tin"
    | "Cài đặt tài khoản"
    | "Đăng ký Môi giới chuyên nghiệp"
  >("Chỉnh sửa thông tin");
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4">
        <TouchableOpacity
          className="border-b border-gray-200 pb-4"
          onPress={() => router.back()}
        >
          <View className="border rounded-full border-border w-10 h-10 flex justify-center items-center ">
            <Feather className="" name="x" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <View className="mt-4">
          <Text className="text-center font-semibold">Quản lý tài khoản</Text>
        </View>
        {/* Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 0 }}
          className="my-6 mx-[-16px] "
        >
          <TouchableOpacity
            onPress={() => setActiveTab("Chỉnh sửa thông tin")}
            style={{
              borderBottomWidth: 2,
              borderBottomColor:
                activeTab === "Chỉnh sửa thông tin" ? "#ef4444" : "#e5e7eb",
              padding: 16,
            }}
          >
            <Text
              className={
                activeTab === "Chỉnh sửa thông tin"
                  ? "font-bold text-text"
                  : "text-gray-500"
              }
            >
              Chỉnh sửa thông tin
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab("Cài đặt tài khoản")}
            style={{
              borderBottomWidth: 2,
              borderBottomColor:
                activeTab === "Cài đặt tài khoản" ? "#ef4444" : "#e5e7eb",
              padding: 16,
            }}
          >
            <Text
              className={
                activeTab === "Cài đặt tài khoản"
                  ? "font-bold text-text"
                  : "text-gray-500"
              }
            >
              Cài đặt tài khoản
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab("Đăng ký Môi giới chuyên nghiệp")}
            style={{
              borderBottomWidth: 2,
              borderBottomColor:
                activeTab === "Đăng ký Môi giới chuyên nghiệp"
                  ? "#ef4444"
                  : "#e5e7eb",
              padding: 16,
            }}
          >
            <Text
              className={
                activeTab === "Đăng ký Môi giới chuyên nghiệp"
                  ? "font-bold text-text"
                  : "text-gray-500"
              }
            >
              Đăng ký môi giới chuyên nghiệp
            </Text>
          </TouchableOpacity>
        </ScrollView>
        {activeTab === "Chỉnh sửa thông tin" && (
          <ScrollView className="">
            <Text className="text-lg font-bold">Thông tin cá nhân</Text>
          </ScrollView>
        )}

        {activeTab === "Cài đặt tài khoản" && (
          <ScrollView className="mx-[-16px] px-4">
            <Text className="text-lg font-bold">Đổi mật khẩu</Text>
            <Text className="py-4">
              Tài khoản của bạn chưa có mật khẩu. Cài đặt mật khảu của bạn
              <Text className="text-red-500"> tại đây.</Text>
            </Text>
            <View className=" shadow-lg border-t">
              <View className="flex-row justify-between items-center py-4">
                <Text className="text-lg font-semibold">
                  Yêu cầu khóa tài khoản
                </Text>
                <AntDesign name="down" size={24} color="black" />
              </View>
              <Text className="font-semibold mb-2">Nhập email hiện tại</Text>
              <View className="flex-row border border-border rounded-lg px-4 py-3 mb-4 ">
                <TextInput
                  value={text}
                  onChangeText={setText}
                  placeholder="Nhập SĐT chính hoặc email"
                  className="flex-1 text-[14px] text-black"
                  placeholderTextColor="#6B7280"
                />

                {text.length > 0 && (
                  <TouchableOpacity onPress={() => setText("")}>
                    <Feather name="x-circle" size={20} color="#999" />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </ScrollView>
        )}

        {activeTab === "Đăng ký Môi giới chuyên nghiệp" && (
          <ScrollView className="px-4">
            <Text className="text-base">Nội dung môi giới chuyên nghiệp</Text>
            {/* Các thành phần liên quan ở đây */}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default AccountManage;
