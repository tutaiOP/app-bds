import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

type ConfirmExitModalProps = {
  visible: boolean;
  onClose: () => void;
};

const ModalClick: React.FC<ConfirmExitModalProps> = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 justify-end bg-black/30">
        <TouchableWithoutFeedback>
          <SafeAreaView
            style={{ height: "80%" }}
            className="bg-white rounded-t-3xl w-full justify-between overflow-hidden"
          >
            {/* Header */}
            <View className="flex-row justify-between items-center px-5 py-4 bg-black rounded-t-3xl">
              <Text className="text-2xl font-bold text-white">
                Cách ghi nhận lượt click
              </Text>
              <TouchableOpacity onPress={onClose}>
                <Feather name="x" size={22} color="white" />
              </TouchableOpacity>
            </View>

            {/* Body */}
            <ScrollView className="px-5 flex-1">
              <View className="flex-row gap-3 px-4  mx-[-16px] mb-2 mt-6">
                <Text className="">
                  <Text className="font-bold">
                    {" "}
                    - Lượt click trả phí là gì:
                  </Text>
                  <Text>
                    Click trả phí là lượt click được ghi nhận khi người dùng
                    nhấp vào và mở tin trực tiếp từ trang Kết quả Tìm kiếm của
                    BDS. Các lượt click từ các nguồn khác (ví dụ: đường dẫn tin
                    từ tin nhắn/ email hay từ trang quản lý tin đăng...) sẽ
                    không bị tính phí.
                  </Text>
                </Text>
              </View>
              <View className="flex-row gap-3 px-4  mx-[-16px] mb-2">
                <Text className="">
                  <Text className="font-bold">
                    {" "}
                    - Click nhiều lần - chỉ tính phí 1 lần:
                  </Text>
                  <Text>
                    Trong vòng 24 giờ, nếu 1 tin đăng nhận được nhiều lượt click
                    từ cùng một tài khoản, bạn chỉ cần trả phí cho 1 lượt click
                    phát sinh từ tài khoản này cho tin đăng này.
                  </Text>
                </Text>
              </View>
              <View className="flex-row gap-3 px-4  mx-[-16px] mb-2">
                <Text className="">
                  <Text className="font-bold">- Lượt click ảo/spam:</Text>
                  <Text>
                    BDS sẽ loại trừ và không tính phí các click từ các tài khoản
                    mà chúng tôi xác định là tài khoản ảo hoặc có hành động spam
                    để đảm bảo quyền lợi cho người đăng tin.
                  </Text>
                </Text>
              </View>
              <View>
                <Text>
                  Lưu ý: Số lượt click luôn nhỏ hơn hoặc bằng sốt lượt xem
                  tin.Ví dụ, người mua có thể click vào tin một lần và xem lại
                  tin đó nhiều lần
                </Text>
              </View>
            </ScrollView>
            <View className="absolute bottom-0 left-0 right-0 bg-white px-4 py-6">
              <TouchableOpacity
                onPress={onClose}
                className="flex-1 py-3  bg-secondary  rounded-full items-center justify-center"
              >
                <Text className="font-semibold text-white">Đã hiểu</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};

export default ModalClick;
