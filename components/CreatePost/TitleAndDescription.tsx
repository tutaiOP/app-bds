import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const TitleAndDescription = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [showDescription, setShowDescription] = useState(true);
  return (
    <View className="bg-white p-4 rounded-xl mt-4">
      <TouchableOpacity
        onPress={() => setShowDescription(!showDescription)}
        className="flex-row justify-between items-center"
      >
        <Text className="font-bold">Tiêu đề & Mô tả</Text>
        <AntDesign
          name={showDescription ? "down" : "up"}
          size={20}
          color="black"
        />
      </TouchableOpacity>
      {showDescription && (
        <View>
          <Text className="text-gray-500 mt-4 text-sm">
            Bạn còn <Text className="font-bold">100 </Text>lượt sử dụng đến ngày
            03/09/2025
          </Text>

          <View className="my-4">
            {/* Tiêu đề*/}
            <View>
              <Text className="mb-3 font-semibold">Tiêu đề</Text>
              <View className="border border-gray-300 rounded-2xl px-4 bg-white h-28">
                <TextInput
                  placeholder="Mô tả ngắn gọn về loại hình bất động sản, diện tích, địa chỉ (VD: Bán nhà riêng 50m2 chính chủ tại Cầu Giấy)"
                  placeholderTextColor="#9CA3AF"
                  value={title}
                  onChangeText={setTitle}
                  multiline
                  numberOfLines={5}
                  className="text-sm text-gray-800 py-3"
                />
              </View>
            </View>

            {/* Tiêu đề*/}
            <View className="mt-4">
              <Text className="mb-3 font-semibold">Mô tả</Text>
              <View className="border border-gray-300 rounded-2xl px-4 bg-white h-44">
                <TextInput
                  placeholder="Mô tả chi tiết về: 
              + loại hình bất động sản
              + diện tích, tiện ích
              + tình trạng nội thất
              ...
              (VD: Khu nhà có vị trí thuận lợi, gần công viên, trường học..."
                  placeholderTextColor="#9CA3AF"
                  value={description}
                  onChangeText={setDescription}
                  multiline
                  numberOfLines={20}
                  className="text-sm text-gray-800 py-3"
                />
              </View>
              <Text className="mt-2 text-sm text-gray-500 font-semibold">
                Tối thiểu 30 ký tự, tối đa 3000 ký tự
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default TitleAndDescription;
