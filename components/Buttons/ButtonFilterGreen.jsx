import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "@/styles/InputButtons";

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
