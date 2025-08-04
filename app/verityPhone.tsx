import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const VerityPhone = () => {
  const [text, setText] = useState("");

  const handleChange = (input: string) => {
    const onlyNumbers = input.replace(/[^0-9]/g, "");
    setText(onlyNumbers);
  };

  const isValid = text.length === 10;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView className="flex-1 bg-white relative">
        <View className="flex-row px-4 mt-4 items-center border-b border-gray-200">
          <View className="flex-row gap-2 items-center pb-4">
            <TouchableOpacity
              onPress={() => router.back()}
              className="bg-white border border-gray-200 rounded-full p-1"
            >
              <Ionicons name="arrow-back" size={26} color="black" />
            </TouchableOpacity>
            <Text className="text-2xl font-bold">Xác thực số điện thoại</Text>
          </View>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          className="flex-1"
        >
          <View className="px-4 mt-4">
            <Text>
              Bạn vui lòng xác thực số điện thoại để tiếp tục nhắn tin
            </Text>
            <Text className="my-4 font-bold">Số điện thoại</Text>

            <View className="flex-row items-center border border-border rounded-full px-4 py-3">
              <Feather name="phone" size={24} color="black" />
              <TextInput
                value={text}
                onChangeText={handleChange}
                placeholder="Nhập số điện thoại"
                className="flex-1 ml-2 text-[14px] text-black"
                placeholderTextColor="#6B7280"
                keyboardType="numeric"
                maxLength={10}
              />
              {text.length > 0 && (
                <TouchableOpacity onPress={() => setText("")}>
                  <Feather name="x-circle" size={20} color="#999" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </KeyboardAvoidingView>

        <View className="absolute bottom-0 left-0 right-0 bg-white px-5 pb-6 border-t border-gray-200">
          <View className="flex-row gap-4 items-center">
            <TouchableOpacity
              className={`mt-4 flex-1 justify-center items-center py-4 rounded-full ${
                isValid ? "bg-primary" : "bg-gray-300"
              }`}
              disabled={!isValid}
              onPress={() => {
                if (isValid) {
                  console.log("Số điện thoại:", text);
                }
              }}
            >
              <Text className="text-text">Lấy mã xác thực</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default VerityPhone;
