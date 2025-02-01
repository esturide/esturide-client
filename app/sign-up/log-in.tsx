import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useAtom } from 'jotai';
import LayoutRegister from '@components/layouts/register/LayoutRegister';
import Title from '@components/layouts/Title';
import LoginForm from '@components/forms/register/LoginForm';
import Logo from '@components/visuals/resources/Logo';
import HyperLink from '@components/buttons/HyperLink';
import ScrollLayout from '@components/layouts/ScrollLayout';
import Loading from '@components/visuals/resources/Loading';
import { loginUser, UserDataLogin } from '@libs/request/loginUser';
import loaderEffect from '@libs/loaderEffect';

import { showFailureMessage, showSuccessMessage } from '@libs/toast/messages';
import { stringToNumber } from '@libs/cast';

import 'react-native-reanimated';
import { userCodeAtom } from '@stores/user';
import { authTokenAtom } from '@stores/token';
import { useUserManagerContext } from '@components/context/UserManagerContext';

export default function LogIn() {
  const { setSessionStatus } = useUserManagerContext();

  const [userCode, setUserCode] = useAtom(userCodeAtom);
  const [authToken, setAuthToken] = useAtom(authTokenAtom);
  const [loading, setLoading] = useState(false);

  const onLogin = async (code: string, password: string) => {
    const [statusCode, userCodeNumber] = stringToNumber(code);
    const data: UserDataLogin = {
      code: userCodeNumber,
      password: password,
    };

    let status = false;

    if (statusCode) {
      await loaderEffect(async () => {
        status = await loginUser(data, setAuthToken);

        if (status) {
          setUserCode(userCodeNumber);
          setSessionStatus('Success');
        }
      }, setLoading);
    }

    if (status) {
      showSuccessMessage('Bienvenido', 'Realiza tus viajes y agenda ✅️.');
    } else {
      showFailureMessage('Nombre de usuario o contraseña incorrectos ⚠️.');
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
          <Loading visible={loading} modal />
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
