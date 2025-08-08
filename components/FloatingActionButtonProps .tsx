import { FontAwesome6 } from "@expo/vector-icons"; // hoặc thay đổi bộ icon nếu cần
import React from "react";
import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";

interface FloatingActionButtonProps {
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
  icon?: string;
  bgColor?: string;
}

export default function FloatingActionButton({
  text,
  onPress,
  icon = "arrow-right-arrow-left", // default icon
  bgColor = "black",
}: FloatingActionButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full flex-row items-center shadow-lg`}
      style={{ backgroundColor: bgColor }}
    >
      <FontAwesome6 name={icon as any} size={18} color="white" />
      <Text className="text-white text-base font-semibold ml-2">{text}</Text>
    </TouchableOpacity>
  );
}
