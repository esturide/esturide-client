import React, { useContext, useState } from 'react';
import ProgressBarContainer from '@components/visuals/ProgressBarContainer';
import LayoutRegister from '@components/layouts/register/LayoutRegister';
import Title from '@components/layouts/Title';
import AddressRegistrationForm from '@components/forms/register/AddressRegistrationForm';
import ScrollLayout from '@components/layouts/ScrollLayout';
import HeaderRegister from '@components/layouts/register/HeaderRegister';
import { AbsoluteBackButton } from '@components/buttons/navigation/AbsoluteBackButton';
import loaderEffect from '@libs/loaderEffect';
import { createUser } from '@libs/request/createUser';
import Loading from '@components/visuals/resources/Loading';
import {
  CreateUserRequest,
  useCreateUserContext,
} from '@components/context/RegisterFormContext';

export default function SecondRegister() {
  const [loading, setLoading] = useState(false);
  const { userFormRequest } = useCreateUserContext();

  const eventRedirect = async (form: CreateUserRequest) => {
    let status = false;

    await loaderEffect(async () => {
      status = await createUser(
        userFormRequest.code,
        userFormRequest.name,
        userFormRequest.firstLastName,
        userFormRequest.secondLastName,
        userFormRequest.curp,
        userFormRequest.birthDate,
        userFormRequest.email,
        userFormRequest.password,
      );
    }, setLoading);

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
        <Loading visible={loading} modal />
      </LayoutRegister>
    </>
  );
}
