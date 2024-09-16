import React from 'react';
import ProgressBarContainer from '@/components/visuals/ProgressBarContainer';
import LayoutRegister from '@/components/layouts/register/LayoutRegister';
import Title from '@/components/layouts/Title';
import AddressRegistrationForm from '@/components/forms/register/AddressRegistrationForm';

import ScrollLayout from '@/components/layouts/ScrollLayout';
import HeaderRegister from '@/components/layouts/register/HeaderRegister';
import { AbsoluteBackButton } from '@/components/buttons/navigation/AbsoluteBackButton';

export default function SecondRegister() {
  const eventRedirect = async () => {
    console.log('Redirect to Register 3...');
  };

  return (
    <>
      <AbsoluteBackButton />

      <HeaderRegister>
        <Title>Registrar</Title>
        <ProgressBarContainer type={'ProgressBar3'} />
      </HeaderRegister>

      <LayoutRegister>
        <ScrollLayout>
          <AddressRegistrationForm
            redirect={'/sign-up/select-register'}
            onSubmit={eventRedirect}
          />
        </ScrollLayout>
      </LayoutRegister>
    </>
  );
}
