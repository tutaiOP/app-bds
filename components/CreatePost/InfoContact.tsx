import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const InfoContact = () => {
  const [showInfoContact, setShowInfoContact] = useState(true);
  return (
    <View className="bg-white p-4 rounded-xl mt-4">
      <TouchableOpacity
        onPress={() => setShowInfoContact(!showInfoContact)}
        className="flex-row justify-between items-center"
      >
        <Text className="font-bold">Thông tin liên hệ</Text>
        <AntDesign
          name={showInfoContact ? "down" : "up"}
          size={20}
          color="black"
        />
      </TouchableOpacity>
      {showInfoContact && (
        <View className="my-4">
          {/* Tên liên hệ */}
          <View>
            <Text className="mb-3 font-semibold">Tên liên hệ</Text>
            <TouchableOpacity>
              <View className="flex-row mb-4 items-center border rounded-full px-4 bg-white border-gray-300">
                <TextInput
                  editable={false}
                  pointerEvents="none"
                  placeholder="Nhập họ và tên"
                  placeholderTextColor="#9CA3AF"
                  value={"Hồ Tú Tài"}
                  className="flex-1 py-3 text-[15px] text-gray-800"
                />
              </View>
            </TouchableOpacity>
          </View>

          {/* Email */}
          <View>
            <Text className="mb-3 font-semibold">
              Email <Text className="text-gray-500">(không bắt buộc)</Text>
            </Text>
            <TouchableOpacity>
              <View className="flex-row mb-4 items-center border rounded-full px-4 bg-white border-gray-300">
                <TextInput
                  editable={false}
                  pointerEvents="none"
                  placeholder="Nhập email"
                  placeholderTextColor="#9CA3AF"
                  value={"hotutai2002@gmail.com"}
                  className="flex-1 py-3 text-[15px] text-gray-800"
                />
              </View>
            </TouchableOpacity>
          </View>

          {/* Số điện thoại */}
          <View>
            <Text className="mb-3 font-semibold">Số điện thoại</Text>
            <TouchableOpacity>
              <View className="flex-row mb-4 items-center border rounded-full px-4 bg-white border-gray-300">
                <TextInput
                  editable={false}
                  pointerEvents="none"
                  placeholder="Nhập số điện thoại"
                  placeholderTextColor="#9CA3AF"
                  value={"0905185626"}
                  className="flex-1 py-3 text-[15px] text-gray-800"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default InfoContact;
