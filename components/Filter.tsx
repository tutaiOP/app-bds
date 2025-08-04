import { Entypo, Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Area from "./Modal/Area";
import BedRooms from "./Modal/BedRooms";
import DirectionBalcony from "./Modal/DirectionBalcony";
import DirectionHome from "./Modal/DirectionHome";
import ImageAndVideo from "./Modal/ImageAndVideo";
import Picker from "./Modal/Picker";
import Price from "./Modal/Price";

const filters = [
  "Loại nhà đất",
  "Khoảng giá",
  "Diện tích",
  "Số phòng ngủ",
  "Hướng nhà",
  "Hướng ban công",
  "Tin có ảnh/video",
];

const propertyTypes = [
  {
    label: "Tất cả nhà đất",
    value: "all",
    icon: <Feather name="home" size={20} />,
  },
  {
    label: "Căn hộ chung cư",
    value: "apartment",
    icon: <Feather name="grid" size={20} />,
  },
  {
    label: "Chung cư mini, căn hộ dịch vụ",
    value: "apartment-1",
    icon: <Feather name="grid" size={20} />,
  },
  {
    label: "Nhà bán",
    value: "sale",
    icon: <Feather name="tag" size={20} />,
    children: [
      { label: "Nhà riêng", value: "private-house" },
      { label: "Nhà biệt thự, liền kề", value: "1-house" },
      { label: "Nhà mặt phố", value: "street-house" },
      { label: "Shophouse, nhà phố thương mại", value: "2-house" },
    ],
  },
  {
    label: "Đất bán",
    value: "sale1",
    icon: <Feather name="tag" size={20} />,
    children: [
      { label: "Đất nên dự án", value: "1-sale" },
      { label: "Bán đất", value: "2-sale" },
    ],
  },
  {
    label: "Trang trại, khu nghỉ dưỡng",
    value: "trangtrai",
    icon: <Feather name="tag" size={20} />,
    children: [{ label: "Condotel", value: "1-trangtrai" }],
  },
  {
    label: "Kho, nhà xưởng",
    value: "kho",
    icon: <Feather name="grid" size={20} />,
  },
  {
    label: "Bất động sản khác",
    value: "bds",
    icon: <Feather name="grid" size={20} />,
  },
];

const priceTypes = [
  { label: "Tất cả khoảng giá", value: "price1" },
  { label: "Dưới 500 triệu", value: "price2" },
  { label: "500 - 800 triệu", value: "price3" },
  { label: "800 triệu - 1 tỷ", value: "price4" },
  { label: "1 - 2 tỷ", value: "price5" },
  { label: "2 - 3 tỷ", value: "price6" },
  { label: "3 - 5 tỷ", value: "price7" },
  { label: "7 - 10 tỷ", value: "price8" },
  { label: "10 - 20 tỷ", value: "price9" },
  { label: "20 - 30 tỷ", value: "price10" },
  { label: "30 - 40 tỷ", value: "price11" },
  { label: "40 - 60 tỷ", value: "price12" },
  { label: "Trên 60 tỷ", value: "price13" },
  { label: "Thỏa thuận", value: "price14" },
];

const areaTypes = [
  { label: "Tất cả diện tích", value: "area1" },
  { label: "Dưới 30 m²", value: "area2" },
  { label: "30 - 50 m²", value: "area3" },
  { label: "50 - 80 m²", value: "area4" },
  { label: "80 - 100 m²", value: "area5" },
  { label: "100 - 150 m²", value: "area6" },
  { label: "150 - 200 m²", value: "area7" },
  { label: "200 - 250 m²", value: "area8" },
  { label: "250 - 300 m²", value: "area9" },
  { label: "300 - 500 m²", value: "area10" },
  { label: "Trên 500 m²", value: "area13" },
];
const directionHomeTypes = [
  {
    label: "Đông",
    value: "dong",
  },
  {
    label: "Tây",
    value: "tay",
  },
  {
    label: "Nam",
    value: "nam",
  },
  {
    label: "Bắc",
    value: "bac",
  },
  {
    label: "Đông Bắc",
    value: "dongbac",
  },
  {
    label: "Đông Nam",
    value: "dongnam",
  },
  {
    label: "Tây Bắc",
    value: "taybac",
  },
  {
    label: "Tây Nam",
    value: "taynam",
  },
];

const directionBalconyTypes = [
  {
    label: "Đông",
    value: "dong",
  },
  {
    label: "Tây",
    value: "tay",
  },
  {
    label: "Nam",
    value: "nam",
  },
  {
    label: "Bắc",
    value: "bac",
  },
  {
    label: "Đông Bắc",
    value: "dongbac",
  },
  {
    label: "Đông Nam",
    value: "dongnam",
  },
  {
    label: "Tây Bắc",
    value: "taybac",
  },
  {
    label: "Tây Nam",
    value: "taynam",
  },
];

const bedroomOptions = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5+", value: "5+" },
];

const imangeandvideoOptions = [
  { label: "Có video", value: "video" },
  { label: "Có hình 3D & 360 độ", value: "image" },
];

const Filter = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedDirectionHome, setselectedDirectionHome] = useState<string[]>(
    []
  );
  const [selectedDirectionBalcony, setselectedDirectionBalcony] = useState<
    string[]
  >([]);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [selectedValuePrice, setSelectedValuePrice] = useState(""); // Mặc định là 'default'
  const [selectedValueArea, setSelectedValueArea] = useState(""); // Mặc định là 'default'
  const [selectedValuesBedRooms, setselectedValuesBedRooms] = useState<
    string[]
  >([]);
  const [selectedValuesImageAndVideo, setselectedValuesImageAndVideo] =
    useState<string[]>([]);

  const handleFilterPress = (item: string) => {
    setActiveFilter(item);
  };

  return (
    <View className="py-4">
      <FlatList
        data={filters}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleFilterPress(item)}
            className="flex-row items-center border border-border px-4 py-2 rounded-3xl bg-white"
          >
            <Text className="text-gray-400 mr-1">{item}</Text>
            <Entypo name="chevron-small-down" size={20} color="black" />
          </TouchableOpacity>
        )}
      />

      {/* Modal Picker cho "Loại nhà đất" */}
      <Picker
        title="Loại nhà đất"
        modalVisible={activeFilter === "Loại nhà đất"}
        setModalVisible={(visible) =>
          visible ? setActiveFilter("Loại nhà đất") : setActiveFilter(null)
        }
        options={propertyTypes}
        selectedValues={selectedValues}
        setSelectedValues={setSelectedValues}
        isMultiple={true}
        onApply={() => console.log("Áp dụng: ", selectedValues)}
        onReset={() => setSelectedValues([])}
      />

      {/* Modal Price cho "Khoảng giá" */}
      <Price
        title="Khoảng giá"
        modalVisible={activeFilter === "Khoảng giá"}
        setModalVisible={(visible) =>
          visible ? setActiveFilter("Khoảng giá") : setActiveFilter(null)
        }
        options={priceTypes}
        selectedValue={selectedValuePrice}
        setSelectedValue={setSelectedValuePrice}
        isMultiple={true}
        onApply={() => console.log("Áp dụng: ", selectedValuePrice)}
        onReset={() => setSelectedValuePrice("")}
      />
      {/* Modal Diện tích cho "Diện tích" */}
      <Area
        title="Diện tích"
        modalVisible={activeFilter === "Diện tích"}
        setModalVisible={(visible) =>
          visible ? setActiveFilter("Diện tích") : setActiveFilter(null)
        }
        options={areaTypes}
        selectedValue={selectedValueArea}
        setSelectedValue={setSelectedValueArea}
        isMultiple={true}
        onApply={() => console.log("Áp dụng Diện tích: ", selectedValueArea)}
        onReset={() => setSelectedValueArea("")}
      />

      {/* Modal Picker cho "Hướng nhà" */}
      <DirectionHome
        title="Hướng nhà"
        modalVisible={activeFilter === "Hướng nhà"}
        setModalVisible={(visible) =>
          visible ? setActiveFilter("Hướng nhà") : setActiveFilter(null)
        }
        options={directionHomeTypes}
        selectedValues={selectedDirectionHome}
        setSelectedValues={setselectedDirectionHome}
        isMultiple={true}
        onApply={() => console.log("Áp dụng: ", selectedDirectionHome)}
        onReset={() => setselectedDirectionHome([])}
      />
      <DirectionBalcony
        title="Hướng ban công"
        modalVisible={activeFilter === "Hướng ban công"}
        setModalVisible={(visible) =>
          visible ? setActiveFilter("Hướng ban công") : setActiveFilter(null)
        }
        options={directionBalconyTypes}
        selectedValues={selectedDirectionBalcony}
        setSelectedValues={setselectedDirectionBalcony}
        isMultiple={true}
        onApply={() => console.log("Áp dụng: ", selectedDirectionBalcony)}
        onReset={() => setselectedDirectionBalcony([])}
      />
      <BedRooms
        title="Số phòng ngủ"
        modalVisible={activeFilter === "Số phòng ngủ"}
        setModalVisible={(visible) =>
          visible ? setActiveFilter("Số phòng ngủ") : setActiveFilter(null)
        }
        options={bedroomOptions}
        selectedValues={selectedValuesBedRooms}
        setSelectedValues={setselectedValuesBedRooms}
        isMultiple
        onApply={() => console.log("Áp dụng:", selectedValuesBedRooms)}
        onReset={() => setselectedValuesBedRooms([])}
      />
      <ImageAndVideo
        title="Tin có ảnh/video"
        modalVisible={activeFilter === "Tin có ảnh/video"}
        setModalVisible={(visible) =>
          visible ? setActiveFilter("Tin có ảnh/video") : setActiveFilter(null)
        }
        options={imangeandvideoOptions}
        selectedValues={selectedValuesImageAndVideo}
        setSelectedValues={setselectedValuesImageAndVideo}
        isMultiple
        onApply={() => console.log("Áp dụng:", selectedValuesImageAndVideo)}
        onReset={() => setselectedValuesImageAndVideo([])}
      />
    </View>
  );
};

export default Filter;
