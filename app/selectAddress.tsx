import { Ionicons, Octicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

const SelectAddress = () => {
  const router = useRouter();
  const params = useLocalSearchParams<{
    provinceAddress?: string;
    district?: string;
    ward?: string;
    street?: string;
    project?: string;
    fullAddress?: string;
    lat?: string;
    lng?: string;
    demand?: string;
  }>();

  const [provinceAddress, setProvinceAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [street, setStreet] = useState("");
  const [project, setProject] = useState("");
  const [displayAddress, setDisplayAddress] = useState("");
  const [lat, setLat] = useState(10.762622);
  const [lng, setLng] = useState(106.660172);
  const [demand, setDemand] = useState("sell");
  const displayAddressValue = [project, street, ward, district, provinceAddress]
    .filter(Boolean) // loại bỏ undefined / rỗng
    .join(", ");

  useEffect(() => {
    if (params) {
      setProvinceAddress(params.provinceAddress || "");
      setDistrict(params.district || "");
      setWard(params.ward || "");
      setStreet(params.street || "");
      setProject(params.project || "");
      setDisplayAddress(params.fullAddress || "");
      setLat(params.lat ? parseFloat(params.lat) : 10.762622);
      setLng(params.lng ? parseFloat(params.lng) : 106.660172);
      setDemand(params.demand || "sell");
    }
  }, [params]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center gap-4 p-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full border border-gray-200 justify-center items-center"
        >
          <Octicons name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-bold">Chọn địa chỉ</Text>
      </View>

      {/* Form */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        className="px-4"
      >
        {/* Tỉnh/Thành */}
        <AddressItem
          label="Tỉnh/ Thành"
          value={provinceAddress}
          onPress={() =>
            router.push({
              pathname: "/selectProvince",
              params: { provinceAddress },
            })
          }
        />

        {/* Quận/ Huyện */}
        <AddressItem
          label="Quận/ Huyện"
          value={district}
          onPress={() =>
            provinceAddress &&
            router.push({
              pathname: "/selectDistrict",
              params: { provinceAddress, district },
            })
          }
          disabled={!provinceAddress}
        />

        {/* Phường/ Xã */}
        <AddressItem
          label="Phường/ Xã"
          value={ward}
          onPress={() =>
            district &&
            router.push({
              pathname: "/selectWard",
              params: { provinceAddress, district, ward },
            })
          }
          disabled={!district}
        />

        {/* Đường/Phố */}
        <AddressItem
          label="Đường/Phố"
          value={street}
          onPress={() =>
            provinceAddress &&
            district &&
            ward &&
            router.push({
              pathname: "/selectStreet",
              params: { provinceAddress, district, ward, street },
            })
          }
          disabled={!provinceAddress || !district || !ward}
        />

        {/* Dự án */}
        <AddressItem
          label="Dự án"
          value={project}
          onPress={() =>
            provinceAddress &&
            district &&
            ward &&
            router.push({
              pathname: "/selectProject",
              params: {
                provinceAddress,
                district,
                ward,
                street,
                project,
              },
            })
          }
          disabled={!provinceAddress || !district || !ward}
        />

        {/* Địa chỉ hiển thị */}
        <View>
          <Text className="mb-3 font-semibold">
            Địa chỉ hiển thị trên tin đăng
          </Text>
          <View className="border border-gray-300 rounded-2xl px-4 bg-white h-28">
            <TextInput
              placeholder="Nhập địa chỉ hiển thị"
              placeholderTextColor="#9CA3AF"
              value={displayAddressValue}
              onChangeText={setDisplayAddress}
              multiline
              numberOfLines={3}
              className="text-[15px] text-gray-800 py-3"
            />
          </View>
        </View>

        {/* Map */}
        <View className="mt-4">
          <Text className="mb-4 font-semibold">Vị trí trên bản đồ</Text>
          {Platform.OS !== "web" && (
            <MapView
              style={{ width: "100%", height: 200 }}
              region={{
                latitude: lat,
                longitude: lng,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            >
              <Marker
                coordinate={{ latitude: lat, longitude: lng }}
                title="Vị trí đã chọn"
              />
            </MapView>
          )}
        </View>
      </ScrollView>

      {/* Button */}
      <View className="absolute bottom-0 right-0 left-0 px-4 mb-4 py-6 border-t border-gray-200 bg-white">
        <TouchableOpacity
          onPress={() => {
            router.push({
              pathname: "/createPost",
              params: {
                fullAddress: displayAddress || displayAddressValue,
                lat: lat.toString(),
                lng: lng.toString(),
                demand,
                provinceAddress,
                district,
                ward,
                street,
                project,
              },
            });
          }}
          disabled={!provinceAddress || !district || !ward}
          className={`rounded-full py-3 ${
            provinceAddress && district && ward ? "bg-secondary" : "bg-gray-200"
          }`}
        >
          <Text
            className={`text-center font-semibold ${
              provinceAddress && district && ward
                ? "text-white"
                : "text-gray-500"
            }`}
          >
            Xác nhận
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const AddressItem = ({
  label,
  value,
  onPress,
  disabled = false,
}: {
  label: string;
  value: string;
  onPress: () => void;
  disabled?: boolean;
}) => (
  <View>
    <Text className="mb-3 font-semibold">{label}</Text>
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={disabled ? 1 : 0.8}
    >
      <View
        className={`flex-row mb-4 items-center border rounded-full px-4 ${
          disabled ? "bg-gray-100 border-gray-200" : "bg-white border-gray-300"
        }`}
      >
        <TextInput
          editable={false}
          pointerEvents="none"
          placeholder={`Chọn ${label.toLowerCase()}`}
          placeholderTextColor="#9CA3AF"
          value={value}
          className="flex-1 py-3 text-[15px] text-gray-800"
        />
        <Ionicons name="chevron-down" size={20} color="#6B7280" />
      </View>
    </TouchableOpacity>
  </View>
);

export default SelectAddress;
