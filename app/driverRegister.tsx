import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";
import InputLabel from "@/components/Inputs/InputLabel";
import ButtonSubmit from "@/components/Buttons/ButtonSubmit";
import ProgressBarContainer from "@/components/Visuals/ProgressBarContainer";
import Title from "@/components/layouts/Title";

const FlexContainer: React.FC<{ children: React.ReactNode; style?: any }> = ({
  children,
  style,
}) => {
  return <View style={[styles.flexContainer, style]}>{children}</View>;
};

const BackButton: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.backButton} onPress={onPress}>
      <Icon name="arrow-back" size={24} color="#fff" />
    </TouchableOpacity>
  );
};

const InputRow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <View style={styles.inputRow}>{children}</View>;
};

export default function DriverRegister() {
  const [brand, setBrand] = React.useState("");
  const [model, setModel] = React.useState("");
  const [year, setYear] = React.useState("");
  const [plates, setPlates] = React.useState("");
  const [color, setColor] = React.useState("");
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleSubmit = () => {
    router.push("/driverRegister2");
  };

  return (
    <View style={styles.backgroundContainer}>
      <BackButton onPress={handleBack} />
      <View style={styles.headerContainer}>
        <Title>Vehículo</Title>
        <ProgressBarContainer type="ProgressBar3" />
      </View>
      <View style={styles.formContainer}>
        <InputLabel
          label="Marca"
          value={brand}
          onChangeText={setBrand}
          style={styles.input}
        />
        <InputLabel
          label="Modelo"
          value={model}
          onChangeText={setModel}
          style={styles.input}
        />
        <InputRow>
          <InputLabel
            label="Año"
            value={year}
            onChangeText={setYear}
            style={styles.halfInput}
          />
          <InputLabel
            label="Placas"
            value={plates}
            onChangeText={setPlates}
            style={styles.halfInput}
          />
        </InputRow>
        <InputLabel
          label="Color"
          value={color}
          onChangeText={setColor}
          style={styles.input}
        />
        <ButtonSubmit title="Siguiente" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: "#0f2422",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 60,
  },
  title: {
    fontSize: 43.2,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  progressBar: {
    width: "70%",
    marginTop: 10,
  },
  formContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: "center",
    marginTop: 20,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  halfInput: {
    width: "48%",
  },
  input: {
    width: "100%",
    marginBottom: 16,
  },
});
