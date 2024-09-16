import { useState } from 'react';
import { InputButton } from '@components/buttons/InputButton';
import InputLabel from '@components/inputs/InputLabel';
import InputPassword from '@components/inputs/InputPassword';
import styles from '@styles/forms/LoginForm';

type Props = {
  onLogin: (username: string, password: string) => Promise<void>;
};

export default function LoginForm({ onLogin }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    await onLogin(username, password);
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
