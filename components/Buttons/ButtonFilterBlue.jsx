import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "@/styles/InputButtons";

const ButtonFilterBlue = () => {
  return (
    <View style={styles.btnFilterBlue}>
      <View style={styles.btnFilterContainer}>
        <Icon name="filter-list" style={styles.filterIcon} />
      </View>
    </View>
  );
};

export default ButtonFilterBlue;
