import { View, Text } from "react-native";
import styles from "@/styles/CardTravel";

interface SeatsArr {
  id: string;
  value: string;
}

interface CardTravelProps {
  departTime: string;
  arrivalTime: string;
  price: number;
  seatsArr: SeatsArr[];
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
          <Text style={styles.infoText}>
            ${price}
            {price % 1 === 0 ? ".00" : ""}
          </Text>
        </View>

        <View>
          <Text style={styles.infoLabel}>Asientos:</Text>
          <View style={styles.seatsContainer}>
            {seatsArr &&
              seatsArr.map((seat) => (
                <View key={seat.id} style={styles.seatView}>
                  <Text style={styles.seatText}>{seat.value}</Text>
                </View>
              ))}
          </View>
        </View>
      </View>
    </View>
  );
}
