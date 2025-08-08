import { AntDesign, Feather } from "@expo/vector-icons";
import clsx from "clsx";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
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
const EditInfo = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");

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
    <ScrollView className="pt-4">
      <View>
        <Text className="text-lg font-bold">Thông tin cá nhân</Text>
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
                  <Text className="text-gray-500 text-xs mt-1">Tải ảnh</Text>
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
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
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
                      <Text className="text-base text-white">{item.label}</Text>
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

        <Text className="font-semibold mb-2">Họ và tên</Text>
        <View className="flex-row border border-border rounded-lg px-4 py-3 mb-4 items-center">
          <TextInput
            value={"Hồ Tú Tài"}
            onChangeText={setText}
            placeholder=""
            className="flex-1 text-[14px] text-black"
            placeholderTextColor="#6B7280"
          />
          {text.length > 0 && (
            <TouchableOpacity onPress={() => setText("")}>
              <Feather name="x-circle" size={20} color="#999" />
            </TouchableOpacity>
          )}
        </View>
        <Text className="font-semibold mb-2">Mã số thuế cá nhân</Text>
        <View className="flex-row border border-border rounded-lg px-4 py-3 mb-2 items-center">
          <TextInput
            value={"Hồ Tú Tài"}
            onChangeText={setText}
            placeholder="Ví dụ: 1234567890 hoặc 1234567890-123"
            className="flex-1 text-[14px] text-black"
            placeholderTextColor="#6B7280"
          />
          {text.length > 0 && (
            <TouchableOpacity onPress={() => setText("")}>
              <Feather name="x-circle" size={20} color="#999" />
            </TouchableOpacity>
          )}
        </View>
        <Text className=" text-sm ">MST gồm 10 hoặc 13 chữ số</Text>
      </View>
      <View className="py-4">
        <Text className="text-lg font-bold mb-4">Thông tin liên hệ</Text>
        <Text className="font-semibold mb-2 text-gray-500">
          Số điện thoại chính
        </Text>
        <View className="flex-row border border-border bg-gray-200 rounded-lg px-4 py-3 mb-4 items-center">
          <TextInput
            editable={false}
            value={""}
            onChangeText={setText}
            placeholder=""
            className="flex-1 text-[14px] text-black "
            placeholderTextColor="#6B7280"
          />
          {text.length > 0 && (
            <TouchableOpacity onPress={() => setText("")}>
              <Feather name="x-circle" size={20} color="#999" />
            </TouchableOpacity>
          )}
        </View>
        <View className="py-4 px-4">
          <Text className="text-red-500">+ Thêm số điện thoại</Text>
        </View>
        <Text className="font-semibold mb-2 mt-2">Email</Text>
        <View className="flex-row border bg-gray-200 border-border rounded-lg px-4 py-3 mb-2 items-center">
          <TextInput
            editable={false}
            value={"hotutai2002@gmail.com"}
            onChangeText={setText}
            placeholder="Ví dụ: 1234567890 hoặc 1234567890-123"
            className="flex-1 text-[14px] text-gray-500"
            placeholderTextColor="#6B7280"
          />
          {text.length > 0 && (
            <TouchableOpacity onPress={() => setText("")}>
              <Feather name="x-circle" size={20} color="#999" />
            </TouchableOpacity>
          )}
        </View>
        <Text className=" text-sm ">MST gồm 10 hoặc 13 chữ số</Text>
      </View>
      {/* Thong tin xuat hoa don */}
      <View className="py-4">
        <Text className="text-lg font-bold mb-4">Thông tin xuất hóa đơn</Text>
        <Text className="font-semibold mb-2 text-text">
          Họ tên người mua hàng
        </Text>
        <View className="flex-row border border-border  rounded-lg px-4 py-3 mb-4 items-center">
          <TextInput
            value={"Hồ Tú Tài"}
            onChangeText={setText}
            placeholder=""
            className="flex-1 text-[14px] text-black "
            placeholderTextColor="#6B7280"
          />
          {text.length > 0 && (
            <TouchableOpacity onPress={() => setText("")}>
              <Feather name="x-circle" size={20} color="#999" />
            </TouchableOpacity>
          )}
        </View>
        <Text className="font-semibold mb-2 text-text">Email nhận hóa đơn</Text>
        <View className="flex-row border border-border  rounded-lg px-4 py-3 mb-4 items-center">
          <TextInput
            value={""}
            onChangeText={setText}
            placeholder=""
            className="flex-1 text-[14px] text-black "
            placeholderTextColor="#6B7280"
          />
          {text.length > 0 && (
            <TouchableOpacity onPress={() => setText("")}>
              <Feather name="x-circle" size={20} color="#999" />
            </TouchableOpacity>
          )}
        </View>
        <Text className="font-semibold mb-2 text-text">
          Tên đơn vị (Tên công ty)
        </Text>
        <View className="flex-row border border-border  rounded-lg px-4 py-3 mb-4 items-center">
          <TextInput
            value={""}
            onChangeText={setText}
            placeholder=""
            className="flex-1 text-[14px] text-black "
            placeholderTextColor="#6B7280"
          />
          {text.length > 0 && (
            <TouchableOpacity onPress={() => setText("")}>
              <Feather name="x-circle" size={20} color="#999" />
            </TouchableOpacity>
          )}
        </View>
        <Text className="font-semibold mb-2">Mã số thuế cá nhân</Text>
        <View className="flex-row border border-border rounded-lg px-4 py-3 mb-2 items-center">
          <TextInput
            value={"Hồ Tú Tài"}
            onChangeText={setText}
            placeholder="Ví dụ: 1234567890 hoặc 1234567890-123"
            className="flex-1 text-[14px] text-black"
            placeholderTextColor="#6B7280"
          />
          {text.length > 0 && (
            <TouchableOpacity onPress={() => setText("")}>
              <Feather name="x-circle" size={20} color="#999" />
            </TouchableOpacity>
          )}
        </View>
        <Text className=" text-sm ">MST gồm 10 hoặc 13 chữ số</Text>
        <Text className="font-semibold mb-2 mt-4 text-text">Mã số ĐVQHNS</Text>
        <View className="flex-row border border-border  rounded-lg px-4 py-3 mb-4 items-center">
          <TextInput
            value={""}
            onChangeText={setText}
            placeholder=""
            className="flex-1 text-[14px] text-black "
            placeholderTextColor="#6B7280"
          />
          {text.length > 0 && (
            <TouchableOpacity onPress={() => setText("")}>
              <Feather name="x-circle" size={20} color="#999" />
            </TouchableOpacity>
          )}
        </View>
        <Text className="font-semibold mb-2  text-text">Căn cước công dân</Text>
        <View className="flex-row border border-border  rounded-lg px-4 py-3 mb-4 items-center">
          <TextInput
            value={""}
            onChangeText={setText}
            placeholder=""
            className="flex-1 text-[14px] text-black "
            placeholderTextColor="#6B7280"
          />
          {text.length > 0 && (
            <TouchableOpacity onPress={() => setText("")}>
              <Feather name="x-circle" size={20} color="#999" />
            </TouchableOpacity>
          )}
        </View>
        <Text className="font-semibold mb-2  text-text">Số hộ chiếu</Text>
        <View className="flex-row border border-border  rounded-lg px-4 py-3 mb-4 items-center">
          <TextInput
            value={""}
            onChangeText={setText}
            placeholder=""
            className="flex-1 text-[14px] text-black "
            placeholderTextColor="#6B7280"
          />
          {text.length > 0 && (
            <TouchableOpacity onPress={() => setText("")}>
              <Feather name="x-circle" size={20} color="#999" />
            </TouchableOpacity>
          )}
        </View>
        <Text className="font-semibold mb-2  text-text">Địa chỉ</Text>
        <View className="flex-row border border-border  rounded-lg px-4 py-3 mb-4 items-center">
          <TextInput
            value={"Việt Nam"}
            onChangeText={setText}
            placeholder=""
            className="flex-1 text-[14px] text-black "
            placeholderTextColor="#6B7280"
          />
          {text.length > 0 && (
            <TouchableOpacity onPress={() => setText("")}>
              <Feather name="x-circle" size={20} color="#999" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {/*  */}
      <View className="flex-row gap-2 justify-center items-center">
        <View>
          <AntDesign name="exclamationcircle" size={24} color="black" />
        </View>
        <View className="flex-1 ">
          <View className="flex-row gap-1 flex-shrink mr-4">
            <Text>•</Text>
            <Text>
              Diaocphongthuy.com sẽ xuất Hóa đơn điện tử tự động theo thông tin
              khách hàng cung cấp và gửi về Email nhận hóa đơn. Quý khách vui
              lòng nhập đầy đủ, chính xác và chịu trách nhiệm về những thông tin
              đã cung cấp.
            </Text>
          </View>
          <View className="flex-row gap-1 flex-shrink mr-4">
            <Text>•</Text>
            <Text>
              Hóa đơn GTGT sẽ được xuất trong ngày và cho tất cả các giao dịch
              nộp tiền.
            </Text>
          </View>
          <View className="flex-row gap-1 flex-shrink mr-4">
            <Text>•</Text>
            <Text>
              Nội dung dịch vụ được thể hiện trên hóa đơn là Phí dịch vụ quảng
              cáo trên website diaocphongthuy.com
            </Text>
          </View>
          <View className="flex-row gap-1 flex-shrink mr-4">
            <Text>•</Text>
            <Text>
              Mọi vấn đề cần hỗ trợ về hóa đon của giao dịch nộp tiền trong
              ngày, vui lòng liên hệ hotline 1900 1881 trước 18h.
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity className="bg-secondary py-3 mt-6 rounded-lg ">
        <Text className="text-white text-center">Lưu thay đổi</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditInfo;
