import { ColorValue } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  type: string;
  size: number;
  color?: number | ColorValue;
};

export const VisualIcon = ({ type, size, color }: Props) => {
  return <Icon name={type} size={size} color={color} />;
};
