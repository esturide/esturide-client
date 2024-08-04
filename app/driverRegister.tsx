import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";
import InputLabel from "@/components/Inputs/InputLabel";
import ButtonSubmit from "@/components/Buttons/ButtonSubmit";
import ProgressBar2 from "@/components/Visuals/ProgressBar2";

export default function driverRegister() {
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
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Icon name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>Vehículo</Text>
      <ProgressBar2 />
      <View style={styles.container}>
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
        <View style={styles.row}>
          <InputLabel
            label="Año"
            value={year}
            onChangeText={setYear}
            style={[styles.input, styles.halfInput]}
          />
          <InputLabel
            label="Placas"
            value={plates}
            onChangeText={setPlates}
            style={[styles.input, styles.halfInput]}
          />
        </View>
        <InputLabel
          label="Color"
          value={color}
          onChangeText={setColor}
          style={styles.input}
        />
        <ButtonSubmit
          title="Siguiente"
          onPress={handleSubmit}
          style={styles.submitButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f2422",
    padding: 16,
  },
  backButton: {
    position: "absolute",
    top: 43,
    left: 20,
  },
  container: {
    position: "absolute",
    top: 142,
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
    color: "#fff",
    marginTop: 23,
  },
  input: {},
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  halfInput: {
    width: "48%",
  },
  submitButton: {
    marginTop: 24,
  },
});
