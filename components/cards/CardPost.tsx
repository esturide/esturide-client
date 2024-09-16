import { Image, Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '@styles/CardPost';

interface CardPostProps {
  userName: string;
  date: string;
  body: string;
  likeCount: number;
  commentCount: number;
}

export default function CardPost({
  userName,
  date,
  body,
  likeCount,
  commentCount,
}: CardPostProps) {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.userImage} source={require('@assets/icon.png')} />
      <View>
        <View>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.postDate}>{date}</Text>
        </View>
        <View style={styles.postBody}>
          <Text>{body}</Text>
        </View>
        <View style={styles.postInfo}>
          <Text style={styles.postInfoText}>
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={12}
              color="#484C52"
            />
            {' ' + likeCount + ' Likes'}
          </Text>
          <Text style={styles.postInfoText}>
            <MaterialCommunityIcons
              name="message-reply-outline"
              size={10}
              color="#484C52"
            />
            {' ' + commentCount + ' Comments'}
          </Text>
        </View>
      </View>
    </View>
  );
}
