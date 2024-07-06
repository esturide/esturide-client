import { Text, TouchableOpacity, View } from "react-native";
import CustomRadioButtonGroup from "./CustomRadioButtonGroup";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles, {
  DRIVER_COLORS,
  PASSENGER_COLORS,
} from "@/styles/CreditCardList";

interface CreditCardInfo {
  id: string;
  cardLogo: string;
  cardBank: string;
  cardNumber: string;
}

interface CreditCardListProps {
  typeCard: "driver" | "passenger";
  data: CreditCardInfo[];
}

export default function CreditCardList({
  data,
  typeCard,
}: CreditCardListProps) {
  const headerStyles = {
    driver: { ...styles.textHeader, color: DRIVER_COLORS.header },
    passenger: { ...styles.textHeader, color: PASSENGER_COLORS.header },
  };
  const addCardButtonStyles = {
    driver: {
      ...styles.addCardButton,
      backgroundColor: DRIVER_COLORS.addCardButton,
    },
    passenger: {
      ...styles.addCardButton,
      backgroundColor: PASSENGER_COLORS.addCardButton,
    },
  };
  const addCardIconStyles = {
    driver: DRIVER_COLORS.iconColor,
    passenger: PASSENGER_COLORS.iconColor,
  };

  return (
    <View style={styles.container}>
      <Text style={headerStyles[typeCard]}>Tarjetas</Text>
      <View style={styles.cardsContainer}>
        <View>
          <CustomRadioButtonGroup data={data} typeButton={typeCard} />
        </View>

        <TouchableOpacity>
          <View style={styles.addCardContainer}>
            <View style={addCardButtonStyles[typeCard]}>
              <MaterialCommunityIcons
                name="plus"
                size={18.38}
                color={addCardIconStyles[typeCard]}
              />
            </View>
            <Text>Agregar Tarjeta</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
