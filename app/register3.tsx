import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";
import ButtonSubmit from "@/components/Buttons/ButtonSubmit";
import ProgressBar3 from "@/components/Visuals/ProgressBar3";

export default function Register3() {
  const [isSelected, setSelection] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(null);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleTermsAndConditions = () => {
    router.push("/termsAndConditions");
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
    <View style={styles.backgroundContainer}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Icon name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>Registrar</Text>
      <ProgressBar3 />
      <View style={styles.container}>
        <Text style={styles.subTitle}>Tipo de Cuenta</Text>
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === "Conductor" && styles.driverSelectedOption,
          ]}
          onPress={() => handleOptionSelect("Conductor")}
        >
          <View style={styles.driverContainer}>
            <Icon name="directions-car" size={50} color="#fff" />
          </View>
          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>Conductor</Text>
            <Text>° Solicitar y ofrecer viajes.</Text>
            <Text>° Registrar vehículos.</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === "Pasajero" && styles.passengerSelectedOption,
          ]}
          onPress={() => handleOptionSelect("Pasajero")}
        >
          <View style={styles.passengerContainer}>
            <Icon name="person" size={50} color="#fff" />
          </View>
          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>Pasajero</Text>
            <Text>° Acceder a viajes.</Text>
            <Text>° Registrar vehículos más tarde.</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.switchContainer}>
          <Switch
            value={isSelected}
            onValueChange={setSelection}
            trackColor={{ false: "#767577", true: "#87c9b8" }}
            thumbColor={isSelected ? "#2f7265" : "#f4f3f4"}
            style={styles.switch}
          />
          <Text style={styles.labelContainer}>
            <Text style={styles.label}>He leído y acepto los </Text>
            <TouchableOpacity onPress={handleTermsAndConditions}>
              <Text style={styles.link}>términos y condiciones</Text>
            </TouchableOpacity>.
          </Text>
        </View>
        <ButtonSubmit
          title="Siguiente"
          onPress={handleSubmit}
          style={styles.submitButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: "#0f2422",
    padding: 16,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 43.2,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 12,
    textAlign: "center",
  },
  container: {
    position: "absolute",
    top: 142,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    padding: 20,
    alignItems: "center",
  },
  subTitle: {
    fontSize: 33,
    fontWeight: "bold",
    marginBottom: 50,
    color: "#254a44",
    marginTop: 51,
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
  driverSelectedOption: {
    backgroundColor: "#d8efe8",
  },
  passengerSelectedOption: {
    backgroundColor: "#e3e9f6",
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
  optionText: {
    marginLeft: 10,
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
