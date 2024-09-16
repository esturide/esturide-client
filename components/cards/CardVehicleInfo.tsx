import { Text, View } from "react-native";
import styles from "@/styles/CarVehicleInfo";

interface CardVehicleInfoProps {
  model: string;
  plates: string;
  carColorString: string;
}

export default function CardVehicleInfo({
  model,
  plates,
  carColorString,
}: CardVehicleInfoProps) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.modelText}>{model}</Text>
      <Text style={styles.carInfoText}>
        {plates} | {carColorString}
      </Text>
    </View>
  );
}
