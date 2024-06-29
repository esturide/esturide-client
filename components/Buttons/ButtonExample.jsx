import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from "@/styles/InputButtons";

const Button = ({title, onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);

export default Button;
