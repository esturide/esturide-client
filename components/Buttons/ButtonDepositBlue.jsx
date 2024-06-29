import * as React from "react";
import {Text, View} from "react-native";
import styles from "@/styles/InputButtons";

const ButtonDepositBlue = () => {
    return (
        <View style={styles.btnDepositarAzul}>
            <Text style={styles.btnDepositarAzulTexto}>Depositar</Text>
        </View>
    );
};

export default ButtonDepositBlue;
