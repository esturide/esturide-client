import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { router } from 'expo-router';

import InputLabel from '@components/inputs/InputLabel';
import { InputRow } from '@components/layouts/RowLayout';
import { InputButton } from '@components/buttons/InputButton';
import { RegistrationFormProps } from '@components/forms/register/RegisterFormProps';

export default function DriverRegisterForm({
  onSubmit,
  redirect,
}: RegistrationFormProps) {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [plates, setPlates] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = async () => {
    if (onSubmit) {
      await onSubmit();
    }

    router.push(redirect);
  };

  return (
    <>
      <InputLabel label="Marca" onChangeText={setBrand} style={styles.input} />
      <InputLabel label="Modelo" onChangeText={setModel} style={styles.input} />
      <InputRow>
        <InputLabel
          label="Año"
          onChangeText={setYear}
          style={styles.halfInput}
        />
        <InputLabel
          label="Placas"
          onChangeText={setPlates}
          style={styles.halfInput}
        />
      </InputRow>
      <InputLabel label="Color" onChangeText={setColor} style={styles.input} />

      <InputButton
        typeButton={'submit'}
        label={'Siguente'}
        onPress={handleSubmit}
      />
    </>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#0f2422',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 60,
  },
  title: {
    fontSize: 43.2,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  progressBar: {
    width: '70%',
    marginTop: 10,
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  halfInput: {
    width: '48%',
  },
  input: {
    width: '100%',
    marginBottom: 16,
  },
});
