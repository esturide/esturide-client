import {StyleSheet, Text, View} from 'react-native';

export default function CardVehicleInfo() {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.modelText}>Modelo</Text>
            <Text style={styles.carInfoText}>Placas | Color</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderColor: "#3E8E7E",
        borderWidth: 1,
        width: 327,
        height: 71,
        borderRadius: 18,
    },
    modelText: {
        fontWeight: "700",
        fontSize: 19,
        marginBottom: 8,
        marginTop: 8,
        marginLeft: 24
    },
    carInfoText: {
        alignSelf: "center",
        fontWeight: "400",
        fontSize: 16
    }
})
