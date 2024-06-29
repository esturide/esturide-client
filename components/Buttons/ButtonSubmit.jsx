import * as React from "react";
import {Text, View} from "react-native";
import styles from "@/styles/InputButtons";

const ButtonSubmit = ({title}) => {
    return (
        <View style={styles.btnSubmit}>
            <Text style={styles.btnSubmitTexto}>{title}</Text>
        </View>
    );
};

export default ButtonSubmit;
