import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
      //     initialRouteName="selectAddress"
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
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
          name="personalInfo"
          options={{
            title: "Personal Info Screen",

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

        <Stack.Screen
          name="createPost"
          options={{
            title: "Create Post Screen",
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="searchCreatePost"
          options={{
            title: "Search Create Screen",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="selectAddress"
          options={{
            title: "Select Address Screen",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="selectProvince"
          options={{
            title: "Select Province Screen",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="selectDistrict"
          options={{
            title: "Select District Screen",
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="selectWard"
          options={{
            title: "Select Province Screen",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="selectStreet"
          options={{
            title: "Select Street Screen",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="selectProject"
          options={{
            title: "Select Project Screen",
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
