import { AbsoluteBackButton } from '@components/buttons/navigation/AbsoluteBackButton';
import HeaderRegister from '@components/layouts/register/HeaderRegister';
import Title from '@components/layouts/Title';
import ProgressBarContainer from '@components/visuals/ProgressBarContainer';
import LayoutRegister from '@components/layouts/register/LayoutRegister';
import PassengerRegisterForm from '@components/forms/register/PassengerRegisterForm';
import ScrollLayout from '@components/layouts/ScrollLayout';

export default function PassengerRegister() {
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
          <PassengerRegisterForm redirect={''} />
        </ScrollLayout>
      </LayoutRegister>
    </>
  );
}
