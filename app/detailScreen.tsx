import ListBdsForYou from "@/components/ListBdsForYou";
import ListPostView from "@/components/ListPostView";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const infoList = [
  {
    icon: <FontAwesome name="money" size={20} color="black" />,
    label: "Mức giá",
    value: "13,5 tỷ",
  },
  {
    icon: <AntDesign name="scan1" size={20} color="black" />,
    label: "Diện tích",
    value: "254 m²",
  },
  {
    icon: <FontAwesome name="home" size={20} color="black" />,
    label: "Mặt tiền",
    value: "8 m",
  },
  {
    icon: <FontAwesome name="road" size={20} color="black" />,
    label: "Đường vào",
    value: "12 m",
  },
  {
    icon: <Entypo name="compass" size={20} color="black" />,
    label: "Hướng nhà",
    value: "Đông",
  },
  {
    icon: <SimpleLineIcons name="compass" size={20} color="black" />,
    label: "Hướng ban công",
    value: "Đông",
  },
  {
    icon: (
      <MaterialCommunityIcons name="home-floor-g" size={20} color="black" />
    ),
    label: "Số tầng",
    value: "4",
  },
  {
    icon: <FontAwesome name="bed" size={20} color="black" />,
    label: "Số phòng ngủ",
    value: "3 phòng",
  },
  // Các dòng mở rộng
  {
    icon: <FontAwesome name="bath" size={20} color="black" />,
    label: "Số phòng tắm, vệ sinh",
    value: "4 phòng",
    hidden: true,
  },
  {
    icon: <FontAwesome name="file" size={20} color="black" />,
    label: "Pháp lý",
    value: "Sổ đỏ/ Sổ hồng",
    hidden: true,
  },
  {
    icon: <FontAwesome name="asterisk" size={20} color="black" />,
    label: "Nội thất",
    value: "Đầy đủ",
    hidden: true,
  },
];

const images = [
  require("../assets/images/image-1.jpg"),
  require("../assets/images/image-2.jpg"),
  require("../assets/images/image-3.jpg"),
  require("../assets/images/image-bds.jpg"),
  require("../assets/images/image-1.jpg"),
  require("../assets/images/image-2.jpg"),
  require("../assets/images/image-3.jpg"),
  require("../assets/images/image-bds.jpg"),
];

const DetailScreen = () => {
  const screenWidth = Dimensions.get("window").width;
  const scrollY = useRef(new Animated.Value(0)).current;
  const [expanded, setExpanded] = useState(false);
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const headerBackgroundColor = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: ["rgba(255,255,255,0)", "rgba(255,255,255,1)"],
    extrapolate: "clamp",
  });

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / screenWidth);
    setCurrentIndex(index);
  };

  // const borderBottomWidth = scrollY.interpolate({
  //   inputRange: [0, 100],
  //   outputRange: [0, 1],
  //   extrapolate: "clamp",
  // });
  return (
    <>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 120,
          paddingTop: 60,
          paddingBottom: 20,
          paddingHorizontal: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: headerBackgroundColor,
          // borderBottomWidth,
          // borderBottomColor: "#ccc",
          zIndex: 10,
        }}
      >
        <TouchableOpacity
          className="bg-white border border-gray-200 rounded-full p-1"
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <TouchableOpacity className="bg-white border border-gray-200 rounded-full p-1">
            <MaterialIcons name="ios-share" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-white border border-gray-200 rounded-full p-1">
            <Ionicons name="heart-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 50,
          backgroundColor: "white",
        }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        <View className="mx-[-16px] mt-[-16px] ">
          <FlatList
            className="relative"
            ref={flatListRef}
            data={images}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <Image
                source={item}
                style={{
                  width: screenWidth,
                  height: screenWidth * 0.75,
                }}
                resizeMode="cover"
              />
            )}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          />
          <View className="absolute bottom-0 right-0 bg-border px-3 py-1 rounded-full">
            <Text className="text-white text-sm">
              {currentIndex + 1}/{images.length}
            </Text>
          </View>
        </View>

        <View
          style={{ borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}
          className="bg-border  mx-[-16px] p-4"
        >
          <View className="flex-row gap-2 items-center">
            <Text className="font-bold text-lg">5,96 tỷ</Text>
            <Text>•</Text>
            <Text className="font-bold text-lg">83 m²</Text>
            <Text>~</Text>
            <Text className="text-lg">71,81 tr/m²</Text>
          </View>
          <View className="flex-row gap-2  items-center mt-2">
            <View className="flex-row gap-2 items-center">
              <Ionicons name="bed-outline" size={20} color="black" />
              <Text className="text-lg">6 PN</Text>
            </View>
            <Text>•</Text>
            <View className="flex-row gap-2 items-center">
              <FontAwesome5 name="bath" size={18} color="black" />
              <Text className="text-lg">5 WC</Text>
            </View>
            <Text>•</Text>
            <View className="flex-row gap-2 items-center">
              <FontAwesome5 name="bath" size={18} color="black" />
              <Text className="text-lg">4 tầng</Text>
            </View>
          </View>
        </View>
        {/* Title */}
        <View className="mt-4  pb-6 border-b border-gray-200 ">
          <Text className="text-xl font-bold">
            Siêu lợi nhuận - đầu tư Vlasta Sầm Sơn - 5.96 tỷ nhận ngay lợi nhuận
            69%
          </Text>
          <View className="flex-row justify-between mt-2">
            <View className="flex-1">
              <Text className="mb-3">
                Dự án Vlasta Sầm Sơn, Xã Quảng Hùng, Sầm Sơn, Thanh Hóa
              </Text>
              <Text className="font-semibold underline">Xem trên bản đồ</Text>
            </View>
            <View>
              <Image
                className="rounded-lg"
                source={require("../assets/images/image-2.jpg")}
                style={{ width: 60, height: 60 }}
              />
            </View>
          </View>
        </View>
        <View className="rounded-xl bg-white border border-gray-200  p-4 mt-6">
          <View className="flex-row items-center justify-between ">
            <View className="flex-row items-center gap-2">
              <FontAwesome name="arrow-circle-down" size={24} color="" />
              <Text className="text-2xl font-bold">0,1%</Text>
            </View>

            <View>
              <Text className="font-bold underline">Xem lịch sử giá</Text>
            </View>
          </View>
          <View className="mt-2">
            <Text>Giá tại khu vực này đã giảm trong vòng 1 năm qua</Text>
          </View>
        </View>

        <View className="border-b border-gray-200  py-6">
          <View className="mb-4">
            <Text className="text-xl font-bold">Mô tả</Text>
          </View>
          <View className="flex flex-col gap-4">
            <Text>
              Cơ hội cuối giữ suất đẹp Vlasta Sầm Sơn - chiết khấu tới 10% -
              tặng nội thất 360 triệu.
            </Text>
            <Text>
              Chỉ còn vài căn Shophouse thương mại mặt biển Sở hữu lâu dài giá
              tốt: Từ 5,96 tỷ/căn.
            </Text>
            <Text>
              Diện tích: 83m2 - Xây thô 4 tấng hoàn thiện mặt ngoài - Đã sẵn nhà
              và số bàn giao nhanh cho khách hàng.
            </Text>
            <Text>Tặng nội thất trị giá: 360 triệu.</Text>
            <Text>Cam kết tiền thuê trong 2 năm.</Text>
            <Text>Vay ngân hàng 0% lãi suất trong 24 tháng.</Text>
            <Text>Đặc biệt: Chiết khấu 10%.</Text>
            <Text>
              Đăng ký ngay để nhận file bảng giá và thiết kế 3D - và bài toán
              dòng tiền cho thuê lợi nhuận tới 69%.
            </Text>
            <Text>
              Hotline: <Text className="font-bold underline">0943827123</Text>
            </Text>
          </View>
        </View>
        <View className="py-6">
          <Text className="text-xl font-bold">Đặc điểm bất động sản</Text>

          <View className="pt-4">
            {infoList
              .slice(0, expanded ? infoList.length : 5)
              .map((item, index) => (
                <View
                  key={index}
                  className="flex-row justify-start items-center py-4 border-b border-gray-200"
                >
                  <View className="flex-1">
                    <View className="flex-row gap-2 items-center">
                      {item.icon}
                      <Text className="text-base">{item.label}</Text>
                    </View>
                  </View>
                  <View className="flex-1">
                    <Text className="text-base">{item.value}</Text>
                  </View>
                </View>
              ))}

            <TouchableOpacity
              onPress={() => setExpanded(!expanded)}
              className="mt-4 self-start px-4 py-2 border border-gray-400 rounded-full"
            >
              <Text className="text-black font-bold">
                {expanded ? "Thu gọn" : "Hiển thị thêm"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Tin đăng hôm qua bởi */}
        <View className="py-6">
          <Text className="text-lg font-bold">Tin đăng hôm qua bởi</Text>
          <View className="p-4 border-gray-200 border rounded-xl my-4">
            <View className="flex-row gap-2 items-center pb-4 border-b border-gray-200">
              <Image
                className="rounded-full"
                source={require("../assets/images/AI.jpg")}
                style={{ width: 48, height: 48 }}
              />
              <Text>Hồ Tú Tài</Text>
            </View>
            <View className="flex-row my-3">
              <Text className="font-bold">Dưới 1 năm </Text>
              <Text>tham gia Diaocphongthuy.com</Text>
            </View>
            <TouchableOpacity
              onPress={() => router.push("/privateScreen")}
              className="bg-secondary rounded-full py-3"
            >
              <Text className="text-white text-center">Xem 6 tin đăng</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Lịch sử giá */}
        <View>
          <Text className="text-xl font-bold">Lịch sử giá</Text>
          <View className="my-6">
            <Image
              className="rounded-xl"
              source={require("../assets/images/image-3.jpg")}
              style={{ width: "100%", height: 250 }}
            />
          </View>
          <View>
            <Text className="text-xl font-bold">
              Đây có phải là thời điểm tốt nhất để sở hữu shophouse, nhà phố
              thương mại tại Vlasta Sầm Sơn, Thành Phố Sầm Sơn?
            </Text>
          </View>
          <View className="my-4">
            <Text className=" text-text">
              Theo dõi thông tin về biến động giá, dự án bạn quan tâm, so sanh
              giá với các khu vực lân cận.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/privateScreen")}
            className="bg-secondary rounded-full py-3"
          >
            <Text className="text-white text-center">Xem lịch sử giá</Text>
          </TouchableOpacity>
        </View>
        <View className="my-6">
          <ListBdsForYou />
        </View>
        <View className="my-6">
          <ListPostView />
        </View>
      </Animated.ScrollView>
      {/* Footer */}
      <View className="absolute bottom-0 left-0 right-0 bg-white px-5 pt-4 pb-6 border-t border-gray-200">
        <View className="flex-row gap-4 items-center">
          <TouchableOpacity
            onPress={() => router.push("/privateScreen")}
            className="w-12 h-12 flex justify-center items-center border border-gray-200 rounded-full"
          >
            <Image
              className="rounded-full"
              source={require("../assets/images/logo-zalo.jpg")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/privateScreen")}
            className="py-3 flex-1 flex-row gap-2 justify-center items-center bg-secondary rounded-full"
          >
            <MaterialIcons name="phone" size={24} color="white" />
            <Text className="text-white font-bold">0936145***</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default DetailScreen;
