import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const PrivateScreen = () => {
  const [text, setText] = useState("");

  const handleChange = (input: string) => {
    // Chỉ giữ lại số
    const onlyNumbers = input.replace(/[^0-9]/g, "");
    setText(onlyNumbers);
  };

  const isValid = text.length === 10;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
      <View style={{ flex: 1 }}>
        <ScrollView
          scrollEnabled={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 16,
            paddingBottom: 0,
          }}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity className="mt-2 mb-6" onPress={() => router.back()}>
            <View className="border rounded-full bg-white border-border w-10 h-10 flex justify-center items-center ">
              <Feather className="" name="x" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <View className="flex-row items-start w-full gap-4">
            <View className="flex-1 ">
              <Text className="text-white text-xl font-bold">
                Bảo đảm riêng tư{"\n"}Thư giãn tìm nhà
              </Text>
              <Text className="text-white mt-2">
                Diaocphongthuy.com cam kết bảo mật thông tin người dùng
              </Text>
            </View>
            <View className="flex-1">
              <Image
                source={require("../assets/images/icon.png")}
                style={{ width: "100%", height: 100 }}
                resizeMode="contain"
              />
            </View>
          </View>
          <View className="mx-[-16px] mt-10 bg-white flex-1 px-4 pt-12 shadow-black rounded-t-lg">
            <View className="pt-6 flex justify-center items-center">
              <Text className="text-center font-bold text-xl">
                Đăng ký/ Đăng nhập để tiếp tục
              </Text>
            </View>
            <KeyboardAvoidingView
              className="mt-6"
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
            <View className="px-4 flex mt-10 ">
              <Text className="text-sm text-gray-600 text-center">
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
          </View>
        </ScrollView>
      </View>
      <View className="absolute bottom-0 left-0 right-0 h-10 bg-white" />
    </SafeAreaView>
  );
};

export default PrivateScreen;
