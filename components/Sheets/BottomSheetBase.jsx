import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "@/styles/Sheets";
import BottomSheet from "@gorhom/bottom-sheet";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useMemo } from "react";

const BottomSheetBase = React.forwardRef(function BottomSheetBase({ title, handleModalClose }, ref) {
  const snapPoints = useMemo(() => ["98%"], []);

  return (
    <BottomSheet
      ref={ref}
      snapPoints={snapPoints}
      index={-1}
      enablePanDownToClose
      handleIndicatorStyle={styles.bottomSheetHandle}
      style={styles.bottomSheetBackground}
    >
      <View style={styles.modalHeader}>
        <TouchableOpacity
          onPress={handleModalClose}
          style={styles.modalCloseIcon}
        >
          <MaterialCommunityIcons name="close" size={30} />
        </TouchableOpacity>
        <Text style={styles.modalTitle}>{title}</Text>
        <View style={styles.modalHeaderBalancer}></View>
      </View>
    </BottomSheet>
  );
});

export default BottomSheetBase;
