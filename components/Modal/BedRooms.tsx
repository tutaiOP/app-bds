import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

type Option = {
  label: string;
  value: string;
};

type BedRoomsProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  title: string;
  options: Option[];
  selectedValues: string[];
  setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>;
  isMultiple?: boolean;
  onApply?: () => void;
  onReset?: () => void;
};

const BedRooms: React.FC<BedRoomsProps> = ({
  modalVisible,
  setModalVisible,
  title,
  options,
  selectedValues,
  setSelectedValues,
  isMultiple = false,
  onApply,
  onReset,
}) => {
  const toggleSelection = (value: string) => {
    let updated = [...selectedValues];
    if (updated.includes(value)) {
      updated = updated.filter((v) => v !== value);
    } else {
      updated.push(value);
    }
    setSelectedValues(updated);
  };

  return (
    <Modal transparent visible={modalVisible} animationType="fade">
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View className="flex-1 justify-end bg-black/30">
          <TouchableWithoutFeedback>
            <SafeAreaView
              style={{ height: "25%" }}
              className="bg-white rounded-t-3xl w-full justify-between overflow-hidden"
            >
              {/* Header */}
              <View className="flex-row justify-between items-center px-5 py-4 bg-black rounded-t-3xl">
                <Text className="text-2xl font-bold text-white">{title}</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Feather name="x" size={22} color="white" />
                </TouchableOpacity>
              </View>

              {/* Body – Bedroom selection */}
              <View className="flex-row justify-center gap-3 px-5 py-5 flex-wrap">
                {options.map((option) => {
                  const isSelected = selectedValues.includes(option.value);
                  return (
                    <TouchableOpacity
                      key={option.value}
                      onPress={() => toggleSelection(option.value)}
                      className={`w-12 h-12 rounded-full border border-gray-300 justify-center items-center ${
                        isSelected ? "bg-black" : "bg-white"
                      }`}
                    >
                      <Text
                        className={`font-bold ${
                          isSelected ? "text-white" : "text-black"
                        }`}
                      >
                        {option.label}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              {/* Footer – Buttons */}
              {isMultiple && (
                <View className="flex-row justify-between items-center px-5 pt-4 border-t border-gray-200 bg-white">
                  <TouchableOpacity
                    onPress={onReset}
                    className="flex-1 border border-black py-3 rounded-full mr-2"
                  >
                    <Text className="text-center font-semibold">Đặt lại</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      onApply?.();
                      setModalVisible(false);
                    }}
                    className="flex-1 bg-black py-3 rounded-full ml-2"
                  >
                    <Text className="text-center text-white font-semibold">
                      Áp dụng
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default BedRooms;
