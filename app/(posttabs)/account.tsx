import FloatingActionButton from "@/components/FloatingActionButtonProps ";

import ScreenWrapper from "@/components/ScreenWrapper";
import { AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const sections = [
  {
    label: "Quản lý tin đăng",
    icon: <Entypo name="news" size={20} color="black" />,
    children: [
      "Đăng mới",
      "Danh sách tin",
      "Tin nháp",
      "Danh sách tin tài trợ",
    ],
  },
  {
    label: "Quản lý khách hàng",
    icon: <Feather name="users" size={20} color="black" />,
    badge: "Mới",
  },
  {
    label: "Gói hội viên",
    icon: <Feather name="user-check" size={20} color="black" />,
    badge: "Tiết kiệm đến 39%",
    children: ["Quản lý gói của bạn"],
  },
  {
    label: "Quản lý tài chính",
    icon: <Feather name="user-check" size={20} color="black" />,

    children: ["Thông tin số dư", "Lịch sử giao dịch", "Nhóm khuyến mãi"],
  },
  {
    label: "Báo giá và Hướng dẫn",
    icon: <Feather name="user-check" size={20} color="black" />,

    children: ["Báo giá", "Hướng dẫn thanh toán", "Hướng dẫn sử dụng"],
  },
  {
    label: "Tiện ích",
    icon: <Feather name="user-check" size={20} color="black" />,

    children: ["Cài đặt thông báo", "Yêu cầu khóa tài khoản", "Đăng xuất"],
  },
];

const Account = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <>
      <ScreenWrapper>
        {/* Thông tin người dùng */}
        <View className="flex-row justify-between items-center mb-4">
          <View className="flex-row gap-4 items-center">
            <Image
              className="rounded-full"
              source={require("../../assets/images/AI.jpg")}
              style={{ width: 56, height: 56 }}
            />
            <View className="gap-1">
              <Text className="text-2xl font-bold">Hồ Tú Tài</Text>
              <Text className="text-gray-500">0 điểm</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/notificationScreen")}
            className="relative"
          >
            <Ionicons name="notifications-outline" size={24} color="black" />
            <View
              style={{ top: -4, right: -3 }}
              className="absolute w-4 h-4 items-center justify-center rounded-full bg-red-500"
            >
              <Text className="font-bold text-xs text-white">4</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Số dư tài khoản */}
        <View className="bg-gray-200 rounded-lg p-4">
          <Text className="mb-3">Số dư tài khoản</Text>
          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-500">TK tin đăng</Text>
            <Text>0</Text>
          </View>
          <View className="flex-row justify-between mb-3">
            <Text className="text-gray-500">TK khuyến mãi</Text>
            <Text>0</Text>
          </View>
          <View className="bg-white rounded-lg p-4">
            <View className="flex-row gap-1 items-center">
              <Text className="bg-red-500 px-2 py-1 text-sm rounded-lg text-white">
                Mới
              </Text>
              <Text className="text-gray-500">Số tài khoản định danh</Text>
            </View>
            <View className="mt-2 flex-row justify-between items-center">
              <Text className="font-bold">BDSVN026815548</Text>
              <Feather name="copy" size={22} color="black" />
            </View>
          </View>
        </View>

        {/* Danh mục tính năng */}
        <View className="mt-6">
          {sections.map((section, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <View key={index}>
                <TouchableOpacity
                  onPress={() =>
                    section.children &&
                    setExpandedIndex(isExpanded ? null : index)
                  }
                  className="flex-row justify-between items-center mb-4"
                >
                  <View className="flex-row items-center gap-2 ">
                    {section.icon}
                    <Text className="text-lg ">{section.label}</Text>
                  </View>

                  <View className="flex-row items-center gap-2">
                    {section.badge && (
                      <View
                        className={`px-2 py-[1px] rounded-full ${
                          section.badge.includes("Mới")
                            ? "bg-red-700"
                            : "bg-red-100"
                        }`}
                      >
                        <Text
                          className={`text-xs font-medium ${
                            section.badge.includes("Mới")
                              ? "text-white"
                              : "text-red-600"
                          }`}
                        >
                          {section.badge}
                        </Text>
                      </View>
                    )}
                    {section.children && (
                      <AntDesign
                        name={isExpanded ? "up" : "down"}
                        size={20}
                        color="black"
                      />
                    )}
                  </View>
                </TouchableOpacity>

                {isExpanded && section.children && (
                  <View className="mt-3  pl-7">
                    {section.children.map((child, idx) => (
                      <Text key={idx} className="text-lg mb-4 ">
                        {child}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            );
          })}
        </View>
        <View className="mt-2">
          <Text className="text-gray-500 text-center">
            Phiên bản: 3.105.2 (3258)
          </Text>
        </View>
      </ScreenWrapper>

      <FloatingActionButton
        text="Chuyển sang tìm kiếm"
        icon="arrow-right-arrow-left"
        onPress={() => router.push("/(tabs)/searchnav")}
      />
    </>
  );
};

export default Account;
