import ScreenWrapper from "@/components/ScreenWrapper";
import { AntDesign, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const register = () => {
  const [text, setText] = useState("");

  const handleChange = (input: string) => {
    // Chỉ giữ lại số
    const onlyNumbers = input.replace(/[^0-9]/g, "");
    setText(onlyNumbers);
  };

  const isValid = text.length === 10;

  return (
    <ScreenWrapper>
      <TouchableOpacity onPress={() => router.back()}>
        <View className="border rounded-full border-border w-10 h-10 flex justify-center items-center ">
          <AntDesign name="arrowleft" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <View className="m-6 flex justify-center items-center">
        <Text className="text-[28px] font-bold">Đăng ký tài khoản</Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View>
          <View className="flex-row items-center border border-border rounded-full px-4 py-3">
            <Feather name="phone" size={24} color="black" />

            <TextInput
              value={text}
              onChangeText={handleChange}
              placeholder="Nhập số điện thoại"
              className="flex-1 ml-2 text-[14px] text-black"
              placeholderTextColor="#6B7280"
              keyboardType="numeric"
              maxLength={10} // Giới hạn 10 ký tự
            />

            {text.length > 0 && (
              <TouchableOpacity onPress={() => setText("")}>
                <Feather name="x-circle" size={20} color="#999" />
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity
            className={`mt-4 flex justify-center items-center py-4 rounded-full ${
              isValid ? "bg-primary" : "bg-gray-300"
            }`}
            disabled={!isValid}
            onPress={() => {
              if (isValid) {
                console.log("Số điện thoại:", text);
              }
            }}
          >
            <Text
              className={`font-bold ${isValid ? "text-text" : "text-gray-500"}`}
            >
              Tiếp tục
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <View className="flex-row items-center my-6">
        <View className="flex-1 h-px bg-gray-300" />
        <Text className="mx-3 text-text text-sm">Hoặc đăng ký với</Text>
        <View className="flex-1 h-px bg-gray-300" />
      </View>
      <View>
        <View className="flex-row gap-4 justify-center items-center">
          <TouchableOpacity>
            <View className="border rounded-full border-border w-12 h-12 flex justify-center items-center  ">
              <Image
                source={require("../../assets/images/Google__G__logo.svg.png")}
                style={{ width: 20, height: 20 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="border rounded-full border-border w-12 h-12 flex justify-center items-center  ">
              <Image
                source={require("../../assets/images/icon-apple.png")}
                style={{ width: 20, height: 20 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row justify-center items-center gap-1 my-6">
        <Text>Bạn đã có tài khoản?</Text>
        <Text
          onPress={() => router.push("/auth/login")}
          className="text-secondary underline"
        >
          Đăng nhập
        </Text>
      </View>
      <View className="px-4">
        <Text className="text-sm text-gray-600">
          Bằng việc tiếp tục, bạn đồng ý với{" "}
          <Text
            className="text-secondary underline"
            onPress={() => console.log("Điều khoản")}
          >
            Điều khoản sử dụng
          </Text>
          ,{" "}
          <Text
            className="text-secondary underline"
            onPress={() => console.log("Chính sách bảo mật")}
          >
            Chính sách bảo mật
          </Text>
          ,{" "}
          <Text
            className="text-secondary underline"
            onPress={() => console.log("Quy chế")}
          >
            Quy chế
          </Text>
          , và{" "}
          <Text
            className="text-secondary underline"
            onPress={() => console.log("Chính sách")}
          >
            Chính sách{" "}
          </Text>
          của chúng tôi.
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default register;
