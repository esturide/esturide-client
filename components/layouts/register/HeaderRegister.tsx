import React from "react";
import { View } from "react-native";

import styles from "@/styles/layouts/register/HeaderRegisterStyle";

type Props = {
  children: React.ReactNode;
};

export default function ({ children }: Props) {
  return <View style={styles.headerContainer}>{children}</View>;
}
