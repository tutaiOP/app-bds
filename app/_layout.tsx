import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack initialRouteName="accountManage">
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        <Stack.Screen name="(posttabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="auth/login"
          options={{
            title: "Đăng nhập",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="auth/register"
          options={{
            title: "Đăng ký",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="searchScreen"
          options={{
            title: "Search Screen",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="findScreen"
          options={{
            title: "Find Screen",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="detailScreen"
          options={{
            title: "Detail Screen",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="detailUserScreen"
          options={{
            title: "Detail User Screen",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="privateScreen"
          options={{
            title: "Private Screen",
            presentation: "transparentModal", // Hiện từ dưới lên (slide-up)
            animation: "slide_from_bottom",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="notificationScreen"
          options={{
            title: "Notification Screen",

            headerShown: false,
          }}
        />
        <Stack.Screen
          name="accountManage"
          options={{
            title: "Account Manage Screen",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="verityPhone"
          options={{
            title: "Verity Screen",

            headerShown: false,
          }}
        />
        <Stack.Screen
          name="settingNotificationScreen"
          options={{
            title: "Setting Notification Screen",

            headerShown: false,
          }}
        />
        <Stack.Screen
          name="detailNotificationScreen"
          options={{
            title: "Detail Notification Screen",

            headerShown: false,
          }}
        />

        {/* Screen bên Post Tabs */}
        <Stack.Screen
          name="searchPostTabs"
          options={{
            title: "Search Post Screen",
            presentation: "transparentModal", // Hiện từ dưới lên (slide-up)
            animation: "slide_from_bottom",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="filterPost"
          options={{
            title: "Filter Post Screen",
            presentation: "transparentModal", // Hiện từ dưới lên (slide-up)
            animation: "slide_from_bottom",
            headerShown: false,
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
