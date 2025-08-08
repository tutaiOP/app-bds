import { AntDesign, Entypo, Feather, FontAwesome5 } from "@expo/vector-icons";
import dayjs from "dayjs";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CustomDateModal from "./CustomDateModal";
import ModalComparePrice from "./ModalComparePrice";
import ModalTimer from "./ModalTimer";

const PACKAGE_TYPES = [
  {
    key: "diamond",
    title: "VIP Kim Cương",
    subtitle: "Hiển thị trên cùng",
    multiplier: "X30",
    multiplierColor: "bg-red-500",
    backgroundColor: "bg-red-200",
    labelColor: "text-red-500",
    options: [
      { days: 7, price: "134.000 đ/ngày" },
      { days: 10, price: "127.300 đ/ngày" },
      { days: 15, price: "120.600 đ/ngày" },
    ],
  },
  {
    key: "gold",
    title: "VIP Vàng",
    subtitle: "Dưới VIP Kim Cương",
    multiplier: "X15",
    multiplierColor: "bg-secondary",
    backgroundColor: "bg-red-200",
    labelColor: "text-secondary",
    options: [
      { days: 7, price: "340.000 đ/ngày" },
      { days: 10, price: "323.000 đ/ngày" },
      { days: 15, price: "306.000 đ/ngày" },
    ],
  },
  {
    key: "silver",
    title: "VIP Bạc",
    subtitle: "Dưới VIP Vàng",
    multiplier: "X8",
    multiplierColor: "bg-blue-500",
    backgroundColor: "bg-red-200",
    labelColor: "text-blue-500",
    options: [
      { days: 7, price: "61.900 đ/ngày" },
      { days: 10, price: "58.800 đ/ngày" },
      { days: 15, price: "55.700 đ/ngày" },
    ],
  },
  {
    key: "normal",
    title: "Tin thường",
    subtitle: "Hiển thị dưới cùng",
    multiplier: "X8",
    multiplierColor: "bg-blue-500",
    backgroundColor: "bg-red-200",
    labelColor: "text-blue-500",
    options: [
      { days: 7, price: "3.300 đ/ngày" },
      { days: 10, price: "2.900 đ/ngày" },
      { days: 15, price: "2.600 đ/ngày" },
    ],
  },
];

const bdsOptions = [
  { label: "Đăng ngay bây giờ", value: "Căn hộ chung cư" },
  {
    label: "Chung cư mini, căn hộ dịch vụ",
    value: "Chung cư mini, căn hộ dịch vụ",
  },
  { label: "Nhà riêng", value: "Nhà riêng" },
  { label: "Nhà biệt thự, liền kề", value: "Nhà biệt thự, liền kề" },
  { label: "Nhà mặt phố", value: "Nhà mặt phố" },
  {
    label: "Shophouse, nhà phố thương mại",
    value: "Shophouse, nhà phố thương mại",
  },
  { label: "Đất nền dự án", value: "Đất nền dự án" },
  { label: "Đất", value: "Đất" },
  { label: "Trang trại, khu nghỉ dưỡng", value: "Trang trại, khu nghỉ dưỡng" },
  { label: "Condotel", value: "Condotel" },
  { label: "Kho, nhà xưởng", value: "Kho, nhà xưởng" },
  { label: "Loại BĐS khác", value: "Loại BĐS khác" },
];

const PaymentDate = () => {
  const [selectedType, setSelectedType] = useState("diamond");
  const [selectedDays, setSelectedDays] = useState(7);
  const [showDateModal, setShowDateModal] = useState(false);
  const [showTimerModal, setShowTimerModal] = useState(false);
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedValuesTimer, setSelectedValuesTimer] = useState("now");
  const handleSelectType = (typeKey: string) => {
    const pkg = PACKAGE_TYPES.find((p) => p.key === typeKey);
    setSelectedType(typeKey);
    setSelectedDays(pkg?.options[0].days ?? 7); // Reset về ngày đầu tiên
  };

  const handleSelectDay = (typeKey: string, days: number) => {
    setSelectedType(typeKey);
    setSelectedDays(days);
  };

  return (
    <>
      <View>
        {/* Header */}
        <View className="flex-row justify-between items-center mb-6">
          <Text className="font-bold">Chọn loại tin</Text>
          <TouchableOpacity
            onPress={() => setShowPriceModal(true)}
            className="flex-row gap-1"
          >
            <Text className="text-gray-500 font-bold">
              So sánh loại tin và giá
            </Text>
            <Feather name="info" size={16} color="black" />
          </TouchableOpacity>
        </View>

        {/* Gói tin */}
        {PACKAGE_TYPES.map((pkg) => {
          const isSelected = selectedType === pkg.key;
          const selectedPrice =
            pkg.options.find((opt) => opt.days === selectedDays)?.price ?? "";

          return (
            <TouchableOpacity
              key={pkg.key}
              onPress={() => handleSelectType(pkg.key)}
              className={`p-4 border rounded-lg mb-4 ${
                isSelected ? "border-black" : "border-gray-200"
              }`}
            >
              {/* Header của gói */}
              <View className="flex-row justify-between items-center mb-2">
                <View className="flex-row items-center gap-2">
                  <FontAwesome5 name="sort-amount-up" size={24} color="black" />
                  <View>
                    <Text className={`${pkg.labelColor} font-bold`}>
                      {pkg.title}
                    </Text>
                    <Text className="text-sm font-bold">{pkg.subtitle}</Text>
                  </View>
                </View>

                <Text className="text-gray-500 text-sm">
                  {isSelected
                    ? pkg.options.find((opt) => opt.days === selectedDays)
                        ?.price
                    : pkg.options.find((opt) => opt.days === 7)?.price}
                </Text>
              </View>

              {/* Multiplier */}
              {pkg.key !== "normal" && (
                <View
                  className={`flex-row p-2 gap-1 ${pkg.backgroundColor} rounded-lg items-center`}
                >
                  <Text
                    className={`p-1 ${pkg.multiplierColor} text-white rounded-xl`}
                  >
                    {pkg.multiplier}
                  </Text>
                  <Text className="text-sm text-gray-500">
                    lượt liên hệ so với tin thường
                  </Text>
                </View>
              )}

              {/* Lựa chọn số ngày */}
              {isSelected && (
                <View className="pt-4 border-t mt-4 border-gray-200">
                  <Text className="text-sm text-gray-500 mb-2">
                    Đăng dài ngày hơn, tiết kiệm hơn
                  </Text>

                  {pkg.options.map((opt) => {
                    const isActive = selectedDays === opt.days;
                    return (
                      <TouchableOpacity
                        key={opt.days}
                        onPress={() => handleSelectDay(pkg.key, opt.days)}
                        className="flex-row justify-between items-center my-1"
                      >
                        <Text className="text-xl font-bold">
                          {opt.days} ngày
                        </Text>
                        <View className="flex-row gap-4 items-center">
                          <Text className="text-sm text-gray-500">
                            {opt.price}
                          </Text>
                          <View className="w-6 h-6 rounded-full border border-black flex items-center justify-center">
                            {isActive && (
                              <View className="w-4 h-4 rounded-full bg-black" />
                            )}
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              )}
            </TouchableOpacity>
          );
        })}

        {/* Ngày bắt đầu */}
        <View className="mt-4">
          <Text className="font-bold mb-3">Ngày bắt đầu</Text>
          <TouchableOpacity
            className="flex-row justify-between items-center border border-gray-200 rounded-full px-4 py-3"
            onPress={() => setShowDateModal(true)}
          >
            <Text>{selectedDate.format("DD/MM/YYYY")}</Text>
            <AntDesign name="calendar" size={20} color="black" />
          </TouchableOpacity>

          <Text className="text-sm text-gray-500 font-bold mt-3">
            Kết thúc ngày 16/08/2025
          </Text>
        </View>
        {/* Hẹn giờ đăng tin */}
        <View className="mt-6">
          <Text className="font-bold mb-3">Hẹn giờ đăng tin</Text>
          <TouchableOpacity
            onPress={() => setShowTimerModal(true)}
            className="flex-row justify-between items-center border border-gray-200 rounded-full px-4 py-3"
          >
            <Text>Đăng ngay bây giờ</Text>
            <Entypo name="chevron-down" size={16} color="black" />
          </TouchableOpacity>
          <Text className="text-sm text-gray-500 font-bold mt-3">
            Chỉ áp dụng với tài khoản Pro & tin VIP
          </Text>
        </View>
      </View>
      {/* Modal */}
      <ModalComparePrice
        visible={showPriceModal}
        onClose={() => setShowPriceModal(false)}
      />
      <CustomDateModal
        visible={showDateModal}
        onClose={() => setShowDateModal(false)}
        onSelect={(date) => setSelectedDate(date)}
      />
      <ModalTimer
        title="Hẹn giờ đăng tin"
        modalVisible={showTimerModal}
        setModalVisible={setShowTimerModal}
        selectedValue={selectedValuesTimer}
        setSelectedValue={setSelectedValuesTimer}
      />
    </>
  );
};

export default PaymentDate;
