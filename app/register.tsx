import React from "react";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import InputLabel from "@/components/Inputs/InputLabel";
import ButtonSubmit from "@/components/Buttons/ButtonSubmit";
import ProgressBarContainer from "@/components/Visuals/ProgressBarContainer";
import InputDate from "@/components/Inputs/InputDate";

type RegistrationFormProps = {
  name: string;
  setName: (name: string) => void;
  firstLastName: string;
  setFirstLastName: (firstLastName: string) => void;
  secondLastName: string;
  setSecondLastName: (secondLastName: string) => void;
  code: string;
  setCode: (code: string) => void;
  birthDate: Date | null;
  setBirthDate: (date: Date | null) => void;
  onSubmit: () => void;
};

const FlexContainer: React.FC<{ style?: object }> = ({ children, style }) => {
  return <View style={[styles.flexContainer, style]}>{children}</View>;
};

const Title: React.FC = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  name,
  setName,
  firstLastName,
  setFirstLastName,
  secondLastName,
  setSecondLastName,
  code,
  setCode,
  birthDate,
  setBirthDate,
  onSubmit,
}) => {
  return (
    <>
      <InputLabel
        label="Nombre"
        value={name}
        onChangeText={setName}
        style={styles.userInputMargin}
      />
      <InputLabel
        label="Primer Apellido"
        value={firstLastName}
        onChangeText={setFirstLastName}
        style={styles.userInputMargin}
      />
      <InputLabel
        label="Segundo Apellido"
        value={secondLastName}
        onChangeText={setSecondLastName}
        style={styles.userInputMargin}
      />
      <InputLabel
        label="Código"
        value={code}
        onChangeText={setCode}
        style={styles.userInputMargin}
      />
      <InputDate
        label="Fecha de Nacimiento"
        value={birthDate}
        onChange={setBirthDate}
        style={[styles.userInputMargin, styles.dateInputMargin]} // Ajuste del margen
      />
      <ButtonSubmit
        title="Siguiente"
        onPress={onSubmit}
        style={styles.submitButton}
      />
    </>
  );
};

const Register: React.FC = () => {
  const [name, setName] = React.useState<string>("");
  const [firstLastName, setFirstLastName] = React.useState<string>("");
  const [secondLastName, setSecondLastName] = React.useState<string>("");
  const [code, setCode] = React.useState<string>("");
  const [birthDate, setBirthDate] = React.useState<Date | null>(null);
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/register2");
  };

  const handleLogInRedirect = () => {
    router.push("/logIn");
  };

  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.headerContainer}>
        <Title>Registrar</Title>
        <ProgressBarContainer type={"ProgressBar2"} style={styles.progressBar} />
      </View>
      <View style={styles.formContainerWrapper}>
        <ScrollView contentContainerStyle={styles.container}>
          <RegistrationForm
            name={name}
            setName={setName}
            firstLastName={setFirstLastName}
            secondLastName={setSecondLastName}
            setSecondLastName={setSecondLastName}
            code={code}
            setCode={setCode}
            birthDate={birthDate}
            setBirthDate={setBirthDate}
            onSubmit={handleSubmit}
          />
          <Pressable onPress={handleLogInRedirect}>
            <Text style={styles.logInText}>
              ¿Ya tienes cuenta? Inicia Sesión
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: "#0f2422",
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 60,
  },
  progressBar: {
    marginTop: 20,
    width: "70%",
  },
  formContainerWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
    width: "100%",
  },
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 43.2,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  userInputMargin: {
    marginTop: 10,
    width: "100%",
  },
  dateInputMargin: {
    marginTop: 10,
  },
  submitButton: {
    marginTop: 24,
  },
  logInText: {
    color: "#454545",
    textDecorationLine: "underline",
    fontSize: 13.3,
    fontWeight: "bold",
    marginTop: 24,
  },
});

export default Register;
