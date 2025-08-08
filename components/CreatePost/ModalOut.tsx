import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import {
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
  onConfirmExit: () => void;
};

const ModalOut: React.FC<ConfirmExitModalProps> = ({
  visible,
  onClose,
  onConfirmExit,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 justify-end bg-black/30">
        <TouchableWithoutFeedback>
          <SafeAreaView
            style={{ height: "30%" }}
            className="bg-white rounded-t-3xl w-full justify-between overflow-hidden"
          >
            {/* Header */}
            <View className="flex-row justify-between items-center px-5 py-4 bg-black rounded-t-3xl">
              <Text className="text-2xl font-bold text-white">
                Thoát trang đăng tin
              </Text>
              <TouchableOpacity onPress={onClose}>
                <Feather name="x" size={22} color="white" />
              </TouchableOpacity>
            </View>

            {/* Body */}
            <ScrollView className="px-5 flex-1">
              <View className="flex-row gap-3 px-4  mx-[-16px]">
                <View className="flex justify-center items-center my-3">
                  <SimpleLineIcons name="info" size={24} color="black" />
                  <Text className="font-bold my-3">Bạn muốn thoát trang?</Text>
                  <Text className="text-sm">
                    Các thay đổi với tin đăng của bạn có thể không được lưu
                  </Text>
                </View>
              </View>
              <View className="flex-row gap-2">
                <TouchableOpacity
                  onPress={onConfirmExit}
                  className="flex-1 py-3 border  rounded-full items-center justify-center"
                >
                  <Text className="font-semibold text-black">Thoát trang</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={onClose}
                  className="flex-1 py-3 bg-red-500 rounded-full items-center justify-center"
                >
                  <Text className="font-semibold text-white">Ở lại trang</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};

export default ModalOut;
