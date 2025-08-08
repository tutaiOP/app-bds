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

type PriceProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  title: string;
  options: { label: string; value: string }[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  isMultiple?: boolean;
  onApply?: (range: [number, number]) => void; // Cho phép nhận tham số range
  onReset?: () => void;
  onRangeChange?: (range: [number, number]) => void;
};

const Price: React.FC<PriceProps> = ({
  modalVisible,
  setModalVisible,
  title,
  options,
  selectedValue,
  setSelectedValue,
  isMultiple = false,
  onApply,
  onReset,
  onRangeChange,
}) => {
  const screenWidth = Dimensions.get("window").width;
  const [range, setRange] = useState<[number, number]>([0, 60000000]);

  const formatValue = (value: number): string => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)} tỷ`;
    }
    return `${(value / 1000).toFixed(1)} triệu`;
  };

  const parseInput = (text: string): number => {
    const num = parseFloat(text.replace(/[^0-9.]/g, "")) || 0;
    if (text.includes("tỷ") || text.includes("tỉ")) {
      return num * 1000000;
    }
    return num * 1000;
  };

  const handleValueChange = (index: number, text: string) => {
    let value = parseInput(text);
    value = Math.max(0, Math.min(value, 60000000));

    const newRange: [number, number] = [...range] as [number, number];
    newRange[index] = value;

    if (index === 0 && value > newRange[1]) newRange[1] = value;
    if (index === 1 && value < newRange[0]) newRange[0] = value;

    setRange(newRange);
    onRangeChange?.(newRange);
  };

  const handleReset = () => {
    setRange([0, 0]);
    setSelectedValue("");
    onRangeChange?.([0, 0]); // Thông báo reset cho component cha
    if (onReset) onReset();
  };

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
                {/* Tối thiểu */}
                <View className="flex-1">
                  <View className="flex-row gap-2 mb-2">
                    <Text className="font-bold">Tối thiểu</Text>
                    <Text>{formatValue(range[0])}</Text>
                  </View>
                  <TextInput
                    value={
                      range[0] === 0 && range[1] === 0
                        ? ""
                        : formatValue(range[0])
                    }
                    onChangeText={(text) => handleValueChange(0, text)}
                    keyboardType="numeric"
                    className="w-full border border-gray-300 rounded-full py-3 px-3 text-sm text-black"
                  />
                </View>

                {/* Tối đa */}
                <View className="flex-1">
                  <View className="flex-row gap-2 mb-2">
                    <Text className="font-bold">Tối đa</Text>
                    <Text>{formatValue(range[1])}</Text>
                  </View>
                  <TextInput
                    value={
                      range[0] === 0 && range[1] === 0
                        ? ""
                        : formatValue(range[1])
                    }
                    onChangeText={(text) => handleValueChange(1, text)}
                    keyboardType="numeric"
                    className="w-full border border-gray-300 rounded-full py-3 px-3 text-sm text-black"
                  />
                </View>
              </View>
              {/* Thanh kéo tối thiểu và tối đa */}
              <View className="w-full px-5">
                <MultiSlider
                  values={[
                    range[0] === 0 && range[1] === 0 ? 0 : range[0] / 1000,
                    range[1] / 1000,
                  ]}
                  onValuesChange={(values) => {
                    // Nếu slider kéo về 0, set [0, 0]
                    if (values[0] === 0 && values[1] === 0) {
                      setRange([0, 0]);
                    } else {
                      setRange([values[0] * 1000, values[1] * 1000]);
                    }
                    setSelectedValue(""); // Bỏ chọn option khi kéo slider
                    const newRange: [number, number] =
                      values[0] === 0 && values[1] === 0
                        ? [0, 0]
                        : [values[0] * 1000, values[1] * 1000];

                    setRange(newRange);
                    onRangeChange?.(newRange);
                  }}
                  min={0}
                  max={60000} // 60 tỷ (60,000 triệu)
                  step={100} // Bước nhảy 100 triệu
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
                      className="flex-row justify-between py-4 items-center border-t border-gray-200"
                      onPress={() => {
                        setSelectedValue(option.value);

                        // Xử lý đặc biệt cho option "Tất cả khoảng giá"
                        if (option.label === "Tất cả khoảng giá") {
                          const fullRange: [number, number] = [0, 60000000]; // 0 - 60 tỷ
                          setRange(fullRange);
                          onRangeChange?.(fullRange);
                        } else {
                          setRange([0, 0]); // Reset slider khi chọn option khác
                        }

                        setModalVisible(false);
                      }}
                    >
                      <Text className="text-lg">{option.label}</Text>
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
                    onPress={() => {
                      handleReset();
                      onReset?.(); // Gọi hàm onReset từ props nếu có
                    }}
                    className="flex-1 border border-black py-3 rounded-full mr-2"
                  >
                    <Text className="text-center font-semibold">Đặt lại</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      onApply?.(range);
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

export default Price;
