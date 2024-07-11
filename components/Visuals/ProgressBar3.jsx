import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "@/styles/Visuals";

const ProgressBar3 = () => {
    return (
      <View style={styles.progressBar3}>
        <Icon name="radio-button-checked" style={styles.indicatorIcon} />
        <View style={styles.defaultLine} />
        <Icon name="radio-button-unchecked" style={styles.indicatorIcon} />
        <View style={styles.defaultLine} />
        <Icon name="radio-button-unchecked" style={styles.indicatorIcon} />
      </View>
    );
  };

export default ProgressBar3;
