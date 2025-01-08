import React, { useState } from 'react';
import ProgressBarContainer from '@components/visuals/ProgressBarContainer';
import LayoutRegister from '@components/layouts/register/LayoutRegister';
import Title from '@components/layouts/Title';
import HyperLink from '@components/buttons/HyperLink';
import UserRegistrationForm from '@components/forms/register/UserRegistrationForm';
import HeaderRegister from '@components/layouts/register/HeaderRegister';
import ScrollLayout from '@components/layouts/ScrollLayout';
import { UserDataRequest } from '@libs/request/createUser';
import { useAtom } from 'jotai/index';
import { userDataRequestAtom } from '@stores/forms/forms';
import Loading from '@components/visuals/resources/Loading';

export default function FirstRegister() {
  const [userDataRequest, setUserDataRequest] = useAtom(userDataRequestAtom);
  const [loading, setLoading] = useState(false);

  const handleSubmitRegister = async (
    name: string,
    firstLastName: string,
    secondLastName: string,
    code: string,
    birthDate: Date,
  ) => {
    const data: UserDataRequest = {
      code: parseInt(code),
      firstname: name,
      maternalSurname: firstLastName,
      paternalSurname: secondLastName,
      birthDate: birthDate,
    };

    setUserDataRequest(data);

    return true;
  };

  const handleLogInRedirect = async () => {};

  return (
    <>
      <HeaderRegister>
        <Title>Registrar</Title>
        <ProgressBarContainer />
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
          <Loading visible={loading} />
        </ScrollLayout>
      </LayoutRegister>
    </>
  );
}
