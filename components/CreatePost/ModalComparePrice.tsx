import {
  AntDesign,
  EvilIcons,
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

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
      "Giá tốt nhất Eco Green Quận 7 - full giỏ hàng bán căn hộ view sông 2PN 66m2 giá 5 tỷ",
    price: "5 tỷ",
    area: "66 m²",
    pricePerM2: "75,76 tr/m²",
    beds: 3,
    baths: 2,
    location: "Quận 7, Hồ Chí Minh",
    userName: "5stars Plus",
    userAvatar: require("../../assets/images/image-bds.jpg"),
    images: [
      require("../../assets/images/image-bds.jpg"),
      require("../../assets/images/image-1.jpg"),
      require("../../assets/images/image-2.jpg"),
      require("../../assets/images/image-3.jpg"),
    ],
    viewed: true,
    totalImages: 22,
    vipLabel: "VIP Kim Cương",
    phone: "0899121***",
  },
];

const posts1: Post[] = [
  {
    id: "1",
    title:
      "Giá tốt nhất Eco Green Quận 7 - full giỏ hàng bán căn hộ view sông 2PN 66m2 giá 5 tỷ",
    price: "5 tỷ",
    area: "66 m²",
    pricePerM2: "75,76 tr/m²",
    beds: 3,
    baths: 2,
    location: "Quận 7, Hồ Chí Minh",
    userName: "5stars Plus",
    userAvatar: require("../../assets/images/image-bds.jpg"),
    images: [
      require("../../assets/images/image-bds.jpg"),
      require("../../assets/images/image-1.jpg"),
      require("../../assets/images/image-2.jpg"),
      require("../../assets/images/image-3.jpg"),
    ],
    viewed: true,
    totalImages: 22,
    vipLabel: "VIP Vàng",
    phone: "0899121***",
  },
];

const tableHeaders = ["", "VIP Kim Cương", "VIP Vàng", "VIP Bạc", "Tin thường"];

const tableData = [
  ["Giá/ngày (*)", "340.000 đ", "134.000 đ", "61.000 đ", "3.300 đ"],
  [
    "Lượt liên hệ so với tin thường (**)",
    "Cao hơn X30 lần",
    "Cao hơn X15 lần",
    "Cao hơn X8 lần",
    "-",
  ],
  [
    "Vị trí hiển thị",
    "Trên cùng",
    "Dưới VIP Kim Cương",
    "Dưới VIP Vàng",
    "Dưới VIP Bạc",
  ],
  ["Kích thước hình ảnh", "Siêu lớn", "Lớn", "Trung bình", "Nhỏ"],
  ["Hiển thị liên hệ (***)", "✔", "✔", "-", "-"],
  ["+ 1 tin thường", "✔", "-", "-", "-"],
];

const footnotes = [
  {
    label: "(*) Giá",
    text: "Diaocphongthuy.com áp dụng mô hình định giá linh hoạt theo từng khu vực và thời điểm. Giá có thể thay đổi tùy theo chính sách.",
  },
  {
    label: "(**) Lượt liên hệ so với tin thường",
    text: "Trung bình lượt liên hệ của Tin VIP so với Tin thường, số liệu được thống kê từ hệ thống.",
  },
  {
    label: "(***) Hiển thị liên hệ",
    text: "Giao diện tin đăng ở Trang tìm kiếm sẽ được hiển thị thêm SĐT giúp tăng tỉ lệ chuyển đổi cho tin đăng.Bạn có thể tham khảo ở mục giao diện.",
  },
];

type ConfirmExitModalProps = {
  visible: boolean;
  onClose: () => void;
};

const ModalComparePrice: React.FC<ConfirmExitModalProps> = ({
  visible,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<"Tính năng" | "Giao diện">(
    "Tính năng"
  );

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 justify-end bg-black/30">
          <TouchableWithoutFeedback>
            <SafeAreaView
              style={{ height: "90%" }}
              className="bg-white rounded-t-3xl w-full justify-between overflow-hidden"
            >
              {/* Header */}
              <View className="flex-row justify-between items-center px-5 py-4 bg-black rounded-t-3xl">
                <Text className="text-2xl font-bold text-white">
                  So sánh loại tin và giá
                </Text>
                <TouchableOpacity onPress={onClose}>
                  <Feather name="x" size={22} color="white" />
                </TouchableOpacity>
              </View>

              {/* Tab */}
              <View className="flex-row justify-center items-center my-4 bg-gray-200 p-2 w-full rounded-full">
                <TouchableOpacity
                  onPress={() => setActiveTab("Tính năng")}
                  className={`w-1/2 py-2 px-4 rounded-full  ${activeTab === "Tính năng" ? "bg-black" : "bg-gray-200"}`}
                >
                  <Text
                    className={
                      activeTab === "Tính năng"
                        ? "text-white font-bold text-center"
                        : "text-black text-center"
                    }
                  >
                    Tính năng
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setActiveTab("Giao diện")}
                  className={`w-1/2 py-2 px-4 rounded-full ${activeTab === "Giao diện" ? "bg-black" : "bg-gray-200"}`}
                >
                  <Text
                    className={
                      activeTab === "Giao diện"
                        ? "text-white font-bold text-center"
                        : "text-black text-center"
                    }
                  >
                    Giao diện
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Content */}
              {activeTab === "Tính năng" ? (
                <View className="flex-1">
                  <ScrollView
                    className="flex-1 px-5"
                    contentContainerStyle={{ paddingBottom: 20 }}
                  >
                    {/* Horizontal scroll container */}
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={true}
                    >
                      <View>
                        {/* Bảng dữ liệu */}
                        <View className="border border-gray-300 rounded-md overflow-hidden">
                          {/* Header row */}
                          <View className="flex-row bg-gray-100 border-b border-gray-300">
                            {tableHeaders.map((header, i) => (
                              <View
                                key={i}
                                style={{ width: 140 }}
                                className="py-2 border-r border-gray-300"
                              >
                                <Text
                                  className={`px-3 font-bold text-center ${i !== 0 ? "text-red-600" : ""}`}
                                >
                                  {header}
                                </Text>
                              </View>
                            ))}
                          </View>

                          {/* Data rows */}
                          {tableData.map((row, rowIndex) => (
                            <View
                              key={rowIndex}
                              className="flex-row border-t border-gray-200"
                            >
                              {row.map((cell, cellIndex) => (
                                <View
                                  key={cellIndex}
                                  style={{ width: 140 }}
                                  className="py-2 border-r border-gray-200"
                                >
                                  <Text className="px-3 text-center">
                                    {cell}
                                  </Text>
                                </View>
                              ))}
                            </View>
                          ))}
                        </View>
                      </View>
                    </ScrollView>

                    {/* Footnotes */}
                    <View className="mt-4 space-y-2">
                      {footnotes.map((item, index) => (
                        <Text key={index} className="text-sm text-gray-600">
                          <Text className="font-bold">{item.label} </Text>
                          {item.text}
                        </Text>
                      ))}
                    </View>
                  </ScrollView>
                </View>
              ) : (
                <ScrollView className="mx-4">
                  {/* VIP KIM CƯƠNG */}
                  <View className="py-4 ">
                    <TouchableOpacity>
                      <View className="relative">
                        <Image
                          source={require("../../assets/images/image-bds.jpg")}
                          style={{ width: "100%", height: 150 }}
                          resizeMode="cover"
                        />
                        <View className="flex-row gap-1 mt-1">
                          <View className="flex-1">
                            <Image
                              source={require("../../assets/images/image-1.jpg")}
                              style={{ width: "100%", height: 90 }}
                              resizeMode="cover"
                            />
                          </View>
                          <View className="flex-1">
                            <Image
                              source={require("../../assets/images/image-2.jpg")}
                              style={{ width: "100%", height: 90 }}
                              resizeMode="cover"
                            />
                          </View>
                          <View className="flex-1">
                            <Image
                              source={require("../../assets/images/image-3.jpg")}
                              style={{ width: "100%", height: 90 }}
                              resizeMode="cover"
                            />
                          </View>
                        </View>
                        <View className="absolute top-[3%] left-[3%] py-1 px-2 bg-red-500 rounded-lg">
                          <Text className="text-white text-sm">
                            VIP KIM CƯƠNG
                          </Text>
                        </View>
                        <View className="absolute bottom-[2%] left-[3%] right-[3%] flex-row justify-end">
                          {/* {item.viewed && (
                      <View className="bg-border py-1 px-2 rounded-lg">
                        <Text className="text-text text-sm">Đã xem</Text>
                      </View>
                    )} */}
                          <View className="flex-row gap-1 ">
                            <View className="mr-2">
                              <MaterialCommunityIcons
                                name="play-circle-outline"
                                size={22}
                                color="white"
                              />
                            </View>
                            <Octicons name="image" size={20} color="white" />
                            <Text className="text-lg text-white">8</Text>
                          </View>
                        </View>
                      </View>

                      <Text className="font-bold text-base my-2">
                        Tòa SA1 - THE SAKURA, Chính thức nhận Booking, 100 căn
                        đầu chiết khấu cao. Lầu cao to{" "}
                      </Text>

                      <View className="flex-row gap-2 items-center">
                        <Text className="font-bold">2,8 tỷ </Text>
                        <Text>•</Text>
                        <Text className="font-bold">61 m2</Text>
                        <Text>•</Text>
                        <Text>45,9 tr/m2</Text>
                        <Text>•</Text>
                        <View className="flex-row gap-2">
                          <Text>3</Text>
                          <Ionicons
                            name="bed-outline"
                            size={16}
                            color="black"
                          />
                        </View>
                        <Text>•</Text>
                        <View className="flex-row gap-2">
                          <Text>2</Text>
                          <FontAwesome5 name="bath" size={16} color="black" />
                        </View>
                      </View>

                      <View className="flex-row items-center gap-2 mt-2 mb-6">
                        <EvilIcons name="location" size={20} color="black" />
                        <Text>Tây Mỗ, Nam Từ Liên</Text>
                      </View>
                    </TouchableOpacity>
                    <View className="flex-row justify-between items-center">
                      <TouchableOpacity className="flex-row items-center ">
                        <View className="relative border rounded-full border-border w-12 h-12 ">
                          <Image
                            source={require("../../assets/images/AI.jpg")}
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: 9999,
                            }}
                            resizeMode="cover"
                          />
                          <View className="absolute bottom-0 right-0">
                            <Image
                              source={require("../../assets/images/ldp-pro-agent-badge.png")}
                              style={{
                                width: 16,
                                height: 16,
                              }}
                              resizeMode="cover"
                            />
                          </View>
                        </View>
                        <View className="ml-2">
                          <Text className="text-sm font-bold">
                            Nguyễn Trần Lê Hoàng
                          </Text>
                          <Text className="text-sm">Đăng 08/0/7/2025</Text>
                        </View>
                      </TouchableOpacity>

                      <View className="flex-row items-center">
                        <TouchableOpacity className="flex-row items-center bg-secondary rounded-full py-3 px-4">
                          <Feather name="phone" size={22} color="white" />
                          <Text className="text-white ml-2">0987 ***</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="ml-2">
                          <View className="border rounded-full border-border w-10 h-10 flex justify-center items-center">
                            <AntDesign name="hearto" size={20} color="black" />
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  {/* VIP VÀNG */}
                  <View className="py-4 ">
                    <TouchableOpacity>
                      <View className="relative  ">
                        <View className="flex-row gap-1">
                          <Image
                            source={require("../../assets/images/image-bds.jpg")}
                            style={{ width: "60%", height: 180 }}
                            resizeMode="cover"
                          />
                          <View className="flex-1 gap-1">
                            <Image
                              source={require("../../assets/images/image-1.jpg")}
                              style={{ width: "100%", height: 90 }}
                              resizeMode="cover"
                            />
                            <Image
                              source={require("../../assets/images/image-2.jpg")}
                              style={{ width: "100%", height: 90 }}
                              resizeMode="cover"
                            />
                          </View>
                        </View>
                        <View className="absolute top-[3%] left-[3%] py-1 px-2 bg-primary rounded-lg">
                          <Text className="text-white text-sm">VIP Vàng</Text>
                        </View>
                        <View className="absolute bottom-[2%] left-[3%] right-[3%] flex-row justify-end">
                          {/* {item.viewed && (
                      <View className="bg-border py-1 px-2 rounded-lg">
                        <Text className="text-text text-sm">Đã xem</Text>
                      </View>
                    )} */}
                          <View className="flex-row gap-1 ">
                            <View className="mr-2">
                              <MaterialCommunityIcons
                                name="play-circle-outline"
                                size={22}
                                color="white"
                              />
                            </View>
                            <Octicons name="image" size={20} color="white" />
                            <Text className="text-lg text-white">8</Text>
                          </View>
                        </View>
                      </View>

                      <Text className="font-bold text-base my-2">
                        Tòa SA1 - THE SAKURA, Chính thức nhận Booking, 100 căn
                        đầu chiết khấu cao. Lầu cao to{" "}
                      </Text>

                      <View className="flex-row gap-2 items-center">
                        <Text className="font-bold">2,8 tỷ </Text>
                        <Text>•</Text>
                        <Text className="font-bold">61 m2</Text>
                        <Text>•</Text>
                        <Text>45,9 tr/m2</Text>
                        <Text>•</Text>
                        <View className="flex-row gap-2">
                          <Text>3</Text>
                          <Ionicons
                            name="bed-outline"
                            size={16}
                            color="black"
                          />
                        </View>
                        <Text>•</Text>
                        <View className="flex-row gap-2">
                          <Text>2</Text>
                          <FontAwesome5 name="bath" size={16} color="black" />
                        </View>
                      </View>

                      <View className="flex-row items-center gap-2 mt-2 mb-6">
                        <EvilIcons name="location" size={20} color="black" />
                        <Text>Tây Mỗ, Nam Từ Liên</Text>
                      </View>
                    </TouchableOpacity>
                    <View className="flex-row justify-between items-center">
                      <TouchableOpacity className="flex-row items-center ">
                        <View className="relative border rounded-full border-border w-12 h-12 ">
                          <Image
                            source={require("../../assets/images/AI.jpg")}
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: 9999,
                            }}
                            resizeMode="cover"
                          />
                          <View className="absolute bottom-0 right-0">
                            <Image
                              source={require("../../assets/images/ldp-pro-agent-badge.png")}
                              style={{
                                width: 16,
                                height: 16,
                              }}
                              resizeMode="cover"
                            />
                          </View>
                        </View>
                        <View className="ml-2">
                          <Text className="text-sm font-bold">
                            Nguyễn Trần Lê Hoàng
                          </Text>
                          <Text className="text-sm">Đăng 08/0/7/2025</Text>
                        </View>
                      </TouchableOpacity>

                      <View className="flex-row items-center">
                        <TouchableOpacity className="flex-row items-center bg-secondary rounded-full py-3 px-4">
                          <Feather name="phone" size={22} color="white" />
                          <Text className="text-white ml-2">0987 ***</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="ml-2">
                          <View className="border rounded-full border-border w-10 h-10 flex justify-center items-center">
                            <AntDesign name="hearto" size={20} color="black" />
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  {/* VIP BẠC */}
                  <View className="py-4 ">
                    <TouchableOpacity>
                      <View className="relative  ">
                        <Image
                          source={require("../../assets/images/image-bds.jpg")}
                          style={{ width: "100%", height: 180 }}
                          resizeMode="cover"
                        />

                        <View className="absolute top-[3%] left-[3%] py-1 px-2 bg-gray-500 rounded-lg">
                          <Text className="text-white text-sm">VIP bạc</Text>
                        </View>
                        <View className="absolute bottom-[2%] left-[3%] right-[3%] flex-row justify-end">
                          {/* {item.viewed && (
                      <View className="bg-border py-1 px-2 rounded-lg">
                        <Text className="text-text text-sm">Đã xem</Text>
                      </View>
                    )} */}
                          <View className="flex-row gap-1 ">
                            <View className="mr-2">
                              <MaterialCommunityIcons
                                name="play-circle-outline"
                                size={22}
                                color="white"
                              />
                            </View>
                            <Octicons name="image" size={20} color="white" />
                            <Text className="text-lg text-white">8</Text>
                          </View>
                        </View>
                      </View>

                      <Text className="font-bold text-base my-2">
                        Tòa SA1 - THE SAKURA, Chính thức nhận Booking, 100 căn
                        đầu chiết khấu cao. Lầu cao to
                      </Text>

                      <View className="flex-row gap-2 items-center">
                        <Text className="font-bold">2,8 tỷ </Text>
                        <Text>•</Text>
                        <Text className="font-bold">61 m2</Text>
                        <Text>•</Text>
                        <Text>45,9 tr/m2</Text>
                        <Text>•</Text>
                        <View className="flex-row gap-2">
                          <Text>3</Text>
                          <Ionicons
                            name="bed-outline"
                            size={16}
                            color="black"
                          />
                        </View>
                        <Text>•</Text>
                        <View className="flex-row gap-2">
                          <Text>2</Text>
                          <FontAwesome5 name="bath" size={16} color="black" />
                        </View>
                      </View>

                      <View className="flex-row items-center gap-2 mt-2 mb-6">
                        <EvilIcons name="location" size={20} color="black" />
                        <Text>Tây Mỗ, Nam Từ Liên</Text>
                      </View>
                    </TouchableOpacity>
                    <View className="flex-row justify-between items-center">
                      <View className="ml-2">
                        <Text className="text-sm">Đăng 08/0/7/2025</Text>
                      </View>
                      <TouchableOpacity className="ml-2">
                        <View className="border rounded-full border-border w-10 h-10 flex justify-center items-center">
                          <AntDesign name="hearto" size={20} color="black" />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                  {/* Tin thường */}
                  <View className="py-4 ">
                    <Text className="font-bold text-base my-2">
                      Tòa SA1 - THE SAKURA, Chính thức nhận Booking, 100 căn đầu
                      chiết khấu cao. Lầu cao to
                    </Text>
                    <View className="flex-row gap-2">
                      <TouchableOpacity>
                        <Image
                          className="rounded-lg"
                          source={require("../../assets/images/image-bds.jpg")}
                          style={{ width: 110, height: 100 }}
                          resizeMode="cover"
                        />
                      </TouchableOpacity>
                      <View>
                        <View className="flex-row gap-2 items-center">
                          <Text className="font-bold">2,8 tỷ </Text>
                          <Text>•</Text>
                          <Text className="font-bold">61 m2</Text>
                          <Text>•</Text>
                          <Text>45,9 tr/m2</Text>
                        </View>

                        <View className="flex-row items-center gap-2 mt-2 mb-6">
                          <EvilIcons name="location" size={20} color="black" />
                          <Text>Tây Mỗ, Nam Từ Liên</Text>
                        </View>

                        <View className="flex-row justify-between items-center">
                          <View className="ml-2">
                            <Text className="text-sm">Đăng 08/0/7/2025</Text>
                          </View>
                          <TouchableOpacity className="ml-2">
                            <View className="border rounded-full border-border w-10 h-10 flex justify-center items-center">
                              <AntDesign
                                name="hearto"
                                size={20}
                                color="black"
                              />
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              )}
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalComparePrice;
