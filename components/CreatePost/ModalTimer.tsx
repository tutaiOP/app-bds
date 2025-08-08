import { Feather } from "@expo/vector-icons";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
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

type FilterTimerProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  title: string;
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
};

const ModalTimer: React.FC<FilterTimerProps> = ({
  modalVisible,
  setModalVisible,
  title,
  selectedValue,
  setSelectedValue,
}) => {
  const [timeRanges, setTimeRanges] = useState<Option[]>([]);

  // Tạo danh sách thời gian từ hiện tại → 23:30
  const generateTimeRanges = () => {
    const now = dayjs();
    const currentMinutes = now.hour() * 60 + now.minute();

    const ranges: Option[] = [{ label: "Đăng ngay bây giờ", value: "now" }];

    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 30) {
        const startMins = h * 60 + m;
        const endMins = startMins + 30;

        if (endMins > currentMinutes) {
          const start = dayjs().hour(h).minute(m).format("HH:mm");
          const end = dayjs()
            .minute((m + 30) % 60)
            .hour((h * 60 + m + 30) / 60)
            .format("HH:mm");

          ranges.push({
            label: `${start} → ${end}`,
            value: start,
          });
        }
      }
    }

    return ranges;
  };

  useEffect(() => {
    setTimeRanges(generateTimeRanges());
  }, [modalVisible]);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setModalVisible(false);
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
              style={{ height: "80%" }}
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
                {timeRanges.map((option) => renderOption(option))}
              </ScrollView>
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalTimer;
