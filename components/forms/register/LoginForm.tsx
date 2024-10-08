import { useState } from 'react';
import { InputButton } from '@components/buttons/InputButton';
import InputLabel from '@components/inputs/InputLabel';
import InputPassword from '@components/inputs/InputPassword';
import styles from '@styles/forms/LoginForm';
import { loginSchema } from '@libs/validationSchemas'; // Importamos el esquema de validación con Joi
import { Alert } from 'react-native';

type Props = {
  onLogin: (username: string, password: string) => Promise<void>;
};

export default function LoginForm({ onLogin }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});

  const onSubmit = async () => {
    // Validamos los datos antes de enviarlos
    const { error } = loginSchema.validate(
      { username, password },
      { abortEarly: false },
    );

    if (error) {
      const validationErrors: { username?: string; password?: string } = {};
      error.details.forEach((detail) => {
        const key = detail.path[0]; // Extraemos la clave desde Joi

        // Verificamos explícitamente si `key` es una de las claves válidas (username o password)
        if (key === 'username' || key === 'password') {
          validationErrors[key] = detail.message;
        }
      });

      setErrors(validationErrors); // Actualizamos los errores en el estado
      return;
    }

    setErrors({}); // Limpiamos los errores si no los hay
    await onLogin(username, password);
  };

  return (
    <>
      <InputLabel
        label="Usuario"
        onChangeText={setUsername}
        style={styles.userInputMargin}
        placeholder={'Correo o numero de usuario'}
        errorMessage={errors.username}
      />
      <InputPassword
        label="Contraseña"
        onChangeText={setPassword}
        errorMessage={errors.password}
      />
      <InputButton
        typeButton={'submit'}
        label={'Iniciar Sesion'}
        onPress={onSubmit}
      />
    </>
  );
}
