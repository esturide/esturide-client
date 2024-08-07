import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import ButtonAddGreen from "@/components/Buttons/ButtonAddGreen";
import ButtonFilterGreen from "@/components/Buttons/ButtonFilterGreen";
import BottomSheetBase from "@/components/Sheets/BottomSheetBase";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { useRef } from "react";

const bgImage = require('assets/addTripBgImage.png');

export default function AddTripScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleModalClose = () => bottomSheetRef.current?.close();
  const handleModalOpen = () => bottomSheetRef.current?.expand();

  return (
    <View style={styles.screenContainer}>
      <View style={styles.adBanner}></View>
      <Image source={bgImage} style={styles.bgImage}/>
      <View>
        <Text style={styles.textBold}>Aun no tienes viajes en tu lista.</Text>
        <Text style={styles.text}>
          Toca el boton '+' para crear un nuevo viaje.
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handleModalOpen}>
          <ButtonAddGreen />
        </TouchableOpacity>
        <TouchableOpacity>
          <ButtonFilterGreen />
        </TouchableOpacity>
      </View>
      <BottomSheetBase
        title="Agregar Viaje"
        ref={bottomSheetRef}
        handleModalClose={handleModalClose}
      >
      </BottomSheetBase>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    height: "100%",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 30,
    gap: 20,
    alignItems: "center",
  },
  adBanner: {
    backgroundColor: "orange",
    height: 50,
    width: "100%",
  },
  bgImage: {
    height: 200,
    width: 250,
    marginTop: 80,
  },
  textBold: {
    fontSize: 19,
    fontWeight: "700",
    color: "#3d3d3d",
    lineHeight: 23,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  btnContainer: {
    gap: 30,
    position: "absolute",
    bottom: 30,
    right: 30,
  },
});
