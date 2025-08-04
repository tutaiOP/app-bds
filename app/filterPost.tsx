import District from "@/components/Modal/District";
import FilterBds from "@/components/Modal/FilterBds";
import FilterDate from "@/components/Modal/FilterDate";
import PostType from "@/components/Modal/PostType";
import Province from "@/components/Modal/Province";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const bdsOptions = [
  { label: "Căn hộ chung cư", value: "Căn hộ chung cư" },
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

const dateOption = [
  { label: "Mặc định", value: "Mặc định" },
  { label: "1 tuần qua", value: "1 tuần qua" },
  { label: "30 ngày qua", value: "30 ngày qua" },
  { label: "Ngày tùy chọn", value: "Ngày tùy chọn" },
];
const provinceOptions = [
  { label: "Hà nội", value: "Ha noi" },
  { label: "Hồ Chí Minh", value: "Hồ Chí minh" },
  { label: "Đà Nẵng", value: "Đà nẵng" },
  { label: "Bình Dương", value: "Bình Dương" },
  { label: "Đồng nai", value: "Đồng nai" },
  { label: "Khánh hòa", value: "Khánh hòa" },
  { label: "An Giang", value: "An Giang" },
  { label: "Bà Rịa Vũng Tàu", value: "Bà Rịa Vũng Tàu" },
  { label: "Bắc Giang", value: "Bắc Giang" },
  { label: "Bắc Kạn", value: "Bắc Kạn" },
  { label: "Bạc Liêu", value: "Bạc Liêu" },
  { label: "Bắc Ninh", value: "Bắc Ninh" },
  { label: "Bến Tre", value: "Bến Tre" },
  { label: "Bình Định", value: "Bình Định" },
];

const districtOptions = [
  { label: "Bắc Tân Uyên", value: "Bắc Tân Uyên" },
  { label: "Bàu Bàng", value: "Bàu Bàng" },
  { label: "Bến Cát", value: "Bến Cát" },
  { label: "Dầu Tiếng", value: "Dầu Tiếng" },
  { label: "Dĩ An", value: "Dĩ An" },
  { label: "Phú Giáo", value: "Phú Giáo" },
  { label: "Tân Uyên", value: "Tân Uyên" },
  { label: "Thủ Dầu Một", value: "Thủ Dầu Một" },
  { label: "Thuận An", value: "Thuận An" },
];

const postTypeOptions = [
  { label: "VIP Kim Cương", value: "VIP Kim Cương" },
  { label: "VIP Vàng", value: "VIP Vàng" },
  { label: "VIP Bạc", value: "VIP Bạc" },
  { label: "Tin thường", value: "Tin thường" },
];

const FilterPost = () => {
  const [activeTab, setActiveTab] = useState<"all" | "mua" | "thue">("all");
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedValueDate, setSelectedValueDate] = useState(""); // Mặc định là 'default'
  const [selectedValuesProvince, setSelectedValuesProvince] = useState<
    string[]
  >([]);
  const [selectedValuesDistrict, setSelectedValuesDistrict] = useState<
    string[]
  >([]);
  const [selectedValuesPostType, setSelectedValuesPostType] = useState<
    string[]
  >([]);
  const [selectedValuesBds, setSelectedValuesBds] = useState<string[]>([]);

  const handleFilterPress = (item: string) => {
    setActiveFilter(item);
  };
  const renderAddButton = (filterKey: string) => {
    const isDisabled = activeTab === "all" && filterKey === "Loại BĐS";

    return (
      <TouchableOpacity
        onPress={() => {
          if (!isDisabled) handleFilterPress(filterKey);
        }}
        disabled={isDisabled}
        className={`flex-row mb-3 items-center border border-black rounded-full px-4 py-2 self-start ${
          isDisabled ? "opacity-30" : ""
        }`}
      >
        <Ionicons name="add" size={16} color="black" />
        <Text className="ml-2 text-black font-bold">Thêm</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View className="flex-1 ">
        {/* Header */}
        <View className="px-4 py-4  border-b border-gray-200 flex-row items-center">
          <TouchableOpacity className="mr-3" onPress={() => router.back()}>
            <Ionicons name="close" size={28} color="black" />
          </TouchableOpacity>
          <Text className="text-xl font-bold">Bộ lọc</Text>
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
          {/* Tabs */}
          <View className="px-4 mt-4">
            <View className="flex-row bg-gray-200 p-1 rounded-full">
              {["all", "mua", "thue"].map((type) => (
                <TouchableOpacity
                  key={type}
                  onPress={() => setActiveTab(type as any)}
                  className={`flex-1 py-2 rounded-full items-center justify-center ${
                    activeTab === type ? "bg-black" : ""
                  }`}
                >
                  <Text
                    className={`${
                      activeTab === type
                        ? "text-white font-semirbold"
                        : "text-gray-700"
                    }`}
                  >
                    {type === "all"
                      ? "Tất cả"
                      : type === "mua"
                        ? "Bán"
                        : "Cho thuê"}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Dropdown Ngày đăng tin */}
          <View className="mt-6 px-4">
            <Text className="text-base font-semibold mb-2">Ngày đăng tin</Text>
            <TouchableOpacity
              onPress={() => handleFilterPress("Ngày Đăng tin")}
              className="border border-gray-300 rounded-full px-4 py-3 flex-row justify-between items-center"
            >
              <Text className="text-gray-600">Mặc định</Text>
              <Ionicons name="chevron-down" size={20} color="gray" />
            </TouchableOpacity>
          </View>

          {/* Filters Thêm */}
          <View className="px-4 mt-6 space-y-5">
            <View>
              <Text className="font-semibold mb-2">Loại BĐS</Text>
              {renderAddButton("Loại BĐS")}
            </View>
            <View>
              <Text className="font-semibold mb-2">Tỉnh/ Thành</Text>
              {renderAddButton("Tỉnh/ Thành")}
            </View>
            <View>
              <Text className="font-semibold mb-2">Quận/ Huyện</Text>
              {renderAddButton("Quận/ Huyện")}
            </View>
            <View>
              <Text className="font-semibold mb-2">Loại tin đăng</Text>
              {renderAddButton("Loại tin đăng")}
            </View>
          </View>
        </ScrollView>
        {/* Modal Loại BĐS */}
        <FilterBds
          title="Lọc theo loại BĐS"
          modalVisible={activeFilter === "Loại BĐS"}
          setModalVisible={(visible) =>
            visible ? setActiveFilter("Loại BĐS") : setActiveFilter(null)
          }
          options={bdsOptions}
          selectedValues={selectedValuesBds}
          setSelectedValues={setSelectedValuesBds}
          isMultiple={true}
          onApply={() => console.log("Áp dụng: ", selectedValuesBds)}
          onReset={() => setSelectedValuesBds([])}
        />
        {/* Modal Ngày đăng tin */}
        <FilterDate
          title="Ngày đăng tin"
          modalVisible={activeFilter === "Ngày Đăng tin"}
          setModalVisible={(visible) =>
            visible ? setActiveFilter("Ngày Đăng tin") : setActiveFilter(null)
          }
          options={dateOption}
          selectedValue={selectedValueDate}
          setSelectedValue={setSelectedValueDate}
          isMultiple={true}
          onApply={() => console.log("Áp dụng: ", selectedValueDate)}
          onReset={() => setSelectedValueDate("")}
        />
        {/* Modal Tinh/thanh */}
        <Province
          title="Lọc theo tỉnh/ thành"
          modalVisible={activeFilter === "Tỉnh/ Thành"}
          setModalVisible={(visible) =>
            visible ? setActiveFilter("Tỉnh/ Thành") : setActiveFilter(null)
          }
          options={provinceOptions}
          selectedValues={selectedValuesProvince}
          setSelectedValues={setSelectedValuesProvince}
          isMultiple={true}
          onApply={() => console.log("Áp dụng: ", selectedValuesProvince)}
          onReset={() => setSelectedValuesProvince([])}
        />
        {/* Modal Quan/Huyen */}
        <District
          title="Lọc theo quận/huyện"
          modalVisible={activeFilter === "Quận/ Huyện"}
          setModalVisible={(visible) =>
            visible ? setActiveFilter("Quận/ Huyện") : setActiveFilter(null)
          }
          options={districtOptions}
          selectedValues={selectedValuesDistrict}
          setSelectedValues={setSelectedValuesDistrict}
          isMultiple={true}
          onApply={() => console.log("Áp dụng: ", selectedValuesDistrict)}
          onReset={() => setSelectedValuesDistrict([])}
        />
        {/* Modal Loại tin đăng */}
        <PostType
          title="Lọc theo loại tin đăng"
          modalVisible={activeFilter === "Loại tin đăng"}
          setModalVisible={(visible) =>
            visible ? setActiveFilter("Loại tin đăng") : setActiveFilter(null)
          }
          options={postTypeOptions}
          selectedValues={selectedValuesPostType}
          setSelectedValues={setSelectedValuesPostType}
          isMultiple={true}
          onApply={() => console.log("Áp dụng: ", selectedValuesPostType)}
          onReset={() => setSelectedValuesPostType([])}
        />

        {/* Footer Buttons */}
        <View className="flex-row justify-between items-center px-5 py-4 border-t border-gray-200 bg-white">
          <TouchableOpacity className="flex-1 border border-black py-3 rounded-full mr-2">
            <Text className="text-center font-semibold">Đặt lại</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-red-500 py-3 rounded-full ml-2">
            <Text className="text-center text-white font-semibold">
              Áp dụng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FilterPost;
