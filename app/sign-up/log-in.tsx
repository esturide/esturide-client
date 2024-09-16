import React from "react";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import LayoutRegister from "@/components/layouts/register/LayoutRegister";
import Title from "@/components/layouts/Title";
import LoginForm from "@/components/forms/register/LoginForm";
import Logo from "@/components/resources/Logo";
import HyperLink from "@/components/Buttons/HyperLink";
import AuthUser from "@/components/forms/AuthUser";
import ScrollLayout from "@/components/layouts/ScrollLayout";

export default function () {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleSubmit = () => {
    console.log("Login user");
  };

  const onHyperLinkPressed = async () => {
    console.log("Redirect to User register");
  };

  return (
    <>
      <Logo style={styles.logoContainer} />
      <LayoutRegister>
        <Title style={styles.title}>Iniciar Sesión</Title>
        <LoginForm
          onChangeUsername={setUsername}
          onChangePassword={setPassword}
          onSubmit={handleSubmit}
        />
        <HyperLink
          onClick={onHyperLinkPressed}
          label={"¿No tienes cuenta? Regístrate"}
          href={"/sign-up/register"}
        />
      </LayoutRegister>
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
  registerText: {
    color: "#454545",
    textDecorationLine: "underline",
    fontSize: 13.3,
    fontWeight: "bold",
    marginTop: 24,
  },
  title: {
    fontSize: 43.2,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginTop: 49,
  },
});
