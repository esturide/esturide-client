import React from 'react';
import { StyleSheet } from 'react-native';
import LayoutRegister from '@/components/layouts/register/LayoutRegister';
import Title from '@/components/layouts/Title';
import LoginForm from '@/components/forms/register/LoginForm';
import Logo from '@/components/resources/Logo';
import HyperLink from '@/components/buttons/HyperLink';
import ScrollLayout from '@/components/layouts/ScrollLayout';

export default function LogIn() {
  const onLogin = async (username: string, password: string) => {
    console.log(
      `Username: ${username} is logging in, with the password: ${password}`,
    );
  };

  const onHyperLinkPressed = async () => {
    console.log('Redirect to User register');
  };

  return (
    <>
      <Logo style={styles.logoContainer} />
      <LayoutRegister>
        <Title style={styles.title}>Iniciar Sesión</Title>
        <ScrollLayout>
          <LoginForm onLogin={onLogin} />
          <HyperLink
            onClick={onHyperLinkPressed}
            label={'¿No tienes cuenta? Regístrate'}
            href={'/sign-up/user-register'}
          />
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
