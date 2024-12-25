import { Text, TouchableOpacity, View } from 'react-native';
import { GenericModal } from '@components/modals/GenericModal';
import React, { useState } from 'react';
import styles, {
  DefaultDriverColors,
  DefautPassengerColor,
} from '@styles/CreditCardList';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { CheckoutCardForm } from '@components/forms/CheckoutCardForm';

export interface CreditCardInfo {
  id: string;
  cardLogo: string;
  cardBank: string;
  cardNumber: string;
}

export interface CreditCardListProps {
  typeCard: 'driver' | 'passenger';
  data: CreditCardInfo[];
}

const addCardIconStyles = {
  driver: DefaultDriverColors.iconColor,
  passenger: DefautPassengerColor.iconColor,
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

export const CreditCard = ({ data, typeCard }: CreditCardListProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const defaultIconSize = 18.38;

  const changeVisibility = () => {
    setShowModal(!showModal);
  };

  const onCloseModal = () => {};

  const ModalCard = () => {
    return (
      <GenericModal isVisible={false} onClose={onCloseModal}></GenericModal>
    );
  };

  return (
    <TouchableOpacity onPress={changeVisibility}>
      <View style={styles.addCardContainer}>
        <View style={addCardButtonStyles[typeCard]}>
          <MaterialCommunityIcons
            name="plus"
            size={defaultIconSize}
            color={addCardIconStyles[typeCard]}
          />
        </View>
        <Text>Agregar Tarjeta</Text>
      </View>

      <GenericModal isVisible={showModal} onClose={changeVisibility}>
        <CheckoutCardForm />
      </GenericModal>

      <ModalCard />
    </TouchableOpacity>
  );
};
