import React, { useEffect, useState } from 'react';
import { router } from 'expo-router';
import InputLabel from '@components/inputs/InputLabel';
import InputDate from '@components/inputs/InputDate';
import { InputButton } from '@components/buttons/InputButton';
import { RegistrationUserFormProps } from '@components/forms/register/RegisterFormProps';
import {
  showFailureMessage,
  showSuccessMessage,
} from '@libs/toast/message/messages';
import { useCreateUserContext } from '@components/context/register/RegisterFormContext';
import { stringToNumber } from '@libs/cast';

import styles from '@styles/forms/RegistrationFormStyle';

export default function UserRegistrationForm({
  onSubmit,
  redirect,
}: RegistrationUserFormProps) {
  const [useCode, setUseCode] = useState('1000000');
  const { userFormRequest, handleChange } = useCreateUserContext();

  useEffect(() => {
    const [validNumber, value] = stringToNumber(useCode);

    if (validNumber) {
      handleChange('code', value);
    }
  }, [useCode]);

  const onPressButton = async () => {
    let status = false;

    if (userFormRequest.birthDate !== null) {
      if (userFormRequest.code > 1000) {
        if (onSubmit) {
          status = await onSubmit(userFormRequest);
        } else {
          status = true;
        }

        if (status) {
          showSuccessMessage('Usuario registrado correctamente.');

          router.push(redirect);
        }
      } else {
        showFailureMessage('Codigo invalido.');
      }
    } else {
      showFailureMessage('Ingrese una fecha valida.');
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
        onChangeText={setUseCode}
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
