import { Text, TouchableOpacity, View } from "react-native";
import CustomRadioButtonGroup from "./CustomRadioButtonGroup";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles, {
  DefaultDriverColors,
  DefautPassengerColor,
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
    driver: { ...styles.textHeader, color: DefaultDriverColors.header },
    passenger: { ...styles.textHeader, color: DefautPassengerColor.header },
  };
  const addCardButtonStyles = {
    driver: {
      ...styles.addCardButton,
      backgroundColor: DefaultDriverColors.addCardButton,
    },
    passenger: {
      ...styles.addCardButton,
      backgroundColor: DefautPassengerColor.addCardButton,
    },
  };
  const addCardIconStyles = {
    driver: DefaultDriverColors.iconColor,
    passenger: DefautPassengerColor.iconColor,
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
