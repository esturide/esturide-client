import React, { useState } from 'react';
import { router } from 'expo-router';

import InputLabel from '@components/inputs/InputLabel';
import InputDate from '@components/inputs/InputDate';
import styles from '@styles/forms/RegistrationFormStyle';
import { InputButton } from '@components/buttons/InputButton';
import { RegistrationFormProps } from '@components/forms/register/RegisterFormProps';
import { registrationValidationSchema } from '@libs/validationSchemas';

export default function UserRegistrationForm({
  onSubmit,
  redirect,
}: RegistrationFormProps) {
  const [name, setName] = useState<string>('');
  const [firstLastName, setFirstLastName] = useState<string>('');
  const [secondLastName, setSecondLastName] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [errors, setErrors] = useState<any>({});

  const validateForm = () => {
    const formData = {
      name,
      firstLastName,
      secondLastName,
      code,
      birthDate,
    };
    const { error } = registrationValidationSchema.validate(formData, {
      abortEarly: false,
    });
    if (error) {
      const formattedErrors: any = {};
      error.details.forEach((detail) => {
        formattedErrors[detail.path[0]] = detail.message;
      });
      setErrors(formattedErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const onPressButton = async () => {
    if(validateForm()) {
      if (onSubmit) {
      await onSubmit();
    }
    router.push(redirect);
    }
  };

  return (
    <>
      <InputLabel
        label="Nombre"
        onChangeText={setName}
        style={styles.userInputMargin}
        errorMessage={errors.name}
      />
      <InputLabel
        label="Primer Apellido"
        onChangeText={setFirstLastName}
        style={styles.userInputMargin}
        errorMessage={errors.firstLastName}
      />
      <InputLabel
        label="Segundo Apellido"
        onChangeText={setSecondLastName}
        style={styles.userInputMargin}
        errorMessage={errors.secondLastName}
      />
      <InputLabel
        label="Código"
        onChangeText={setCode}
        style={styles.userInputMargin}
        errorMessage={errors.code}
      />
      <InputDate
        label="Fecha de Nacimiento"
        onChange={setBirthDate}
        value={birthDate}
        style={[styles.userInputMargin, styles.dateInputMargin]}
        errorMessage={errors.birthDate}
      />
      <InputButton
        label={'Siguiente'}
        typeButton={'submit'}
        onPress={onPressButton}
      />
    </>
  );
}
