import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { verifyInstallation } from "nativewind";
import React from "react";
import { Text } from "react-native";

export default function TabsLayout() {
  verifyInstallation();

  const colors = {
    primary: "#F7DE58",
  };

  const createTabLabel =
    (label: string) =>
    ({ focused, color }: any) => (
      <Text
        style={{
          color: focused ? colors.primary : "#2c2c2c",
          fontSize: 12,
          fontWeight: focused ? "800" : "400",
          marginTop: 5,
        }}
      >
        {label}
      </Text>
    );

  return (
    <Tabs
      initialRouteName="searchnav"
      screenOptions={{ tabBarActiveTintColor: colors.primary }}
    >
      <Tabs.Screen
        name="searchnav"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="search" size={20} color={color} />
          ),
          headerShown: false,
          tabBarLabel: createTabLabel("Tìm kiếm"),
        }}
      />
      <Tabs.Screen
        name="newsnav"
        options={{
          title: "Tin đã lưu",

          tabBarIcon: ({ color }) => (
            <AntDesign name="hearto" size={20} color={color} />
          ),
          headerShown: false,
          tabBarLabel: createTabLabel("Tin đã lưu"),
        }}
      />
      <Tabs.Screen
        name="accountnav"
        options={{
          title: "Tài khoản",

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
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
