import { Text } from 'react-native';
import { router } from 'expo-router';
import { RegistrationUserFormProps } from '@components/forms/register/RegisterFormProps';
import { InputButton } from '@components/buttons/InputButton';

export default function PassengerRegisterForm({
  onSubmit,
  redirect,
}: RegistrationUserFormProps) {
  const handleSubmit = async () => {
    if (onSubmit) {
      await onSubmit();
    }

    router.push(redirect);
  };

  return (
    <>
      <Text>Passenger Register Form</Text>
      <InputButton
        typeButton={'submit'}
        label={'Siguente'}
        onPress={handleSubmit}
      />
    </>
  );
}
