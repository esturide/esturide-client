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

export interface CardData {
  number: string;
  property: string;
  exp: string;
  cvc: string;
}

export interface CreditCardListProps {
  typeCard: 'driver' | 'passenger';
  data: CreditCardInfo[];
  onAppend?: (data: CardData) => Promise<boolean>;
  onCancel?: () => Promise<boolean>;
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

export const CreditCard = ({
  data,
  typeCard,
  onAppend,
  onCancel,
}: CreditCardListProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const defaultIconSize = 18.38;

  const changeVisibility = async () => {
    setShowModal(!showModal);
  };

  const onCloseModal = async () => {
    setShowModal(false);

    if (onCancel !== undefined) {
      await onCancel();
    }
  };

  const ModalCard = () => {
    return (
      <GenericModal isVisible={false} onClose={onCloseModal}></GenericModal>
    );
  };

  const onSubmitCard = async (
    number: string,
    property: string,
    exp: string,
    cvc: string,
  ) => {
    let status = false;

    if (onAppend !== undefined) {
      status = await onAppend({ number, property, exp, cvc });
    }

    setShowModal(!status);
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
        <CheckoutCardForm onSubmit={onSubmitCard} onClose={onCloseModal} />
      </GenericModal>

      <ModalCard />
    </TouchableOpacity>
  );
};
