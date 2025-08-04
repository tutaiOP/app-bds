import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

type ArrangeProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  options: { label: string; value: string }[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
};

const Arrange: React.FC<ArrangeProps> = ({
  modalVisible,
  setModalVisible,
  options,
  selectedValue,
  setSelectedValue,
}) => {
  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View className="flex-1 justify-end bg-black/30 bg-opacity-50">
          <View className="flex-row justify-between p-5 rounded-t-lg bg-black">
            <Text className="text-xl text-white font-bold ">Sắp xếp theo</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Feather name="x" size={20} color="white" />
            </TouchableOpacity>
          </View>

          <View className="bg-white p-5 ">
            {options.map((option) => (
              <TouchableOpacity
                key={option.value}
                className="flex-row justify-between items-center mb-6"
                onPress={() => {
                  setSelectedValue(option.value);
                  setModalVisible(false); // Đóng modal khi chọn
                }}
              >
                <Text className="text-lg ">{option.label}</Text>
                <View
                  className={`w-6 h-6 rounded-full border border-gray-400 mr-2 ${
                    selectedValue === option.value
                      ? "bg-black w-4 h-4"
                      : "bg-white"
                  }`}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default Arrange;
