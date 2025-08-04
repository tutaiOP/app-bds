import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

type Props = {
  visible: boolean;
  onClose: () => void;
};

const CustomDrawerModal: React.FC<Props> = ({ visible, onClose }) => {
  const [modalVisible, setModalVisible] = useState(visible);
  const translateX = useRef(new Animated.Value(-width)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      setModalVisible(true);
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: -width,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setModalVisible(false); // Ẩn khi animation hoàn tất
      });
    }
  }, [visible]);

  if (!modalVisible) return null;

  return (
    <Modal transparent visible={modalVisible} animationType="none">
      <View style={StyleSheet.absoluteFill}>
        <TouchableWithoutFeedback onPress={onClose}>
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: "black", opacity: fadeAnim },
            ]}
          />
        </TouchableWithoutFeedback>

        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: width * 0.8,
            backgroundColor: "white",
            transform: [{ translateX }],
            elevation: 10,
          }}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <View className="flex-row px-4 mt-4 items-center border-b border-gray-200">
              <View className="flex-row gap-2 items-center pb-4">
                <TouchableOpacity
                  className="bg-white border border-gray-200 rounded-full p-1"
                  onPress={onClose}
                >
                  <Ionicons name="arrow-back" size={26} color="black" />
                </TouchableOpacity>
                <Text className="text-2xl font-bold">Tài khoản</Text>
              </View>
            </View>

            <View className="px-4 py-3 border-b border-gray-200">
              <TouchableOpacity
                onPress={() => {
                  // Đầu tiên: đóng modal
                  onClose();

                  // Sau đó: đợi animation đóng xong rồi mới push (ví dụ sau 350ms)
                  setTimeout(() => {
                    console.log("Đi tới /accountManage");
                    router.push("/accountManage");
                  }, 350);
                }}
                className="flex-row gap-2 items-center"
              >
                <FontAwesome5 name="user-circle" size={24} color="black" />
                <Text className="text-lg">Quản lý tài khoản</Text>
              </TouchableOpacity>
            </View>

            <View className="px-4 py-3">
              <View className="flex-row gap-2 items-center">
                <MaterialIcons name="logout" size={24} color="black" />
                <Text className="text-lg">Đăng xuất</Text>
              </View>
            </View>
          </SafeAreaView>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default CustomDrawerModal;
