import { Text, View } from "react-native";
import styles from "@/styles/CarVehicleInfo";

export default function CardVehicleInfo({ model, plates, carCoolor }) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.modelText}>{model}</Text>
      <Text style={styles.carInfoText}>
        {plates} | {carCoolor}
      </Text>
    </View>
  );
}
