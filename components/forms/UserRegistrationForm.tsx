import React from "react";
import InputLabel from "@/components/Inputs/InputLabel";
import InputDate from "@/components/Inputs/InputDate";
import ButtonSubmit from "@/components/Buttons/ButtonSubmit";

import styles from "@/styles/forms/RegistrationFormStyle";

type RegistrationFormProps = {
  onSubmit: () => void;
};

export default function UserRegistrationForm({
  onSubmit,
}: RegistrationFormProps) {
  const [name, setName] = React.useState<string>("");
  const [firstLastName, setFirstLastName] = React.useState<string>("");
  const [secondLastName, setSecondLastName] = React.useState<string>("");
  const [code, setCode] = React.useState<string>("");
  const [birthDate, setBirthDate] = React.useState<Date | null>(null);

  return (
    <>
      <InputLabel
        label="Nombre"
        onChangeText={setName}
        style={styles.userInputMargin}
      />
      <InputLabel
        label="Primer Apellido"
        onChangeText={setFirstLastName}
        style={styles.userInputMargin}
      />
      <InputLabel
        label="Segundo Apellido"
        onChangeText={setSecondLastName}
        style={styles.userInputMargin}
      />
      <InputLabel
        label="Código"
        onChangeText={setCode}
        style={styles.userInputMargin}
      />
      <InputDate
        label="Fecha de Nacimiento"
        onChange={setBirthDate}
        value={birthDate}
        style={[styles.userInputMargin, styles.dateInputMargin]}
      />
      <ButtonSubmit
        title="Siguiente"
        onPress={onSubmit}
        style={styles.submitButton}
      />
    </>
  );
}
