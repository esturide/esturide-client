import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import ButtonSubmit from "@/components/Buttons/ButtonSubmit";
import InputLabel from "@/components/Inputs/InputLabel";
import InputPassword from "@/components/Inputs/InputPassword";

const FlexContainer = ({ children, style }) => {
  return <View style={[styles.flexContainer, style]}>{children}</View>;
};

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
    <FlexContainer style={styles.backgroundContainer}>
      <Logo style={styles.logoContainer} />
      <View style={styles.container}>
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
      </View>
    </FlexContainer>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  backgroundContainer: {
    backgroundColor: "#0f2422",
  },
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
