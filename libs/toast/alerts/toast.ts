import { ToastAndroid } from 'react-native';

export const showMessage = (
  message: string,
  duration: number = ToastAndroid.SHORT,
) => {
  ToastAndroid.show(message, duration);
};
