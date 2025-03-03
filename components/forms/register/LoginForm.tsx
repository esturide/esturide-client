import React, { useState } from 'react';
import { InputButton } from '@components/buttons/InputButton';
import InputLabel from '@components/inputs/InputLabel';
import InputPassword from '@components/inputs/InputPassword';
import styles from '@styles/forms/LoginForm';
import { router } from 'expo-router';
import { showMessage } from '@libs/toast/alerts/toast';

type Props = {
  onLogin: (username: string, password: string) => Promise<boolean>;
  redirect: string;
};

export default function LoginForm({ onLogin, redirect }: Props) {
  const [userCode, setUserCode] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    const status = await onLogin(userCode, password);

    if (status) {
      router.replace(redirect);
    }
  };

  return (
    <>
      <InputLabel
        label="Usuario"
        onChangeText={setUserCode}
        style={styles.userInputMargin}
        placeholder={'Numero de usuario'}
        typeInput={'numeric'}
      />
      <InputPassword label="Contraseña" onChangeText={setPassword} />
      <InputButton
        typeButton={'submit'}
        label={'Confirmar'}
        onPress={onSubmit}
      />
    </>
  );
}
