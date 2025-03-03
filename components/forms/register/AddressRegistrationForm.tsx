import React, { useState } from 'react';
import { router } from 'expo-router';
import { StyleSheet } from 'react-native';

import InputLabel from '@components/inputs/InputLabel';
import InputPassword from '@components/inputs/InputPassword';
import { InputButton } from '@components/buttons/InputButton';
import { showMessage } from '@libs/toast/alerts/toast';
import { showFailureMessage } from '@libs/toast/message/messages';
import { RegistrationUserFormProps } from '@components/forms/register/RegisterFormProps';
import {useCreateUserContext} from "@components/context/RegisterFormContext";

export default function AddressRegistrationForm({
  onSubmit,
  redirect,
}: RegistrationUserFormProps) {
  const { userFormRequest, handleChange } = useCreateUserContext();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onPressButton = async () => {
    let status = false;

    if (onSubmit) {
      if (password === confirmPassword && password.length > 8) {
        handleChange('password', password);

        status = await onSubmit(userFormRequest);
      } else {
        if (password !== confirmPassword) {
          showMessage('La contraseña no es la misma.');
        } else if (!(password.length > 8)) {
          showMessage('La contraseña tiene que ser de 8 caracteres.');
        }
      }
    }

    if (status) {
      router.push(redirect);
    } else {
      showFailureMessage(
        'Usuario no fue creado correctamente, intenta denuevo.',
      );
    }
  };

  return (
    <>
      <InputLabel
        label="Dirección"
        onChangeText={(address) => handleChange('address', address)}
        style={styles.userInputMargin}
      />
      <InputLabel
        label="Número de Teléfono"
        onChangeText={(phoneNumber) => handleChange('phoneNumber', phoneNumber)}
        style={styles.userInputMargin}
      />
      <InputLabel
        label="Correo Electrónico"
        onChangeText={(email) => handleChange('email', email)}
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
