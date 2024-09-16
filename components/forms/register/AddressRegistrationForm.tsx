import React, { useState } from "react";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

import InputLabel from "@/components/Inputs/InputLabel";
import InputPassword from "@/components/Inputs/InputPassword";
import ButtonSubmit from "@/components/Buttons/ButtonSubmit";
import { RegistrationFormProps } from "@/components/forms/register/RegisterForm";

export default function AddressRegistrationForm({
  onSubmit,
  redirect,
}: RegistrationFormProps) {
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onPressButton = async () => {
    if (onSubmit) {
      await onSubmit();
    }

    router.push(redirect);
  };

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
      <InputPassword label="Contraseña" onChangeText={setPassword} />
      <InputPassword
        label="Confirmar Contraseña"
        onChangeText={setConfirmPassword}
      />
      <ButtonSubmit
        title="Siguiente"
        onPress={onPressButton}
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
