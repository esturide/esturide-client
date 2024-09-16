import { Pressable, Text, View } from 'react-native';
import { useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles, {
  DefaultDriverColor,
  DefaultPassengerColor,
} from '@/styles/CustomRadioButton';

interface CreditCardInfo {
  id: string;
  cardLogo: string;
  cardBank: string;
  cardNumber: string;
}

interface RadioButtonGroupProps {
  typeButton: 'driver' | 'passenger';
  data: CreditCardInfo[];
}

export default function CustomRadioButton({
  data,
  typeButton,
}: RadioButtonGroupProps) {
  const [userOption, setUserOption] = useState('');

  const radioStyles = {
    driver: { ...styles.radio, borderColor: DefaultDriverColor },
    passenger: { ...styles.radio, borderColor: DefaultPassengerColor },
  };

  const selectedRadioStyles = {
    driver: {
      ...styles.selectedRadio,
      borderColor: DefaultDriverColor,
      backgroundColor: DefaultDriverColor,
    },
    passenger: {
      ...styles.selectedRadio,
      borderColor: DefaultPassengerColor,
      backgroundColor: DefaultPassengerColor,
    },
  };

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
              <View style={radioStyles[typeButton]}>
                {userOption === item.id && (
                  <View style={selectedRadioStyles[typeButton]}></View>
                )}
              </View>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}
