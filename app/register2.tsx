import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";
import InputLabel from "@/components/Inputs/InputLabel";
import ButtonSubmit from "@/components/Buttons/ButtonSubmit";
import ProgressBar3 from "@/components/Visuals/ProgressBar3";
import InputPassword from "@/components/Inputs/InputPassword";

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
    <FlexContainer style={styles.backgroundContainer}>
      <BackButton onPress={handleBack} />
      <View style={styles.headerContainer}>
        <Title>Registrar</Title>
        <ProgressBar3 style={styles.progressBar} />
      </View>
      <FlexContainer style={styles.formContainer}>
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
      </FlexContainer>
    </FlexContainer>
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
