import {
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { InputButton } from '@/components/buttons/InputButton';

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
  const [isSelected, setSelection] = useState(false);
  const [selectedOption, setSelectedOption] = useState<TypeAccount>('unknown');

  const onSubmit = async () => {
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
            <Icon name={selectIcon} size={50} color="#fff" />
          </View>
          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>{title}</Text>
            {description.map((line, index) => (
              <Text key={index}>{line}</Text>
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
          <TouchableOpacity style={styles.linkTouchable} onPress={onLinkPress}>
            <Text style={styles.link}>términos y condiciones</Text>
          </TouchableOpacity>
        </Text>
      </View>
    );
  };

  return (
    <>
      <Text style={styles.subTitle}>Tipo de Cuenta</Text>

      <AccountOption
        icon="driver"
        title="Conductor"
        description={[
          '° Solicitar y ofrecer viajes.',
          '° Registrar vehículos.',
        ]}
        selected={selectedOption === 'driver'}
        onPress={() => setSelectedOption('driver')}
        containerStyle={styles.driverSelectedOption}
        iconStyle={styles.driverContainer}
      />

      <AccountOption
        icon="passenger"
        title="Pasajero"
        description={[
          '° Acceder a viajes.',
          '° Registrar vehículos más tarde.',
        ]}
        selected={selectedOption === 'passenger'}
        onPress={() => setSelectedOption('passenger')}
        containerStyle={styles.passengerSelectedOption}
        iconStyle={styles.passengerContainer}
      />

      <TermsSwitch />

      <InputButton
        label={'Siguente'}
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
  switchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  switch: {
    alignSelf: 'center',
  },
  link: {
    color: '#2f7265',
    textDecorationLine: 'underline',
    bottom: 0,
  },
  linkTouchable: {},
  label: {},
  labelContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButton: {
    color: '#454545',
    fontSize: 13.3,
    fontWeight: 'bold',
    marginTop: 34,
  },
});
