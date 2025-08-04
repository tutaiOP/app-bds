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

type FilterDateProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  title: string;
  options: { label: string; value: string }[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  isMultiple?: boolean;
  onApply?: () => void;
  onReset?: () => void;
  fromDate?: string;
  toDate?: string;
  setFromDate?: (date: string) => void;
  setToDate?: (date: string) => void;
};

const FilterDate: React.FC<FilterDateProps> = ({
  modalVisible,
  setModalVisible,
  title,
  options,
  selectedValue,
  setSelectedValue,
  isMultiple = false,
  onApply,
  onReset,
  fromDate = "",
  toDate = "",
  setFromDate = () => {},
  setToDate = () => {},
}) => {
  return (
    <Modal transparent visible={modalVisible} animationType="fade">
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View className="flex-1 justify-end bg-black/30">
          <TouchableWithoutFeedback>
            <SafeAreaView
              style={{
                height: selectedValue === "Ngày tùy chọn" ? "70%" : "50%",
              }}
              className="bg-white rounded-t-3xl w-full  justify-between overflow-hidden"
            >
              {/* Header */}
              <View className="flex-row justify-between items-center px-5 py-4 bg-black rounded-t-3xl">
                <Text className="text-2xl font-bold text-white">{title}</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Feather name="x" size={22} color="white" />
                </TouchableOpacity>
              </View>

              {/* Body scrollable */}
              <ScrollView className=" flex-1">
                <View className="bg-white p-5 ">
                  {options.map((option) => (
                    <TouchableOpacity
                      key={option.value}
                      className="flex-row justify-between  py-4 items-center border-t  border-gray-200 "
                      onPress={() => {
                        setSelectedValue(option.value);
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
                  {/* Ngày tùy chọn */}
                  {selectedValue === "Ngày tùy chọn" && (
                    <View className="mt-6 space-y-4">
                      <View>
                        <Text className="text-base font-semibold mb-2">
                          Từ ngày
                        </Text>
                        <TouchableOpacity
                          onPress={() => {
                            // Trigger date picker
                          }}
                          className="border mb-2 border-gray-300 px-4 py-3 rounded-full flex-row justify-between items-center"
                        >
                          <Text className="text-gray-800">
                            {fromDate || "Chọn ngày"}
                          </Text>
                          <Feather name="calendar" size={20} color="#999" />
                        </TouchableOpacity>
                      </View>
                      <View>
                        <Text className="text-base font-semibold mb-2">
                          Đến ngày
                        </Text>
                        <TouchableOpacity
                          onPress={() => {
                            // Trigger date picker
                          }}
                          className="border border-gray-300 px-4 py-3 rounded-full flex-row justify-between items-center"
                        >
                          <Text className="text-gray-800">
                            {toDate || "Chọn ngày"}
                          </Text>
                          <Feather name="calendar" size={20} color="#999" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                </View>
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

export default FilterDate;
