import NotificationModal from "@/components/Modal/Notification";
import Notification from "@/components/Result/Notification";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Define notification types
type NotificationType =
  | "Tin đăng"
  | "Tài chính"
  | "Khuyến mãi"
  | "Tài khoản"
  | "Khác";

type NotificationItem = {
  id: string;
  title: string;
  date: string;
  type: NotificationType;
};

// Notification type filters (excluding "Tất cả")
const filterLabels: NotificationType[] = [
  "Tin đăng",
  "Tài chính",
  "Khuyến mãi",
  "Tài khoản",
  "Khác",
];

const notifications: NotificationItem[] = [
  {
    id: "2",
    title: "Thông báo cập nhập thông tin hóa đơn theo Nghị Định 70/2025/NĐ-CP",
    date: "11/07/2025",
    type: "Tài chính",
  },
  {
    id: "3",
    title: "Bạn vừa nhận được khuyến mãi mới từ Batdongsan!",
    date: "10/07/2025",
    type: "Khuyến mãi",
  },
  {
    id: "4",
    title: "Cập nhật thông tin tài khoản thành công",
    date: "05/07/2025",
    type: "Tài khoản",
  },
  {
    id: "5",
    title: "Đây là một thông báo khác không thuộc các mục chính",
    date: "03/07/2025",
    type: "Khác",
  },
];

const NotificationScreen = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Tất cả");
  const [modalVisible, setModalVisible] = useState(false);

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
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View className="px-4 mt-6">
          {/* Header */}
          <View className="flex-row justify-between items-center">
            <View className="flex-row gap-2 items-center">
              <TouchableOpacity
                className="bg-white border border-gray-200 rounded-full p-1"
                onPress={() => router.back()}
              >
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
              <Text className="text-xl font-bold">Thông báo</Text>
            </View>
            <View className="flex-row gap-2">
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                className="bg-white border border-gray-200 rounded-full p-1"
              >
                <Feather name="check" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.push("/settingNotificationScreen")}
                className="bg-white border border-gray-200 rounded-full p-1"
              >
                <AntDesign name="setting" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          {/* Filter Tabs */}
          <View className="mt-4  mx-[-16px] border-t border-b border-gray-200 px-4 py-4">
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
                    {item.count > 0 && (
                      <View className="w-5 h-5 rounded-full bg-red-500 items-center justify-center mr-2">
                        <Text className="text-white text-xs font-bold">
                          {item.count}
                        </Text>
                      </View>
                    )}
                    <Text
                      className={`text-sm font-medium ${
                        isActive ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {item.label}
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
      <NotificationModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={() => {
          console.log("Xác nhận được bấm");
          setModalVisible(false);
        }}
      />
    </>
  );
};

export default NotificationScreen;
