import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";

const Notification = () => {
  return (
    <View className="flex-col justify-center items-center mt-4">
      <Image
        source={require("../../assets/images/result-notification.jpg")}
        style={{ width: 200, height: 150 }}
      />
      <Text className="text-center mt-10">
        Hiện tại bạn không có thông báo nào
      </Text>
    </View>
  );
};

export default Notification;
