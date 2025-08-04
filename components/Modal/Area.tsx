import { Feather } from "@expo/vector-icons";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import React, { useState } from "react";
import {
  Dimensions,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

type AreaProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  title: string;
  options: { label: string; value: string }[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  isMultiple?: boolean;
  onApply?: () => void;
  onReset?: () => void;
};

const Area: React.FC<AreaProps> = ({
  modalVisible,
  setModalVisible,
  title,
  options,
  selectedValue,
  setSelectedValue,
  isMultiple = false,
  onApply,
  onReset,
}) => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [range, setRange] = useState([0, 495]); // Giá trị m^2

  const screenWidth = Dimensions.get("window").width;

  return (
    <Modal transparent visible={modalVisible} animationType="fade">
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View className="flex-1 justify-end bg-black/30">
          <TouchableWithoutFeedback>
            <SafeAreaView className="bg-white rounded-t-3xl w-full flex-1 justify-between overflow-hidden">
              {/* Header */}
              <View className="flex-row justify-between items-center px-5 py-4 bg-black rounded-t-3xl">
                <Text className="text-2xl font-bold text-white">{title}</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Feather name="x" size={22} color="white" />
                </TouchableOpacity>
              </View>

              {/* Toi thieu toi da */}
              <View className="px-5 flex-row gap-4 pt-5">
                {/* Nhỏ Nhất */}
                <View className="flex-1">
                  <View className="flex-row gap-2 mb-2">
                    <Text className="font-bold">Nhỏ nhất</Text>
                    <Text>0 m²</Text>
                  </View>
                  <TextInput
                    value={min}
                    onChangeText={setMin}
                    placeholder="0"
                    keyboardType="numeric"
                    className="w-full border border-gray-300 rounded-full py-3 px-3 text-sm text-black"
                    placeholderTextColor="#6B7280"
                  />
                </View>

                {/* Lớn nhất */}
                <View className="flex-1">
                  <View className="flex-row gap-2 mb-2">
                    <Text className="font-bold">Lớn nhất</Text>
                    <Text>500 m²</Text>
                  </View>
                  <TextInput
                    value={max}
                    onChangeText={setMax}
                    placeholder="0"
                    keyboardType="numeric"
                    className="w-full border border-gray-300 rounded-full py-3 px-3 text-sm text-black"
                    placeholderTextColor="#6B7280"
                  />
                </View>
              </View>
              {/* Thanh kéo tối thiểu và tối đa */}
              <View className="w-full px-5">
                <MultiSlider
                  values={range}
                  onValuesChange={(values) => setRange(values)}
                  min={0}
                  max={495}
                  step={100}
                  containerStyle={{ marginHorizontal: 0 }} // Xóa padding mặc định
                  trackStyle={{ height: 10, borderRadius: 999 }}
                  sliderLength={screenWidth - 40}
                  selectedStyle={{ backgroundColor: "#F7DE58" }}
                  unselectedStyle={{ backgroundColor: "#eee" }}
                  markerStyle={{
                    marginTop: 8,
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor: "#ccc",
                  }}
                />
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

export default Area;
