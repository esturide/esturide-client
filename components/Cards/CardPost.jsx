import { Image, Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "../../styles/CardPost";

export default function CardPost({ userName, date, body, likeCount, commentCount }) {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.userImage}
        source={require("../../assets/imagen-post.jpg")}
      />
      <View>
        <View>
          <Text style={styles.userName}>{userName}</Text>
          {/*18 de marzo a las 12:00AM*/}
          <Text style={styles.postDate}>{date}</Text>
        </View>
        <View>
          {/*
            Hola comunidad, empezaron las competencias de robótica en las
            explanadas de aulas amplias.
          */}
          <Text style={styles.postBody}>{body}</Text>
        </View>
        <View style={styles.postInfo}>
          <Text style={styles.postInfoText}>
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={12}
              color="#484C52"
            />{" "}
            {likeCount} Likes
          </Text>
          <Text style={styles.postInfoText}>
            <MaterialCommunityIcons
              name="message-reply-outline"
              size={10}
              color="#484C52"
            />{" "}
            {commentCount} Comments
          </Text>
        </View>
      </View>
    </View>
  );
}
