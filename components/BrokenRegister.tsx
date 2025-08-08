import { AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import clsx from "clsx";
import Checkbox from "expo-checkbox";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const BrokenRegister = () => {
  const [checked, setChecked] = React.useState(false);
  const [text, setText] = useState("");
  const [showText, setShowText] = useState(false);
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
    setModalVisible(false);
  };

  // Hàm chụp ảnh
  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Cần cấp quyền truy cập camera!");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
    setModalVisible(false);
  };

  // Hàm chọn tệp
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "image/*",
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
    setModalVisible(false);
  };

  // Hàm xóa ảnh đã chọn
  const removeImage = () => {
    setSelectedImage(null);
  };

  return (
    <ScrollView className=" mx-[-16px]">
      <View className="bg-blue-300 p-4">
        <Text className="text-xl font-bold mb-4">
          Nâng tầm thương hiệu cá nhân với danh hiệu Môi giới chuyên nghiệp
        </Text>
        <View className="flex-row gap-1 justify-between mt-4">
          <View className="w-1/3 items-start  rounded-lg bg-white py-4 px-3">
            <Image
              source={require("../assets/images/icon.png")}
              className="w-12 h-12 mb-2"
            />
            <Text className="text-left text-sm font-bold">
              Nổi bật trên trang kết quả tìm kiếm
            </Text>
          </View>
          <View className="w-1/3 items-start  rounded-lg bg-white py-4 px-3">
            <Image
              source={require("../assets/images/icon.png")}
              className="w-12 h-12 mb-2"
            />
            <Text className="text-left text-sm font-bold">
              Tăng thêm 30% khách hàng
            </Text>
          </View>
          <View className="w-1/3 items-start  rounded-lg bg-white py-4 px-3">
            <Image
              source={require("../assets/images/icon.png")}
              className="w-12 h-12 mb-2"
            />
            <Text className="text-left text-sm font-bold">
              Đăng ký hoàn toàn miễn phí
            </Text>
          </View>
        </View>
      </View>
      <View className="py-6 px-4">
        <Text>
          Bạn đã hoàn tất
          <Text className="text-green-500"> 2/4 yêu cầu</Text> để đăng ký Môi
          giới chuyên nghiệp
        </Text>

        <View className=" mt-4 border border-gray-200 p-2 rounded-lg">
          <TouchableOpacity
            onPress={() => setShowText(!showText)}
            className="flex-row items-center justify-between"
          >
            <View className="flex-row items-start justify-center flex-1">
              <AntDesign
                name="checkcircleo"
                size={20}
                color="black"
                className="mr-2 mt-1"
              />
              <Text className="flex-1 text-sm font-semibold">
                Bạn đang có 0/5 tin đăng hiển thị trong 30 ngày vừa qua
              </Text>
            </View>
            <Entypo name="chevron-small-down" size={24} color="black" />
          </TouchableOpacity>
          {showText && (
            <View className="mt-4">
              <Text className="text-sm">
                Bạn cần có ít nhất 5 tin dăng hiển thị trong 30 ngày vừa qua.
              </Text>
              <Text className="mt-1 text-sm">
                Hãy đến trang{" "}
                <Text className="text-secondary">Quản lý tin đăng</Text> để tạo
                thêm tin đăng và quay lại đây.
              </Text>
              <Text className="mt-1 text-sm">
                Lưu ý: Tin VIP Kim Cương và tin đi kèm được tính thành 2 tin
                đăng.
              </Text>
            </View>
          )}
        </View>
        <View className=" mt-4 border border-gray-200 p-2 rounded-lg">
          <TouchableOpacity
            onPress={() => setShowText1(!showText1)}
            className="flex-row items-center justify-between"
          >
            <View className="flex-row items-start justify-center flex-1">
              <AntDesign
                name="checkcircleo"
                size={20}
                color="black"
                className="mr-2 mt-1"
              />
              <Text className="flex-1 text-sm font-semibold ">
                Bạn đang tuân thủ rất tốt các Quy định đăng tin trên
                Diaocphongthuy.com
              </Text>
            </View>
            <Entypo name="chevron-small-down" size={24} color="black" />
          </TouchableOpacity>
          {showText1 && (
            <View className="mt-4">
              <Text className="text-sm">
                Để đảm bảo chất lượng tin đăng, bạn hãy luôn tuân thủ các{" "}
                <Text className="text-secondary">Quy định đăng tin</Text> trên
                Diaocphongthuy.com, tránh trường hợp tin đăng bị khách hàng báo
                xấu.
              </Text>
            </View>
          )}
        </View>
        <View className=" mt-4 border border-gray-200 p-2 rounded-lg">
          <TouchableOpacity
            onPress={() => setShowText2(!showText2)}
            className="flex-row items-center justify-between"
          >
            <View className="flex-row items-start justify-center flex-1">
              <AntDesign
                name="checkcircleo"
                size={20}
                color="black"
                className="mr-2 mt-1"
              />
              <Text className="flex-1 text-sm font-semibold ">
                Bạn đã hoạt động 1 năm 5 tháng trên Diaocphongthuy.com
              </Text>
            </View>
            <Entypo name="chevron-small-down" size={24} color="black" />
          </TouchableOpacity>
          {showText2 && (
            <View className="mt-4">
              <Text className="text-sm">
                Để tăng thêm độ uy tín cho hồ sơ cá nhân, bạn có thể cung cấp
                thêm thông tin sau:
              </Text>
              <Text className="mt-4 mb-1 font-bold text-sm">
                Ảnh chụp chứng chỉ môi giới
              </Text>
              <View className="flex justify-center items-center mb-6 bg-gray-200 h-32  border border-dashed border-gray-400">
                <TouchableOpacity className="flex justify-center items-center">
                  <Ionicons
                    name="cloud-upload-outline"
                    size={48}
                    color="gray"
                  />
                  <Text className="text-gray-500 text-xs mt-1">
                    Bấm hoặc kéo thả để tải ảnh lên
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
        <View className=" mt-4 border border-gray-200 p-2 rounded-lg">
          <View className="flex-row items-center justify-between">
            <TouchableOpacity
              onPress={() => setShowText3(!showText3)}
              className="flex-row items-start justify-center flex-1"
            >
              <AntDesign
                name="checkcircleo"
                size={20}
                color="black"
                className="mr-2 mt-1"
              />
              <Text className="flex-1 text-sm font-semibold ">
                Cung cấp đầy đủ các thông tin cá nhân
              </Text>
            </TouchableOpacity>
            <View className="flex-row items-center gap-2">
              <TouchableOpacity
                onPress={() => router.push("/personalInfo")}
                className="flex-row gap-2 items-center"
              >
                <AntDesign name="exclamationcircleo" size={14} color="black" />
                <Text className="text-sm">Quy định</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowText3(!showText3)}>
                <Entypo name="chevron-small-down" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          {showText3 && (
            <View className="mt-4">
              <Text className="text-sm">
                Lưu ý, sau khi trở thành Môi giới chuyên nghiệp: Tên và ảnh đại
                diện dùng để đăng ký Môi giới chuyên nghiệp sẽ được áp dụng lên
                tất cả các tin đăng của bạn và hiển thị trên khắp website
                Diaocphongthuy.com.
              </Text>
              <Text className="mt-4 mb-2 font-bold text-sm">
                Họ và tên <Text className="text-red-500">*</Text>
              </Text>
              <View className="flex-row  border border-border rounded-lg px-4 py-3 mb-4 items-center">
                <TextInput
                  value={"Hồ Tú Tài"}
                  onChangeText={setText}
                  placeholder="Nhập SĐT chính hoặc email"
                  className="flex-1 text-[14px] text-black"
                  placeholderTextColor="#6B7280"
                />
              </View>
              <Text className="mt-4 mb-2 font-bold text-sm">
                Số điện thoại chính <Text className="text-red-500">*</Text>
              </Text>
              <View className="flex-row bg-gray-200  border border-border rounded-lg px-4 py-3 mb-4 items-center">
                <TextInput
                  editable={false}
                  onChangeText={setText}
                  placeholder=""
                  className="flex-1 text-[14px] text-black"
                  placeholderTextColor="#6B7280"
                />
              </View>
              <Text className="mt-4 mb-2 font-bold text-sm">
                Ảnh đại diện <Text className="text-red-500">*</Text>
              </Text>
              {/* Upload ảnh */}
              <View className="items-center mb-6">
                <View className="relative">
                  <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    className={clsx(
                      "w-28 h-28 rounded-full justify-center items-center bg-gray-50",
                      selectedImage
                        ? "border-none"
                        : "border border-dashed border-gray-400"
                    )}
                  >
                    {selectedImage ? (
                      <Image
                        source={{ uri: selectedImage }}
                        className="w-full h-full rounded-full"
                      />
                    ) : (
                      <>
                        <AntDesign name="camerao" size={24} color="gray" />
                        <Text className="text-gray-500 text-xs mt-1">
                          Tải ảnh
                        </Text>
                      </>
                    )}
                  </TouchableOpacity>

                  {selectedImage && (
                    <TouchableOpacity
                      onPress={removeImage}
                      className="absolute top-0 right-1 bg-gray-500 rounded-full w-6 h-6 justify-center items-center z-10"
                    >
                      <Feather name="x" size={16} color="white" />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
              {/* Modal chọn ảnh */}
              <Modal
                visible={modalVisible}
                transparent
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
              >
                <TouchableWithoutFeedback
                  onPress={() => setModalVisible(false)}
                >
                  <View className="flex-1 justify-center items-center bg-black/50">
                    <TouchableWithoutFeedback>
                      <View className="w-[70%] rounded-xl overflow-hidden bg-gray-800">
                        {[
                          {
                            label: "Thư viện ảnh",
                            icon: "picture",
                            action: pickImage,
                          },
                          {
                            label: "Chụp ảnh",
                            icon: "camera",
                            action: takePhoto,
                          },
                          {
                            label: "Chọn tệp",
                            icon: "folder1",
                            action: pickDocument,
                          },
                        ].map((item, index) => (
                          <TouchableOpacity
                            key={index}
                            className="flex-row items-center justify-between px-4 py-4 border-b border-gray-700"
                            onPress={item.action}
                          >
                            <Text className="text-base text-white">
                              {item.label}
                            </Text>
                            <AntDesign
                              name={item.icon as any}
                              size={20}
                              color="white"
                            />
                          </TouchableOpacity>
                        ))}
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
              <Text className="mt-4 mb-2 font-bold text-sm">
                Ảnh chụp mặt trước và mặt sau CCCD
                <Text className="text-red-500">*</Text>
              </Text>
              <View className="flex justify-center items-center mb-6 bg-gray-200 h-32 border border-dashed border-gray-400">
                <TouchableOpacity className="flex justify-center items-center">
                  <Ionicons
                    name="cloud-upload-outline"
                    size={48}
                    color="gray"
                  />
                  <Text className="text-gray-500 text-xs mt-1">
                    Bấm hoặc kéo thả để tải ảnh lên
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
        <View className="flex-row mx-4 pt-4 items-center justify-center gap-2">
          <Checkbox
            value={checked}
            onValueChange={setChecked}
            color={checked ? "#000" : undefined}
            style={{
              width: 20,
              height: 20,
              borderRadius: 6,
              borderColor: "#d1d5db", // tương đương 'border-border'
              borderWidth: 1,
            }}
          />
          <View className="">
            <Text className="text-sm">
              Tôi đồng ý với các
              <Text>
                Điều khoản sử dụng, Chính sách bảo mật, Quy chế và Chính sách
              </Text>
              của Diaocphongthuy.com.
            </Text>
            <Text className="text-sm">
              Tôi cam kết những nội dung nêu trên là đúng sự thật, nếu có xảy ra
              tranh chấp, khiếu nại tôi xin chịu hoàn toàn trách nhiệm.
            </Text>
          </View>
        </View>
        <TouchableOpacity className="bg-secondary my-4 rounded-lg py-3  ">
          <Text className="text-white text-center">Đăng ký ngay</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BrokenRegister;
