import { useState } from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { router } from 'expo-router';
import { InputButton } from '@components/buttons/InputButton';
import { VisualIcon } from '@components/visuals/VisualIcon';

export type TypeAccount = 'driver' | 'passenger' | 'unknown';

type TypeAccountProps = {
  handleSubmit: (acceptTerms: boolean, account: TypeAccount) => Promise<void>;
  terms: string;
};

type AccountOptionProps = {
  icon: TypeAccount;
  title: string;
  description: string[];
  selected: boolean;
  onPress: () => void;
  containerStyle: ViewStyle;
  iconStyle: ViewStyle;
};

export default function TypeAccountForm({
  handleSubmit,
  terms,
}: TypeAccountProps) {
  const [isSelected, setSelection] = useState(false); // Términos y condiciones
  const [selectedOption, setSelectedOption] = useState<TypeAccount>('unknown'); // Opción de cuenta
  const [errors, setErrors] = useState({ terms: false, account: false }); // Manejo de errores

  const onSubmit = async () => {
    // Validamos si aceptaron los términos y seleccionaron una cuenta
    if (selectedOption === 'unknown' || !isSelected) {
      setErrors({
        terms: !isSelected,
        account: selectedOption === 'unknown',
      });
      return;
    }

    // Si está todo bien, llamamos a handleSubmit
    await handleSubmit(isSelected, selectedOption);
  };

  const AccountOption = ({
    icon,
    title,
    description,
    selected,
    onPress,
    containerStyle,
    iconStyle,
  }: AccountOptionProps) => {
    let selectIcon = 'unknown';

    if (icon == 'driver') {
      selectIcon = 'directions-car';
    } else if (icon == 'passenger') {
      selectIcon = 'person';
    }

    return (
      <>
        <TouchableOpacity
          style={[styles.option, selected && containerStyle]}
          onPress={onPress}
        >
          <View style={[styles.iconContainer, iconStyle]}>
            <VisualIcon type={selectIcon} size={50} color="#fff" />
          </View>
          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>{title}</Text>
            {description.map((line, index) => (
              <Text key={index} style={styles.optionDescription}>
                {line}
              </Text>
            ))}
          </View>
        </TouchableOpacity>
      </>
    );
  };

  const TermsSwitch = () => {
    const onLinkPress = async () => {
      router.push(terms);
    };

    return (
      <View style={styles.termsContainer}>
        <View style={styles.switchContainer}>
          <Switch
            value={isSelected}
            onValueChange={setSelection}
            trackColor={{ false: '#767577', true: '#87c9b8' }}
            thumbColor={isSelected ? '#2f7265' : '#f4f3f4'}
            style={styles.switch}
          />
          <Text style={styles.labelContainer}>
            <Text style={styles.label}>He leído y acepto los </Text>
            <TouchableOpacity
              style={styles.linkTouchable}
              onPress={onLinkPress}
            >
            <Text style={styles.link}>términos y condiciones</Text>
            </TouchableOpacity>
          </Text>
        </View>
        {errors.terms && (
          <Text style={styles.errorText}>Debes aceptar los términos.</Text>
        )}
      </View>
    );
  };

  return (
    <>
      <Text style={styles.subTitle}>Tipo de Cuenta</Text>

      <AccountOption
        icon="driver"
        title="Conductor"
        description={['° Solicita y ofrece viajes', '° Registra tu vehículo']}
        selected={selectedOption === 'driver'}
        onPress={() => setSelectedOption('driver')}
        containerStyle={styles.driverSelectedOption}
        iconStyle={styles.driverContainer}
      />

      <AccountOption
        icon="passenger"
        title="Pasajero"
        description={[
          '° Accede a viajes',
          '° Podrás registrar vehículos más adelante',
        ]}
        selected={selectedOption === 'passenger'}
        onPress={() => setSelectedOption('passenger')}
        containerStyle={styles.passengerSelectedOption}
        iconStyle={styles.passengerContainer}
      />

      {errors.account && (
        <Text style={[styles.errorText, styles.accountErrorText]}>
          Debes seleccionar un tipo de cuenta.
        </Text>
      )}

      <TermsSwitch />

      <InputButton
        label={'Siguiente'}
        typeButton={'submit'}
        onPress={onSubmit}
      />
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 20,
    width: '100%',
  },
  title: {
    fontSize: 43.2,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  progressBar: {
    marginTop: 10,
    width: '70%',
    alignSelf: 'center',
  },
  formContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 33,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#254a44',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 29,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 32,
    width: '100%',
    height: 107,
    borderColor: '#cfcfcf',
    borderWidth: 1,
  },
  driverContainer: {
    width: 78,
    height: 78,
    borderRadius: 32,
    backgroundColor: '#87c9b8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  passengerContainer: {
    width: 78,
    height: 78,
    borderRadius: 32,
    backgroundColor: '#84a0d6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  driverSelectedOption: {
    backgroundColor: '#d8efe8',
  },
  passengerSelectedOption: {
    backgroundColor: '#e3e9f6',
  },
  iconContainer: {
    width: 78,
    height: 78,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    marginLeft: 10,
    flex: 1,
  },
  optionTitle: {
    fontSize: 19.2,
    fontWeight: 'bold',
  },
  optionDescription: {
    fontSize: 16, // Ajustamos para que las descripciones se alineen
  },
  switchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center', // Alineamos el switch y el texto en el centro
  },
  termsContainer: {
    flexDirection: 'column', // Cambiamos esto para que el error esté debajo de los términos
    //marginTop: 10, // Añadimos un pequeño margen superior
    marginBottom: 20,
    alignItems: 'center', // Centramos todo lo que está dentro del contenedor
  },
  switch: {
    alignSelf: 'center',
    marginRight: 10, // Añadimos margen derecho al switch
  },
  termsTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  link: {
    color: '#2f7265',
    textDecorationLine: 'underline',
    bottom: 0,
    marginLeft: 2, // Agregamos un pequeño margen para separar el texto del link
    // textAlignVertical: 'center', // Aseguramos que el texto del link esté alineado verticalmente
    fontSize: 14, // Asegúrate de que el tamaño de la fuente sea el mismo que el del texto
    lineHeight: 18, // Igualamos la altura de línea al texto "He leído y acepto los"
  },
  linkTouchable: {},
  label: {
    fontSize: 14, // Ajusta según el tamaño que prefieras
    lineHeight: 18, // Esto asegura que el texto esté alineado verticalmente con el switch y el link
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  submitButton: {
    color: '#454545',
    fontSize: 13.3,
    fontWeight: 'bold',
    marginTop: 34,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },

  accountErrorText: {
    marginTop: -15, // Reducimos el margen superior para acercar al cuadro de opciones
    marginBottom: 10,
  },
});
