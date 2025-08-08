import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { verifyInstallation } from "nativewind";
import React from "react";
import { Text } from "react-native";

export default function PostTabsLayout() {
  verifyInstallation();

  const colors = {
    primary: "#F7DE58",
    text: "#2c2c2c",
  };

  const createTabLabel =
    (label: string) =>
    ({ focused, color }: any) => (
      <Text
        style={{
          color: focused ? colors.primary : colors.text,
          fontSize: 12,
          fontWeight: focused ? "600" : "400",
          textAlign: "center",
          marginTop: 5,
        }}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {label}
      </Text>
    );

  return (
    <Tabs
      //    initialRouteName="postnews"
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarStyle: {
          height: 80,
          backgroundColor: "#fff",
          borderTopWidth: 0,
          paddingBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="overview"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="search" size={24} color={color} />
          ),
          headerShown: false,
          tabBarLabel: createTabLabel("Tổng quan"),
        }}
      />

      <Tabs.Screen
        name="post"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="hearto" size={24} color={color} />
          ),
          headerShown: false,
          tabBarLabel: createTabLabel("Tin đăng"),
        }}
      />

      <Tabs.Screen
        name="postnews"
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault(); // Ngăn chặn chuyển tab bình thường
            navigation.navigate("createPost");
          },
        })}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              size={32}
              color={color}
            />
          ),
          headerShown: false,
          tabBarLabel: createTabLabel("Đăng tin"),
        }}
      />

      <Tabs.Screen
        name="client"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-group-outline"
              size={24}
              color={color}
            />
          ),
          headerShown: false,
          tabBarLabel: createTabLabel("Khách hàng"),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-outline"
              size={24}
              color={color}
            />
          ),
          headerShown: false,
          tabBarLabel: createTabLabel("Tài khoản"),
        }}
      />
    </Tabs>
  );
}
