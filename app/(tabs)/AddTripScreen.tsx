import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import ButtonAddGreen from "@/components/Buttons/ButtonAddGreen";
import ButtonFilterGreen from "@/components/Buttons/ButtonFilterGreen";
import BottomSheetBase from "@/components/Sheets/BottomSheetBase";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { useRef } from "react";
import styles from "@/styles/AddTripScreen";

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

