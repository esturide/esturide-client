import * as React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "@/styles/InputButtons";

/**
 * @deprecated This component is deprecated and will be removed in future versions.
 * Please use `InputButton` instead.
 */
const ButtonAddGreen = () => {
  return (
    <View style={styles.btnAddGreen}>
      <Icon name="add" style={styles.btnAddIcon} />
    </View>
  );
};

export default ButtonAddGreen;
