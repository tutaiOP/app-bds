import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
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
  onSelectImages: (uris: string[]) => void;
};

const ModalUpload: React.FC<ConfirmExitModalProps> = ({
  visible,
  onClose,
  onSelectImages,
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

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      onSelectImages(result.assets.map((asset) => asset.uri));
      onClose();
    }
  };

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      quality: 1,
    });

    if (!result.canceled) {
      onSelectImages(result.assets.map((asset) => asset.uri));
      onClose();
    }
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 justify-end bg-black/30">
        <TouchableWithoutFeedback>
          <SafeAreaView className="bg-white rounded-t-3xl w-full h-[22%] justify-between overflow-hidden">
            {/* Header */}
            <View className="flex-row justify-between items-center px-5 py-4 bg-black rounded-t-3xl">
              <Text className="text-2xl font-bold text-white">
                Thêm ảnh từ thiết bị
              </Text>
              <TouchableOpacity onPress={onClose}>
                <Feather name="x" size={22} color="white" />
              </TouchableOpacity>
            </View>

            {/* Body */}
            <ScrollView className="px-5 flex-1">
              <View className="my-6">
                <TouchableOpacity
                  onPress={pickImage}
                  className="flex-row gap-2 items-center mb-6"
                >
                  <Feather name="image" size={20} color="black" />
                  <Text>Chọn từ Thư viện ảnh</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={takePhoto}
                  className="flex-row gap-2 items-center mb-3"
                >
                  <Feather name="camera" size={20} color="black" />
                  <Text>Chụp ảnh</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};

export default ModalUpload;
