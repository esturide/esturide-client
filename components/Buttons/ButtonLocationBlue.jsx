import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "@/styles/InputButtons";

const ButtonLocationBlue = () => {
  return (
    <View style={styles.btnLocationBlue}>
      <View style={styles.btnLocationContainer}>
        <Icon name="gps-fixed" style={styles.gpsIcon} />
      </View>
    </View>
  );
};

export default ButtonLocationBlue;
