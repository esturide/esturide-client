import { Pressable, Text, View } from "react-native";
import { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles, { DRIVER_COLOR, PASSENGER_COLOR } from "../../styles/CustomRadioButton";

interface CreditCardInfo {
  id: string;
  cardLogo: string;
  cardBank: string;
  cardNumber: string;
}

interface RadioButtonGroupProps {
  typeRadio: "driver" | "passenger";
  data: CreditCardInfo[];
}

export default function CustomRadioButton({ data, typeRadio }: RadioButtonGroupProps) {
  const [userOption, setUserOption] = useState("");

  const radioStyles = {
    driver: { ...styles.radio, borderColor: DRIVER_COLOR},
    passenger: {...styles.radio, borderColor: PASSENGER_COLOR},
  }

  const selectedRadioStyles = {
    driver: { ...styles.selectedRadio, borderColor: DRIVER_COLOR, backgroundColor: DRIVER_COLOR},
    passenger: {...styles.selectedRadio, borderColor: PASSENGER_COLOR, backgroundColor: PASSENGER_COLOR},
  }

  return (
    <View>
      {data.map((item) => {
        return (
          <Pressable
            key={item.id}
            onPress={() => {
              setUserOption(item.id);
              console.log(userOption);
            }}
          >
            <View style={styles.cardContainer}>
              <MaterialCommunityIcons name="credit-card-outline" size={20} />
              <Text style={styles.cardInfoText}>{item.cardBank}</Text>
              <Text style={styles.cardInfoText}>{item.cardNumber}</Text>
              <View style={radioStyles[typeRadio]}>
                {userOption === item.id && (
                  <View style={selectedRadioStyles[typeRadio]}></View>
                )}
              </View>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}
