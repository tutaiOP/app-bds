import dayjs from "dayjs";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DateTimePicker, {
  DateType,
  useDefaultStyles,
} from "react-native-ui-datepicker";

interface CustomDateModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (date: dayjs.Dayjs) => void;
}

const CustomDateModal: React.FC<CustomDateModalProps> = ({
  visible,
  onClose,
  onSelect,
}) => {
  const defaultStyles = useDefaultStyles();
  const [selectedDate, setSelectedDate] = useState<DateType>(new Date());

  const handleConfirm = () => {
    if (selectedDate) {
      onSelect(dayjs(selectedDate)); // Trả về ngày đã chọn dưới dạng dayjs
    }
    onClose();
  };

  const handleReset = () => {
    const tomorrow = new Date(new Date().setDate(new Date().getDate()));
    setSelectedDate(tomorrow);
  };

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 justify-end bg-black/40">
          <TouchableWithoutFeedback>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : undefined}
              className="bg-white rounded-t-3xl px-5 pt-4 pb-6"
            >
              {/* Header */}
              <View className="flex-row justify-between items-center mb-4">
                <Text className="text-lg font-bold">Ngày bắt đầu</Text>
                <TouchableOpacity onPress={onClose}>
                  <Text className="text-gray-500 text-xl">✕</Text>
                </TouchableOpacity>
              </View>

              {/* Date Picker */}
              <DateTimePicker
                mode="single"
                date={selectedDate}
                onChange={({ date }) => {
                  if (date) {
                    setSelectedDate(date);
                  }
                }}
                disableMonthPicker={true} // ⛔ Vô hiệu hóa chọn tháng
                disableYearPicker={true} // (tuỳ chọn) Vô hiệu hóa chọn năm luôn
                minDate={new Date()} // Cho phép chọn từ hôm nay
                styles={{
                  ...defaultStyles,
                  button_next: {
                    borderWidth: 1,
                    borderColor: "#e5e7eb",
                    shadowColor: "black",
                    borderRadius: 50,
                    padding: 8,
                  },
                  button_next_image: {
                    tintColor: "black",
                  },
                  button_prev: {
                    borderWidth: 1,
                    borderColor: "#e5e7eb",
                    shadowColor: "black",
                    borderRadius: 50,
                    padding: 8,
                  },
                  button_prev_image: {
                    tintColor: "black",
                  },
                  month_selector_label: {
                    color: "black",
                  },
                  year_selector_label: {
                    color: "black",
                  },
                  selected: {
                    backgroundColor: "black",
                    borderRadius: 50,
                  },
                  selected_label: {
                    color: "white",
                  },
                  day_label: {
                    color: "black",
                  },
                  today: {
                    backgroundColor: "transparent",
                  },
                  today_label: {
                    color: "black",
                  },
                }}
              />

              {/* Footer */}
              <View className="flex-row justify-between gap-x-3 py-6">
                <TouchableOpacity
                  className="flex-1 items-center justify-center rounded-full border border-black py-3"
                  onPress={handleReset}
                >
                  <Text className="font-bold">Đặt lại</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex-1 items-center justify-center rounded-full bg-secondary py-3"
                  onPress={handleConfirm}
                >
                  <Text className="font-bold text-white">Lưu</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CustomDateModal;
