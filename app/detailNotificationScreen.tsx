import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const DetailNotificationScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <View className="px-4 pt-6 ">
        <View className="flex-row items-center gap-2 mb-4">
          <TouchableOpacity
            className="bg-white border border-gray-200 rounded-full p-1"
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-xl font-bold">Cài đặt thông báo</Text>
        </View>
      </View>
      <ScrollView
        style={{ backgroundColor: "#f3f4f6", flex: 1 }}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Thông tin chung */}
        <View className="mt-4  px-4 py-3">
          <Text className="text-gray-500 mb-4 text-xl">14/07/2025</Text>
          <Text className="text-xl font-bold">
            Bạn đang cho phép nhận thông báo từ ứng dụng Diaocphongthuy.com
          </Text>
          <View className="mt-6">
            <Text>
              Kính Gửi Quý Khách hàng,{"\n"}
              {"\n"}
              Nhằm nâng cao tính cập nhât và độ tin cậy của tin đăng, từ ngày
              01/08/02025, Diaocphongthuy.com sẽ điều chỉnh thời hạn hiển htij
              nhãn "Tin xác thực" từ 90 ngày còn 45 ngày.
              {"\n"}
              {"\n"}
              Sau 45 ngày kể từ ngày xác thực thành công, nếu sản phẩm BĐS vẫn
              chưa giao dịch được, Quý khách vui lòng thao tác "Gia hạn xác
              thực" để đội ngũ kiểm duyệt tin đăng của Diaocphongthuy.com hỗ trợ
              gia hạn. Nếu hồ sơ xác thực không cập nhật, nhãn xác thực sẽ tự
              động được gỡ bỏ và tin đăng vẫn tiếp tục hiển thị bình thường trên
              hệ thống. Chi tiết quy định về xác thực xem tại đây.
              {"\n"}
              {"\n"}
              Rất mong Quý Khách chủ động gia hạn để duy trì hiệu quả cho tin
              đăng.
              {"\n"}
              {"\n"}
              Mọi thắc mắc vui lòng liên hệ 19001991 và cskh@diaocphongthuy.com
              để được hỗ trợ.
              {"\n"}
              {"\n"}
              Trân trọng cảm ơn!
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailNotificationScreen;
