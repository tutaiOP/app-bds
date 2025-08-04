import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
interface User {
  id: string;
  avatar?: any;
  name: string;
  totalpost: number;
}

const users: User[] = [
  {
    id: "1",
    avatar: require("../assets/images/AI.jpg"),
    name: "Nguyễn Trung Kiên",
    totalpost: 320,
  },
  {
    id: "2",
    avatar: require("../assets/images/AI.jpg"),
    name: "Thanh Tùng",
    totalpost: 163,
  },
  {
    id: "3",
    avatar: require("../assets/images/AI.jpg"),
    name: "Điệp BĐS",
    totalpost: 147,
  },
  {
    id: "4",
    avatar: require("../assets/images/AI.jpg"),
    name: "Huỳnh Thị Kim Châu",
    totalpost: 126,
  },
];
const LayOutBroker = () => {
  return (
    <View className="py-6">
      <View className="flex-row justify-center items-center py-2 px-3 rounded-full bg-green-800 mx-auto ">
        <Image
          source={require("../assets/images/ldp-pro-agent-badge.png")}
          style={{ width: 36, height: 36 }}
        />
        <View>
          <Text className="uppercase text-2xl text-white">top 20</Text>
        </View>
      </View>
      <View className="mt-2 mb-4 ">
        <Text className="font-bold text-center">
          Môi giới chuyên nghiệp tại Hồ Chí Minh
        </Text>
      </View>
      <FlatList
        data={users}
        horizontal={true}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        renderItem={({ item }) => (
          <>
            <View className="bg-white w-40 p-4 rounded-xl flex-col  items-center">
              <View className="relative">
                <Image
                  className="rounded-full"
                  source={item.avatar}
                  style={{ width: 60, height: 60 }}
                />
                <View className="absolute bottom-0 right-0">
                  <Image
                    source={require("../assets/images/ldp-pro-agent-badge.png")}
                    style={{
                      width: 20,
                      height: 20,
                    }}
                    resizeMode="cover"
                  />
                </View>
              </View>
              <View>
                <Text className="text-center font-bold min-h-[40px] mt-2">
                  {item.name}
                </Text>
              </View>
              <View>
                <Text className="text-center">
                  {item.totalpost} tin phù hợp
                </Text>
              </View>
              <TouchableOpacity
                className="bg-secondary w-full py-3 rounded-full mt-3"
                onPress={() => "Xem tin"}
              >
                <Text className="text-white text-center">Xem tin</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default LayOutBroker;
