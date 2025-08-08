import Filter from "@/components/Filter";
import FloatingActionButton from "@/components/FloatingActionButtonProps ";
import LayOutBds from "@/components/LayOutBds";
import LayOutBroker from "@/components/LayOutBroker";
import LayOutXt from "@/components/LayOutXt";
import Arrange from "@/components/Modal/Arrange";
import ScreenWrapper from "@/components/ScreenWrapper";
import Search from "@/components/Search";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const searchnav = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("default"); // Mặc định là 'default'
  const [currentLayout, setCurrentLayout] = useState<"list" | "map">("list");
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
  const CustomMarker = () => (
    <View className="bg-blue-500 w-8 h-8 rounded-full items-center justify-center border-2 border-white">
      <Text className="text-white font-bold text-xs">VIP</Text>
    </View>
  );

  return (
    <>
      {currentLayout === "list" ? (
        <ScreenWrapper bgColor="#F2F2F2">
          {/* Danh sách bất động sản trong thanh navbar */}
          {/* Search trong thanh navbar */}
          <Search />
          {/* Bộ lọc ngang trong Tìm kiếm */}
          <Filter />
          <View>
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
          </View>
        </ScreenWrapper>
      ) : (
        <>
          <View className="absolute top-0 left-0 right-0">
            <Search />
            <Filter />
          </View>
          <MapView
            style={{ flex: 1 }}
            className="flex-1"
            initialRegion={{
              latitude: 10.8231, // Tọa độ Hồ Chí Minh
              longitude: 106.6297,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{ latitude: 10.8231, longitude: 106.6297 }}
              title="Vị trí mẫu a"
              description="Khu vực đông dân"
            />
          </MapView>
        </>
      )}

      {/* Hiển thị Modal */}
      <Arrange
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        options={options}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <FloatingActionButton
        text={currentLayout === "list" ? "Bản đồ" : "Danh sách"}
        icon={currentLayout === "list" ? "map" : "list"}
        onPress={() =>
          setCurrentLayout(currentLayout === "list" ? "map" : "list")
        }
      />
    </>
  );
};

export default searchnav;
