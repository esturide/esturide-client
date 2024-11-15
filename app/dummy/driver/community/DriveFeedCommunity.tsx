import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface PostProps {
  author: string;
  date: string;
  content: string;
  likes: number;
  comments: number;
}

const posts: PostProps[] = [
  {
    author: 'Pedro Ramírez',
    date: '16 de marzo a las 12:00AM',
    content:
      'Hola comunidad, empezaron las competencias de robótica en las explanadas de aulas amplias.',
    likes: 54,
    comments: 17,
  },
  {
    author: 'Pedro Ramírez',
    date: '16 de marzo a las 12:00AM',
    content:
      'Hola comunidad, empezaron las competencias de robótica en las explanadas de aulas amplias.',
    likes: 54,
    comments: 17,
  },
  {
    author: 'Pedro Ramírez',
    date: '16 de marzo a las 12:00AM',
    content:
      'Hola comunidad, empezaron las competencias de robótica en las explanadas de aulas amplias.',
    likes: 54,
    comments: 17,
  },
  {
    author: 'Pedro Ramírez',
    date: '16 de marzo a las 12:00AM',
    content:
      'Hola comunidad, empezaron las competencias de robótica en las explanadas de aulas amplias.',
    likes: 54,
    comments: 17,
  },
];

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
      </View>
      <View style={styles.icons}>
        <Image
          resizeMode="contain"
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/5c06f19d1cfa10a494c595e6bb79ad5dee416250808902638f2f6f1e103b47fb?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
          }}
          style={styles.icon1}
          accessibilityLabel="First header icon"
        />
        <Image
          resizeMode="contain"
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/de54d1a9b96648373d7168face15691ee2603debeba9d33265a9e4eb24b14892?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
          }}
          style={styles.icon2}
          accessibilityLabel="Second header icon"
        />
      </View>
    </View>
  );
};

const Post: React.FC<PostProps> = ({
  author,
  date,
  content,
  likes,
  comments,
}) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.authorInfo}>
        <Image
          resizeMode="contain"
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/54dc783c8452a17eef4c9ff8b8461288bbdc4f47fe58199dc4e52b47665dcd5e?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
          }}
          style={styles.authorImage}
          accessibilityLabel={`Profile picture of ${author}`}
        />
        <View>
          <Text style={styles.authorName}>{author}</Text>
          <Text style={styles.postDate}>{date}</Text>
        </View>
      </View>
      <Text style={styles.postContent}>{content}</Text>
      <View style={styles.interactionContainer}>
        <TouchableOpacity
          style={styles.interactionItem}
          accessibilityLabel={`Like post. Current likes: ${likes}`}
        >
          <Image
            resizeMode="contain"
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/bb7586d40ff82dfefe8429e3c40edc3d9d5866f4dce724ff7714e5a43e319b0c?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
            }}
            style={styles.interactionIcon}
            accessibilityLabel="Like icon"
          />
          <Text style={styles.interactionText}>{likes} Likes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.interactionItem}
          accessibilityLabel={`Comment on post. Current comments: ${comments}`}
        >
          <Image
            resizeMode="contain"
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/9c72c473269654b4f694f2b999bc9b79619c4eed195b90f9cabf09097a8d8b5f?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
            }}
            style={styles.interactionIcon}
            accessibilityLabel="Comment icon"
          />
          <Text style={styles.interactionText}>{comments} Comments</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const DriveFeedCommunity: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Image
        resizeMode="contain"
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/630de1d04f062d1c0671436e6265da61761c57d692bc2206f00d4571055aebe1?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
        }}
        style={styles.headerImage}
        accessibilityLabel="Header image"
      />
      <Image
        resizeMode="contain"
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/0fabd2a4504eaa2e3091ebfd7ff345375294daaac4c7071801e1041c6b34ef17?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
        }}
        style={styles.smallIcon}
        accessibilityLabel="Small icon"
      />
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 480,
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 17,
  },
  header: {
    width: '100%',
    alignItems: 'stretch',
    gap: 40,
  },
  statusBar: {
    marginTop: 15,
  },
  time: {
    color: 'rgba(1, 1, 1, 1)',
    fontSize: 17,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: -0.41,
    textAlign: 'center',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
  },
  icon1: {
    width: 164,
    flexShrink: 0,
    maxWidth: '100%',
    aspectRatio: 5.46,
  },
  icon2: {
    marginTop: 19,
    width: 77,
    flexShrink: 0,
    aspectRatio: 5.92,
  },
  headerImage: {
    marginTop: 13,
    marginLeft: 14,
    width: 320,
    aspectRatio: 6.41,
  },
  smallIcon: {
    marginTop: 34,
    width: 21,
    aspectRatio: 1,
  },
  postContainer: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#295C53',
    marginTop: 26,
    width: '100%',
    padding: 16,
    fontFamily: 'Inter, sans-serif',
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  authorImage: {
    width: 35,
    aspectRatio: 0.92,
  },
  authorName: {
    color: '#223F3A',
    fontSize: 16,
    fontWeight: '700',
  },
  postDate: {
    color: '#6D6D6D',
    fontSize: 12,
    fontWeight: '300',
  },
  postContent: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 10,
  },
  interactionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    gap: 19,
  },
  interactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  interactionIcon: {
    width: 12,
    aspectRatio: 1,
  },
  interactionText: {
    fontSize: 10,
    color: '#484C52',
    fontWeight: '700',
  },
});

export default DriveFeedCommunity;
