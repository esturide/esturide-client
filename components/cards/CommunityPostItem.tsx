import { Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '@/styles/CommunityPostItem';

interface CommunityPostItemProps {
  readStatus: boolean;
  communityName: string;
  postTime: string;
  postBody: string;
}

export default function CommunityPostItem({
  readStatus,
  communityName,
  postTime,
  postBody,
}: CommunityPostItemProps) {
  const readStatusColor = readStatus ? '#007AFF' : '#ffffff';
  const readStateIndicatorStyle = Object.assign(
    { ...styles.readStateIndicator },
    { backgroundColor: readStatusColor },
  );

  return (
    <TouchableOpacity>
      <View style={styles.itemContainer}>
        <View style={readStateIndicatorStyle} />

        <View>
          <View style={styles.itemHeader}>
            <Text
              style={styles.communityName}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {communityName}
            </Text>
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
            <Text
              style={styles.postBody}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {postBody}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
