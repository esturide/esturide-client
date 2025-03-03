import React from 'react';
import { Text, View } from 'react-native';
import { PublicProfile } from '@const/Travels';
import * as Crypto from 'expo-crypto';

type Props = {
  profiles: PublicProfile[];
};

export const TravelListPassengers = ({ profiles }: Props) => {
  const Passenger = ({ profile }: { profile: PublicProfile }) => {
    return (
      <>
        <View>
          <Text>{profile.userCode}</Text>
          <Text>{profile.firstName}</Text>
          <Text>{profile.maternalSurname}</Text>
          <Text>{profile.paternalSurname}</Text>
        </View>
      </>
    );
  };

  if (profiles.length === 0) {
    return <Text>Aun no tienes pasajeros</Text>;
  }

  return (
    <>
      <View>
        {profiles.map((profile: PublicProfile) => (
          <Passenger profile={profile} key={Crypto.randomUUID()} />
        ))}
      </View>
    </>
  );
};
