import { Entypo, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const NotificationModal = ({ visible, onClose, onConfirm }: Props) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 bg-black/30 justify-end items-center">
          <TouchableWithoutFeedback onPress={() => {}}>
            <View className="w-[90%] bg-white rounded-3xl overflow-hidden mb-6">
              {/* Header */}
              <View className="bg-black px-6 py-4 flex-row justify-between items-center">
                <Text className="text-white text-xl font-bold">
                  Đọc tất cả thông báo
                </Text>
                <TouchableOpacity onPress={onClose}>
                  <Ionicons name="close" size={20} color="white" />
                </TouchableOpacity>
              </View>

              {/* Content */}
              <View className="px-6 py-5 items-center">
                <View className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center mb-4">
                  <Entypo name="info-with-circle" size={32} color="black" />
                </View>
                <Text className="font-semibold text-base text-center mb-2">
                  Đánh dấu đã đọc tất cả thông báo
                </Text>
                <Text className="text-center text-gray-500 text-sm">
                  Bạn có chắc chắn muốn đánh dấu tất cả thông báo là đã đọc?
                  Hành động này không thể hoàn tác.
                </Text>
              </View>

              {/* Footer */}
              <View className="flex-row justify-between px-6 py-4 gap-4">
                <TouchableOpacity
                  onPress={onClose}
                  className="flex-1 border border-gray-300 rounded-full py-3 items-center"
                >
                  <Text className="text-black font-semibold">Hủy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={onConfirm}
                  className="flex-1 bg-red-500 rounded-full py-3 items-center"
                >
                  <Text className="text-white font-semibold">Xác nhận</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default NotificationModal;
