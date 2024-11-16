import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface ProfileHeaderProps {
  name: string;
  role: string;
  avatarUri: string;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  role,
  avatarUri,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.roleText}>{role}</Text>
        <Text style={styles.nameText}>{name}</Text>
      </View>
      <View style={styles.avatarContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: avatarUri }}
          style={styles.avatar}
          accessibilityLabel={`Profile picture of ${name}`}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 50,
  },
  textContainer: {
    flex: 1,
  },
  roleText: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 19,
    fontWeight: '700',
    color: '#295C53',
  },
  nameText: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 19,
    fontWeight: '700',
    color: '#000000',
  },
  avatarContainer: {
    width: 64,
    aspectRatio: 1,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
});
