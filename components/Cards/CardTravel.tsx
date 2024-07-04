import { View, Text } from "react-native";
import styles from "@/styles/CardTravel";

interface CardTravelProps {
  departTime: string;
  arrivalTime: string;
  price: number;
  seatsArr: string[];
}

export default function CardTravel({
  departTime,
  arrivalTime,
  price,
  seatsArr,
}: CardTravelProps) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.rowContainer}>
        <View>
          <Text style={styles.infoLabel}>Salida:</Text>
          <Text style={styles.infoText}>{departTime}</Text>
        </View>

        <View>
          <Text style={styles.infoLabel}>Llegada:</Text>
          <Text style={styles.infoText}>{arrivalTime}</Text>
        </View>
      </View>

      <View style={styles.rowContainer}>
        <View>
          <Text style={styles.infoLabel}>Precio:</Text>
          <Text style={styles.infoText}>${price}</Text>
        </View>

        <View>
          <Text style={styles.infoLabel}>Asientos:</Text>
          <View style={styles.seatsContainer}>
          {seatsArr && seatsArr.map((seat) => (
            <View style={styles.seatView}>
              <Text style={styles.seatText}>{seat}</Text>
            </View>
          ))}
          </View>
        </View>
      </View>
    </View>
  );
}
