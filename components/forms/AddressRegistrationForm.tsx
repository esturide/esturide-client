import InputLabel from "@/components/Inputs/InputLabel";
import InputPassword from "@/components/Inputs/InputPassword";
import ButtonSubmit from "@/components/Buttons/ButtonSubmit";
import React from "react";
import { StyleSheet } from "react-native";

export default function AddressRegistrationForm() {
  const [address, setAddress] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  return (
    <>
      <InputLabel
        label="Dirección"
        onChangeText={setAddress}
        style={styles.userInputMargin}
      />
      <InputLabel
        label="Número de Teléfono"
        onChangeText={setPhoneNumber}
        style={styles.userInputMargin}
      />
      <InputLabel
        label="Correo Electrónico"
        onChangeText={setEmail}
        style={styles.userInputMargin}
      />
      <InputPassword
        label="Contraseña"
        onChangeText={setPassword}
        style={styles.userInputMargin}
        secureTextEntry
      />
      <InputPassword
        label="Confirmar Contraseña"
        onChangeText={setConfirmPassword}
        style={styles.userInputMargin}
        secureTextEntry
      />
      <ButtonSubmit
        title="Siguiente"
        onPress={handleSubmit}
        style={styles.submitButton}
      />
    </>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 0,
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: "#0f2422",
  },
  headerContainer: {
    width: "100%",
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 20,
  },
  progressBar: {
    marginTop: 15,
    width: "60%",
  },
  backButton: {
    position: "absolute",
    top: 43,
    left: 20,
  },
  formContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 43.2,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  userInputMargin: {
    marginTop: 10,
  },
  submitButton: {
    marginTop: 24,
  },
});
