import { PostFormData } from "@/app/createPost";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ModalRequest from "./ModalRequest";
import ModalUpload from "./ModalUpload";

interface Step2Props {
  formData: PostFormData; // Sử dụng PostFormData thay vì FormData
  updateFormData: (data: Partial<PostFormData>) => void;
  goNext: () => void;
  goBack: () => void;
}

const Step2: React.FC<Step2Props> = ({
  formData,
  updateFormData,
  goNext,
  goBack,
}) => {
  const [showRequest, setShowRequest] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [images, setImages] = useState<string[]>(formData.images);

  const handleImageUpload = (newImages: string[]) => {
    setImages(newImages);
    updateFormData({ images: newImages }); // Sẽ không còn lỗi nữa
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        className="bg-white"
      >
        <View className="px-4 py-6">
          <View className="flex-row justify-between items-center">
            <Text className="font-bold text-lg">Hình ảnh</Text>
            {images && (
              <View className="flex-row gap-2 items-center rounded-full border border-gray-200 px-4 py-3">
                <SimpleLineIcons name="pencil" size={20} color="black" />
                <Text className="font-bold">Chỉnh sửa</Text>
              </View>
            )}
          </View>
          {!images && (
            <View className="flex-row gap-4 p-4 bg-gray-200 rounded-2xl items-center my-4">
              <SimpleLineIcons name="info" size={24} color="black" />
              <Text>Đăng tối thiểu 3 ảnh thường</Text>
            </View>
          )}
          <View className="mt-4">
            {images.length > 0 && (
              <View className="relative">
                <Image
                  source={{ uri: images[0] }}
                  style={{ width: "100%", height: 200 }}
                  className="rounded-lg "
                  resizeMode="cover"
                />
                <View className="absolute top-2 left-2 p-2 rounded-lg bg-red-500">
                  <Text className="text-white">Ảnh đại diện</Text>
                </View>
                <View className="absolute bottom-0 left-0 right-0 py-2 px-1 bg-black">
                  <View className="flex-row">
                    <Text className="flex-1 text-white text-center">
                      Thêm mô tả ...
                    </Text>
                    <SimpleLineIcons name="pencil" size={18} color="white" />
                  </View>
                </View>
              </View>
            )}

            <View className="flex-row mt-2 gap-1 flex-wrap">
              {images.slice(1).map((uri, index) => (
                <View key={index} style={{ width: "49%" }} className="relative">
                  <Image
                    source={{ uri }}
                    style={{ width: "100%", height: 120 }}
                    className="rounded-lg"
                  />
                  <View className="absolute bottom-0 left-2 right-1 py-2 px-1 bg-black">
                    <View className="flex-row">
                      <Text className="flex-1 text-white text-center">
                        Thêm mô tả ...
                      </Text>
                      <SimpleLineIcons name="pencil" size={18} color="white" />
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>

          <TouchableOpacity
            onPress={async () => {
              const { status } = await MediaLibrary.requestPermissionsAsync();

              if (status === "granted") {
                setShowUpload(true); // Đã có quyền
              } else {
                setShowRequest(true); // Không có quyền => hiện modal hướng dẫn
              }
            }}
            className="flex-row items-center justify-center gap-2 border rounded-full p-3 my-4"
          >
            <AntDesign name="plus" size={14} color="black" />
            <Text className="font-bold">Thêm ảnh từ thiết bị</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-center gap-2 border rounded-full p-3 my-4">
            <Ionicons name="image-outline" size={20} color="black" />
            <Text className="font-bold">Chọn từ thư viện BĐS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setShow1(!show1)}
            className="flex-row justify-between items-center my-3"
          >
            <View className="flex-row gap-2 items-center">
              <Ionicons name="image-outline" size={20} color="black" />
              <Text>Hướng dẫn đăng ảnh thường</Text>
            </View>
            <FontAwesome
              name={show1 ? "angle-down" : "angle-up"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
          {show1 && (
            <View className="p-4 mr-1 bg-gray-300 rounded-xl">
              <Text>
                - Đăng tối đa <Text className="font-bold">24</Text> ảnh với tất
                cả các loại tin
              </Text>
              <Text>- Hãy dùng ảnh thật, không trùng, không chèn SĐT</Text>
              <Text>
                - Mỗi ảnh kích thước tối thiểu
                <Text className="font-bold">100x100 px</Text>, tối đa
                <Text className="font-bold">15 MB</Text>
              </Text>
              <Text>
                - Mô tả ảnh tối đa <Text className="font-bold">45</Text> ký tự
              </Text>
            </View>
          )}
          <TouchableOpacity
            onPress={() => setShow2(!show2)}
            className="flex-row justify-between items-center my-3"
          >
            <View className="flex-row gap-2 items-center">
              <MaterialIcons name="360" size={20} color="black" />
              <Text>Hướng dẫn đăng ảnh 360 độ</Text>
            </View>
            <FontAwesome
              name={show2 ? "angle-down" : "angle-up"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
          {show2 && (
            <View className="p-4 bg-gray-300 rounded-xl">
              <Text>
                Ảnh 360 độ được hỗ trợ bao gồm
                <Text className="font-bold">ảnh dạng hình cầu</Text> (Photo
                Sphere) và <Text className="font-bold">ảnh toàn cảnh</Text>
                (Panorama). Tin rao có ảnh 360 độ sẽ được gắn
                <Text className="font-bold">nhãn 360 độ</Text>.
              </Text>
              <Text>1. Chụp ảnh 360 độ bất động sản:</Text>
              <Text>- a. Thiết bị chuyên dụng</Text>
              <Text>- b. Điện thoại chụp toàn cảnh</Text>
              <Text>- c. Dùng app như Google Street View</Text>
              <Text>2. Tải ảnh bằng nút đăng ảnh</Text>
              <Text>3. Đánh dấu ảnh muốn hiển thị dạng 360 độ</Text>
            </View>
          )}
          <View className="my-4">
            <Text className="font-bold mb-3">
              Video <Text className="text-gray-500">(Không bắt buộc)</Text>
            </Text>
            <View className="border border-gray-300 rounded-2xl px-4 bg-white h-28">
              <TextInput
                placeholder="Dán đường dẫn Youtube hoặc Tiktok"
                placeholderTextColor="#9CA3AF"
                multiline
                numberOfLines={5}
                className="text-sm text-gray-800 py-3"
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="flex-row absolute bottom-0 right-0 left-0 px-4 py-6 bg-white gap-4">
        <TouchableOpacity
          onPress={goBack}
          className="flex-1 border border-gray-200 rounded-full py-3"
        >
          <Text className=" text-center">Quay lại</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goNext}
          className="flex-1 bg-gray-200 rounded-full py-3"
        >
          <Text className="text-gray-500 text-center">Tiếp tục </Text>
        </TouchableOpacity>
      </View>
      {/* Modal */}
      <ModalRequest
        visible={showRequest}
        onClose={() => setShowRequest(false)}
      />
      <ModalUpload
        visible={showUpload}
        onClose={() => setShowUpload(false)}
        onSelectImages={(uris) => setImages(uris)}
      />
    </>
  );
};

export default Step2;
