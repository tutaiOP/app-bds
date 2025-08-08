import { AntDesign, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const PersonalInfo = () => {
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

        <ScrollView
          contentContainerStyle={{
            paddingBottom: 130, // Giữ nguyên nếu cần
            flexGrow: 1, // Thêm dòng này để đảm bảo padding có hiệu lực
          }}
          className="my-4"
        >
          <Text className="text-center text-xl mb-2  font-semibold">
            Quy định về Thông tin cá nhân
          </Text>
          <View>
            <Text className="text-lg font-bold">1. Họ và tên</Text>
            <Text>Bạn nên nhập đầy đủ họ tên và ghi hoa chữ cái đầu tiên.</Text>
            <View className="flex-row gap-2 justify-between mt-4">
              <View className="w-1/2 items-start  rounded-lg  py-4 px-3 bg-gray-200">
                <Text className="text-xl">Hồ Tú Tài</Text>
                <Text className="text-xl">Tài Hồ</Text>
                <Text className="text-xl">Tú Tài</Text>
              </View>
              <View className="w-1/2 items-start  rounded-lg  py-4 px-3 bg-gray-200">
                <Text className="text-xl">TaiHT</Text>
                <Text className="text-xl">Địa ốc TaiHT</Text>
                <Text className="text-xl">HỒ TÚ TÀI</Text>
              </View>
            </View>
            <View className="flex-row gap-2 justify-between mt-1">
              <View className="w-1/2 items-center flex-row justify-center gap-2  rounded-lg  py-4 px-3 bg-green-100">
                <AntDesign name="checkcircle" size={24} color="green" />
                <Text className="text-xl text-green-500">Nên</Text>
              </View>
              <View className="w-1/2 items-center flex-row justify-center gap-2  rounded-lg  py-4 px-3 bg-red-100">
                <AntDesign name="closecircle" size={24} color="red" />
                <Text className="text-xl text-red-500">Không nên</Text>
              </View>
            </View>
          </View>
          <View className="py-6">
            <Text className="font-bold text-lg">2. Số điện thoại chính</Text>
            <Text>
              Số điện thoại của bạn phải được xác thực.Nếu bạn chưa cung cấp,
              vui lòng thêm số điện thoại tại trang Chỉnh sửa thông tin cá nhân.
            </Text>
          </View>
          <View className="">
            <Text className="font-bold text-lg">3. Ảnh đại diện</Text>
            <Text>
              Ảnh nên chụp nửa người phía trên, nhìn rõ mặt và thể hiện sự
              chuyên nghiệp của bạn.
            </Text>
            <View className="flex-row gap-2 justify-between mt-4">
              <View className="w-1/2 items-start  rounded-lg   bg-gray-200">
                <Image
                  source={require("../assets/images/AI.jpg")}
                  className="w-full h-44"
                />
              </View>
              <View className="w-1/2 items-start  rounded-lg   bg-gray-200">
                <Image
                  source={require("../assets/images/image-1.jpg")}
                  className="w-full h-44"
                />
              </View>
            </View>
            <View className="flex-row gap-2 justify-between mt-1">
              <View className="w-1/2 items-center flex-row justify-center gap-2  rounded-lg  py-4 px-3 bg-green-100">
                <AntDesign name="checkcircle" size={24} color="green" />
                <Text className="text-xl text-green-500">Nên</Text>
              </View>
              <View className="w-1/2 items-center flex-row justify-center gap-2  rounded-lg  py-4 px-3 bg-red-100">
                <AntDesign name="closecircle" size={24} color="red" />
                <Text className="text-xl text-red-500">Không nên</Text>
              </View>
            </View>
          </View>
          <View className="mt-4">
            <Text className="font-bold text-lg">
              4. Ảnh chụp mặt trước và mặt sau CCCD
            </Text>
            <Text className="mb-2">
              Để đảm bảo chất lượng kiểm duyệt, bạn cần lưu ý tải đúng và đủ các
              ảnh như ví dụ bên dưới.
            </Text>
            <View className="flex-row gap-2 mb-3">
              <Text>•</Text>
              <Text className="flex-1">Hỗ trợ tải ảnh lên .png, .jpg</Text>
            </View>
            <View className="flex-row gap-2 mb-3">
              <Text>•</Text>
              <Text className="flex-1">
                Kích thước tối thiểu 1000 x 1000 px, tối đa 5 MB
              </Text>
            </View>
            <View className="flex-row gap-2 mb-3">
              <Text>•</Text>
              <Text className="flex-1">
                Ảnh chụp không bị mất góc, đủ chi tiết và đủ ánh sáng.
              </Text>
            </View>
            <View className="flex-row gap-2 justify-between mt-4">
              <View className="w-1/2 items-start  rounded-lg   bg-gray-200">
                <Image
                  source={require("../assets/images/AI.jpg")}
                  className="w-full h-44"
                />
              </View>
              <View className="w-1/2 items-start  rounded-lg   bg-gray-200">
                <Image
                  source={require("../assets/images/image-1.jpg")}
                  className="w-full h-44"
                />
              </View>
            </View>
            <View className="flex-row gap-2 justify-between mt-1">
              <View className="w-1/2 items-center flex-row justify-center gap-2  rounded-lg  py-4 px-3 bg-green-100">
                <AntDesign name="checkcircle" size={24} color="green" />
                <Text className="text-xl text-green-500">Nên</Text>
              </View>
              <View className="w-1/2 items-center flex-row justify-center gap-2  rounded-lg  py-4 px-3 bg-red-100">
                <AntDesign name="closecircle" size={24} color="red" />
                <Text className="text-xl text-red-500">Không nên</Text>
              </View>
            </View>
            <View className="flex-row gap-2 justify-between mt-4">
              <View className="w-1/2 items-start  rounded-lg   bg-gray-200">
                <Image
                  source={require("../assets/images/AI.jpg")}
                  className="w-full h-44"
                />
              </View>
              <View className="w-1/2 items-start  rounded-lg   bg-gray-200">
                <Image
                  source={require("../assets/images/image-1.jpg")}
                  className="w-full h-44"
                />
              </View>
            </View>
            <View className="flex-row gap-2 justify-between mt-1">
              <View className="w-1/2 items-center flex-row justify-center gap-2  rounded-lg  py-4 px-3 bg-green-100">
                <AntDesign name="checkcircle" size={24} color="green" />
                <Text className="text-xl text-green-500">Nên</Text>
              </View>
              <View className="w-1/2 items-center flex-row justify-center gap-2  rounded-lg  py-4 px-3 bg-red-100">
                <AntDesign name="closecircle" size={24} color="red" />
                <Text className="text-xl text-red-500">Không nên</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View className="absolute bottom-0 bg-white right-0 left-0 py-8 px-4 shadow-white">
        <TouchableOpacity
          onPress={() => router.back()}
          className="bg-secondary py-4 rounded-lg"
        >
          <Text className="text-center text-white">Đã hiểu</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PersonalInfo;
