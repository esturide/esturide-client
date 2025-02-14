import Toast from 'react-native-toast-message';

export const showSuccessMessage = (msg: string) => {
  Toast.show({
    type: 'success',
    text1: msg,
  });
};

export const showLongSuccessMessage = (title: string, msg: string) => {
  Toast.show({
    type: 'success',
    text1: title,
    text2: msg,
  });
};

export const showFailureMessage = (msg: string) => {
  Toast.show({
    type: 'error',
    text1: msg,
  });
};
