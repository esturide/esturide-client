import * as React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "@/styles/InputButtons";

const ButtonDriver = () => {
  return (
    <View style={styles.btnDriver}>
      <View style={styles.btnDriverView}>
        <Icon name="drive-eta" style={styles.driverIcon} />
      </View>
      <View style={styles.btnDriverTextContainer}>
        <Text style={styles.btnDriverLabel}>Label</Text>
        <Text style={styles.btnDriverText}>Text</Text>
      </View>
    </View>
  );
};

export default ButtonDriver;
