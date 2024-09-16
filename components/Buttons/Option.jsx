import * as React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "@/styles/InputButtons";

const Option = (props) => {
  return (
    <View style={styles.optionContainer}>
      <View style={styles.optionChild}>
        <Text style={styles.optionLabel}>Label</Text>
        <Icon name="arrow-forward-ios" style={styles.optionIcon} />
      </View>
    </View>
  );
};

export default Option;
