import { Pressable, Text, View } from "react-native";
import { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "../../styles/CustomRadioButton";

interface CreditCardInfo {
  id: string;
  cardLogo: string;
  cardBank: string;
  cardNumber: string;
}

interface RadioButtonGroupProps {
  data: CreditCardInfo[];
}

export default function CustomRadioButton({ data }: RadioButtonGroupProps) {
  const [userOption, setUserOption] = useState("");

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
              <View style={styles.radio}>
                {userOption === item.id && (
                  <View style={styles.selectedRadio}></View>
                )}
              </View>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}
