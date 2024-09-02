import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";
import ProgressBarContainer from "@/components/Visuals/ProgressBarContainer";
import LayoutRegister from "@/components/layouts/register/LayoutRegister";
import Title from "@/components/layouts/Title";
import AddressRegistrationForm from "@/components/forms/AddressRegistrationForm";

import ScrollLayout from "@/components/layouts/ScrollLayout";

const BackButton: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.backButton} onPress={onPress}>
      <Icon name="arrow-back" size={24} color="#fff" />
    </TouchableOpacity>
  );
};

export default function Register2() {
  const [address, setAddress] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const router = useRouter();

  const handleBack = () => {
    console.log("Back!");
    router.back();
  };

  const handleSubmit = () => {
    router.push("/register3");
  };

  return (
    <>
      <BackButton onPress={handleBack} />
      <View style={styles.headerContainer}>
        <Title>Registrar</Title>
        <ProgressBarContainer type={"ProgressBar2"} />
      </View>
      <LayoutRegister>
        <ScrollLayout>
          <AddressRegistrationForm />
        </ScrollLayout>
      </LayoutRegister>
    </>
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
