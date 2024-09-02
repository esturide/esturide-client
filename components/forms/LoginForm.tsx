import InputLabel from "@/components/Inputs/InputLabel";
import InputPassword from "@/components/Inputs/InputPassword";
import ButtonSubmit from "@/components/Buttons/ButtonSubmit";
import React from "react";
import styles from "@/styles/forms/LoginForm";

type Props = {
  onChangeUsername: React.Dispatch<React.SetStateAction<string>>;
  onChangePassword: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
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
      <ButtonSubmit
        title="Iniciar Sesión"
        onPress={onSubmit}
        style={styles.loginButton}
      />
    </>
  );
}
