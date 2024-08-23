import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";
import ButtonSubmit from "@/components/Buttons/ButtonSubmit";
import ProgressBar3 from "@/components/Visuals/ProgressBar3";

const FlexContainer: React.FC<{ style?: object }> = ({ children, style }) => {
  return <View style={[styles.flexContainer, style]}>{children}</View>;
};

const BackButton: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.backButton} onPress={onPress}>
      <Icon name="arrow-back" size={24} color="#fff" />
    </TouchableOpacity>
  );
};

const Title: React.FC = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const AccountOption = ({ icon, title, description, selected, onPress, containerStyle, iconStyle }) => (
  <TouchableOpacity style={[styles.option, selected && containerStyle]} onPress={onPress}>
    <View style={[styles.iconContainer, iconStyle]}>
      <Icon name={icon} size={50} color="#fff" />
    </View>
    <View style={styles.optionText}>
      <Text style={styles.optionTitle}>{title}</Text>
      {description.map((line, index) => (
        <Text key={index}>{line}</Text>
      ))}
    </View>
  </TouchableOpacity>
);

const TermsSwitch = ({ isSelected, onValueChange, onLinkPress }) => (
  <View style={styles.switchContainer}>
    <Switch
      value={isSelected}
      onValueChange={onValueChange}
      trackColor={{ false: "#767577", true: "#87c9b8" }}
      thumbColor={isSelected ? "#2f7265" : "#f4f3f4"}
      style={styles.switch}
    />
    <Text style={styles.labelContainer}>
      <Text style={styles.label}>He leído y acepto los </Text>
      <TouchableOpacity onPress={onLinkPress}>
        <Text style={styles.link}>términos y condiciones</Text>
      </TouchableOpacity>.
    </Text>
  </View>
);

export default function Register3() {
  const [isSelected, setSelection] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(null);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleSubmit = () => {
    if (!isSelected) {
      console.log("Debe aceptar los términos y condiciones");
      return;
    }

    if (selectedOption === "Conductor") {
      router.push("/driverRegister");
    } else if (selectedOption === "Pasajero") {
      router.push("/passengerUser");
    } else {
      console.log("Debe seleccionar una opción");
    }
  };

  return (
    <FlexContainer style={styles.backgroundContainer}>
      <BackButton onPress={handleBack} />
      <View style={styles.headerContainer}>
        <Title>Registrar</Title>
        <ProgressBar3 style={styles.progressBar} />
      </View>
      <FlexContainer style={styles.formContainer}>
        <Text style={styles.subTitle}>Tipo de Cuenta</Text>
        <AccountOption
          icon="directions-car"
          title="Conductor"
          description={["° Solicitar y ofrecer viajes.", "° Registrar vehículos."]}
          selected={selectedOption === "Conductor"}
          onPress={() => setSelectedOption("Conductor")}
          containerStyle={styles.driverSelectedOption}
          iconStyle={styles.driverContainer}
        />
        <AccountOption
          icon="person"
          title="Pasajero"
          description={["° Acceder a viajes.", "° Registrar vehículos más tarde."]}
          selected={selectedOption === "Pasajero"}
          onPress={() => setSelectedOption("Pasajero")}
          containerStyle={styles.passengerSelectedOption}
          iconStyle={styles.passengerContainer}
        />
        <TermsSwitch
          isSelected={isSelected}
          onValueChange={setSelection}
          onLinkPress={() => router.push("/termsAndConditions")}
        />
        <ButtonSubmit
          title="Siguiente"
          onPress={handleSubmit}
          style={styles.submitButton}
        />
      </FlexContainer>
    </FlexContainer>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: "#0f2422",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 20,
    width: "100%",
  },
  title: {
    fontSize: 43.2,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  progressBar: {
    marginTop: 10,
    width: "70%",
    alignSelf: "center",
  },
  formContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  subTitle: {
    fontSize: 33,
    fontWeight: "bold",
    marginBottom: 50,
    color: "#254a44",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 29,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 32,
    width: "100%",
    height: 107,
    borderColor: "#cfcfcf",
    borderWidth: 1,
  },
  driverContainer: {
    width: 78,
    height: 78,
    borderRadius: 32,
    backgroundColor: "#87c9b8",
    justifyContent: "center",
    alignItems: "center",
  },
  passengerContainer: {
    width: 78,
    height: 78,
    borderRadius: 32,
    backgroundColor: "#84a0d6",
    justifyContent: "center",
    alignItems: "center",
  },
  driverSelectedOption: {
    backgroundColor: "#d8efe8",
  },
  passengerSelectedOption: {
    backgroundColor: "#e3e9f6",
  },
  iconContainer: {
    width: 78,
    height: 78,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  optionText: {
    marginLeft: 10,
    flex: 1,
  },
  optionTitle: {
    fontSize: 19.2,
    fontWeight: "bold",
  },
  switchContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  switch: {
    alignSelf: "center",
  },
  label: {
    margin: 3,
  },
  labelContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  link: {
    color: "#2f7265",
    textDecorationLine: "underline",
  },
  submitButton: {
    color: "#454545",
    fontSize: 13.3,
    fontWeight: "bold",
    marginTop: 34,
  },
});
