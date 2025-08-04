import ScreenWrapper from "@/components/ScreenWrapper";
import { EvilIcons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const login = () => {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isValid = text.length > 0 && password.length > 0;

  return (
    <ScreenWrapper>
      <TouchableOpacity onPress={() => router.back()}>
        <View className="border rounded-full border-border w-10 h-10 flex justify-center items-center ">
          <Feather className="" name="x" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <View className="m-6 flex justify-center items-center">
        <Text className="text-[28px] font-bold">Đăng nhập</Text>
      </View>
      <View>
        <View>
          <Text className="font-bold mb-3">SĐT hoặc Email</Text>

          <View className="flex-row items-center border border-border rounded-full px-4 py-3 mb-4 ">
            <MaterialCommunityIcons name="account" size={24} color="black" />

            <TextInput
              value={text}
              onChangeText={setText}
              placeholder="Nhập SĐT chính hoặc email"
              className="flex-1 ml-2 text-[14px] text-black"
              placeholderTextColor="#6B7280"
            />

            {text.length > 0 && (
              <TouchableOpacity onPress={() => setText("")}>
                <Feather name="x-circle" size={20} color="#999" />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View>
          <Text className="font-bold mb-3">Mật khẩu</Text>

          <View className="flex-row items-center border border-border rounded-full px-4 py-3 mb-4 bg-white">
            <EvilIcons name="lock" size={24} color="black" />

            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Nhập mật khẩu"
              secureTextEntry={!showPassword}
              className="flex-1 ml-2 text-[14px] text-black"
              placeholderTextColor="#6B7280"
            />

            {password.length > 0 && (
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Feather
                  name={showPassword ? "eye" : "eye-off"}
                  size={20}
                  color="#999"
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View className=" flex-row justify-between">
          <TouchableOpacity
            className="flex-row items-center space-x-2"
            onPress={() => setChecked(!checked)}
          >
            <View className="w-5 h-5 rounded border border-gray-400 items-center justify-center mr-2">
              {checked && <Feather name="check" size={16} color="#000" />}
            </View>
            <Text className="text-[14px] text-black">Nhớ tài khoản</Text>
          </TouchableOpacity>
          <View>
            <Text
              onPress={() => console.log("Quên mật khẩu")}
              className="text-secondary underline"
            >
              Quên mật khẩu
            </Text>
          </View>
        </View>
        <TouchableOpacity
          className={`mt-6 flex justify-center items-center py-4 rounded-full ${
            isValid ? "bg-primary" : "bg-gray-300"
          }`}
          disabled={!isValid}
          onPress={() => {
            if (isValid) {
              console.log("Đăng nhập");
            }
          }}
        >
          <Text
            className={`font-bold ${isValid ? "text-text" : "text-gray-500"}`}
          >
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center my-6">
        <View className="flex-1 h-px bg-gray-300" />
        <Text className="mx-3 text-text text-sm">Hoặc đăng nhập với</Text>
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
        <Text>Bạn chưa có tài khoản?</Text>
        <Text
          onPress={() => router.push("/auth/register")}
          className="text-secondary underline"
        >
          Đăng ký
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

export default login;
