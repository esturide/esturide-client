import React from 'react-native';
import CardItemPresentation from '@components/cards/item/CardItemPresentation';
import CompactGreenButton from '@components/buttons/compact/CompactGreenButton';
import CompactBlueButton from '@components/buttons/compact/CompactBlueButton';
import CompactCancelButton from '@components/buttons/compact/CompactCancelButton';
import { SchemeButton } from '@const/DefaultColors';

interface Props {
  title: string;
  label: string;
  onPress?: () => Promise<void>;
  disabled?: boolean;
  scheme: SchemeButton;
}

const CardButton = ({
  title,
  label,
  onPress,
  scheme,
  disabled = false,
}: Props) => {
  return (
    <CardItemPresentation title={title}>
      {scheme === 'green' && (
        <CompactGreenButton
          title={label}
          onPress={onPress}
          disabled={disabled}
        />
      )}
      {scheme === 'blue' && (
        <CompactBlueButton
          title={label}
          onPress={onPress}
          disabled={disabled}
        />
      )}
      {scheme === 'red' && (
        <CompactCancelButton
          title={label}
          onPress={onPress}
          disabled={disabled}
        />
      )}
    </CardItemPresentation>
  );
};

export default CardButton;
