import React, { useState } from 'react';
import { router } from 'expo-router';

import InputLabel from '@components/inputs/InputLabel';
import InputDate from '@components/inputs/InputDate';
import styles from '@styles/forms/RegistrationFormStyle';
import { InputButton } from '@components/buttons/InputButton';
import { RegistrationFormProps } from '@components/forms/register/RegisterFormProps';
import { showMessage } from '@libs/alerts/toast';

export default function UserRegistrationForm({
  onSubmit,
  redirect,
}: RegistrationFormProps) {
  const [name, setName] = useState<string>('');
  const [firstLastName, setFirstLastName] = useState<string>('');
  const [secondLastName, setSecondLastName] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [birthDate, setBirthDate] = useState<Date | null>(null);

  const onPressButton = async () => {
    if (onSubmit) {
      if (birthDate !== null) {
        const status = await onSubmit(
          name,
          firstLastName,
          secondLastName,
          code,
          birthDate,
        );

        if (status) {
          showMessage('Usuario registrado correctamente');
          router.push(redirect);
        } else {
          showMessage('Datos invalidos, vuelve a ingresarlos correctamente');
        }
      } else {
        showMessage('Ingrese una fecha valida');
      }
    }
  };

  return (
    <>
      <InputLabel
        label="Nombre"
        onChangeText={setName}
        style={styles.userInputMargin}
      />
      <InputLabel
        label="Primer Apellido"
        onChangeText={setFirstLastName}
        style={styles.userInputMargin}
      />
      <InputLabel
        label="Segundo Apellido"
        onChangeText={setSecondLastName}
        style={styles.userInputMargin}
      />
      <InputLabel
        label="Código"
        onChangeText={setCode}
        style={styles.userInputMargin}
      />
      <InputDate
        label="Fecha de Nacimiento"
        onChange={setBirthDate}
        value={birthDate}
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
