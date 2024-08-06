import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import CardVehicleInfo from "@/components/Cards/CardVehicleInfo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import BottomSheet from "@gorhom/bottom-sheet";
import { useMemo, useRef } from "react";

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
  const snapPoints = useMemo(() => ['50%', '100%'], []);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleModalClose = () => bottomSheetRef.current?.close();
  const handleModalOpen = () => bottomSheetRef.current?.expand();

  return (
    <View style={styles.screenContainer}>
      <View style={styles.adBanner}>
      </View>
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
          <TouchableOpacity style={styles.addVehicleBtn} onPress={handleModalOpen}>
            <MaterialCommunityIcons name="car-2-plus" size={25} color={"#FFFFFF"}/>
          </TouchableOpacity>
        </View>
      </View>

      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} index={-1} enablePanDownToClose>
        <View style={styles.modalHeader}>
          <TouchableOpacity style={styles.modalCloseBtn}>
            <MaterialCommunityIcons name="close" size={30}/>
          </TouchableOpacity>
          <Text>Agregar Vehiculo</Text>
        </View>
        
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    height: '100%',
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 30,
    gap: 20,
    alignItems: 'center'
  },
  adBanner: {
    backgroundColor: 'orange',
    height: 50,
    width: '100%',
  },
  profilePicture: {
    height: 64,
    width: 64,
    borderRadius: 32,
  },
  label: {
    color: "#295C53",
    fontWeight: "700",
    fontSize: 19,
  },
  text: {
    fontSize: 19,
    fontWeight: "700"
  },
  driverPersonal: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'flex-start'
  },
  qrCode: {
    height: 205,
    width: 205
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#3C3C434D",
    paddingVertical: 20
  },
  vehicleInfoLabel: {
    paddingVertical: 20
  },
  vehicleInfoContainer: {
    position: 'relative',
  },
  addVehicleBtn: {
    height: 38,
    width: 38,
    borderRadius: 19,
    backgroundColor: "#87C9B8",
    position: 'absolute',
    top: 50,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
