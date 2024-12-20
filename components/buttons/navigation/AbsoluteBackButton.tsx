import { DimensionValue, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { VisualIcon } from '@components/visuals/VisualIcon';

type Props = {
  onPress?: () => void;
  horizontal?: DimensionValue;
  vertically?: DimensionValue;
};

export const AbsoluteBackButton = ({
  onPress,
  horizontal = 43,
  vertically = 20,
}: Props) => {
  const onPressEvent = () => {
    if (onPress) {
      onPress();
    }

    if (router.canGoBack()) {
      router.back();
    }
  };

  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        top: horizontal,
        left: vertically,
      }}
      onPress={onPressEvent}
    >
      <VisualIcon type={'arrow-back'} size={24} color="#fff" />
    </TouchableOpacity>
  );
};
