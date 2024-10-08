import { StyleProp, Text, TouchableOpacity } from 'react-native';
import style from '@styles/InputButtons';
import ButtonPassenger from '@components/buttons/ButtonPassenger';
import ButtonDriver from '@components/buttons/ButtonDriver';
import { VisualIcon } from '@components/visuals/VisualIcon';

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
        <VisualIcon type={'gps-fixed'} size={textStyle} />
      ) : typeButton.startsWith('filter') ? (
        <VisualIcon type={'filter-list'} size={textStyle} />
      ) : typeButton.startsWith('add') ? (
        <VisualIcon type={'add'} size={textStyle} />
      ) : (
        <Text style={textStyle}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};
