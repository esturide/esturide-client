import {StyleSheet, Text, View} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function CommunityPostItem({readStatus, communityName, postTime, postBody}) {
    const readStatusColor = readStatus ? "#007AFF" : "#ffffff";

    return (
        <View style={styles.itemContainer}>
            <View
                style={[
                    styles.readStateIndicator,
                    {backgroundColor: readStatusColor},
                ]}
            />

            <View>
                <View style={styles.itemHeader}>
                    <Text style={styles.communityName}>{communityName}</Text>
                    <View style={styles.headerRightContainer}>
                        <Text style={styles.postTime}>{postTime}</Text>
                        <MaterialCommunityIcons
                            name="chevron-right"
                            size={20}
                            color="#3C3C434D"
                        />
                    </View>
                </View>

                <View style={styles.postBodyContainer}>
                    <Text style={styles.postBody}>{postBody}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        maxWidth: 340,
        height: 73,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 17,
        marginVertical: 8,
        gap: 20,
    },
    readStateIndicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    itemHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    communityName: {
        fontSize: 16,
        fontWeight: "700",
    },
    headerRightContainer: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-end",
    },
    postTime: {
        fontSize: 13,
        color: "#3C3C4399",
    },
    postBody: {
        fontSize: 13,
        color: "#3C3C4399",
        marginTop: 3,
        maxWidth: 262,
    },
    postBodyContainer: {
        width: 280
    }
});
