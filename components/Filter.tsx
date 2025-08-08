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
    value: "Tất cả nhà đất",
    icon: <Feather name="home" size={20} />,
  },
  {
    label: "Căn hộ chung cư",
    value: "Căn hộ chung cư",
    icon: <Feather name="grid" size={20} />,
  },
  {
    label: "Chung cư mini, căn hộ dịch vụ",
    value: "Chung cư mini, căn hộ dịch vụ",
    icon: <Feather name="grid" size={20} />,
  },
  {
    label: "Nhà bán",
    value: "Nhà bán",
    icon: <Feather name="tag" size={20} />,
    children: [
      { label: "Nhà riêng", value: "Nhà riêng" },
      { label: "Nhà biệt thự, liền kề", value: "Nhà biệt thự, liền kề" },
      { label: "Nhà mặt phố", value: "Nhà mặt phố" },
      {
        label: "Shophouse, nhà phố thương mại",
        value: "Shophouse, nhà phố thương mại",
      },
    ],
  },
  {
    label: "Đất bán",
    value: "Đất bán",
    icon: <Feather name="tag" size={20} />,
    children: [
      { label: "Đất nên dự án", value: "Đất nên dự án" },
      { label: "Bán đất", value: "Bán đất" },
    ],
  },
  {
    label: "Trang trại, khu nghỉ dưỡng",
    value: "Trang trại, khu nghỉ dưỡng",
    icon: <Feather name="tag" size={20} />,
    children: [{ label: "Condotel", value: "Condotel" }],
  },
  {
    label: "Kho, nhà xưởng",
    value: "Kho, nhà xưởng",
    icon: <Feather name="grid" size={20} />,
  },
  {
    label: "Bất động sản khác",
    value: "Bất động sản khác",
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
  { label: "Tất cả diện tích", value: "Tất cả diện tích" },
  { label: "Dưới 30 m²", value: "Dưới 30 m²" },
  { label: "30 - 50 m²", value: "30 - 50 m²" },
  { label: "50 - 80 m²", value: "50 - 80 m²" },
  { label: "80 - 100 m²", value: "80 - 100 m²" },
  { label: "100 - 150 m²", value: "100 - 150 m²" },
  { label: "150 - 200 m²", value: "150 - 200 m²" },
  { label: "200 - 250 m²", value: "200 - 250 m²" },
  { label: "250 - 300 m²", value: "250 - 300 m²" },
  { label: "300 - 500 m²", value: "300 - 500 m²" },
  { label: "Trên 500 m²", value: "Trên 500 m²" },
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
  const [selectedPriceDisplay, setSelectedPriceDisplay] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0]);

  // Format giá trị để hiển thị
  const formatDisplayPrice = (range: [number, number]) => {
    if (range[0] === 0 && range[1] === 0) return "Khoảng giá";
    return `${(range[0] / 1000000).toFixed(1)} tỷ - ${(range[1] / 1000000).toFixed(1)} tỷ`;
  };

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
        renderItem={({ item }) => {
          // Nếu là "Loại nhà đất" thì hiển thị giá trị đã chọn
          let displayText = item;

          if (item === "Loại nhà đất" && selectedValues.length > 0) {
            displayText = selectedValues.join(", ");
          } else if (item === "Khoảng giá" && selectedPriceDisplay) {
            displayText = selectedPriceDisplay || item; // Hiển thị giá trị đã chọn hoặc mặc định
          }

          return (
            <TouchableOpacity
              onPress={() => handleFilterPress(item)}
              className="flex-row items-center border border-border px-4 py-2 rounded-3xl bg-white"
            >
              <Text
                numberOfLines={1} // Giới hạn 1 dòng
                ellipsizeMode="tail"
                className={
                  displayText === item
                    ? "text-gray-400 mr-1"
                    : "text-black mr-1"
                }
                style={{ maxWidth: 150 }}
              >
                {displayText}
              </Text>
              <Entypo name="chevron-small-down" size={20} color="black" />
            </TouchableOpacity>
          );
        }}
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
        setSelectedValue={(value) => {
          setSelectedValuePrice(value);
          const selectedOption = priceTypes.find((opt) => opt.value === value);
          setSelectedPriceDisplay(selectedOption?.label || "");
          if (selectedOption?.label === "Tất cả khoảng giá") {
            setPriceRange([0, 60000000]);
          }
        }}
        isMultiple={true}
        onApply={() => {
          // Format giá trị range để hiển thị
          if (priceRange[0] !== 0 || priceRange[1] !== 0) {
            const displayText = `${(priceRange[0] / 1000000).toFixed(1)} tỷ - ${(priceRange[1] / 1000000).toFixed(1)} tỷ`;
            setSelectedPriceDisplay(displayText);
          }
          console.log("Áp dụng giá trị:", {
            range: priceRange,
            selected: selectedValuePrice,
          });
        }}
        onReset={() => {
          setSelectedValuePrice("");
          setSelectedPriceDisplay(""); // Reset cả hiển thị
          setPriceRange([0, 0]);
        }}
        onRangeChange={(range) => {
          setPriceRange(range);
          setSelectedValuePrice(""); // Reset option khi thay đổi slider
        }}
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
