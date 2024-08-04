import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";
import InputLabel from "@/components/Inputs/InputLabel";
import ButtonSubmit from "@/components/Buttons/ButtonSubmit";
import ProgressBar3 from "@/components/Visuals/ProgressBar3";
import InputDate from "@/components/Inputs/InputDate";

export default function Register() {
  const [name, setName] = React.useState("");
  const [firstLastName, setFirstLastName] = React.useState("");
  const [secondLastName, setSecondLastName] = React.useState("");
  const [code, setCode] = React.useState("");
  const [birthDate, setBirthDate] = React.useState(null);
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/register2");
  };

  const handleLogInRedirect = () => {
    router.push("/logIn");
  };

  return (
    <View style={styles.backgroundContainer}>
      <Text style={styles.title}>Registrar</Text>
      <ProgressBar3 />
      <View style={styles.container}>
        <InputLabel
          label="Nombre"
          value={name}
          onChangeText={setName}
          style={styles.userInputMargin}
        />
        <InputLabel
          label="Primer Apellido"
          value={firstLastName}
          onChangeText={setFirstLastName}
          style={styles.userInputMargin}
        />
        <InputLabel
          label="Segundo Apellido"
          value={secondLastName}
          onChangeText={setSecondLastName}
          style={styles.userInputMargin}
        />
        <InputLabel
          label="Código"
          value={code}
          onChangeText={setCode}
          style={styles.userInputMargin}
        />
        <InputDate
          label="Fecha de Nacimiento"
          value={birthDate}
          onChange={setBirthDate}
          style={styles.dateInputMargin}
        />
        <ButtonSubmit
          title="Siguiente"
          onPress={handleSubmit}
          style={styles.submitButton}
        />
        <Pressable onPress={handleLogInRedirect}>
          <Text style={styles.logInText}>¿Ya tienes cuenta? Inicia Sesión</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f2422",
    padding: 16,
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
  title: {
    fontSize: 43.2,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 23,
  },
  userFirstInputMargin: {
    marginTop: 1,
  },
  userInputMargin: {
    marginTop: 1,
  },
  submitButton: {
    marginTop: 24,
  },
  dateInputMargin: {},
  logInText: {
    color: "#454545",
    textDecorationLine: "underline",
    fontSize: 13.3,
    fontWeight: "bold",
    marginTop: 24,
  },
});
