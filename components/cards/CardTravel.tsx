import { Text, View } from 'react-native';
import styles, {
  DefaultDriverColor,
  DefaultPassengerColor,
} from '@styles/CardTravel';

interface SeatsArr {
  id: string;
  value: string;
}

interface CardTravelProps {
  typeCard: 'driver' | 'passenger';
  departTime: string;
  arrivalTime: string;
  price: number;
  seatsArr: SeatsArr[];
}

export default function CardTravel({
  typeCard,
  departTime,
  arrivalTime,
  price,
  seatsArr,
}: CardTravelProps) {
  const containerStyles = {
    driver: { ...styles.cardContainer, borderColor: DefaultDriverColor },
    passenger: { ...styles.cardContainer, borderColor: DefaultPassengerColor },
  };

  const labelStyles = {
    driver: { ...styles.infoLabel, color: DefaultDriverColor },
    passenger: { ...styles.infoLabel, color: DefaultPassengerColor },
  };

  const seatViewStyles = {
    driver: { ...styles.seatView, backgroundColor: DefaultDriverColor },
    passenger: { ...styles.seatView, backgroundColor: DefaultPassengerColor },
  };

  if (seatsArr.length > 3) {
    throw RangeError('Invalid number of seats, maximum only 3');
  }

  return (
    <View style={containerStyles[typeCard]}>
      <View style={styles.rowContainer}>
        <View>
          <Text style={labelStyles[typeCard]}>Salida:</Text>
          <Text style={styles.infoText}>{departTime}</Text>
        </View>

        <View>
          <Text style={labelStyles[typeCard]}>Llegada:</Text>
          <Text style={styles.infoText}>{arrivalTime}</Text>
        </View>
      </View>

      <View style={styles.rowContainer}>
        <View>
          <Text style={labelStyles[typeCard]}>Precio:</Text>
          <Text style={styles.infoText}>
            ${price}
            {price % 1 === 0 ? '.00' : ''}
          </Text>
        </View>

        <View>
          <Text style={labelStyles[typeCard]}>Asientos:</Text>
          <View style={styles.seatsContainer}>
            {seatsArr &&
              seatsArr.map((seat) => (
                <View key={seat.id} style={seatViewStyles[typeCard]}>
                  <Text style={styles.seatText}>{seat.value}</Text>
                </View>
              ))}
          </View>
        </View>
      </View>
    </View>
  );
}
