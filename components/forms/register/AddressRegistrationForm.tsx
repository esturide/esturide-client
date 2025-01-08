import { useState } from 'react';
import { router } from 'expo-router';
import { StyleSheet } from 'react-native';

import InputLabel from '@components/inputs/InputLabel';
import InputPassword from '@components/inputs/InputPassword';
import { InputButton } from '@components/buttons/InputButton';
import { RegistrationAddressFormProps } from '@components/forms/register/RegisterFormProps';
import { showMessage } from '@libs/alerts/toast';

export default function AddressRegistrationForm({
  onSubmit,
  redirect,
}: RegistrationAddressFormProps) {
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onPressButton = async () => {
    if (onSubmit) {
      if (password === confirmPassword && password.length > 8) {
        await onSubmit(address, phoneNumber, email, password);
      } else {
        if (password !== confirmPassword) {
          showMessage('La contraseña no es la misma.');
        } else if (!(password.length > 8)) {
          showMessage('La contraseña tiene que ser de 8 caracteres.');
        }
      }
    }

    router.push(redirect);
  };

  return (
    <>
      <InputLabel
        label="Dirección"
        onChangeText={setAddress}
        style={styles.userInputMargin}
      />
      <InputLabel
        label="Número de Teléfono"
        onChangeText={setPhoneNumber}
        style={styles.userInputMargin}
      />
      <InputLabel
        label="Correo Electrónico"
        onChangeText={setEmail}
        style={styles.userInputMargin}
      />
      <InputPassword label="Contraseña" onChangeText={setPassword} />
      <InputPassword
        label="Confirmar Contraseña"
        onChangeText={setConfirmPassword}
      />
      <InputButton
        label={'Siguente'}
        typeButton={'submit'}
        onPress={onPressButton}
      />
    </>
  );
}

const styles = StyleSheet.create({
  userInputMargin: {
    marginTop: 10,
  },
});
