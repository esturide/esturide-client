import React, { useState } from 'react';
import ProgressBarContainer from '@components/visuals/ProgressBarContainer';
import LayoutRegister from '@components/layouts/register/LayoutRegister';
import Title from '@components/layouts/Title';
import AddressRegistrationForm from '@components/forms/register/AddressRegistrationForm';
import ScrollLayout from '@components/layouts/ScrollLayout';
import HeaderRegister from '@components/layouts/register/HeaderRegister';
import { AbsoluteBackButton } from '@components/buttons/navigation/AbsoluteBackButton';
import { useAtom } from 'jotai/index';
import { userDataRequestAtom } from '@stores/forms/forms';
import loaderEffect from '@libs/loaderEffect';
import { createUser } from '@libs/request/createUser';

export default function SecondRegister() {
  const [userDataRequest, setUserDataRequest] = useAtom(userDataRequestAtom);
  const [loading, setLoading] = useState(false);

  const eventRedirect = async (
    address: string,
    phoneNumber: string,
    email: string,
    password: string,
  ) => {
    let status = false;

    const data = userDataRequest;
    data.email = email;
    data.password = password;

    await loaderEffect(async () => {
      status = await createUser(data);
    }, setLoading);

    setUserDataRequest(data);

    return status;
  };

  return (
    <>
      <AbsoluteBackButton />

      <HeaderRegister>
        <Title>Registrar</Title>
        <ProgressBarContainer status={'middle'} />
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
