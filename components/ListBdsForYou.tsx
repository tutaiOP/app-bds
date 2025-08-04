import { Image } from "expo-image";
import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const allData = [
  {
    id: "1",
    title: "6tỷ căn liền kề mặt biển Vlasta Sầm Sơn - sổ đỏ vĩnh viễn ",
    urlImage: require("../assets/images/image-2.jpg"),
    price: "6",
    squareMeter: "83,8",
    location: "Sầm Sơn, Thanh Hóa",
  },
  {
    id: "2",
    title: "Nắm giữ những căn shophouse mặt biển ",
    urlImage: require("../assets/images/image-3.jpg"),
    price: "6,01",
    squareMeter: "83,4",
    location: "Sầm Sơn, Thanh Hóa",
  },
  {
    id: "3",
    title:
      "Shophouse siêu vip mặt tiền 11m view trực diện biển Vlasta Sầm Sơn, sổ vĩnh viễn ",
    urlImage: require("../assets/images/image-1.jpg"),
    price: "6",
    squareMeter: "96",
    location: "Sầm Sơn, Thanh Hóa",
  },
  {
    id: "4",
    title:
      "Chính chủ cần bán gấp lô góc shop trục chính 27m dự án Vlasta - Sầm Sơn ",
    urlImage: require("../assets/images/image-3.jpg"),
    price: "7,8",
    squareMeter: "76,5",
    location: "Sầm Sơn, Thanh Hóa",
  },
  {
    id: "5",
    title: "Bán căn góc 3 mặt thoáng view công viên",
    urlImage: require("../assets/images/image-2.jpg"),
    price: "8",
    squareMeter: "90",
    location: "Sầm Sơn, Thanh Hóa",
  },
  {
    id: "6",
    title: "Shophouse trung tâm sát biển - vị trí đẹp",
    urlImage: require("../assets/images/image-1.jpg"),
    price: "6.5",
    squareMeter: "100",
    location: "Sầm Sơn, Thanh Hóa",
  },
  {
    id: "7",
    title: "Căn hộ view biển cao cấp, pháp lý rõ ràng",
    urlImage: require("../assets/images/image-2.jpg"),
    price: "9.5",
    squareMeter: "110",
    location: "Sầm Sơn, Thanh Hóa",
  },
  {
    id: "8",
    title: "Nhà phố liền kề biển, hoàn thiện đẹp",
    urlImage: require("../assets/images/image-3.jpg"),
    price: "7.2",
    squareMeter: "85",
    location: "Sầm Sơn, Thanh Hóa",
  },
  {
    id: "9",
    title: "Shophouse mặt tiền đường lớn",
    urlImage: require("../assets/images/image-1.jpg"),
    price: "6.8",
    squareMeter: "95",
    location: "Sầm Sơn, Thanh Hóa",
  },
  {
    id: "10",
    title: "Biệt thự nghỉ dưỡng sát biển, full nội thất",
    urlImage: require("../assets/images/image-2.jpg"),
    price: "12",
    squareMeter: "200",
    location: "Sầm Sơn, Thanh Hóa",
  },
  {
    id: "11",
    title: "Căn hộ 2PN, tiện nghi, gần biển",
    urlImage: require("../assets/images/image-3.jpg"),
    price: "3.5",
    squareMeter: "70",
    location: "Sầm Sơn, Thanh Hóa",
  },
  {
    id: "12",
    title: "Nhà phố 4 tầng, tiện kinh doanh",
    urlImage: require("../assets/images/image-1.jpg"),
    price: "5.9",
    squareMeter: "88",
    location: "Sầm Sơn, Thanh Hóa",
  },
];

const ListBdsForYou = () => {
  const [visibleCount, setVisibleCount] = useState(10);
  const visibleData = allData.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <View>
      <Text className="text-xl font-bold mb-4">Bất động sản dành cho bạn</Text>

      <FlatList
        data={visibleData}
        scrollEnabled={false}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <View style={{ width: "48%", marginBottom: 16 }}>
            <View className="rounded-xl overflow-hidden">
              <Image
                source={item.urlImage}
                style={{ width: "100%", height: 120 }}
              />
            </View>
            <Text className="font-bold text-base line-clamp-3 mt-2 min-h-[60px]">
              {item.title}
            </Text>
            <View className="flex-row gap-2 items-center my-2">
              <Text className="font-bold text-secondary">{item.price} tỷ</Text>
              <Text>•</Text>
              <Text className="font-bold text-secondary">
                {item.squareMeter} m²
              </Text>
            </View>
            <Text>{item.location}</Text>
          </View>
        )}
        ListFooterComponent={
          visibleCount < allData.length ? (
            <TouchableOpacity
              onPress={handleLoadMore}
              className="py-3 px-4 bg-secondary rounded-full items-center self-center my-6"
            >
              <Text className="text-white font-bold">Xem thêm tin</Text>
            </TouchableOpacity>
          ) : null
        }
      />
    </View>
  );
};

export default ListBdsForYou;
