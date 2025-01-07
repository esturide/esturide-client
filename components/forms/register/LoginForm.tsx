import React, { useState } from 'react';
import { InputButton } from '@components/buttons/InputButton';
import InputLabel from '@components/inputs/InputLabel';
import InputPassword from '@components/inputs/InputPassword';
import styles from '@styles/forms/LoginForm';
import { router } from 'expo-router';
import { showMessage } from '@libs/alerts/toast';

type Props = {
  onLogin: (username: string, password: string) => Promise<boolean>;
  redirect: string;
};

export default function LoginForm({ onLogin, redirect }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    const status = await onLogin(username, password);

    if (status) {
      setTimeout(() => {
        router.replace(redirect);
      }, 1000);
    }
  };

  return (
    <>
      <InputLabel
        label="Usuario"
        onChangeText={setUsername}
        style={styles.userInputMargin}
        placeholder={'Correo o numero de usuario'}
      />
      <InputPassword label="Contraseña" onChangeText={setPassword} />
      <InputButton
        typeButton={'submit'}
        label={'Iniciar Sesion'}
        onPress={onSubmit}
      />
    </>
  );
}
