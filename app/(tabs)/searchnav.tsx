import Filter from "@/components/Filter";
import FloatingActionButton from "@/components/FloatingActionButtonProps ";
import LayOutBds from "@/components/LayOutBds";
import LayOutBroker from "@/components/LayOutBroker";
import LayOutXt from "@/components/LayOutXt";
import Arrange from "@/components/Modal/Arrange";
import ScreenWrapper from "@/components/ScreenWrapper";
import Search from "@/components/Search";
import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const searchnav = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("default"); // Mặc định là 'default'

  const options = [
    { label: "Mặc định", value: "default" },
    { label: "Tin tức thực tế xếp trước", value: "news_first" },
    { label: "Giá thấp đến cao", value: "low_to_high" },
    { label: "Giá cao đến thấp", value: "hight_to_low" },
    { label: "Giá/m² thấp đến cao", value: "m2low_to_high" },
    { label: "Giá/m² cao đến thấp", value: "m2high_to_lơ" },
    { label: "Diện tích nhỏ đến lớn", value: "small_to_large" },
    { label: "Diện tích lớn đến nhỏ", value: "large_to_small" },
  ];

  return (
    <>
      <ScreenWrapper bgColor="#F2F2F2">
        {/* Search trong thanh navbar */}
        <Search />
        {/* Bộ lọc ngang trong Tìm kiếm */}
        <Filter />

        {/* Danh sách bất động sản trong thanh navbar */}
        <View className="bg-white flex-1 flex-row items-center justify-between mx-[-16px] px-4  py-6">
          <Text>62.562 bất động sản</Text>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            className="flex-row gap-2  py-3 px-4 rounded-full border border-border justify-center items-center "
          >
            <Text className="text-gray-400">Sắp xếp</Text>
            <FontAwesome5 name="sort-amount-down" size={18} color="black" />
          </TouchableOpacity>
        </View>
        <View className="bg-white flex-1 mx-[-16px] px-4">
          <LayOutBds />
        </View>
        <View className="bg-background flex-1 mx-[-16px] px-4">
          <LayOutXt />
        </View>
        <View className="bg-white flex-1 mx-[-16px] px-4">
          <LayOutBds />
        </View>
        <View className="bg-background flex-1 mx-[-16px] px-4">
          <LayOutBroker />
        </View>
        <View className="bg-white flex-1 mx-[-16px] px-4">
          <LayOutBds />
        </View>
      </ScreenWrapper>

      {/* Hiển thị Modal */}
      <Arrange
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        options={options}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />

      <FloatingActionButton
        text="Bản đồ"
        icon="map"
        onPress={() => router.push("/searchnav")}
      />
    </>
  );
};

export default searchnav;
