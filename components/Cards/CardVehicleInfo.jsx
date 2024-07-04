import { Text, View } from "react-native";
import styles from "../../styles/CarVehicleInfo.js";

export default function CardVehicleInfo({ model, plates, color }) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.modelText}>{model}</Text>
      <Text style={styles.carInfoText}>{plates} | {color}</Text>
    </View>
  );
}
