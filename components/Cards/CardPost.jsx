import {Image, StyleSheet, Text, View} from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

export default function CardPost() {
    return (
        <View style={styles.cardContainer}>
            <Image style={styles.userImage} source={require("../../assets/imagen-post.jpg")}/>
            <View>
                <View>
                    <Text style={styles.userName}>Pedro Ramirez</Text>
                    <Text style={styles.postDate}>18 de marzo a las 12:00AM</Text>
                </View>
                <View>
                    <Text style={styles.postBody}>Hola comunidad, empezaron las competencias de robótica en las
                        explanadas de aulas amplias.</Text>
                </View>
                <View style={styles.postInfo}>
                    <Text style={styles.postInfoText}><MaterialCommunityIcons name="cards-heart-outline" size={12}
                                                                              color="#484C52"/> 54 Likes</Text>
                    <Text style={styles.postInfoText}><MaterialCommunityIcons name="message-reply-outline" size={10}
                                                                              color="#484C52"/> 17 Comments</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    userImage: {
        width: 38,
        height: 38,
        borderRadius: 19,
    },
    cardContainer: {
        width: 335,
        height: 135,
        paddingTop: 10,
        paddingLeft: 10,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#295C53",
        flexDirection: "row",
        gap: 12
    },
    postInfo: {
        flexDirection: "row",
        gap: 25
    },
    userName: {
        fontSize: 16,
        fontWeight: "700",
        color: "#223F3A"
    },
    postDate: {
        fontSize: 12,
        fontWeight: "300",
        color: "#6D6D6D"
    },
    postBody: {
        fontSize: 14,
        fontWeight: "400",
        maxWidth: 250
    },
    postInfoText: {
        fontSize: 10,
        marginTop: 10
    },
});
