import React from "react";
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialIcons';
import InputLabel from "@/components/Inputs/InputLabel";
import ButtonSubmit from "@/components/Buttons/ButtonSubmit";
import ProgressBar3 from "@/components/Visuals/ProgressBar3";
import InputPassword from "@/components/Inputs/InputPassword";


export default function Register2() {
  const [address, setAddress] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleSubmit = () => {
    router.push("/register3");
  };

  return (
    <View style={styles.backgroundContainer}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Icon name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>Registrar</Text>
      <ProgressBar3 />
      <View style={styles.container}>
        <InputLabel
          label="Dirección"
          value={address}
          onChangeText={setAddress}
          style={styles.userInputMargin}
        />
        <InputLabel
          label="Número de Teléfono"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          style={styles.userInputMargin}
        />
        <InputLabel
          label="Correo Electrónico"
          value={email}
          onChangeText={setEmail}
          style={styles.userInputMargin}
        />
        <InputPassword
          label="Contraseña"
          value={password}
          onChangeText={setPassword}
          style={styles.userInputMargin}
          secureTextEntry
        />
        <InputPassword
          label="Confirmar Contraseña"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.userInputMargin}
          secureTextEntry
        />
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f2422",
    padding: 16,
  },
  backButton: {
    position: "absolute",
    top: 43,
    left: 20,
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
  userFirstInputMargin: {},
  userInputMargin: {},
  submitButton: {
    marginTop: 24,
  },
  dateInputMargin: {},
});
