import { View, Image, Text, TouchableOpacity } from "react-native";
import CardVehicleInfo from "@/components/Cards/CardVehicleInfo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import BottomSheet from "@gorhom/bottom-sheet";
import { useRef } from "react";
import BottomSheetBase from "components/Sheets/BottomSheetBase";
import styles from "@/styles/DriverProfileScreen";

interface CarInfo {
  model: string;
  plates: string;
  color: string;
}

interface DriverProfileScreenProps {
  profilePicture: string;
  driverName: string;
  qrCode: any;
  driverCode: number;
  driverBalance: number;
  carInfo: CarInfo;
}

export default function DriverProfileScreen({
  profilePicture = require("@/assets/icon.png"),
  driverName = "John Doe",
  qrCode = require("@/assets/icon.png"),
  driverCode = 123456789,
  driverBalance = 100,
  carInfo = { model: "Modelo", plates: "Placas", color: "Color" },
}: DriverProfileScreenProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleModalClose = () => bottomSheetRef.current?.close();
  const handleModalOpen = () => bottomSheetRef.current?.expand();

  return (
    <View style={styles.screenContainer}>
      <View style={styles.adBanner}></View>
      <View style={styles.driverPersonal}>
        <Image style={styles.profilePicture} source={profilePicture} />
        <View>
          <Text style={styles.label}>Conductor</Text>
          <Text style={styles.text}>{driverName}</Text>
        </View>
      </View>

      <Image style={styles.qrCode} source={qrCode} />

      <View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Codigo:</Text>
          <Text style={styles.text}>{driverCode}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Generado:</Text>
          <Text style={styles.text}>${driverBalance}</Text>
        </View>
        <View style={styles.vehicleInfoContainer}>
          <Text style={[styles.label, styles.vehicleInfoLabel]}>Vehiculo:</Text>
          <CardVehicleInfo
            model={carInfo.model}
            plates={carInfo.plates}
            carColorString={carInfo.color}
          />
          <TouchableOpacity
            style={styles.addVehicleBtn}
            onPress={handleModalOpen}
          >
            <MaterialCommunityIcons
              name="car-2-plus"
              size={25}
              color={"#FFFFFF"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <BottomSheetBase
        title={"Agregar Vehiculo"}
        ref={bottomSheetRef}
        handleModalClose={handleModalClose}
      ></BottomSheetBase>
    </View>
  );
}
