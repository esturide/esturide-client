import { AbsoluteBackButton } from '@components/buttons/navigation/AbsoluteBackButton';
import HeaderRegister from '@components/layouts/register/HeaderRegister';
import ProgressBarContainer from '@components/visuals/ProgressBarContainer';
import Title from '@components/layouts/Title';
import DriverRegisterForm from '@components/forms/register/DriverRegisterForm';
import ScrollLayout from '@components/layouts/ScrollLayout';
import LayoutRegister from '@components/layouts/register/LayoutRegister';

export default function DriverRegister() {
  const handleSubmit = async () => {};

  return (
    <>
      <AbsoluteBackButton />

      <HeaderRegister>
        <Title>Registrar</Title>
        <ProgressBarContainer status={'finished'} />
      </HeaderRegister>

      <LayoutRegister>
        <ScrollLayout>
          <DriverRegisterForm
            redirect={'/sign-up/passenger-register'}
            onSubmit={handleSubmit}
          />
        </ScrollLayout>
      </LayoutRegister>
    </>
  );
}
