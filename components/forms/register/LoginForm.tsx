import InputLabel from "@/components/inputs/InputLabel";
import InputPassword from "@/components/inputs/InputPassword";
import React from "react";
import styles from "@/styles/forms/LoginForm";
import { InputButton } from "@/components/buttons/InputButton";

type Props = {
  onChangeUsername: React.Dispatch<React.SetStateAction<string>>;
  onChangePassword: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => Promise<void>;
};

export default function LoginForm({
  onChangeUsername,
  onChangePassword,
  onSubmit,
}: Props) {
  return (
    <>
      <InputLabel
        label="Usuario"
        onChangeText={onChangeUsername}
        style={styles.userInputMargin}
      />
      <InputPassword label="Contraseña" onChangeText={onChangePassword} />
      <InputButton
        typeButton={"submit"}
        label={"Iniciar Sesion"}
        onPress={onSubmit}
      />
    </>
  );
}
