import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import CustomRadioButton from "./CustomRadioButton";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const data = [
    {
        cardLogo: "MasterCard",
        cardBank: "Banco NU",
        cardNumber: "**** **** **** 8395",
    },
    {
        cardLogo: "VISA",
        cardBank: "RappiCard",
        cardNumber: "**** **** **** 6246",
    },
];

export default function CreditCardList() {
    return (
        <View>
            <Text style={styles.textHeader}>Tarjetas</Text>
            <View style={styles.cardsContainer}>
                <View>
                    <CustomRadioButton data={data}/>
                </View>

                <TouchableOpacity>
                    <View style={styles.addCardContainer}>
                        <View style={styles.addCardButton}>
                            <MaterialCommunityIcons
                                name="plus"
                                size={18.38}
                                color="#4B61B9"
                            />
                        </View>
                        <Text>Agregar Tarjeta</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textHeader: {
        color: "#373F71",
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 20,
    },
    cardsContainer: {
        width: 327,
        height: 148,
        backgroundColor: "#FFFFFF",
        borderRadius: 18,
        padding: 16,
        borderWidth: 1,
        borderColor: "#F5F5F5",
        elevation: 5,
        shadowOffset: {
            height: 5,
            width: 5,
        },
    },
    addCardButton: {
        width: 24,
        height: 24,
        backgroundColor: "#ACC0E4",
        borderRadius: 6.13,
        justifyContent: "center",
        alignItems: "center",
    },
    addCardContainer: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        marginTop: 6,
    },
});
