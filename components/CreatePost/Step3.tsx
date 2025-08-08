import { PostFormData } from "@/app/createPost";
import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import PaymentClick from "./PaymentClick";
import PaymentDate from "./PaymentDate";

interface Step3Props {
  formData: PostFormData; // Sử dụng PostFormData thay vì FormData
  updateFormData: (data: Partial<PostFormData>) => void;
  goNext: () => void;
  goBack: () => void;
}

const Step3: React.FC<Step3Props> = ({
  formData,
  updateFormData,
  goNext,
  goBack,
}) => {
  const [activeTab, setActiveTab] = useState<"date" | "click">("date");
  return (
    <>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 150 }}
        className="bg-white"
      >
        <View className="px-4 py-6">
          <View className="flex-1 justify-center items-center ">
            <View className="flex-row justify-center items-center mb-4 bg-gray-200 p-2 w-full rounded-full">
              <TouchableOpacity
                onPress={() => setActiveTab("date")}
                className={`w-1/2 py-2 px-4 rounded-full  ${activeTab === "date" ? "bg-black" : "bg-gray-200"}`}
              >
                <Text
                  className={
                    activeTab === "date"
                      ? "text-white font-bold text-center"
                      : "text-black text-center"
                  }
                >
                  Trả theo ngày
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setActiveTab("click")}
                className={`w-1/2 py-2 px-4 rounded-full ${activeTab === "click" ? "bg-black" : "bg-gray-200"}`}
              >
                <Text
                  className={
                    activeTab === "click"
                      ? "text-white font-bold text-center"
                      : "text-black text-center"
                  }
                >
                  Trả theo click
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {activeTab === "date" ? <PaymentDate /> : <PaymentClick />}
        </View>
      </ScrollView>
      {activeTab === "date" ? (
        <View className="absolute bottom-0 left-0  right-0 bg-white px-4 pt-2 pb-6 border-t border-gray-200">
          <TouchableOpacity className="flex-row justify-between items-center  py-3 border-b border-gray-200">
            <View>
              <Text>Khuyến mãi</Text>
            </View>
            <View className="flex-row gap-4 items-center">
              <Text>Chọn khuyến mãi</Text>
              <Entypo name="chevron-right" size={20} color="black" />
            </View>
          </TouchableOpacity>
          <View className="flex-row justify-between items-center  py-3">
            <Text>Tổng tiền</Text>

            <Text className="text-xl font-bold">33.000đ</Text>
          </View>
          <View className="flex-row gap-2">
            <TouchableOpacity
              onPress={goBack}
              className="flex-1 rounded-full border border-black px-4 py-3"
            >
              <Text className="font-bold text-center">Quay lại</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 bg-secondary rounded-full  px-4 py-3">
              <Text className="font-bold text-white text-center">Tiếp tục</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View className="absolute bottom-0 left-0  right-0 bg-white px-4 pt-2 pb-6 border-t border-gray-200">
          <TouchableOpacity className="flex-row justify-between items-center  py-3 border-b border-gray-200">
            <View>
              <Text>Khuyến mãi</Text>
            </View>
            <View className="flex-row gap-4 items-center">
              <Text>Chọn khuyến mãi</Text>
              <Entypo name="chevron-right" size={20} color="black" />
            </View>
          </TouchableOpacity>
          <View className="flex-row justify-between items-center  py-3">
            <Text>Tổng tiền</Text>

            <Text className="text-xl font-bold">33.000đ</Text>
          </View>
          <View className="flex-row gap-2">
            <TouchableOpacity
              onPress={goBack}
              className="flex-1 rounded-full border border-black px-4 py-3"
            >
              <Text className="font-bold text-center">Quay lại </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={goNext}
              className="flex-1 bg-secondary rounded-full  px-4 py-3"
            >
              <Text className="font-bold text-white text-center">Tiếp tục</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default Step3;
