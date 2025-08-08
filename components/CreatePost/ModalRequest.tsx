import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  Alert,
  Linking,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

type ConfirmExitModalProps = {
  visible: boolean;
  onClose: () => void;
};

const ModalRequest: React.FC<ConfirmExitModalProps> = ({
  visible,
  onClose,
}) => {
  const handleOpenSettings = async () => {
    try {
      const supported = await Linking.canOpenURL("app-settings:");
      if (supported) {
        await Linking.openSettings();
      } else {
        Alert.alert("Không thể mở cài đặt", "Vui lòng mở cài đặt thủ công.");
      }
    } catch (error) {
      Alert.alert("Lỗi", "Không thể mở trang cài đặt.");
    }
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 justify-end bg-black/30">
        <TouchableWithoutFeedback>
          <SafeAreaView className="bg-white rounded-t-3xl w-full h-[40%] justify-between overflow-hidden">
            {/* Header */}
            <View className="flex-row justify-between items-center px-5 py-4 bg-black rounded-t-3xl">
              <Text className="text-2xl font-bold text-white">
                Yêu cầu quyền truy cập
              </Text>
              <TouchableOpacity onPress={onClose}>
                <Feather name="x" size={22} color="white" />
              </TouchableOpacity>
            </View>

            {/* Body */}
            <ScrollView className="px-5 flex-1">
              <View className="my-3">
                <Text className="font-bold text-center mb-4">
                  Bạn cần cho phép truy cập ảnh của thiết bị để tải lên.
                </Text>
                <Text className="mb-1">
                  1. Mở <Text className="font-bold">Cài đặt</Text>
                </Text>
                <Text className="mb-1">
                  2. Chọn <Text className="font-bold">Quyền riêng tư</Text>
                </Text>
                <Text className="mb-1">
                  3. Chọn <Text className="font-bold">Ảnh</Text>
                </Text>
                <Text className="mb-1">
                  4. Bật Cho phép{" "}
                  <Text className="font-bold">Diaocphongthuy.com</Text>
                </Text>
              </View>

              <View className="flex-row gap-2 mt-4 border-t border-gray-200 pt-4">
                <TouchableOpacity
                  onPress={onClose}
                  className="flex-1 py-3 border rounded-full items-center justify-center"
                >
                  <Text className="font-semibold text-black">Lúc khác</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleOpenSettings}
                  className="flex-1 py-3 bg-secondary rounded-full items-center justify-center"
                >
                  <Text className="font-semibold text-white">Mở cài đặt</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};

export default ModalRequest;
