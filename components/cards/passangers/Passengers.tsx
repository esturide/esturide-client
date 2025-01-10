import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RequestProfile, { getFullName } from '@const/RequestProfile';

type Seat = 'A' | 'B' | 'C';

type Props = {
  seat: Seat;
  profile: RequestProfile;
};

export default function Passengers({ seat, profile }: Props) {
  return (
    <View style={[styles.container, styles.shadow]}>
      <Text style={styles.labelContainer}>{seat}</Text>

      <Text style={styles.profileContainer}>{getFullName(profile)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  container: {
    backgroundColor: '#3E8E7E',
    flexDirection: 'row',
    gap: 5,
    flexShrink: 5,
    borderRadius: 5,
  },
  labelContainer: {
    flex: 1,
    backgroundColor: 'white',
    textAlign: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  profileContainer: {
    flex: 3,
    color: 'white',
    fontWeight: 'bold',
  },
});
