import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { InputButton } from "@/components/Buttons/InputButton";

export default function AuthUser() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuthentication = async () => {
    try {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      if (!hasHardware) {
        Alert.alert("Error", "Tu dispositivo no tiene hardware biométrico");
        return;
      }

      const isEnrolled = await LocalAuthentication.isEnrolledAsync();
      if (!isEnrolled) {
        Alert.alert("Error", "No hay huellas dactilares registradas");
        return;
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Autenticación requerida",
        fallbackLabel: "Usar contraseña",
      });

      console.log(result);

      if (result.success) {
        setAuthenticated(true);
        Alert.alert("Éxito", "Autenticación exitosa");
      } else {
        Alert.alert("Error", "Autenticación fallida");
      }
    } catch (error) {
      Alert.alert("Error", `Ocurrió un error: ${error}`);
    }
  };

  return (
    <View>
      <Text>{authenticated ? "Autenticado" : "No autenticado"}</Text>

      <InputButton
        label={"Autenticar con huella dactilar"}
        typeButton={"submit"}
        onPress={handleAuthentication}
      />
    </View>
  );
}
