import { useAtom } from 'jotai';
import {
  nameAtom,
  firstLastNameAtom,
  secondLastNameAtom,
  codeAtom,
  birthDateAtom,
} from '../../state/registrationAtoms';
import { router } from 'expo-router';

import InputLabel from '@components/inputs/InputLabel';
import InputDate from '@components/inputs/InputDate';
import styles from '@styles/forms/RegistrationFormStyle';
import { InputButton } from '@components/buttons/InputButton';
import { RegistrationFormProps } from '@components/forms/register/RegisterFormProps';

export default function UserRegistrationForm({
  onSubmit,
  redirect,
}: RegistrationFormProps) {
  const [name, setName] = useAtom(nameAtom); 
  const [firstLastName, setFirstLastName] = useAtom(firstLastNameAtom); 
  const [secondLastName, setSecondLastName] = useAtom(secondLastNameAtom); 
  const [code, setCode] = useAtom(codeAtom); 
  const [birthDate, setBirthDate] = useAtom(birthDateAtom);
  const onPressButton = async () => {
    if (onSubmit) {
      await onSubmit();
    }
    router.push(redirect);
  };

  return (
    <>
      <InputLabel
        label="Nombre"
        onChangeText={setName}
        style={styles.userInputMargin}
      />
      <InputLabel
        label="Primer Apellido"
        onChangeText={setFirstLastName}
        style={styles.userInputMargin}
      />
      <InputLabel
        label="Segundo Apellido"
        onChangeText={setSecondLastName}
        style={styles.userInputMargin}
      />
      <InputLabel
        label="Código"
        onChangeText={setCode}
        style={styles.userInputMargin}
      />
      <InputDate
        label="Fecha de Nacimiento"
        onChange={setBirthDate}
        value={birthDate}
        style={[styles.userInputMargin, styles.dateInputMargin]}
      />
      <InputButton
        label={'Siguiente'}
        typeButton={'submit'}
        onPress={onPressButton}
      />
    </>
  );
}
