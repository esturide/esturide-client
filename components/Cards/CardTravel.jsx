import {StyleSheet, Text, View} from 'react-native';

export default function CardTravel() {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.rowContainer}>
                <View>
                    <Text style={styles.infoLabel}>Salida:</Text>
                    <Text style={styles.infoText}>7:20 am</Text>
                </View>

                <View>
                    <Text style={styles.infoLabel}>Llegada:</Text>
                    <Text style={styles.infoText}>8:06 am</Text>
                </View>
            </View>


            <View style={styles.rowContainer}>
                <View>
                    <Text style={styles.infoLabel}>Precio:</Text>
                    <Text style={styles.infoText}>$10.00</Text>
                </View>

                <View>
                    <Text style={styles.infoLabel}>Asientos:</Text>
                    <View style={styles.seatsContainer}>
                        <View style={styles.seatView}>
                            <Text style={styles.seatText}>A</Text>
                        </View>
                        <View style={styles.seatView}>
                            <Text style={styles.seatText}>B</Text>
                        </View>
                        <View style={styles.seatView}>
                            <Text style={styles.seatText}>C</Text>
                        </View>
                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: 335,
        height: 153,
        borderWidth: 2,
        borderColor: "#40498D",
        borderRadius: 20,
        paddingHorizontal: 25,
    },
    infoLabel: {
        fontSize: 19,
        fontWeight: "700",
        color: "#40498D"
    },
    infoText: {
        fontSize: 16,
        fontWeight: "700",
    },
    rowContainer: {
        flexDirection: "row",
        gap: 100,
        marginTop: 18
    },
    seatsContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    seatView: {
        width: 20,
        height: 20,
        backgroundColor: "#40498D",
        alignItems: "center",
        borderRadius: 6,
    },
    seatText: {
        color: "white",
        fontWeight: "700"
    }
});
