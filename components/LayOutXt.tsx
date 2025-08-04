import {
  AntDesign,
  EvilIcons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

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

const LayOutXt = () => {
  return (
    <View className="pt-6">
      <View className="flex justify-center items-center">
        <AntDesign name="Safety" size={52} color="#367705" />
      </View>
      <View className="mt-2 mb-4 ">
        <Text className="font-bold text-center">
          Yên tâm tìm nhà tại Hồ Chí Minh với tin xác thực của
          Diaocphongthuy.com
        </Text>
      </View>
      <FlatList
        data={posts}
        horizontal={true}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        renderItem={({ item }) => (
          <>
            <View className="bg-white w-72 p-4 rounded-xl">
              <View className="mb-2 relative">
                <Image
                  className="rounded-xl"
                  source={item.images[0]}
                  style={{ width: "100%", height: 150 }}
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
              </View>
              <View className="flex-row flex-wrap items-start">
                {/* Chip Xác thực */}
                {/* <View className="flex-row items-center bg-green-100 px-2 py-1 rounded-md mr-1">
              <Feather name="check-circle" size={14} color="green" />
              <Text className="text-green-700 text-xs ml-1">Xác thực</Text>
            </View> */}
                {/* Tiêu đề */}
                <Text className="flex-1 line-clamp-2 text-lg font-bold text-black mb-2">
                  {item.title}
                </Text>
              </View>
              <View className="flex-row items-center">
                <Text className="font-bold">{item.price}</Text>
                <Text className="mx-1">•</Text>
                <Text className="font-bold">{item.area}</Text>
                <Text className="mx-1">•</Text>
                <Text>{item.pricePerM2}</Text>
              </View>

              <View className="flex-row items-center gap-2 mt-2 mb-6">
                <EvilIcons name="location" size={20} color="black" />
                <Text>{item.location}</Text>
              </View>
              <View className="flex-row justify-between items-center">
                <View>
                  <Text className="text-sm">Đăng hôm nay</Text>
                </View>
                <TouchableOpacity className="ml-2">
                  <View className="border rounded-full border-border w-10 h-10 flex justify-center items-center">
                    <AntDesign name="hearto" size={20} color="black" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      />
      <TouchableOpacity
        className="my-6 py-4 bg-secondary rounded-full"
        onPress={() => "Xem tin xác thực"}
      >
        <Text className="text-white text-center font-bold text-base">
          Xem 2141 tin xác thực
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LayOutXt;
