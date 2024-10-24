import { useAtom } from 'jotai';
import { usernameAtom, passwordAtom } from '../../state/loginAtoms'; 
import { InputButton } from '@components/buttons/InputButton';
import InputLabel from '@components/inputs/InputLabel';
import InputPassword from '@components/inputs/InputPassword';
import styles from '@styles/forms/LoginForm';

type Props = {
  onLogin: (username: string, password: string) => Promise<void>;
};

export default function LoginForm({ onLogin }: Props) {
  const [username, setUsername] = useAtom(usernameAtom);
  const [password, setPassword] = useAtom(passwordAtom);

  const onSubmit = async () => {
    await onLogin(username, password);
  };

  return (
    <>
      <InputLabel
        label="Usuario"
        onChangeText={setUsername}
        style={styles.userInputMargin}
        placeholder={'Correo o número de usuario'}
      />
      <InputPassword label="Contraseña" onChangeText={setPassword} />
      <InputButton
        typeButton={'submit'}
        label={'Iniciar Sesión'}
        onPress={onSubmit}
      />
    </>
  );
}
