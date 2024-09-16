import { StyleProp, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import style from '@/styles/InputButtons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ButtonPassenger from '@/components/buttons/ButtonPassenger';
import ButtonDriver from '@/components/buttons/ButtonDriver';

interface InputButtonProps {
  /**
   * What type button?
   */
  typeButton:
    | 'depositBlue'
    | 'depositGreen'
    | 'submit'
    | 'btnPassenger'
    | 'btnDriver';
  /**
   * InputButton contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onPress?: () => Promise<void>;
}

/**
 * Primary UI component for user interaction
 */
export const InputButton = ({
  typeButton,
  label,
  ...props
}: InputButtonProps) => {
  const buttonStyles = {
    depositBlue: [style.btnDepositBlue, style.btnDepositBlueText],
    depositGreen: [style.btnDepositGreen, style.btnDepositGreenText],
    submit: [style.btnSubmit, style.btnSubmitText],
    withdraw: [style.btnWithdraw, style.btnWithdrawText],
    addBlue: [style.btnAddBlue, style.btnAddIcon],
    addGreen: [style.btnAddGreen, style.btnAddIcon],
    filterGreen: [style.btnFilterGreen, style.filterIcon],
    filterBlue: [style.btnFilterBlue, style.filterIcon],
    locationGreen: [style.btnLocationGreen, style.gpsIcon],
    locationBlue: [style.btnLocationBlue, style.gpsIcon],
    btnPassenger: [style.btnPassenger],
    btnDriver: [style.btnDriver],
  };

  const buttonStyle: StyleProp<any> = buttonStyles[typeButton][0];
  const textStyle: StyleProp<any> = buttonStyles[typeButton][1];

  return (
    <TouchableOpacity style={buttonStyle} {...props}>
      {typeButton === 'btnPassenger' ? (
        <ButtonPassenger />
      ) : typeButton === 'btnDriver' ? (
        <ButtonDriver />
      ) : typeButton.startsWith('location') ? (
        <Icon name="gps-fixed" style={textStyle} />
      ) : typeButton.startsWith('filter') ? (
        <Icon name="filter-list" style={textStyle} />
      ) : typeButton.startsWith('add') ? (
        <Icon name="add" style={textStyle} />
      ) : (
        <Text style={textStyle}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};
