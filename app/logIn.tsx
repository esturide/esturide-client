import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import ButtonSubmit from "@/components/Buttons/ButtonSubmit";
import InputLabel from "@/components/Inputs/InputLabel";
import InputPassword from "@/components/Inputs/InputPassword";
import BackgroundContainer from "@/components/container/Background";

const Logo = ({ style }) => {
  return (
    <Image source={require("@/assets/logo.png")} style={[styles.logo, style]} />
  );
};

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const LoginForm = ({
  username,
  setUsername,
  password,
  setPassword,
  onSubmit,
}) => {
  return (
    <>
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
        onPress={onSubmit}
        style={styles.loginButton}
      />
    </>
  );
};

export default function LoginPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleSubmit = () => {
    console.log("Button pressed");
  };

  return (
    <>
      <Logo style={styles.logoContainer} />
      <BackgroundContainer>
        <Title>Iniciar Sesión</Title>
        <LoginForm
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          onSubmit={handleSubmit}
        />
        <Pressable onPress={() => router.push("/register")}>
          <Text style={styles.registerText}>¿No tienes cuenta? Regístrate</Text>
        </Pressable>
      </BackgroundContainer>
    </>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    position: "absolute",
    top: 79,
    alignItems: "center",
    width: 123,
    height: 124,
  },
  logo: {
    width: "100%",
    height: "100%",
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
