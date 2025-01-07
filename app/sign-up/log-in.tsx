import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useAtom } from 'jotai';
import LayoutRegister from '@components/layouts/register/LayoutRegister';
import Title from '@components/layouts/Title';
import LoginForm from '@components/forms/register/LoginForm';
import Logo from '@components/resources/Logo';
import HyperLink from '@components/buttons/HyperLink';
import ScrollLayout from '@components/layouts/ScrollLayout';
import { loginUser } from '@libs/request/loginUser';
import { authTokenAtom } from '@stores/token';

import 'react-native-reanimated';
import Toast from 'react-native-toast-message';
import loaderEffect from '@libs/loaderEffect';
import { Loading } from '@components/modals/Loading';
import { timing } from '@libs/timing';

export default function LogIn() {
  const [authToken, setAuthToken] = useAtom(authTokenAtom);
  const [loading, setLoading] = useState(false);

  const showSuccessMessage = () => {
    Toast.show({
      type: 'success',
      text1: 'Bienvenido',
      text2: 'Realiza tus viajes y agenda 👋',
    });
  };

  const showFailureMessage = () => {
    Toast.show({
      type: 'error',
      text1: 'Nombre de usuario o contraseña incorrectos',
    });
  };

  const onLogin = async (username: string, password: string) => {
    const data = { code: username, password: password };
    let status = false;

    await loaderEffect(async () => {
      status = await loginUser(data, setAuthToken);
    }, setLoading);

    if (status) {
      showSuccessMessage();
    } else {
      showFailureMessage();
    }

    return status;
  };

  const onHyperLinkPressed = async () => {
    console.log('Redirect to User register');
  };

  return (
    <>
      <Logo style={styles.logoContainer} />
      <LayoutRegister>
        <ScrollLayout>
          <Title style={styles.title}>Iniciar Sesión</Title>
          <LoginForm onLogin={onLogin} redirect={'/user'} />
          <HyperLink
            onClick={onHyperLinkPressed}
            label={'¿No tienes cuenta? Regístrate'}
            href={'/sign-up/user-register'}
          />
          <Loading visible={loading} />
        </ScrollLayout>
      </LayoutRegister>
    </>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    position: 'absolute',
    top: 79,
    alignItems: 'center',
    width: 123,
    height: 124,
  },
  registerText: {
    color: '#454545',
    textDecorationLine: 'underline',
    fontSize: 13.3,
    fontWeight: 'bold',
    marginTop: 24,
  },
  title: {
    fontSize: 43.2,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 49,
  },
});
