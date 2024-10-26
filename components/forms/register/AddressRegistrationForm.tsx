import { useState } from 'react';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import InputLabel from '@components/inputs/InputLabel';
import InputPassword from '@components/inputs/InputPassword';
import { InputButton } from '@components/buttons/InputButton';
import { RegistrationFormProps } from '@components/forms/register/RegisterFormProps';
import { addressValidationSchema } from '@libs/validationSchemas';

export default function AddressRegistrationForm({
  onSubmit,
  redirect,
}: RegistrationFormProps) {
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<any>({});

  const validateForm = () => {
    const formData = {
      address,
      phoneNumber,
      email,
      password,
      confirmPassword,
    };

    // Validamos el formulario usando Joi
    const { error } = addressValidationSchema.validate(formData, {
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
    if (validateForm() && onSubmit) {
      if (onSubmit) {
        await onSubmit();
      }
      router.push(redirect);
    }
  };

  return (
    <>
      <InputLabel
        label="Dirección"
        onChangeText={setAddress}
        style={styles.userInputMargin}
        errorMessage={errors.address}
      />
      <InputLabel
        label="Número de Teléfono"
        onChangeText={setPhoneNumber}
        style={styles.userInputMargin}
        errorMessage={errors.phoneNumber}
      />
      <InputLabel
        label="Correo Electrónico"
        onChangeText={setEmail}
        style={styles.userInputMargin}
        errorMessage={errors.email}
      />
      {/* Añadimos un texto debajo del campo para los requisitos de contraseña */}
      <InputPassword
        label="Contraseña"
        onChangeText={setPassword}
        errorMessage={errors.password}
        style={{ marginBottom: 3 }} // Reducimos el espacio solo para este campo
      />
      <View style={{ alignItems: 'flex-start' }}>
        <Text style={styles.passwordInfo}>
          La contraseña debe tener al menos 6 caracteres y una mayúscula.
        </Text>
      </View>
      <InputPassword
        label="Confirmar Contraseña"
        onChangeText={setConfirmPassword}
        errorMessage={errors.confirmPassword}
      />
      <InputButton
        label={'Siguiente'}
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
  passwordInfo: {
    fontSize: 12,
    color: 'gray',
    marginTop: 0,
    marginBottom: 10,
    marginLeft: 0,
  },
});
