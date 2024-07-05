import { Text, View } from "react-native";
import styles from "@/styles/CardTravelInfoPassenger";

export default function CardTravelInfoPassenger() {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.driverInfoContainer}>
        <View>
          <Text style={styles.infoLabel}>Conductor:</Text>
          <Text style={styles.infoText}>Raul Jimenez Rodriguez</Text>
        </View>

        <View>
          <Text style={styles.infoLabel}>Vehiculo:</Text>
          <Text style={styles.infoText}>Audi 2014 JLV687</Text>
        </View>
      </View>

      <View style={styles.rowContainer}>
        <View>
          <Text style={styles.infoLabel}>Salida:</Text>
          <Text style={styles.infoText}>7:20 am</Text>
        </View>

        <View>
          <Text style={styles.infoLabel}>Llegada:</Text>
          <Text style={styles.infoText}>8:06 am</Text>
        </View>
      </View>

      <View style={styles.rowContainer}>
        <View>
          <Text style={styles.infoLabel}>Precio:</Text>
          <Text style={styles.infoText}>$10.00</Text>
        </View>

        <View>
          <Text style={styles.infoLabel}>Asientos:</Text>
          <View style={styles.seatsContainer}>
            <View style={styles.seatView}>
              <Text style={styles.seatText}>A</Text>
            </View>
            <View style={styles.seatView}>
              <Text style={styles.seatText}>B</Text>
            </View>
            <View style={styles.seatView}>
              <Text style={styles.seatText}>C</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

