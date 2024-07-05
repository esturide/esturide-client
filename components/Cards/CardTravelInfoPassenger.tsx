import { Text, View } from "react-native";
import styles from "@/styles/CardTravelInfoPassenger";

interface SeatsArr {
  id: string;
  value: string;
}

interface CardTravelInfoPassengerProps {
  driverName: string;
  vehicleModel: string;
  vehiclePlates: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  seatsArr: SeatsArr[];
}

export default function CardTravelInfoPassenger({
  driverName,
  vehicleModel,
  vehiclePlates,
  departureTime,
  arrivalTime,
  price,
  seatsArr,
}: CardTravelInfoPassengerProps) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.driverInfoContainer}>
        <View>
          <Text style={styles.infoLabel}>Conductor:</Text>
          <Text style={styles.infoText}>{driverName}</Text>
        </View>

        <View>
          <Text style={styles.infoLabel}>Vehiculo:</Text>
          <Text style={styles.infoText}>{vehicleModel} {vehiclePlates}</Text>
        </View>
      </View>

      <View style={styles.rowContainer}>
        <View>
          <Text style={styles.infoLabel}>Salida:</Text>
          <Text style={styles.infoText}>{departureTime}</Text>
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
