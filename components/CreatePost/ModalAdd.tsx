import { Feather } from "@expo/vector-icons";
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

type Option = {
  label: string;
  value: string;
};

type FilterBdsProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  title: string;
  options: Option[];
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
};

const ModalAdd: React.FC<FilterBdsProps> = ({
  modalVisible,
  setModalVisible,
  title,
  options,
  selectedValue,
  setSelectedValue,
}) => {
  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setModalVisible(false); // đóng modal khi chọn xong
  };

  const renderOption = (option: Option) => {
    const isSelected = selectedValue === option.value;
    return (
      <TouchableOpacity
        key={option.value}
        onPress={() => handleSelect(option.value)}
        className="flex-row justify-between items-center py-4"
      >
        <Text className="text-base">{option.label}</Text>
        <View
          className={`w-6 h-6 rounded-full border ${
            isSelected ? "border-black" : "border-gray-500"
          } flex items-center justify-center`}
        >
          {isSelected && <View className="w-4 h-4 rounded-full bg-black" />}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Modal transparent visible={modalVisible} animationType="fade">
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View className="flex-1 justify-end bg-black/30">
          <TouchableWithoutFeedback>
            <SafeAreaView
              style={{ height: "30%" }}
              className="bg-white rounded-t-3xl w-full justify-between overflow-hidden"
            >
              {/* Header */}
              <View className="flex-row justify-between items-center px-5 py-4 bg-black rounded-t-3xl">
                <Text className="text-2xl font-bold text-white">{title}</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Feather name="x" size={22} color="white" />
                </TouchableOpacity>
              </View>

              {/* Body */}
              <ScrollView className="px-5 flex-1">
                {options.map((option) => renderOption(option))}
              </ScrollView>
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalAdd;
