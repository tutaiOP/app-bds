import {
  AntDesign,
  EvilIcons,
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

interface Post {
  id: string;
  title: string;
  price: string;
  area: string;
  pricePerM2: string;
  beds: number;
  baths: number;
  location: string;
  userName: string;
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
      "Cập nhật full giỏ hàng chuyển nhượng The River - từ 1PN- 4PN - Pool Villa - Penhouse - Đã có sổ",
    price: "20 tỷ",
    area: "140 m²",
    pricePerM2: "142,86 tr/m²",
    beds: 3,
    baths: 2,
    location: "Quận 2, Hồ Chí Minh",
    userName: "Sơn Nguyễn",
    userAvatar: require("../assets/images/image-bds.jpg"),
    images: [
      require("../assets/images/image-bds.jpg"),
      require("../assets/images/image-1.jpg"),
      require("../assets/images/image-2.jpg"),
      require("../assets/images/image-3.jpg"),
    ],
    viewed: true,
    totalImages: 23,
    vipLabel: "VIP Kim Cương",
    authentic: "Xác thực",
    phone: "0933322***",
  },
  {
    id: "2",
    title:
      "Giá tốt nhất Eco Green Quận 7 - full giỏ hàng bán căn hộ view sông 2PN 66m2 giá 5 tỷ",
    price: "5 tỷ",
    area: "66 m²",
    pricePerM2: "75,76 tr/m²",
    beds: 3,
    baths: 2,
    location: "Quận 7, Hồ Chí Minh",
    userName: "5stars Plus",
    userAvatar: require("../assets/images/image-bds.jpg"),
    images: [
      require("../assets/images/image-bds.jpg"),
      require("../assets/images/image-1.jpg"),
      require("../assets/images/image-2.jpg"),
      require("../assets/images/image-3.jpg"),
    ],
    viewed: true,
    totalImages: 22,
    vipLabel: "VIP Kim Cương",
    phone: "0899121***",
  },
];

const LayOutBds = () => {
  return (
    <>
      <FlatList
        data={posts}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            <View className="py-4 ">
              <TouchableOpacity onPress={() => router.push("/detailScreen")}>
                <View className="relative">
                  <Image
                    source={item.images[0]}
                    style={{ width: "100%", height: 150 }}
                    resizeMode="cover"
                  />
                  <View className="flex-row gap-1 mt-1">
                    {item.images.slice(1, 4).map((img, index) => (
                      <View className="flex-1" key={index}>
                        <Image
                          source={img}
                          style={{ width: "100%", height: 90 }}
                          resizeMode="cover"
                        />
                      </View>
                    ))}
                  </View>
                  <View className="absolute top-[3%] left-[3%] py-1 px-2 bg-red-500 rounded-lg">
                    <Text className="text-white text-sm">{item.vipLabel}</Text>
                  </View>
                  <View className="absolute bottom-[2%] left-[3%] right-[3%] flex-row justify-between">
                    {item.viewed && (
                      <View className="bg-border py-1 px-2 rounded-lg">
                        <Text className="text-text text-sm">Đã xem</Text>
                      </View>
                    )}
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

                <Text className="font-bold text-base my-2">{item.title}</Text>

                <View className="flex-row gap-2 items-center">
                  <Text className="font-bold">{item.price} </Text>
                  <Text>•</Text>
                  <Text className="font-bold">{item.area}</Text>
                  <Text>•</Text>
                  <Text>{item.pricePerM2}</Text>
                  <Text>•</Text>
                  <View className="flex-row gap-2">
                    <Text>{item.beds}</Text>
                    <Ionicons name="bed-outline" size={16} color="black" />
                  </View>
                  <Text>•</Text>
                  <View className="flex-row gap-2">
                    <Text>{item.baths}</Text>
                    <FontAwesome5 name="bath" size={16} color="black" />
                  </View>
                </View>

                <View className="flex-row items-center gap-2 mt-2 mb-6">
                  <EvilIcons name="location" size={20} color="black" />
                  <Text>{item.location}</Text>
                </View>
              </TouchableOpacity>
              <View className="flex-row justify-between items-center">
                <TouchableOpacity
                  onPress={() => router.push("/detailUserScreen")}
                  className="flex-row items-center "
                >
                  <View className="relative border rounded-full border-border w-12 h-12 ">
                    <Image
                      source={item.userAvatar}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 9999,
                      }}
                      resizeMode="cover"
                    />
                    <View className="absolute bottom-0 right-0">
                      <Image
                        source={require("../assets/images/ldp-pro-agent-badge.png")}
                        style={{
                          width: 16,
                          height: 16,
                        }}
                        resizeMode="cover"
                      />
                    </View>
                  </View>
                  <View className="ml-2">
                    <Text className="text-sm font-bold">{item.userName}</Text>
                    <Text className="text-sm">Đăng hôm nay</Text>
                  </View>
                </TouchableOpacity>

                <View className="flex-row items-center">
                  <TouchableOpacity
                    onPress={() => router.push("/privateScreen")}
                    className="flex-row items-center bg-secondary rounded-full py-3 px-4"
                  >
                    <Feather name="phone" size={22} color="white" />
                    <Text className="text-white ml-2">{item.phone}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => router.push("/privateScreen")}
                    className="ml-2"
                  >
                    <View className="border rounded-full border-border w-10 h-10 flex justify-center items-center">
                      <AntDesign name="hearto" size={20} color="black" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View className="bg-gray-200 w-full h-1 "></View>
          </>
        )}
      />
    </>
  );
};

export default LayOutBds;
