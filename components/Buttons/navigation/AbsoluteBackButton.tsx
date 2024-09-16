import React from "react";
import { DimensionValue, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { router } from "expo-router";

type Props = {
  onPress?: () => void;
  horizontal?: DimensionValue;
  vertically?: DimensionValue;
};

export const AbsoluteBackButton = ({
  onPress,
  horizontal = 43,
  vertically = 20,
}: Props) => {
  const onPressEvent = () => {
    if (onPress) {
      onPress();
    }
    router.back();
  };

  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        top: horizontal,
        left: vertically,
      }}
      onPress={onPressEvent}
    >
      <Icon name="arrow-back" size={24} color="#fff" />
    </TouchableOpacity>
  );
};
