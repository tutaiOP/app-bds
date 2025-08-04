import Notification from "@/components/Result/Notification";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type NotificationType =
  | "Hết hạn"
  | "Sắp hết hạn"
  | "Đang hiển thị"
  | "Chờ hiển thị"
  | "Chờ xuất bản"
  | "Chờ duyệt"
  | "Chờ thanh toán"
  | "Không duyệt"
  | "Đã hạ";

type NotificationItem = {
  id: string;
  title: string;
  date: string;
  type: NotificationType;
};

// Notification type filters (excluding "Tất cả")
const filterLabels: NotificationType[] = [
  "Hết hạn",
  "Sắp hết hạn",
  "Đang hiển thị",
  "Chờ hiển thị",
  "Chờ xuất bản",
  "Chờ duyệt",
  "Chờ thanh toán",
  "Không duyệt",
  "Đã hạ",
];

const notifications: NotificationItem[] = [
  {
    id: "2",
    title: "Thông báo cập nhập thông tin hóa đơn theo Nghị Định 70/2025/NĐ-CP",
    date: "11/07/2025",
    type: "Hết hạn",
  },
  {
    id: "3",
    title: "Bạn vừa nhận được khuyến mãi mới từ Batdongsan!",
    date: "10/07/2025",
    type: "Sắp hết hạn",
  },
  {
    id: "4",
    title: "Cập nhật thông tin tài khoản thành công",
    date: "05/07/2025",
    type: "Chờ xuất bản",
  },
  {
    id: "5",
    title: "Đây là một thông báo khác không thuộc các mục chính",
    date: "03/07/2025",
    type: "Chờ thanh toán",
  },
  {
    id: "6",
    title: "Đây là một thông báo khác không thuộc các mục chính",
    date: "03/07/2025",
    type: "Chờ thanh toán",
  },
];

const post = () => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<string>("Tất cả");

  // Create filter items with count
  const filters = [
    { label: "Tất cả", count: notifications.length },
    ...filterLabels.map((label) => ({
      label,
      count: notifications.filter((n) => n.type === label).length,
    })),
  ];

  const filteredNotifications =
    activeFilter === "Tất cả"
      ? notifications
      : notifications.filter((n) => n.type === activeFilter);

  const handleFilterPress = (label: string) => {
    setActiveFilter(label);
  };
  const renderNotification = ({ item }: { item: NotificationItem }) => (
    <TouchableOpacity
      onPress={() => router.push("/detailNotificationScreen")}
      className="flex-row  gap-3 items-start mt-4"
    >
      <View className="flex-row items-center gap-2 pt-1">
        <View className="w-2 h-2 rounded-full bg-red-500" />
        <View className="bg-gray-200 rounded-full p-2">
          <AntDesign name="notification" size={20} color="black" />
        </View>
      </View>

      <View
        style={{ paddingBottom: 8 }}
        className="flex-1 border-b border-gray-200 "
      >
        <View className="flex-row flex-wrap items-center gap-x-1">
          <Text className="text-sm font-semibold">Thông báo</Text>
          <Text className="text-gray-400">•</Text>
          <Text className="text-sm text-gray-400">{item.date}</Text>
        </View>
        <Text className="text-base font-bold mt-1">{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View className="px-4 mt-2">
        <View className="flex-row justify-between items-center">
          <View className="flex-row gap-4 items-center mt-4">
            <Text className="text-2xl font-bold">Quản lý tin</Text>
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
                Nhập mã tin hoặc tiêu đề tin
              </Text>
            </View>
          </TouchableOpacity>

          {/* Nút back */}
          <TouchableOpacity
            onPress={() => router.push("/filterPost")}
            className="w-12 h-12 bg-white border border-gray-200 rounded-full items-center justify-center"
          >
            <AntDesign name="filter" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {/* Filter Tabs */}
        <View className="  mx-[-16px]  border-b border-gray-200 px-4 py-4">
          <FlatList
            data={filters}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.label}
            ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
            renderItem={({ item }) => {
              const isActive = activeFilter === item.label;
              return (
                <TouchableOpacity
                  onPress={() => handleFilterPress(item.label)}
                  className={`flex-row  items-center px-4 py-2 rounded-3xl border ${
                    isActive
                      ? "bg-black border-black"
                      : "bg-white border-border"
                  }`}
                >
                  <Text
                    className={`text-sm font-medium ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {item.label} ({item.count})
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
      {/* Notification List or Empty */}
      {filteredNotifications.length === 0 ? (
        <Notification />
      ) : (
        <FlatList
          data={filteredNotifications}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 40 }}
          renderItem={renderNotification}
        />
      )}
    </SafeAreaView>
  );
};

export default post;
