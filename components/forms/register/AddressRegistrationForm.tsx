import { useState } from 'react';
import { router } from 'expo-router';
import { StyleSheet } from 'react-native';

import InputLabel from '@components/inputs/InputLabel';
import InputPassword from '@components/inputs/InputPassword';
import { InputButton } from '@components/buttons/InputButton';
import { RegistrationAddressFormProps } from '@components/forms/register/RegisterFormProps';

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
      if (password === confirmPassword) {
        await onSubmit(address, phoneNumber, email, password);
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
