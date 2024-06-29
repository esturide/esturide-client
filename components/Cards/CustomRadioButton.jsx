import {Pressable, StyleSheet, Text, View} from "react-native";
import {useState} from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function CustomRadioButton({data, onSelect}) {
    const [userOption, setUserOption] = useState(null);

    return (
        <View>
            {data.map((item) => {
                return (
                    <Pressable onPress={() => setUserOption(item.cardBank)}>
                        <View style={styles.cardContainer}>
                            <MaterialCommunityIcons name="credit-card-outline" size={20}/>
                            <Text style={styles.cardInfoText}>{item.cardBank}</Text>
                            <Text style={styles.cardInfoText}>{item.cardNumber}</Text>
                            <View style={styles.radio}>
                                {userOption === item.cardBank && (
                                    <View style={styles.selectedRadio}></View>
                                )}
                            </View>
                        </View>
                    </Pressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "#F5F5F5",
        borderRadius: 8,
        marginBottom: 8,
    },
    radio: {
        width: 17.5,
        height: 17.5,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#4B61B9",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20,
    },
    selectedRadio: {
        width: 9,
        height: 9,
        borderRadius: 4.5,
        backgroundColor: "#4B61B9",
        borderWidth: 1,
        borderColor: "#4B61B9",
    },
    cardInfoText: {
        color: "#606060",
        fontSize: 13,
        fontWeight: "400",
    },
});
