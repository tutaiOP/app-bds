import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";

const Search = () => {
  const router = useRouter();

  const rotatingTexts = ["Dự án", "Quận, huyện", "Phường, xã", "Đường phố"];
  const [index, setIndex] = useState(0);
  const translateY = useRef(new Animated.Value(10)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const animateText = () => {
    // Reset về vị trí ban đầu
    translateY.setValue(10);
    opacity.setValue(0);

    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    animateText(); // animate lần đầu

    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const next = (prevIndex + 1) % rotatingTexts.length;
        return next;
      });
      animateText();
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <TouchableOpacity
      onPress={() => router.push("/searchScreen")}
      className="px-4 py-2 mt-4 border border-border rounded-[28px]"
    >
      <View className="flex-row flex-1 items-center justify-center ">
        <View className="mr-4">
          <Ionicons name="search-outline" size={24} color="black" />
        </View>
        <View className="flex-1 ">
          <Text className="text-base font-bold">Hồ chí Minh</Text>
          <View className="flex-row">
            <Text className="text-base text-gray-500">Thêm </Text>
            <Animated.Text
              className="text-base text-gray-500"
              style={{
                opacity: opacity,
                transform: [{ translateY }],
              }}
            >
              {rotatingTexts[index]}
            </Animated.Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Search;
