import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { router, useRouter } from "expo-router";
import ProgressBarContainer from "@/components/Visuals/ProgressBarContainer";
import LayoutRegister from "@/components/layouts/register/LayoutRegister";
import Title from "@/components/layouts/Title";
import HyperLink from "@/components/Buttons/HyperLink";
import UserRegistrationForm from "@/components/forms/UserRegistrationForm";
import HeaderRegister from "@/components/layouts/register/HeaderRegister";
import ScrollLayout from "@/components/layouts/ScrollLayout";

const Register: React.FC = () => {
  const handleSubmit = () => {
    router.push("/register2");
  };

  const handleLogInRedirect = () => {
    router.push("/logIn");
  };

  return (
    <>
      <HeaderRegister>
        <Title>Registrar</Title>
        <ProgressBarContainer type={"ProgressBar2"} />
      </HeaderRegister>

      <LayoutRegister>
        <ScrollLayout>
          <UserRegistrationForm onSubmit={handleSubmit} />
          <HyperLink
            label={"¿Ya tienes cuenta? Inicia Sesión"}
            onPress={handleLogInRedirect}
          />
        </ScrollLayout>
      </LayoutRegister>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 60,
  },
  progressBar: {
    marginTop: 20,
    width: "70%",
  },
});

export default Register;
