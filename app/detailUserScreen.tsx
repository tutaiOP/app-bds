import {
  AntDesign,
  EvilIcons,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Animated,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
interface Post {
  id: string;
  title: string;
  price: string;
  area: string;
  pricePerM2: string;
  beds?: number;
  baths?: number;
  location: string;
  userName?: string;
  userAvatar?: any;
  images: any[];
  viewed: boolean;
  totalImages: number;
  vipLabel?: string;
  authentic?: string;
  phone: string;
}
const posts: Post[] = [
  {
    id: "1",
    title:
      "Quá mê nhà phố san vườn view sông cực kỳ mát mẻ Lê Văn Lương Phước Kiển Nhà Bè, giá 8.6 tỷ, 6x23m",
    price: "8,6 tỷ",
    area: "138 m²",
    pricePerM2: "62,32 tr/m²",
    beds: 3,
    baths: 2,
    location: "Phước Kiển, Nhà bè",
    userName: "Sơn Nguyễn",
    images: [require("../assets/images/image-bds.jpg")],
    viewed: true,
    totalImages: 23,
    vipLabel: "VIP Kim Cương",
    authentic: "Xác thực",
    phone: "0933322***",
  },
  {
    id: "2",
    title: "Nhà mới đẹp MT đường Số Lâm Văn Bền, Quận 7",
    price: "17 tỷ",
    area: "70 m²",
    pricePerM2: "242,86 tr/m²",
    beds: 3,
    baths: 2,
    location: "Bình Thuận, Quận 7",
    userName: "5stars Plus",
    images: [require("../assets/images/image-3.jpg")],
    viewed: true,
    totalImages: 22,
    vipLabel: "VIP Kim Cương",
    phone: "0899121***",
  },
  {
    id: "3",
    title:
      "Giá tốt nhất Eco Green Quận 7 - full giỏ hàng bán căn hộ view sông 2PN 66m2 giá 5 tỷ",
    price: "5 tỷ",
    area: "66 m²",
    pricePerM2: "75,76 tr/m²",
    beds: 3,
    baths: 2,
    location: "Quận 7, Hồ Chí Minh",
    userName: "5stars Plus",
    images: [require("../assets/images/image-bds.jpg")],
    viewed: true,
    totalImages: 22,
    vipLabel: "VIP Kim Cương",
    phone: "0899121***",
  },
];

const rentalPosts: Post[] = [
  {
    id: "r1",
    title: "Căn hộ mini đầy đủ nội thất gần trung tâm Quận 1",
    price: "8 triệu/tháng",
    area: "35 m²",
    pricePerM2: "229K/m²",
    beds: 1,
    baths: 1,
    location: "Phường Đa Kao, Quận 1",
    userName: "Công ty ABC",
    images: [require("../assets/images/image-3.jpg")],
    viewed: false,
    totalImages: 5,
    vipLabel: "VIP Bạc",
    phone: "0987888***",
  },
  {
    id: "r2",
    title: "Phòng trọ cao cấp Quận 3 full tiện nghi, ban công thoáng mát",
    price: "6 triệu/tháng",
    area: "28 m²",
    pricePerM2: "214K/m²",
    location: "Quận 3, Hồ Chí Minh",
    images: [require("../assets/images/image-bds.jpg")],
    viewed: true,
    totalImages: 8,
    vipLabel: "VIP Vàng",
    phone: "0909456***",
  },
];

const DetailUserScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [activeTab, setActiveTab] = useState<"mua" | "thue">("mua");
  const headerBackgroundColor = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: ["rgba(255,255,255,0)", "rgba(255,255,255,1)"],
    extrapolate: "clamp",
  });
  const dataSource = activeTab === "mua" ? posts : rentalPosts;

  return (
    <>
      {/* Header */}
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
          zIndex: 10,
        }}
      >
        <TouchableOpacity
          className="bg-white border border-gray-200 rounded-full p-1"
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </Animated.View>

      {/* Nội dung */}
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
        {/* Thông tin người dùng */}
        {/* <View
          style={{ marginTop: 110 }}
          className="border-t border-gray-200 mx-[-16px] p-4"
        >
          <View className="flex-row gap-2 items-center">
            <Image
              className="rounded-full"
              source={require("../assets/images/AI.jpg")}
              style={{ width: 64, height: 64 }}
            />
            <Text className="text-2xl font-bold">Hồ Tú Tài</Text>
          </View>
          <View className="flex-row mt-6">
            <View className="flex-1 justify-center items-center">
              <Text>Tham gia</Text>
              <Text>Batdongsan</Text>
              <Text className="font-bold text-xl mt-2">9 năm</Text>
            </View>
            <View className="flex-1 justify-center items-center">
              <Text>Tin đăng</Text>
              <Text>đang có</Text>
              <Text className="font-bold text-xl mt-2">16</Text>
            </View>
          </View>
        </View> */}
        {/* Thông tin người dùng môi giới chuyên nghiệp */}
        <View
          style={{ marginTop: 110 }}
          className="border-t border-gray-200 mx-[-16px] pb-4"
        >
          <View className="pt-[1px] relative">
            <Image
              source={require("../assets/images/background-user.jpg")}
              style={{ width: "100%", height: 150 }}
            />
            <View className="absolute left-0 right-0 bottom-0 bg-green-500 py-1">
              <Text className="text-white font-bold text-center">
                Môi giới chuyên nghiệp
              </Text>
            </View>
          </View>
          <View className="flex-row gap-2 items-center px-4 -mt-4">
            <Image
              className="rounded-full"
              source={require("../assets/images/AI.jpg")}
              style={{ width: 64, height: 64 }}
            />
            <Text className="text-2xl font-bold">Hồ Tú Tài</Text>
          </View>
          <View className="flex-row mt-6">
            <View className="flex-1 justify-center items-center">
              <Text>Tham gia</Text>
              <Text>Batdongsan</Text>
              <Text className="font-bold text-xl mt-2">9 năm</Text>
            </View>
            <View className="flex-1 justify-center items-center">
              <Text>Tin đăng</Text>
              <Text>đang có</Text>
              <Text className="font-bold text-xl mt-2">16</Text>
            </View>
          </View>
        </View>
        {/* Thông tin môi giới */}
        <View className="border-t border-b border-gray-200 mx-[-16px] px-4 py-4 mt-6">
          <Text className="text-xl font-bold">Thông tin môi giới</Text>
          <View className="flex-row gap-2 items-center mt-2">
            <MaterialCommunityIcons
              name="eye-outline"
              size={24}
              color="black"
            />
            <View>
              <Text>Lượt xem tin đăng trong 30 ngày</Text>
              <Text>21</Text>
            </View>
          </View>
        </View>

        {/* Tabs */}
        <View className="py-6">
          <Text className="text-xl font-bold">Bất động sản trên toàn quốc</Text>
          <View className="flex-1 justify-center items-center my-6">
            <View className="flex-row justify-center items-center mb-4 bg-gray-200 p-1 rounded-full">
              <TouchableOpacity
                onPress={() => setActiveTab("mua")}
                className={`py-2 px-4 rounded-full ${activeTab === "mua" ? "bg-black" : "bg-gray-200"}`}
              >
                <Text
                  className={
                    activeTab === "mua" ? "text-white font-bold" : "text-black"
                  }
                >
                  Tin bán ({posts.length})
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setActiveTab("thue")}
                className={`py-2 px-4 rounded-full ${activeTab === "thue" ? "bg-black" : "bg-gray-200"}`}
              >
                <Text
                  className={
                    activeTab === "thue" ? "text-white font-bold" : "text-black"
                  }
                >
                  Tin thuê ({rentalPosts.length})
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Danh sách tin */}
          <FlatList
            scrollEnabled={false}
            data={dataSource}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
            renderItem={({ item }) => (
              <View className="bg-white w-full border border-gray-200 rounded-xl mb-4">
                <View className="mb-2 relative">
                  <Image
                    className="rounded-t-lg"
                    source={item.images[0]}
                    style={{ width: "100%", height: 200 }}
                  />
                  <View className="absolute bottom-[2%] left-[3%] right-[3%] flex-row justify-between">
                    <View className="bg-border py-1 px-2 rounded-lg">
                      <Text className="text-text text-sm">Đã xem</Text>
                    </View>
                    <View className="flex-row gap-1 items-center">
                      <View className="mr-2">
                        <MaterialCommunityIcons
                          name="play-circle-outline"
                          size={22}
                          color="white"
                        />
                      </View>
                      <Octicons name="image" size={20} color="white" />
                      <Text className="text-lg text-white">
                        {item.totalImages}
                      </Text>
                    </View>
                  </View>
                  {/* Tin đã hết hạn */}
                  {/* <View className="absolute top-0 bottom-0 left-0 right-0 items-center justify-center">
                    <View className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50 rounded-t-lg" />

                    <Text className="text-white text-lg font-bold">
                      Tin đã hết hạn
                    </Text>
                  </View> */}
                </View>

                <View className="flex-row flex-wrap items-start px-4">
                  <Text className="flex-1 line-clamp-2 text-lg font-bold text-black mb-2">
                    {item.title}
                  </Text>
                </View>

                <View className="flex-row items-center px-4">
                  <Text className="font-bold">{item.price}</Text>
                  <Text className="mx-1">•</Text>
                  <Text className="font-bold">{item.area}</Text>
                  <Text className="mx-1">•</Text>
                  <Text>{item.pricePerM2}</Text>
                </View>

                <View className="flex-row items-center gap-2 mt-2 mb-6 px-4">
                  <EvilIcons name="location" size={20} color="black" />
                  <Text>{item.location}</Text>
                </View>

                <View className="flex-row justify-between items-center px-4 pb-4">
                  <Text className="text-sm">Đăng hôm nay</Text>
                  <TouchableOpacity className="ml-2">
                    <View className="border rounded-full border-border w-10 h-10 flex justify-center items-center">
                      <AntDesign name="hearto" size={20} color="black" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
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

export default DetailUserScreen;
