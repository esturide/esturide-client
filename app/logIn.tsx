import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import ButtonSubmit from "@/components/Buttons/ButtonSubmit";
import InputLabel from "@/components/Inputs/InputLabel";
import InputPassword from "@/components/Inputs/InputPassword";

export default function LoginPage () {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleSubmit = () => {
    console.log("Button pressed");
  };

  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.logoContainer}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <InputLabel
          label="Usuario"
          value={username}
          onChangeText={setUsername}
          style={styles.userInputMargin}
        />
        <InputPassword
          label="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <ButtonSubmit
          title="Iniciar Sesión"
          onPress={handleSubmit}
          style={styles.loginButton}
        />
        <Pressable onPress={() => router.push("/register")}>
          <Text style={styles.registerText}>¿No tienes cuenta? Regístrate</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f2422",
    padding: 16,
  },
  logoContainer: {
    position: "absolute",
    top: 79,
    alignItems: "center",
  },
  logo: {
    width: 123,
    height: 124,
  },
  container: {
    position: "absolute",
    top: 238,
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
    color: "#000",
    marginTop: 49,
  },
  userInputMargin: {
    marginTop: 46,
    marginBottom: 24,
  },
  loginButton: {
    marginTop: 35,
  },
  registerText: {
    color: "#454545",
    textDecorationLine: "underline",
    fontSize: 13.3,
    fontWeight: "bold",
    marginTop: 24,
  },
});
