import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";
import ProgressBarContainer from "@/components/Visuals/ProgressBarContainer";
import LayoutRegister from "@/components/layouts/register/LayoutRegister";
import Title from "@/components/layouts/Title";
import AddressRegistrationForm from "@/components/forms/register/AddressRegistrationForm";

import ScrollLayout from "@/components/layouts/ScrollLayout";
import HeaderRegister from "@/components/layouts/register/HeaderRegister";
import { AbsoluteBackButton } from "@/components/Buttons/navigation/AbsoluteBackButton";

export default function () {
  const eventRedirect = async () => {
    console.log("Redirect to Register 3...");
  };

  return (
    <>
      <AbsoluteBackButton />

      <HeaderRegister>
        <Title>Registrar</Title>
        <ProgressBarContainer type={"ProgressBar3"} />
      </HeaderRegister>

      <LayoutRegister>
        <ScrollLayout>
          <AddressRegistrationForm
            redirect={"/sign-up/register3"}
            onSubmit={eventRedirect}
          />
        </ScrollLayout>
      </LayoutRegister>
    </>
  );
}
