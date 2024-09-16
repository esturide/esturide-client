import React from 'react';
import { router } from 'expo-router';

import { AbsoluteBackButton } from '@components/buttons/navigation/AbsoluteBackButton';
import ProgressBarContainer from '@components/visuals/ProgressBarContainer';
import Title from '@components/layouts/Title';
import LayoutRegister from '@components/layouts/register/LayoutRegister';
import HeaderRegister from '@components/layouts/register/HeaderRegister';

import TypeAccountForm, {
  TypeAccount,
} from '@components/forms/register/TypeAccountForm';

export default function ThirdRegister() {
  const handleSubmit = async (acceptTerms: boolean, account: TypeAccount) => {
    if (!acceptTerms) {
      console.log('Debe aceptar los términos y condiciones!');
      return;
    }

    if (account === 'driver') {
      router.push('/sign-up/driver-register');
    } else if (account === 'passenger') {
      router.push('/sign-up/passenger-register');
    } else {
      console.log(
        `Debe seleccionar una opción, '${account}' no es una opción valida`,
      );
    }
  };

  return (
    <>
      <AbsoluteBackButton />

      <HeaderRegister>
        <Title>Registrar</Title>
        <ProgressBarContainer type={'ProgressBar3'} />
      </HeaderRegister>

      <LayoutRegister>
        <TypeAccountForm
          terms={'/legal/terms-conditions'}
          handleSubmit={handleSubmit}
        />
      </LayoutRegister>
    </>
  );
}
