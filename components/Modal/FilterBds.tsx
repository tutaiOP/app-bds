import { Feather } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
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
  selectedValues: string[];
  setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>;
  isMultiple?: boolean;
  onApply?: () => void;
  onReset?: () => void;
};

const FilterBds: React.FC<FilterBdsProps> = ({
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
  const toggleSelection = (value: string, children?: Option[]) => {
    let newSelected = [...selectedValues];
    const isSelected = selectedValues.includes(value);

    if (isMultiple) {
      if (children?.length) {
        const childValues = children.map((c) => c.value);
        if (isSelected) {
          newSelected = newSelected.filter(
            (v) => v !== value && !childValues.includes(v)
          );
        } else {
          newSelected.push(value, ...childValues);
        }
      } else {
        if (isSelected) {
          newSelected = newSelected.filter((v) => v !== value);
        } else {
          newSelected.push(value);
        }
      }
    } else {
      newSelected = [value];
      setModalVisible(false);
    }

    setSelectedValues(newSelected);
  };

  const renderOption = (option: Option, isChild = false) => (
    <TouchableOpacity
      key={option.value}
      onPress={() => toggleSelection(option.value)}
      className={`flex-row justify-between items-center py-4  ${
        isChild ? "pl-10" : ""
      }`}
    >
      <View className="flex-row items-center gap-3">
        <Text className="text-base">{option.label}</Text>
      </View>
      <Checkbox
        value={selectedValues.includes(option.value)}
        onValueChange={() => toggleSelection(option.value)}
        color={selectedValues.includes(option.value) ? "#000" : undefined}
        style={{
          width: 24,
          height: 24,
          borderRadius: 6,
          borderColor: "#d1d5db", // tương đương 'border-border'
          borderWidth: 1,
        }}
      />
    </TouchableOpacity>
  );

  return (
    <Modal transparent visible={modalVisible} animationType="fade">
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View className="flex-1 justify-end bg-black/30">
          <TouchableWithoutFeedback>
            <SafeAreaView
              style={{ height: "90%" }}
              className="bg-white rounded-t-3xl w-full   justify-between overflow-hidden"
            >
              {/* Header */}
              <View className="flex-row justify-between items-center px-5 py-4 bg-black rounded-t-3xl">
                <Text className="text-2xl font-bold text-white">{title}</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Feather name="x" size={22} color="white" />
                </TouchableOpacity>
              </View>

              {/* Body scrollable */}
              <ScrollView className="px-5 flex-1">
                {options.map((option) => (
                  <React.Fragment key={option.value}>
                    {renderOption(option)}
                  </React.Fragment>
                ))}
              </ScrollView>

              {/* Fixed Footer Buttons */}
              {isMultiple && (
                <View className="flex-row justify-between items-center px-5 pt-4 border-t  border-gray-200 bg-white">
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

export default FilterBds;
