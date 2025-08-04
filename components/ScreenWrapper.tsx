// import React from "react";
// import { SafeAreaView, ScrollView } from "react-native";

// export default function ScreenWrapper({
//   children,
//   bgColor = "white", // mặc định là trắng
// }: {
//   children: React.ReactNode;
//   bgColor?: string;
// }) {
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: bgColor }}>
//       <ScrollView
//         contentContainerStyle={{
//           paddingHorizontal: 16,
//           paddingBottom: 100,
//         }}
//       >
//         {children}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

export default function ScreenWrapper({
  children,
  bgColor = "white",
}: {
  children: React.ReactNode;
  bgColor?: string;
}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: bgColor }}>
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 16,
            paddingBottom: 100,
          }}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
