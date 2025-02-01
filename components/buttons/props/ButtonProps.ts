export interface ButtonProps {
  onPress: () => Promise<void>;
}

export interface GenericButtonProps {
  title: string;
  onPress?: () => Promise<void>;
}
