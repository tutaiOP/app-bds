import { Feather } from "@expo/vector-icons";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import React, { useEffect, useState } from "react";
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
  onApply?: (range: [number, number]) => void;
  onReset?: () => void;
  onRangeChange?: (range: [number, number]) => void;
};

const MAX_VALUE = 500;

const areaLabelToRange: Record<string, [number, number]> = {
  "Tất cả diện tích": [0, MAX_VALUE],
  "Dưới 30 m²": [0, 30],
  "30 - 50 m²": [30, 50],
  "50 - 80 m²": [50, 80],
  "80 - 100 m²": [80, 100],
  "100 - 150 m²": [100, 150],
  "150 - 200 m²": [150, 200],
  "200 - 250 m²": [200, 250],
  "250 - 300 m²": [250, 300],
  "300 - 500 m²": [300, 500],
  "Trên 500 m²": [500, MAX_VALUE],
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
  onRangeChange,
}) => {
  const screenWidth = Dimensions.get("window").width;

  // State range mặc định [0, 500]
  const [range, setRange] = useState<[number, number]>([0, MAX_VALUE]);
  const [min, setMin] = useState("0");
  const [max, setMax] = useState(MAX_VALUE.toString());

  // Khi range thay đổi, cập nhật min, max string tương ứng
  useEffect(() => {
    setMin(range[0].toString());
    setMax(range[1].toString());
  }, [range]);

  // Xử lý nhập min hoặc max
  const handleValueChange = (index: 0 | 1, text: string) => {
    let num = parseInt(text.replace(/[^0-9]/g, ""), 10);
    if (isNaN(num)) num = 0;

    num = Math.max(0, Math.min(num, MAX_VALUE));

    let newRange: [number, number] = [...range] as [number, number];
    newRange[index] = num;

    if (index === 0 && num > newRange[1]) {
      newRange[1] = num;
    }
    if (index === 1 && num < newRange[0]) {
      newRange[0] = num;
    }

    setRange(newRange);
    onRangeChange?.(newRange);
    setMin(newRange[0].toString());
    setMax(newRange[1].toString());
  };

  // Xử lý khi kéo slider
  const handleSliderChange = (values: number[]) => {
    let [newMin, newMax] = values as [number, number];

    if (newMin === 0 && newMax === 0) {
      newMin = 0;
      newMax = 0;
    }

    setRange([newMin, newMax]);
    setSelectedValue("");
  };

  // Reset
  const handleReset = () => {
    setRange([0, 0]);
    setSelectedValue("");
    setMin("0");
    setMax("0");
    onRangeChange?.([0, 0]);
    onReset?.();
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

              {/* Nhỏ nhất - Lớn nhất */}
              <View className="px-5 flex-row gap-4 pt-5">
                <View className="flex-1">
                  <View className="flex-row gap-2 mb-2">
                    <Text className="font-bold">Nhỏ nhất</Text>
                    <Text>0 m²</Text>
                  </View>
                  <TextInput
                    value={min}
                    onChangeText={(text) => handleValueChange(0, text)}
                    placeholder="0"
                    keyboardType="numeric"
                    className="w-full border border-gray-300 rounded-full py-3 px-3 text-sm text-black"
                    placeholderTextColor="#6B7280"
                  />
                </View>

                <View className="flex-1">
                  <View className="flex-row gap-2 mb-2">
                    <Text className="font-bold">Lớn nhất</Text>
                    <Text>{MAX_VALUE} m²</Text>
                  </View>
                  <TextInput
                    value={max}
                    onChangeText={(text) => handleValueChange(1, text)}
                    placeholder={MAX_VALUE.toString()}
                    keyboardType="numeric"
                    className="w-full border border-gray-300 rounded-full py-3 px-3 text-sm text-black"
                    placeholderTextColor="#6B7280"
                  />
                </View>
              </View>

              {/* Slider */}
              <View className="w-full px-5">
                <MultiSlider
                  values={range}
                  onValuesChange={handleSliderChange}
                  min={0}
                  max={MAX_VALUE}
                  step={5}
                  containerStyle={{ marginHorizontal: 0 }}
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

              {/* Options List */}
              <ScrollView className=" flex-1">
                <View className="bg-white p-5 ">
                  {options.map((option) => (
                    <TouchableOpacity
                      key={option.value}
                      className="flex-row justify-between  py-4 items-center border-t  border-gray-200 "
                      onPress={() => {
                        setSelectedValue(option.value);

                        // Lấy range tương ứng với option được chọn
                        const newRange = areaLabelToRange[option.label] || [
                          0, 0,
                        ];

                        setRange(newRange);
                        setMin(newRange[0].toString());
                        setMax(newRange[1].toString());

                        onApply?.(newRange);

                        setModalVisible(false);
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

              {/* Footer */}
              {isMultiple && (
                <View className="flex-row justify-between items-center px-5 pt-4 border-t  border-gray-200 bg-white">
                  <TouchableOpacity
                    onPress={handleReset}
                    className="flex-1 border border-black py-3 rounded-full mr-2"
                  >
                    <Text className="text-center font-semibold">Đặt lại</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      onApply?.(range); // truyền giá trị range hiện tại, không lấy giá trị bên ngoài
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
