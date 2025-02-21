import { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { InputButton } from '@components/buttons/InputButton';
import GreenButton from '@components/buttons/GreenButton';
import { showSuccessMessage } from '@libs/toast/messages';

type Props = {
  label: string;
  onValidate?: (valid: boolean) => Promise<void>;
};

export default function AuthUser({ label, onValidate }: Props) {
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuthentication = async () => {
    try {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      if (!hasHardware) {
        Alert.alert('Error', 'Tu dispositivo no tiene hardware biométrico');
        return;
      }

      const isEnrolled = await LocalAuthentication.isEnrolledAsync();
      if (!isEnrolled) {
        Alert.alert('Error', 'No hay huellas dactilares registradas');
        return;
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Autenticación requerida',
        fallbackLabel: 'Usar contraseña',
      });

      setAuthenticated(result.success);

      if (result.success) {
        Alert.alert('Éxito', 'Autenticación exitosa');
      } else {
        Alert.alert('Error', 'Autenticación fallida');
      }

      if (onValidate !== undefined) {
        await onValidate(authenticated);
      }
    } catch (error) {
      Alert.alert('Error', `Ocurrió un error: ${error}`);
    }
  };

  return <GreenButton title={label} onPress={handleAuthentication} />;
}
