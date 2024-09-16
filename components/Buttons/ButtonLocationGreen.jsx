import * as React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "@/styles/InputButtons";

/**
 * @deprecated This component is deprecated and will be removed in future versions.
 * Please use `InputButton` instead.
 */
const ButtonLocationGreen = () => {
  return (
    <View style={styles.btnLocationGreen}>
      <View style={styles.btnLocationContainer}>
        <Icon name="gps-fixed" style={styles.gpsIcon} />
      </View>
    </View>
  );
};

export default ButtonLocationGreen;
