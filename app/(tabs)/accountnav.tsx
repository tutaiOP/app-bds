import FloatingActionButton from "@/components/FloatingActionButtonProps ";
import ScreenWrapper from "@/components/ScreenWrapper";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";

const accountnav = () => {
  const handlePress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <>
      <ScreenWrapper>
        {/* Đăng nhập để xem thêm thông tin */}
        {/* <View className="px-4 py-4 mt-4 border border-border rounded-2xl">
          <View className="flex-row flex-1 items-center justify-center ">
            <View className="mr-4">
              <FontAwesome name="smile-o" size={32} color="black" />
            </View>
            <View className="flex-1 ">
              <Text className="text-lg">
                Đăng nhập tài khoản để xem thông tin và liên hệ người bán/cho
                thuê
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/auth/login")}
            className="mt-4 flex-1 border border-black rounded-full p-3 items-center justify-center"
          >
            <Text className="font-bold text-[16px]">Đăng nhập</Text>
          </TouchableOpacity>
        </View> */}
        {/* Thông tin người dùng */}
        <View className="flex-row justify-between items-center">
          <View>
            <View className="flex-row gap-4 items-center">
              <Image
                className="rounded-full"
                source={require("../../assets/images/AI.jpg")}
                style={{ width: 56, height: 56 }}
              />
              <Text className="text-2xl font-bold">Hồ Tú Tài</Text>
            </View>
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

        {/* Hướng dẫn  */}
        <View className="mt-4 p-4 border-t border-b  mx-[-16px] border-border">
          <View className="mb-6">
            <Text className="text-text font-bold">Hướng dẫn</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handlePress("https://diaocphongthuy.com")}
          >
            <View className="p-1">
              <View className="flex-row items-center mb-4">
                <View className="mr-4">
                  <AntDesign name="questioncircleo" size={20} color="black" />
                </View>
                <Text className="text-[16px]">Câu hỏi thường gặp</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handlePress("https://diaocphongthuy.com")}
          >
            <View className="p-1">
              <View className="flex-row items-center mb-4">
                <View className="mr-4">
                  <MaterialCommunityIcons
                    name="message-alert-outline"
                    size={24}
                    color="black"
                  />
                </View>
                <Text className="text-[16px]">Góp ý báo lỗi</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handlePress("https://diaocphongthuy.com")}
          >
            <View className="p-1">
              <View className="flex-row items-center">
                <View className="mr-4">
                  <MaterialIcons
                    name="supervisor-account"
                    size={24}
                    color="black"
                  />
                </View>
                <Text className="text-[16px]">Về chúng tôi</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        {/* Quy định */}
        <View className="p-4  border-b  mx-[-16px] border-border">
          <View className="mb-6">
            <Text className="text-text font-bold">Quy định</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handlePress("https://diaocphongthuy.com")}
          >
            <View className="p-1">
              <View className="flex-row items-center mb-4">
                <View className="mr-4">
                  <MaterialCommunityIcons
                    name="note-text-outline"
                    size={24}
                    color="black"
                  />
                </View>
                <Text className="text-[16px]">Điều khoản thỏa thuận</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handlePress("https://diaocphongthuy.com")}
          >
            <View className="p-1">
              <View className="flex-row items-center mb-4">
                <View className="mr-4">
                  <Ionicons
                    name="shield-checkmark-outline"
                    size={24}
                    color="black"
                  />
                </View>
                <Text className="text-[16px]">Chính sách bảo mật </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        {/* Quản lý tài khoản */}
        <View className="p-4  border-b  mx-[-16px] border-border">
          <View className="mb-6">
            <Text className="text-text font-bold">Quản lý tài khoản</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handlePress("https://diaocphongthuy.com")}
          >
            <View className="p-1">
              <View className="flex-row items-center mb-4">
                <View className="mr-4">
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    color="black"
                  />
                </View>
                <Text className="text-[16px]">Cài đặt thông báo</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handlePress("https://diaocphongthuy.com")}
          >
            <View className="p-1">
              <View className="flex-row items-center mb-4">
                <View className="mr-4">
                  <MaterialIcons name="logout" size={24} color="black" />
                </View>
                <Text className="text-[16px]">Đăng xuất </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View className="my-4">
          <Text className="text-gray-500">
            Giấy ĐKKD số 0104630479 do Sở KHĐT TP Hồ Chí Minh cấp lần đầu ngafyu
            02/06/2010
            {"\n"}
            Chịu trách nhiệm sàn GDTMĐT: Ông HTT
          </Text>
        </View>
        <View>
          <Text className="font-bold text-text uppercase">
            công ty cổ phần HBAC việt nam
          </Text>
          <Text className="text-gray-500">
            Tầng 31, Keangnam Hanoi Landmark, Phạm Hùng, Nam Từ Liêm, Hà Nội
            {"\n"}
            (024) 3562 5939 - (024) 3562 5940
          </Text>
        </View>
        <TouchableOpacity
          className="py-3"
          onPress={() => handlePress("https://diaocphongthuy.com")}
          activeOpacity={0.7}
        >
          <Image
            source={require("../../assets/images/logoCCDV.png")}
            style={{ width: 120, height: 35 }}
          />
        </TouchableOpacity>

        <View className="flex-1 justify-center items-center">
          <Text className="text-gray-500">Phiên bản: 3.105.2 (3258)</Text>
        </View>
      </ScreenWrapper>
      <FloatingActionButton
        text="Chuyển sang đăng tin"
        icon="arrow-right-arrow-left"
        onPress={() => router.push("/(posttabs)/post")}
      />
    </>
  );
};

export default accountnav;
