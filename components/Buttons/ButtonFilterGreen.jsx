import * as React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "@/styles/InputButtons";

/**
 * @deprecated This component is deprecated and will be removed in future versions.
 * Please use `InputButton` instead.
 */
const ButtonFilterGreen = () => {
  return (
    <View style={styles.btnFilterGreen}>
      <View style={styles.btnFilterContainer}>
        <Icon name="filter-list" style={styles.filterIcon} />
      </View>
    </View>
  );
};

export default ButtonFilterGreen;
