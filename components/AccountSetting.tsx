import { AntDesign, Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const AccountSetting = () => {
  const [text, setText] = useState("");
  const [showLockAccount, setShowLockAccount] = useState(false); // State để điều khiển ẩn/hiện
  const [showLockDeleteAccount, setShowLockDeleteAcoount] = useState(false);

  return (
    <ScrollView className="pt-4" contentContainerStyle={{ paddingBottom: 20 }}>
      <Text className="text-lg font-bold">Đổi mật khẩu</Text>
      <Text className="mb-4">
        Tài khoản của bạn chưa có mật khẩu. Cài đặt mật khẩu của bạn
        <Text className="text-red-500"> tại đây.</Text>
      </Text>

      {/* Khóa tài khoản */}
      <View className="mb-4">
        <TouchableOpacity
          onPress={() => setShowLockAccount(!showLockAccount)}
          className="flex-row justify-between items-center py-4"
        >
          <Text className="text-lg font-semibold">Yêu cầu khóa tài khoản</Text>
          <AntDesign
            name={showLockAccount ? "up" : "down"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
        {showLockAccount && (
          <View>
            <Text className="font-semibold mb-2">Nhập email hiện tại</Text>
            <View className="flex-row border border-border rounded-lg px-4 py-3 mb-4 items-center">
              <TextInput
                value={text}
                onChangeText={setText}
                placeholder="Nhập SĐT chính hoặc email"
                className="flex-1 text-[14px] text-black"
                placeholderTextColor="#6B7280"
              />
              {text.length > 0 && (
                <TouchableOpacity onPress={() => setText("")}>
                  <Feather name="x-circle" size={20} color="#999" />
                </TouchableOpacity>
              )}
            </View>

            <TouchableOpacity className="bg-secondary py-3 rounded-lg">
              <Text className="text-center text-white font-medium">
                Khóa tài khoản
              </Text>
            </TouchableOpacity>

            <View className="mt-6">
              <Text className="mb-4 font-medium">Lưu ý</Text>
              {[
                "Quý khách sẽ không thể đăng nhập lại vào tài khoản này sau khi khóa.",
                "Các tin đăng đang hiển thị của quý khách sẽ tiếp tục được hiển thị tới hết thời gian đăng tin đã chọn.",
                "Số dư tiền (nếu có) trong các tài khoản của quý khách sẽ không được hoàn lại.",
                "Tài khoản dịch vụ của quý khách chỉ có thể được khóa khi không còn số dư nợ.",
                "Số điện thoại chính đăng ký tài khoản này và các số điện thoại đăng tin của quý khách sẽ không thể được sử dụng lại để đăng ký tài khoản mới.",
                "Trong trường hợp bạn muốn sử dụng lại số điện thoại chính này, vui lòng liên hệ CSKH 1900.1881 để được hỗ trợ.",
              ].map((note, index) => (
                <View key={index} className="flex-row gap-2 mb-3">
                  <Text>•</Text>
                  <Text className="flex-1">{note}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </View>

      {/* Xóa tài khoản */}
      <View className="mb-8">
        <TouchableOpacity
          onPress={() => setShowLockDeleteAcoount(!showLockDeleteAccount)}
          className="flex-row justify-between items-center py-4"
        >
          <Text className="text-lg font-semibold">Yêu cầu xóa tài khoản</Text>
          <AntDesign
            name={showLockDeleteAccount ? "up" : "down"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
        {showLockDeleteAccount && (
          <View>
            <Text className="mb-4">
              Gửi yêu cầu xóa toàn bộ thông tin của tài khoản. Sau khi được xử
              lý, toàn bộ thông tin sẽ được xóa và không thể hoàn tác.
            </Text>

            <TouchableOpacity className="border border-secondary py-3 rounded-lg">
              <Text className="text-center font-medium text-secondary">
                Yêu cầu xóa tài khoản
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default AccountSetting;
