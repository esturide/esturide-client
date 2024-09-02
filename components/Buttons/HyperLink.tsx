import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import styles from "@/styles/buttons/HyperLinkStyle";

type Props = {
  label: string;
  onPress: () => void;
};

export default function HyperLink({ label, onPress }: Props) {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.registerText}>{label}</Text>
    </Pressable>
  );
}
