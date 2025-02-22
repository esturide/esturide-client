import React, { useContext } from 'react';
import { router } from 'expo-router';

import InputLabel from '@components/inputs/InputLabel';
import InputDate from '@components/inputs/InputDate';
import { InputButton } from '@components/buttons/InputButton';
import { RegistrationUserFormProps } from '@components/forms/register/RegisterFormProps';
import {
  showFailureMessage,
  showLongSuccessMessage,
} from '@libs/toast/message/messages';
import { useCreateUserContext } from '@components/context/RegisterFormContext';

import styles from '@styles/forms/RegistrationFormStyle';

export default function UserRegistrationForm({
  onSubmit,
  redirect,
}: RegistrationUserFormProps) {
  const { userFormRequest, handleChange } = useCreateUserContext();

  const onPressButton = async () => {
    if (onSubmit) {
      if (userFormRequest.birthDate !== null) {
        if (userFormRequest.code > 1000) {
          const status = await onSubmit(
            userFormRequest.name,
            userFormRequest.firstLastName,
            userFormRequest.secondLastName,
            userFormRequest.code,
            userFormRequest.birthDate,
          );

          if (status) {
            showLongSuccessMessage(
              'Datos enviados',
              'Usuario registrado correctamente.',
            );

            router.push(redirect);
          } else {
            showFailureMessage(
              'Datos invalidos, vuelve a ingresarlos correctamente.',
            );
          }
        } else {
          showFailureMessage('Codigo invalido.');
        }
      } else {
        showFailureMessage('Ingrese una fecha valida.');
      }
    }
  };

  return (
    <>
      <InputLabel
        label="Nombre"
        value={userFormRequest.name}
        onChangeText={(name) => handleChange('name', name)}
        style={styles.userInputMargin}
      />
      <InputLabel
        label="Primer Apellido"
        value={userFormRequest.firstLastName}
        onChangeText={(firstLastName) =>
          handleChange('firstLastName', firstLastName)
        }
        style={styles.userInputMargin}
      />
      <InputLabel
        label="Segundo Apellido"
        value={userFormRequest.secondLastName}
        onChangeText={(secondLastName) =>
          handleChange('secondLastName', secondLastName)
        }
        style={styles.userInputMargin}
      />
      <InputLabel
        label="Código"
        value={`${userFormRequest.code}`}
        onChangeText={(code) => handleChange('code', parseInt(code))}
        style={styles.userInputMargin}
        typeInput={'numeric'}
      />
      <InputDate
        label="Fecha de Nacimiento"
        onChange={(birthDate) => handleChange('birthDate', birthDate)}
        value={userFormRequest.birthDate}
        style={[styles.userInputMargin, styles.dateInputMargin]}
      />
      <InputButton
        label={'Siguente'}
        typeButton={'submit'}
        onPress={onPressButton}
      />
    </>
  );
}
