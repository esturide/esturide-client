import { Text } from 'react-native';
import { router } from 'expo-router';
import { RegistrationFormProps } from '@components/forms/register/RegisterFormProps';
import { InputButton } from '@components/buttons/InputButton';

export default function PassengerRegisterForm({
  onSubmit,
  redirect,
}: RegistrationFormProps) {
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
