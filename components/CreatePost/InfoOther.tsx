import { AntDesign, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import ModalAdd from "./ModalAdd";
import ModalDirect from "./ModalDirect";

const legalDocumentOptions = [
  { label: "Sổ đỏ/ Sổ hồng", value: "Sổ đỏ/ Sổ hồng" },
  { label: "Hợp đồng mua bán", value: "Hợp đồng mua bán" },
  { label: "Đang chờ sổ", value: "Đang chờ sổ" },
];

const interiorOptions = [
  { label: "Đầy đủ", value: "Đầy đủ" },
  { label: "Cơ bản", value: "Cơ bản" },
  { label: "Không nội thất", value: "Không nội thất" },
];

const homeDirectOptions = [
  { label: "Đông", value: "Đông" },
  { label: "Tây", value: "Tây" },
  { label: "Nam", value: "Nam" },
  { label: "Bắc", value: "Bắc" },
  { label: "Đông Bắc", value: "Đông Bắc" },
  { label: "Tây Bắc", value: "Tây Bắc" },
  { label: "Tây Nam", value: "Tây Nam" },
  { label: "Đông Nam", value: "Đông Nam" },
];
const balconyDirectOptions = [
  { label: "Đông", value: "Đông" },
  { label: "Tây", value: "Tây" },
  { label: "Nam", value: "Nam" },
  { label: "Bắc", value: "Bắc" },
  { label: "Đông Bắc", value: "Đông Bắc" },
  { label: "Tây Bắc", value: "Tây Bắc" },
  { label: "Tây Nam", value: "Tây Nam" },
  { label: "Đông Nam", value: "Đông Nam" },
];

const CounterInput = ({
  label,
  value,
  onIncrease,
  onDecrease,
  canIncrease = true,
  canDecrease = true,
}: {
  label: string;
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
  canIncrease?: boolean;
  canDecrease?: boolean;
}) => {
  return (
    <View className="mb-4">
      <View className="flex-row justify-between items-center mb-3">
        <Text className="font-semibold">{label}</Text>

        <View className="flex-row gap-4 items-center justify-start">
          <TouchableOpacity
            disabled={!canDecrease}
            onPress={onDecrease}
            className={`w-10 h-10 rounded-full justify-center items-center ${
              canDecrease ? "border border-gray-200 bg-white" : "bg-gray-100"
            }`}
          >
            <AntDesign
              name="minus"
              size={16}
              color={canDecrease ? "black" : "#6B7280"}
            />
          </TouchableOpacity>

          {/* Giá trị */}
          <Text className="text-lg font-medium w-6 text-center">{value}</Text>

          {/* Nút tăng */}
          <TouchableOpacity
            disabled={!canIncrease}
            onPress={onIncrease}
            className={`w-10 h-10 rounded-full justify-center items-center ${
              canIncrease ? "border border-gray-200 bg-white" : "bg-gray-100"
            }`}
          >
            <AntDesign
              name="plus"
              size={16}
              color={canIncrease ? "black" : "#6B7280"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const InfoOther = () => {
  const [showInfoOther, setShowInfoOther] = useState(true);
  const [bedroomCount, setBedroomCount] = useState(0);
  const [bathroomCount, setBathroomCount] = useState(0);
  const [floorCount, setFloorCount] = useState(0);
  const [selectedValuesBacolnyDirect, setSelectedValuesBacolnyDirect] =
    useState<string>("");
  const [selectedValuesHomeDirect, setSelectedValuesHomeDirect] =
    useState<string>("");
  const [selectedValuesLegel, setSelectedValuesLegel] = useState<string>("");
  const [selectedValuesInterior, setSelectedValuesInterior] =
    useState<string>("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  return (
    <View className="bg-white p-4 rounded-xl mt-4">
      <TouchableOpacity
        onPress={() => setShowInfoOther(!showInfoOther)}
        className="flex-row justify-between items-center"
      >
        <Text className="font-bold">
          Thông tin khác <Text className="text-gray-500">(không bắt buộc)</Text>
        </Text>
        <AntDesign
          name={showInfoOther ? "down" : "up"}
          size={20}
          color="black"
        />
      </TouchableOpacity>
      {showInfoOther && (
        <View className="my-4">
          {/* Giấy tờ pháp lý */}
          <View>
            <Text className="mb-3 font-semibold">Giấy tờ pháp lý</Text>
            <TouchableOpacity
              onPress={() => setActiveFilter("Giấy tờ pháp lý")}
            >
              <View className="flex-row mb-4 items-center border rounded-full px-4 bg-white border-gray-300">
                <TextInput
                  editable={false}
                  pointerEvents="none"
                  placeholder="Chọn giấy tờ pháp lý"
                  placeholderTextColor="#9CA3AF"
                  value={selectedValuesLegel}
                  className="flex-1 py-3 text-[15px] text-gray-800"
                />
                <Ionicons name="chevron-down" size={20} color="#6B7280" />
              </View>
            </TouchableOpacity>
          </View>

          {/* Nội thất */}
          <View>
            <Text className="mb-3 font-semibold">Nội thất</Text>
            <TouchableOpacity onPress={() => setActiveFilter("Nội thất")}>
              <View className="flex-row mb-4 items-center border rounded-full px-4 bg-white border-gray-300">
                <TextInput
                  editable={false}
                  pointerEvents="none"
                  placeholder="Chọn nội thất"
                  placeholderTextColor="#9CA3AF"
                  value={selectedValuesInterior}
                  className="flex-1 py-3 text-[15px] text-gray-800"
                />
                <Ionicons name="chevron-down" size={20} color="#6B7280" />
              </View>
            </TouchableOpacity>
          </View>

          {/* Số phòng ngủ */}
          <CounterInput
            label="Số phòng ngủ"
            value={bedroomCount}
            onIncrease={() => setBedroomCount((prev) => prev + 1)}
            onDecrease={() => setBedroomCount((prev) => Math.max(prev - 1, 0))}
            canDecrease={bedroomCount > 0}
          />

          {/* Số phòng tắm */}
          <CounterInput
            label="Số phòng tắm, vệ sinh"
            value={bathroomCount}
            onIncrease={() => setBathroomCount((prev) => prev + 1)}
            onDecrease={() => setBathroomCount((prev) => Math.max(prev - 1, 0))}
            canDecrease={bathroomCount > 0}
          />

          {/* Số tầng */}
          <CounterInput
            label="Số tầng"
            value={floorCount}
            onIncrease={() => setFloorCount((prev) => prev + 1)}
            onDecrease={() => setFloorCount((prev) => Math.max(prev - 1, 0))}
            canDecrease={floorCount > 0}
          />

          {/* Hướng nhà */}
          <View>
            <Text className="mb-3 font-semibold">Hướng nhà</Text>
            <TouchableOpacity onPress={() => setActiveFilter("Hướng nhà")}>
              <View className="flex-row mb-4 items-center border rounded-full px-4 bg-white border-gray-300">
                <TextInput
                  editable={false}
                  pointerEvents="none"
                  placeholder="Chọn hướng nhà"
                  placeholderTextColor="#9CA3AF"
                  value={selectedValuesHomeDirect}
                  className="flex-1 py-3 text-[15px] text-gray-800"
                />
                <Ionicons name="chevron-down" size={20} color="#6B7280" />
              </View>
            </TouchableOpacity>
          </View>

          {/* Hướng ban công */}
          <View>
            <Text className="mb-3 font-semibold">Hướng ban công</Text>
            <TouchableOpacity onPress={() => setActiveFilter("Hướng ban công")}>
              <View className="flex-row mb-4 items-center border rounded-full px-4 bg-white border-gray-300">
                <TextInput
                  editable={false}
                  pointerEvents="none"
                  placeholder="Chọn hướng ban công"
                  placeholderTextColor="#9CA3AF"
                  value={selectedValuesBacolnyDirect}
                  className="flex-1 py-3 text-[15px] text-gray-800"
                />
                <Ionicons name="chevron-down" size={20} color="#6B7280" />
              </View>
            </TouchableOpacity>
          </View>

          {/* Đường vào */}
          <View>
            <Text className="mb-3 font-semibold">Đường vào</Text>
            <TouchableOpacity>
              <View className="flex-row mb-4 items-center border rounded-full px-4 bg-white border-gray-300">
                <TextInput
                  editable={false}
                  pointerEvents="none"
                  placeholder="Nhập đường vào"
                  placeholderTextColor="#9CA3AF"
                  value={""}
                  className="flex-1 py-3 text-[15px] text-gray-800"
                />
                <Text className="text-sm py-1 px-2 bg-gray-200 rounded-full">
                  m
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Mặt tiền */}
          <View>
            <Text className="mb-3 font-semibold">Mặt tiền</Text>
            <TouchableOpacity>
              <View className="flex-row mb-4 items-center border rounded-full px-4 bg-white border-gray-300">
                <TextInput
                  editable={false}
                  pointerEvents="none"
                  placeholder="Nhập mặt tiền"
                  placeholderTextColor="#9CA3AF"
                  value={""}
                  className="flex-1 py-3 text-[15px] text-gray-800"
                />
                <Text className="text-sm py-1 px-2 bg-gray-200 rounded-full">
                  m
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {/* Modal */}
      <ModalDirect
        title="Hướng nhà"
        modalVisible={activeFilter === "Hướng nhà"}
        setModalVisible={(visible) =>
          visible ? setActiveFilter("Hướng nhà") : setActiveFilter(null)
        }
        options={homeDirectOptions}
        selectedValue={selectedValuesHomeDirect}
        setSelectedValue={setSelectedValuesHomeDirect}
      />
      <ModalDirect
        title="Hướng ban công"
        modalVisible={activeFilter === "Hướng ban công"}
        setModalVisible={(visible) =>
          visible ? setActiveFilter("Hướng ban công") : setActiveFilter(null)
        }
        options={homeDirectOptions}
        selectedValue={selectedValuesBacolnyDirect}
        setSelectedValue={setSelectedValuesBacolnyDirect}
      />
      <ModalAdd
        title="Giấy tờ pháp lý"
        modalVisible={activeFilter === "Giấy tờ pháp lý"}
        setModalVisible={(visible) =>
          visible ? setActiveFilter("Giấy tờ pháp lý") : setActiveFilter(null)
        }
        options={legalDocumentOptions}
        selectedValue={selectedValuesLegel}
        setSelectedValue={setSelectedValuesLegel}
      />
      <ModalAdd
        title="Nội thất"
        modalVisible={activeFilter === "Nội thất"}
        setModalVisible={(visible) =>
          visible ? setActiveFilter("Nội thất") : setActiveFilter(null)
        }
        options={interiorOptions}
        selectedValue={selectedValuesInterior}
        setSelectedValue={setSelectedValuesInterior}
      />
    </View>
  );
};

export default InfoOther;
