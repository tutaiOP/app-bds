import Balance from "@/components/Modal/Balance";
import CustomDrawerModal from "@/components/Modal/CustomDrawerModal";
import {
  Entypo,
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import clsx from "clsx";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  LayoutAnimation,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const tabs = [
  {
    label: "Quan trọng",
    value: "important",
    icon: "fire",
    color: "text-red-500",
    badge: 0,
  },
  {
    label: "Thông tin",
    value: "info",
    icon: "file-text",
    color: "text-green-500",
    badge: 0,
  },
  {
    label: "Gợi ý",
    value: "suggest",
    icon: "heart",
    color: "text-teal-500",
    badge: 2,
  },
  {
    label: "Đã tạm ẩn",
    value: "hidden",
    icon: "eye-off",
    color: "text-gray-500",
    badge: 0,
  },
];

const options = [
  { label: "Mặc định", value: "default" },
  { label: "Tin tức thực tế xếp trước", value: "news_first" },
  { label: "Giá thấp đến cao", value: "low_to_high" },
  { label: "Giá cao đến thấp", value: "hight_to_low" },
  { label: "Giá/m² thấp đến cao", value: "m2low_to_high" },
  { label: "Giá/m² cao đến thấp", value: "m2high_to_lơ" },
  { label: "Diện tích nhỏ đến lớn", value: "small_to_large" },
  { label: "Diện tích lớn đến nhỏ", value: "large_to_small" },
];

const Overview = () => {
  const [activeTab, setActiveTab] = useState("important");
  const [modalVisible, setModalVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleChangeTab = (value: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setActiveTab(value);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "important":
        return (
          <View className="bg-gray-100 rounded-xl mt-4 p-4">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-red-500 font-bold">🔥 Quan trọng</Text>
              <View className="bg-red-500 rounded-full w-6 h-6 items-center justify-center">
                <Text className="text-white text-xs font-semibold">0</Text>
              </View>
            </View>
            <View className="bg-white rounded-lg p-3">
              <Text className="text-sm">
                Bạn đã cập nhật tất cả thông tin của ngày hôm nay 👏
              </Text>
            </View>
          </View>
        );
      case "info":
        return (
          <View className="bg-gray-100 rounded-xl mt-4 p-4">
            <Text className="text-green-600 font-bold mb-2">📄 Thông tin</Text>
            <View className="bg-white rounded-lg p-3">
              <Text className="text-sm">
                Bạn đã cập nhật tất cả thông tin của ngày hôm nay 👏
              </Text>
            </View>
          </View>
        );
      case "suggest":
        return (
          <View className="bg-gray-100 rounded-xl mt-4 p-4">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-teal-600 font-bold ">💡 Gợi ý</Text>
              <View className="bg-red-500 rounded-full w-6 h-6 items-center justify-center">
                <Text className="text-white text-xs font-semibold">0</Text>
              </View>
            </View>
            <View className="bg-white rounded-lg p-4 ">
              <Text className="text-teal-600 font-bold mb-2">💡 Gợi ý</Text>

              <Text className="font-bold text-xl">
                Làm quen với trang Tổng quan!
              </Text>
              <Text className="text-sm text-gray-700 mt-2 mb-4">
                Hướng dẫn bạn làm quen và thao tác với một số nội dung chính,
                giúp bạn có trải nghiệm tốt hơn.
              </Text>
              <View className="border-t border-gray-200 pt-4">
                <View className="flex-row  gap-2 items-center mb-4 ">
                  <FontAwesome5 name="user-circle" size={24} color="black" />
                  <Text className="font-bold flex-1 ">
                    Thông tin tổng quan về tài khoản của bạn
                  </Text>
                </View>
                <View className="flex-row  gap-2 items-center mb-4 ">
                  <FontAwesome5 name="user-circle" size={24} color="black" />
                  <Text className="font-bold flex-1 ">
                    Thông tin cá nhân hóa dành riêng cho bạn
                  </Text>
                </View>
                <View className="flex-row  gap-2 items-center mb-4 ">
                  <Feather name="eye-off" size={24} color="black" />
                  <Text className="font-bold flex-1 ">
                    Ẩn những thông tin mà bạn thấy không hữu ích
                  </Text>
                </View>
              </View>
              <TouchableOpacity className="mt-2 rounded-full border border-black p-2 items-center">
                <Text className="font-semibold">Xem hướng dẫn</Text>
              </TouchableOpacity>
            </View>

            {/* Lam quen voi diaocphongthuy */}
            <View className="bg-white rounded-lg p-4 mt-2 ">
              <Text className="text-teal-600 font-bold mb-2">💡 Gợi ý</Text>

              <Text className="font-bold text-lg mb-4">
                Làm quen với Diaocphongthuy.com
              </Text>
              <View className="border-t border-gray-200 pt-4">
                <TouchableOpacity className="flex-row gap-4 justify-between items-center mb-4">
                  <View className="flex-row gap-3 items-center flex-shrink">
                    <Entypo name="image" size={24} color="black" />
                    <View className="flex-shrink">
                      <Text className="font-bold flex-shrink text-sm">
                        Cập nhật tên và hình ảnh đại diện
                      </Text>
                      <Text className="text-sm">
                        Tên và hình ảnh sẽ xuất hiện ở tất cả các tin đăng của
                        bạn, điều đó sẽ giúp bạn cận người mua dễ dàng hơn.
                      </Text>
                    </View>
                  </View>
                  <Entypo name="chevron-small-right" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity className="flex-row gap-4 justify-between items-center mb-4">
                  <View className="flex-row gap-3 items-center flex-shrink">
                    <MaterialCommunityIcons
                      name="notebook"
                      size={24}
                      color="black"
                    />
                    <View className="flex-shrink">
                      <Text className="font-bold flex-shrink text-sm">
                        Khám pha sổ tay đăng tin
                      </Text>
                    </View>
                  </View>
                  <Entypo name="chevron-small-right" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity className="flex-row gap-4 justify-between items-center mb-4">
                  <View className="flex-row gap-3 items-center flex-shrink">
                    <Ionicons
                      name="add-circle-outline"
                      size={24}
                      color="black"
                    />
                    <View className="flex-shrink">
                      <Text className="font-bold flex-shrink text-sm">
                        Và bạn đã sẵn sàng để đăng tin đầu tiên. Bắt đầu ngay!
                      </Text>
                      <Text className="text-sm">
                        Diaocphongthuy.com tặng bạn một tin thường 15 ngày để
                        bắt đầu đăng tin.
                      </Text>
                    </View>
                  </View>
                  <Entypo name="chevron-small-right" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      case "hidden":
        return (
          <View className="bg-gray-100 rounded-xl mt-4 p-4">
            <Text className="text-gray-600 font-bold mb-2">🙈 Đã tạm ẩn</Text>
            <View className="bg-white rounded-lg p-3">
              <Text className="text-sm text-gray-400">
                Không có nội dung nào.
              </Text>
            </View>
          </View>
        );
    }
  };

  type Tab = {
    label: string;
    value: string;
    icon: string;
    color: string;
    badge: number;
  };

  const renderTabItem = ({ item }: { item: Tab }) => (
    <TouchableOpacity
      onPress={() => handleChangeTab(item.value)}
      className={clsx(
        "flex-row items-center px-4 py-2 rounded-full border mr-3",
        activeTab === item.value
          ? "bg-black border-black"
          : "bg-white border-gray-300"
      )}
    >
      <Text
        className={clsx(
          "text-sm font-medium",
          activeTab === item.value ? "text-white" : "text-black"
        )}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View className="flex-1 bg-white">
      {/* Phần header màu đỏ */}
      <View className="bg-red-500">
        <View className="px-4 pb-4 pt-16">
          {/* Header */}
          <TouchableOpacity
            onPress={() => setDrawerVisible(true)}
            className="mb-6 flex-row gap-3 items-center "
          >
            <Image
              className="rounded-full"
              source={require("../../assets/images/AI.jpg")}
              style={{ width: 56, height: 56 }}
            />
            <View>
              <Text className="text-black">Xin chào</Text>
              <Text className="text-lg text-black font-bold">
                Hồ Tú Tài {">"}
              </Text>
            </View>
          </TouchableOpacity>
          <CustomDrawerModal
            visible={drawerVisible}
            onClose={() => setDrawerVisible(false)}
          />

          {/* Ví tiền */}
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            className="bg-white p-2 rounded-full mb-6"
          >
            <View className="flex-row justify-between items-center bg-gray-200 p-2 rounded-full">
              <View className="flex-row gap-2 items-center">
                <Image
                  className="rounded-full"
                  source={require("../../assets/images/AI.jpg")}
                  style={{ width: 28, height: 28 }}
                />
                <Text>0 đ</Text>
              </View>
              <Feather name="chevron-down" size={20} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Nội dung chính */}
      <ScrollView
        className="flex-1 bg-white"
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="pt-4">
          <Text className="text-xl font-bold">Tổng quan tài khoản</Text>

          <View className="flex-row gap-4 mt-5">
            {/* Tin đăng */}
            <View className="flex-1 bg-gray-200 rounded-lg px-4 py-2">
              <View className="flex-row items-center gap-2 mb-2">
                <Ionicons name="book-sharp" size={24} color="black" />
                <Text className="font-bold">Tin đăng</Text>
              </View>
              <Text className="text-lg font-bold">0 tin</Text>
              <Text className="text-sm">Đang hiển thị</Text>
              <View className="flex-row gap-2 mt-4">
                <Text className="font-bold underline text-red-500">
                  Đăng tin
                </Text>
                <Text className="text-red-500">{">"}</Text>
              </View>
            </View>

            {/* Liên hệ */}
            <View className="flex-1 bg-gray-200 rounded-lg px-4 py-2">
              <View className="flex-row items-center gap-2 mb-2 flex-wrap">
                <Ionicons name="people-sharp" size={24} color="black" />
                <Text className="font-bold text-sm flex-shrink">
                  Liên hệ trong 30 ngày
                </Text>
              </View>
              <Text className="text-lg font-bold">0 người</Text>
              <Text className="text-sm text-green-500">
                + 0 mới vào hôm nay
              </Text>
            </View>
          </View>

          {/* Tabs */}
          <Text className="mt-6 text-xl font-bold">
            Thông tin dành riêng cho bạn
          </Text>

          <FlatList
            data={tabs}
            keyExtractor={(item) => item.value}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 12, paddingRight: 16 }}
            renderItem={renderTabItem}
          />

          {/* Nội dung tab */}
          <View>{renderTabContent()}</View>
        </View>
      </ScrollView>

      {/* Hiển thị Modal */}
      <Balance
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        balances={[
          { label: "TK tin đăng", value: 0 },
          { label: "TK khuyến mãi", value: 0 },
        ]}
      />
    </View>
  );
};

export default Overview;
