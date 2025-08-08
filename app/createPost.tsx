import InfoContact from "@/components/CreatePost/InfoContact";
import InfoOther from "@/components/CreatePost/InfoOther";
import ModalBds from "@/components/CreatePost/ModalBds";
import ModalOut from "@/components/CreatePost/ModalOut";
import ModalUnit from "@/components/CreatePost/ModalUnit";
import Step2 from "@/components/CreatePost/Step2";
import Step3 from "@/components/CreatePost/Step3";
import TitleAndDescription from "@/components/CreatePost/TitleAndDescription";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import clsx from "clsx";
import { router, useLocalSearchParams } from "expo-router";
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

export interface PostFormData {
  demand: string | null;
  address: string;
  propertyType: string;
  area: string;
  price: string;
  unit: string;
  images: string[];
  paymentMethod?: string;
}

const bdsOptions = [
  { label: "Căn hộ chung cư", value: "Căn hộ chung cư" },
  {
    label: "Chung cư mini, căn hộ dịch vụ",
    value: "Chung cư mini, căn hộ dịch vụ",
  },
  { label: "Nhà riêng", value: "Nhà riêng" },
  { label: "Nhà biệt thự, liền kề", value: "Nhà biệt thự, liền kề" },
  { label: "Nhà mặt phố", value: "Nhà mặt phố" },
  {
    label: "Shophouse, nhà phố thương mại",
    value: "Shophouse, nhà phố thương mại",
  },
  { label: "Đất nền dự án", value: "Đất nền dự án" },
  { label: "Đất", value: "Đất" },
  { label: "Trang trại, khu nghỉ dưỡng", value: "Trang trại, khu nghỉ dưỡng" },
  { label: "Condotel", value: "Condotel" },
  { label: "Kho, nhà xưởng", value: "Kho, nhà xưởng" },
  { label: "Loại BĐS khác", value: "Loại BĐS khác" },
];

const unitOptions = [
  { label: "VNĐ", value: "vnd" },
  { label: "Dollar", value: "$" },
  { label: "Giá thỏa thuận", value: "giathoathuan" },
];

// Helper để chuyển value thành label
const getLabelFromValue = (
  options: { label: string; value: string }[],
  value: string
) => options.find((o) => o.value === value)?.label || "";

const CreatePost = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [showAddressSearch, setShowAddressSearch] = useState(false);
  const [showDemand, setShowDemand] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  const [showInfoMain, setShowInfoMain] = useState(true);
  const [showExitModal, setShowExitModal] = useState(false);

  const [selectedValuesBds, setSelectedValuesBds] = useState<string>("");
  const [selectedValuesUnit, setSelectedValuesUnit] = useState<string>("vnd");

  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [area, setArea] = useState("");
  const [price, setPrice] = useState("");
  const [provinceAddress, setProvinceAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [street, setStreet] = useState("");
  const [project, setProject] = useState("");

  const [formData, setFormData] = useState<PostFormData>({
    demand: null,
    address: "",
    propertyType: "",
    area: "",
    price: "",
    unit: "vnd",
    images: [],
    // Khởi tạo các trường khác
  });

  const {
    fullAddress,
    lat,
    lng,
    demand,
    provinceAddress: provinceParam,
    district: districtParam,
    ward: wardParam,
    street: streetParam,
    project: projectParam,
  } = useLocalSearchParams<{
    fullAddress?: string;
    lat?: string;
    lng?: string;
    demand?: string;
    provinceAddress?: string;
    district?: string;
    ward?: string;
    street?: string;
    project?: string;
  }>();

  useEffect(() => {
    if (fullAddress && lat && lng) {
      setAddressConfirmed(true);
      setConfirmedAddress(fullAddress);
      setMapLocation({
        latitude: parseFloat(lat),
        longitude: parseFloat(lng),
      });

      // Cập nhật các trường chi tiết
      setProvinceAddress(provinceParam ?? "");
      setDistrict(districtParam ?? "");
      setWard(wardParam ?? "");
      setStreet(streetParam ?? "");
      setProject(projectParam ?? "");
    }
  }, [
    fullAddress,
    lat,
    lng,
    provinceParam,
    districtParam,
    wardParam,
    streetParam,
    projectParam,
  ]);

  const [addressConfirmed, setAddressConfirmed] = useState(false);
  const [confirmedAddress, setConfirmedAddress] = useState<string>("");
  const [mapLocation, setMapLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    if (fullAddress && lat && lng) {
      setAddressConfirmed(true);
      setConfirmedAddress(fullAddress);
      setMapLocation({
        latitude: parseFloat(lat),
        longitude: parseFloat(lng),
      });
    }
  }, [fullAddress, lat, lng]);

  useEffect(() => {
    if (demand === "sell" || demand === "rent") {
      setActiveTab(demand);
      setShowAddressSearch(true); // đảm bảo tab mở
    }
  }, [demand]);

  const isInfoMainCompleted =
    selectedValuesBds !== "" &&
    area !== "" &&
    (selectedValuesUnit === "giathoathuan" || price !== "");

  useEffect(() => {
    if (provinceAddress && district && ward) {
      setShowAddressSearch(true);
    }
  }, [provinceAddress, district, ward]);

  // Khi chọn nhu cầu
  useEffect(() => {
    setFormData((prev) => ({ ...prev, demand: activeTab }));
  }, [activeTab]);

  // Khi địa chỉ thay đổi
  useEffect(() => {
    setFormData((prev) => ({ ...prev, address: confirmedAddress }));
  }, [confirmedAddress]);

  // Tương tự cho các trường khác

  return (
    <SafeAreaView className="flex-1 bg-white">
      {currentStep === 1 && (
        <>
          <View className="bg-white p-4 border-b border-gray-200">
            <View className="flex-row justify-between items-center">
              <Text className="font-bold text-2xl">Tạo tin đăng</Text>
              <View className="flex-row gap-4 items-center">
                <TouchableOpacity className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
                  <AntDesign name="eyeo" size={24} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setShowExitModal(true)}
                  className="border rounded-full px-4 py-3"
                >
                  <Text className="font-bold">Thoát</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="mt-6">
              <Text className="text-gray-500">Bước 1. Thông tin BĐS</Text>
              <View className="flex-row gap-1 justify-between mt-2">
                <View className="w-1/3 h-1 rounded-full bg-red-500"></View>
                <View className="w-1/3 h-1 rounded-full bg-gray-200"></View>
                <View className="w-1/3 h-1 rounded-full bg-gray-200"></View>
              </View>
            </View>
          </View>

          <ScrollView
            contentContainerStyle={{ paddingBottom: 100 }}
            className="bg-gray-200"
          >
            <View className="px-4 py-6">
              {/* Nhu cầu */}
              <View className="bg-white p-4 rounded-xl">
                <TouchableOpacity
                  onPress={() => setShowDemand(!showDemand)}
                  className="flex-row justify-between items-center"
                >
                  <Text className="font-bold">Nhu cầu</Text>
                  <AntDesign
                    name={showDemand ? "up" : "down"} // sửa đúng icon
                    size={20}
                    color="black"
                  />
                </TouchableOpacity>

                {showDemand && (
                  <View className="flex-row gap-2 justify-between mt-4">
                    {["sell", "rent"].map((type) => (
                      <TouchableOpacity
                        key={type}
                        className={clsx(
                          "w-1/2 items-start border rounded-xl p-4",
                          activeTab === type
                            ? "border-black"
                            : "border-gray-200"
                        )}
                        onPress={() => {
                          setActiveTab(type);
                          setShowAddressSearch(true); // mở địa chỉ khi chọn nhu cầu
                        }}
                      >
                        {type === "sell" ? (
                          <MaterialCommunityIcons
                            name="tag-outline"
                            size={24}
                            color="black"
                          />
                        ) : (
                          <Octicons name="key" size={24} color="black" />
                        )}
                        <Text className="text-gray-500 mt-4">
                          {type === "sell" ? "Bán" : "Cho thuê"}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>

              {/* Địa chỉ BĐS */}
              {showAddressSearch && (
                <View className="bg-white p-4 rounded-xl mt-4">
                  {/* Tiêu đề & toggle */}
                  <TouchableOpacity
                    onPress={() => setShowSearch(!showSearch)}
                    className="flex-row justify-between items-center"
                  >
                    <Text className="font-bold">Địa chỉ BĐS</Text>
                    <AntDesign
                      name={showSearch ? "up" : "down"} // Hiển thị "up" khi đang mở
                      size={20}
                      color="black"
                    />
                  </TouchableOpacity>

                  {/* Nội dung */}
                  {showSearch && (
                    <View className="my-4">
                      {/* Nếu chưa có địa chỉ đã chọn */}
                      {!addressConfirmed && (
                        <TouchableOpacity
                          onPress={() => router.push("/searchCreatePost")}
                          className="flex-1 items-center justify-center px-4 py-2 border border-border rounded-[28px]"
                        >
                          <View className="flex-row items-center justify-center gap-2">
                            <Ionicons
                              name="search-outline"
                              size={24}
                              color="black"
                            />
                            <View className="flex-1 ml-2 flex-row">
                              <Text className="text-base text-gray-500">
                                Nhập địa chỉ
                              </Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      )}

                      {/* Nếu đã có địa chỉ đã chọn */}
                      {addressConfirmed && (
                        <>
                          <View className="flex-row justify-between items-center mb-3">
                            <View className="flex-1">
                              <Text>{confirmedAddress}</Text>
                            </View>
                            <TouchableOpacity
                              onPress={() =>
                                router.push({
                                  pathname: "/selectAddress",
                                  params: {
                                    fullAddress: confirmedAddress,
                                    lat: String(mapLocation.latitude),
                                    lng: String(mapLocation.longitude),
                                    demand: activeTab,
                                    provinceAddress,
                                    district,
                                    ward,
                                    street,
                                    project,
                                  },
                                })
                              }
                              className="w-8 h-8 rounded-full border flex justify-center items-center border-gray-200"
                            >
                              <SimpleLineIcons
                                name="pencil"
                                size={16}
                                color="black"
                              />
                            </TouchableOpacity>
                          </View>
                          {Platform.OS !== "web" && (
                            <MapView
                              style={{ width: "100%", height: 200 }}
                              region={{
                                latitude: mapLocation.latitude,
                                longitude: mapLocation.longitude,
                                latitudeDelta: 0.01,
                                longitudeDelta: 0.01,
                              }}
                            >
                              <Marker
                                coordinate={mapLocation}
                                title="Vị trí đã chọn"
                              />
                            </MapView>
                          )}
                        </>
                      )}
                    </View>
                  )}
                </View>
              )}

              {/* Thông tin chính */}
              {provinceAddress && district && ward && (
                <View className="bg-white p-4 rounded-xl mt-4">
                  <TouchableOpacity
                    onPress={() => setShowInfoMain(!showInfoMain)}
                    className="flex-row justify-between items-center"
                  >
                    <Text className="font-bold">Thông tin chính</Text>
                    <AntDesign
                      name={showInfoMain ? "down" : "up"}
                      size={20}
                      color="black"
                    />
                  </TouchableOpacity>
                  {showInfoMain && (
                    <View className="my-4">
                      {/* Loại BĐS */}
                      <Text className="mb-3 font-semibold">Loại BĐS</Text>
                      <TouchableOpacity
                        onPress={() => setActiveFilter("Loại BĐS")}
                      >
                        <View className="flex-row mb-4 items-center border rounded-full px-4 bg-white border-gray-300">
                          <TextInput
                            editable={false}
                            pointerEvents="none"
                            placeholder="Chọn loại BĐS"
                            placeholderTextColor="#9CA3AF"
                            value={selectedValuesBds}
                            className="flex-1 py-3 text-[15px] text-gray-800"
                          />
                          <Ionicons
                            name="chevron-down"
                            size={20}
                            color="#6B7280"
                          />
                        </View>
                      </TouchableOpacity>

                      {/* Diện tích */}
                      <Text className="mb-3 font-semibold">Diện tích</Text>
                      <View className="flex-row mb-4 items-center border rounded-full px-4 bg-white border-gray-300">
                        <TextInput
                          keyboardType="numeric"
                          placeholder="Nhập diện tích"
                          placeholderTextColor="#9CA3AF"
                          value={area}
                          onChangeText={(text) =>
                            setArea(text.replace(/[^0-9]/g, ""))
                          }
                          className="flex-1 py-3 text-[15px] text-gray-800"
                        />
                        <Text className="text-sm p-1 bg-gray-200 rounded-full">
                          m²
                        </Text>
                      </View>

                      {/* Mức giá & Đơn vị */}
                      <View className="flex-row gap-2">
                        <View style={{ flex: 2 }}>
                          <Text className="mb-3 font-semibold">Mức giá</Text>
                          <View
                            className={`flex-row mb-4 items-center border rounded-full px-4  border-gray-300 ${selectedValuesUnit === "giathoathuan" ? "bg-gray-500 text-gray-200" : "bg-white text-text"}`}
                          >
                            <TextInput
                              keyboardType="numeric"
                              placeholder="Nhập mức giá"
                              placeholderTextColor="#9CA3AF"
                              value={
                                selectedValuesUnit === "giathoathuan"
                                  ? "Giá thỏa thuận"
                                  : price
                              }
                              onChangeText={(text) =>
                                setPrice(text.replace(/[^0-9]/g, ""))
                              }
                              editable={selectedValuesUnit !== "giathoathuan"}
                              className={`flex-1 py-3 text-[15px] text-gray-800 $`}
                            />
                          </View>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text className="mb-3 font-semibold">Đơn vị</Text>
                          <TouchableOpacity
                            onPress={() => setActiveFilter("Đơn vị")}
                          >
                            <View className="flex-row mb-4 items-center border rounded-full px-4 bg-white border-gray-300">
                              <TextInput
                                editable={false}
                                pointerEvents="none"
                                placeholder="VNĐ"
                                placeholderTextColor="#9CA3AF"
                                value={getLabelFromValue(
                                  unitOptions,
                                  selectedValuesUnit
                                )}
                                className="flex-1 py-3 text-[15px] text-gray-800"
                              />
                              <Ionicons
                                name="chevron-down"
                                size={16}
                                color="#6B7280"
                              />
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  )}
                </View>
              )}
              {/* Thông tin khác + liên hệ + mô tả */}
              {isInfoMainCompleted && (
                <>
                  <InfoOther />
                  <InfoContact />
                  <TitleAndDescription />
                </>
              )}
            </View>
          </ScrollView>
          <View className="absolute bottom-0 right-0 left-0 px-4 py-6 bg-white">
            <TouchableOpacity
              className="bg-gray-200 rounded-full py-3"
              onPress={() => {
                setCurrentStep(2);
              }}
            >
              <Text className="text-gray-500 text-center">Tiếp tục</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      {currentStep === 2 && (
        <>
          <View className="bg-white p-4 border-b border-gray-200">
            <View className="flex-row justify-between items-center">
              <Text className="font-bold text-2xl">Tạo tin đăng</Text>
              <View className="flex-row gap-4 items-center">
                <TouchableOpacity className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
                  <AntDesign name="eyeo" size={24} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setShowExitModal(true)}
                  className="border rounded-full px-4 py-3"
                >
                  <Text className="font-bold">Thoát</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="mt-6">
              <Text className="text-gray-500">Bước 2. Hình ảnh & video</Text>
              <View className="flex-row gap-1 justify-between mt-2">
                <View className="w-1/3 h-1 rounded-full bg-red-500"></View>
                <View className="w-1/3 h-1 rounded-full bg-red-500"></View>
                <View className="w-1/3 h-1 rounded-full bg-gray-200"></View>
              </View>
            </View>
          </View>
          <Step2
            formData={formData}
            updateFormData={(newData) =>
              setFormData((prev) => ({ ...prev, ...newData }))
            }
            goNext={() => setCurrentStep(3)}
            goBack={() => setCurrentStep(1)}
          />
        </>
      )}
      {currentStep === 3 && (
        <>
          <View className="bg-white p-4 border-b border-gray-200">
            <View className="flex-row justify-between items-center">
              <Text className="font-bold text-2xl">Tạo tin đăng</Text>
              <View className="flex-row gap-4 items-center">
                <TouchableOpacity className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
                  <AntDesign name="eyeo" size={24} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setShowExitModal(true)}
                  className="border rounded-full px-4 py-3"
                >
                  <Text className="font-bold">Thoát</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="mt-6">
              <Text className="text-gray-500">
                Bước 3. Cấu hình & thanh toán
              </Text>
              <View className="flex-row gap-1 justify-between mt-2">
                <View className="w-1/3 h-1 rounded-full bg-red-500"></View>
                <View className="w-1/3 h-1 rounded-full bg-red-500"></View>
                <View className="w-1/3 h-1 rounded-full bg-red-500"></View>
              </View>
            </View>
          </View>
          {/* <Step3 /> */}
          <Step3
            formData={formData}
            updateFormData={(newData) =>
              setFormData((prev) => ({ ...prev, ...newData }))
            }
            goNext={() => setCurrentStep(4)}
            goBack={() => setCurrentStep(2)}
          />
        </>
      )}

      {/* Modals */}
      <ModalBds
        title="Lọc theo loại BĐS"
        modalVisible={activeFilter === "Loại BĐS"}
        setModalVisible={(visible) =>
          visible ? setActiveFilter("Loại BĐS") : setActiveFilter(null)
        }
        options={bdsOptions}
        selectedValue={selectedValuesBds}
        setSelectedValue={setSelectedValuesBds}
      />
      <ModalUnit
        title="Đơn vị"
        modalVisible={activeFilter === "Đơn vị"}
        setModalVisible={(visible) =>
          visible ? setActiveFilter("Đơn vị") : setActiveFilter(null)
        }
        options={unitOptions}
        selectedValue={selectedValuesUnit}
        setSelectedValue={setSelectedValuesUnit}
      />
      <ModalOut
        visible={showExitModal}
        onClose={() => setShowExitModal(false)}
        onConfirmExit={() => {
          setShowExitModal(false);
          router.back(); // hoặc hành động thoát trang
        }}
      />
    </SafeAreaView>
  );
};

export default CreatePost;
