import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import dayjs from "dayjs";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CustomDateModal from "./CustomDateModal";
import ModalClick from "./ModalClick";
import ModalComparePrice from "./ModalComparePrice";
import ModalTimer from "./ModalTimer";
// Types
type VipPackage = {
  id: string;
  name: string;
  description: string;
  currentPrice: string;
  originalPrice: string;
  dailyClicks: string;
  icon: React.ReactNode;
  bgColor: string;
  iconName: string;
};

type CounterInputProps = {
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
  canIncrease?: boolean;
  canDecrease?: boolean;
};

const PaymentClick = () => {
  const [vipKimCuongCount, setVipKimCuongCount] = useState(0);
  const [vipVangCount, setVipVangCount] = useState(0);
  const [vipBacCount, setVipBacCount] = useState(0);
  const [activePackage, setActivePackage] = useState<string | null>(null);
  const [showDateModal, setShowDateModal] = useState(false);
  const [showTimerModal, setShowTimerModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [showText, setShowText] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [selectedValuesTimer, setSelectedValuesTimer] = useState("now");
  const vipPackages: VipPackage[] = [
    {
      id: "kimcuong",
      name: "VIP KIM CƯƠNG",
      description: "Bán nhanh, hiệu quả cao",
      currentPrice: "97.500 đ/click",
      originalPrice: "130.000 đ/click",
      dailyClicks: "5-40 click/ngày",
      icon: <FontAwesome5 name="sort-amount-up" size={24} color="black" />,
      bgColor: "bg-red-200",
      iconName: "direction",
    },
    {
      id: "vang",
      name: "VIP Vàng",
      description: "Cân bằng chi phí, tốc độ",
      currentPrice: "68.250 đ/click",
      originalPrice: "91.000 đ/click",
      dailyClicks: "3-18 click/ngày",
      icon: <Entypo name="baidu" size={24} color="black" />,
      bgColor: "bg-red-200",
      iconName: "bar-graph",
    },
    {
      id: "bac",
      name: "VIP Bạc",
      description: "Tiết kiệm nhất",
      currentPrice: "45.750 đ/click",
      originalPrice: "61.000 đ/click",
      dailyClicks: "2-7 click/ngày",
      icon: <Entypo name="ticket" size={24} color="black" />,
      bgColor: "bg-red-200",
      iconName: "trophy",
    },
  ];

  const CounterInput = ({
    value,
    onIncrease,
    onDecrease,
    canIncrease = true,
    canDecrease = true,
  }: CounterInputProps) => {
    return (
      <View className="mt-4">
        <View className="flex-row gap-4 items-center">
          <TouchableOpacity
            disabled={!canDecrease}
            onPress={onDecrease}
            className={`w-10 h-10 rounded-full justify-center items-center ${
              canDecrease ? "border border-gray-200 bg-white" : "bg-gray-100"
            }`}
          >
            <AntDesign
              name="minus"
              size={16}
              color={canDecrease ? "black" : "#6B7280"}
            />
          </TouchableOpacity>

          <View className="flex-1 py-2 border border-gray-200 rounded-full">
            <Text className="text-lg font-medium text-center">{value}</Text>
          </View>

          <TouchableOpacity
            disabled={!canIncrease}
            onPress={onIncrease}
            className={`w-10 h-10 rounded-full justify-center items-center ${
              canIncrease ? "border border-gray-200 bg-white" : "bg-gray-100"
            }`}
          >
            <AntDesign
              name="plus"
              size={16}
              color={canIncrease ? "black" : "#6B7280"}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const VipPackageItem = ({
    packageData,
    count,
    setCount,
    isActive,
    onPress,
  }: {
    packageData: VipPackage;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    isActive: boolean;
    onPress: () => void;
  }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        className={`p-4 border rounded-lg mt-4 ${isActive ? "border-black" : "border-gray-200"}`}
      >
        <View className="flex-row justify-between items-center mb-2">
          <View className="flex-row items-center gap-2">
            {packageData.icon}
            <View>
              <Text className="font-bold">{packageData.name}</Text>
              <Text className="text-sm">{packageData.description}</Text>
            </View>
          </View>

          <View>
            <Text className="text-secondary font-bold">
              {packageData.currentPrice}
            </Text>
            <Text
              style={{ textDecorationLine: "line-through" }}
              className="text-gray-500 text-sm"
            >
              {packageData.originalPrice}
            </Text>
          </View>
        </View>

        <View
          className={`flex-row py-2 gap-1 ${packageData.bgColor} rounded-lg items-center`}
        >
          <Entypo name={packageData.iconName as any} size={20} color="black" />
          <Text className="text-sm">{packageData.dailyClicks}</Text>
        </View>
        {isActive && (
          <View className="pt-4 border-t mt-4 border-gray-200 mb-1">
            <View className="flex-row gap-1">
              <Text className="text-sm text-gray-500 mb-2">
                Chọn số lượt click.
              </Text>
              <TouchableOpacity onPress={() => setShowExitModal(true)}>
                <Text className="font-bold text-secondary underline">
                  Định nghĩa lượt click?
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <View className="flex-row gap-2 mr-4 mb-1">
                <Text>-</Text>
                <Text className="text-gray-500">
                  Thời hạn đăng tin là 10 ngày.
                </Text>
              </View>
              <View className="flex-row gap-2 mr-4 mb-1">
                <Text>-</Text>
                <Text className="text-gray-500">
                  Tin sẽ tự động hạ khi đạt đủ số click
                </Text>
              </View>
              <View className="flex-row gap-2 mr-4">
                <Text>-</Text>
                <Text className="text-gray-500">
                  Khi hết hạn, chi phí cho số click chưa đặt sẽ được hoàn trả
                </Text>
              </View>
            </View>

            <CounterInput
              value={count}
              onIncrease={() => setCount((prev) => prev + 1)}
              onDecrease={() => setCount((prev) => Math.max(prev - 1, 0))}
              canDecrease={count > 0}
            />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View className="">
      {/* Header */}
      <View className="p-4 rounded-lg bg-gray-200">
        <TouchableOpacity
          onPress={() => setShowText(!showText)}
          className="flex-row justify-between items-center"
        >
          <View className="flex-row gap-2">
            <EvilIcons name="question" size={24} color="black" />
            <Text className="font-bold">Tin trả theo click là gì?</Text>
          </View>
          <View>
            <Entypo name="chevron-down" size={24} color="black" />
          </View>
        </TouchableOpacity>
        {showText && (
          <View>
            <View className="flex-row gap-1 mr-4 my-4">
              <MaterialCommunityIcons name="crown" size={24} color="black" />
              <Text>Tin giữ nguyên các tính năng và giao diện của tin VIP</Text>
            </View>
            <View className="flex-row gap-1 mr-4">
              <AntDesign name="camerao" size={24} color="black" />
              <Text>
                Tin được hiển thị miễn phí, chỉ thanh toán khi có lượt click
                (người dùng nhấp vào tin từ trang Kết quả tìm kiếm)
              </Text>
            </View>
          </View>
        )}
      </View>

      <View className="flex-row justify-between items-center mt-6">
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

      <View className="flex-row gap-1 mt-4">
        <SimpleLineIcons name="bulb" size={24} color="black" />
        <Text className="mr-4">
          Vị trí hiển thị càng cao, tỉ lệ chuyển đổi từ click thành liên hệ càng
          lớn
        </Text>
      </View>

      {/* Render VIP packages */}
      {vipPackages.map((pkg) => (
        <VipPackageItem
          key={pkg.id}
          packageData={pkg}
          count={
            pkg.id === "kimcuong"
              ? vipKimCuongCount
              : pkg.id === "vang"
                ? vipVangCount
                : vipBacCount
          }
          setCount={
            pkg.id === "kimcuong"
              ? setVipKimCuongCount
              : pkg.id === "vang"
                ? setVipVangCount
                : setVipBacCount
          }
          isActive={activePackage === pkg.id}
          onPress={() => setActivePackage(pkg.id)}
        />
      ))}

      {/* Normal package */}
      <TouchableOpacity className="p-4 border rounded-lg mt-4 bg-gray-200 border-gray-200">
        <View className="flex-row justify-between items-center mb-2">
          <View className="flex-row items-center gap-2">
            <Entypo name="ticket" size={24} color="black" />
            <View>
              <Text className="text-gray-500 font-bold">Tin thường</Text>
            </View>
          </View>
          <View>
            <Text className="text-gray-500 text-sm">Không áp dụng cho</Text>
            <Text className="text-gray-500 text-sm">tin trả theo click</Text>
          </View>
        </View>
      </TouchableOpacity>

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

      {/* Modal */}
      <ModalClick
        visible={showExitModal}
        onClose={() => setShowExitModal(false)}
      />
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
    </View>
  );
};

export default PaymentClick;
