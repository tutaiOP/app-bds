import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

type BalanceProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  balances: {
    label: string;
    value: string | number;
  }[];
};

const Balance: React.FC<BalanceProps> = ({
  modalVisible,
  setModalVisible,
  balances,
}) => {
  return (
    <Modal
      transparent
      visible={modalVisible}
      animationType="slide"
      onRequestClose={() => setModalVisible(false)}
    >
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View className="flex-1 justify-end bg-black/40">
          <TouchableWithoutFeedback>
            <View className="bg-white rounded-t-3xl overflow-hidden">
              {/* Header */}
              <View className="flex-row justify-end items-center px-5 py-4 bg-black border-b border-gray-200">
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Feather name="x" size={22} color="white" />
                </TouchableOpacity>
              </View>

              {/* Content */}
              <View className="px-5 py-4">
                <View className="flex-row justify-between items-center border-b border-gray-100 pb-4 ">
                  <View className="flex-row gap-2">
                    <Image
                      source={require("../../assets/images/AI.jpg")}
                      className="w-8 h-8 rounded-full"
                    />
                    <Text className="text-lg font-bold ">Số dư tài khoản</Text>
                  </View>
                  <Text className="text-2xl font-bold">0</Text>
                </View>

                {balances.map((item, index) => (
                  <View
                    key={index}
                    className="flex-row justify-between items-center py-4 "
                  >
                    <Text className="text-base">{item.label}</Text>
                    <Text className="text-base font-bold">{item.value}</Text>
                  </View>
                ))}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default Balance;
