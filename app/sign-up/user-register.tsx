import React from 'react';
import ProgressBarContainer from '@/components/visuals/ProgressBarContainer';
import LayoutRegister from '@/components/layouts/register/LayoutRegister';
import Title from '@/components/layouts/Title';
import HyperLink from '@/components/buttons/HyperLink';
import UserRegistrationForm from '@/components/forms/register/UserRegistrationForm';
import HeaderRegister from '@/components/layouts/register/HeaderRegister';
import ScrollLayout from '@/components/layouts/ScrollLayout';

export default function FirstRegister() {
  const handleSubmitRegister = async () => {};

  const handleLogInRedirect = async () => {};

  return (
    <>
      <HeaderRegister>
        <Title>Registrar</Title>
        <ProgressBarContainer type={'ProgressBar2'} />
      </HeaderRegister>

      <LayoutRegister>
        <ScrollLayout>
          <UserRegistrationForm
            onSubmit={handleSubmitRegister}
            redirect={'/sign-up/address-register'}
          />
          <HyperLink
            label={'¿Ya tienes cuenta? Inicia Sesión'}
            onClick={handleLogInRedirect}
            href={'/sign-up/log-in'}
          />
        </ScrollLayout>
      </LayoutRegister>
    </>
  );
}
