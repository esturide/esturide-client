import { Text, TouchableOpacity, View } from "react-native";
import CustomRadioButtonGroup from "./CustomRadioButtonGroup";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "@/styles/CreditCardList";

interface CreditCardInfo {
  id: string;
  cardLogo: string;
  cardBank: string;
  cardNumber: string;
}

interface CreditCardListProps {
  data: CreditCardInfo[];
}

export default function CreditCardList({ data }: CreditCardListProps) {
  return (
    <View>
      <Text style={styles.textHeader}>Tarjetas</Text>
      <View style={styles.cardsContainer}>
        <View>
          <CustomRadioButtonGroup data={data} />
        </View>

        <TouchableOpacity>
          <View style={styles.addCardContainer}>
            <View style={styles.addCardButton}>
              <MaterialCommunityIcons
                name="plus"
                size={18.38}
                color="#4B61B9"
              />
            </View>
            <Text>Agregar Tarjeta</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
