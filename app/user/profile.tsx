import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AdBanner from '@components/banners/AdBanner';
import { ProfileHeader } from '@components/cards/profile/user/ProfileHeader';
import { InfoSection } from '@components/cards/profile/user/InfoSection';
import { ActionItem } from '@components/cards/profile/user/ActionItem';
import { VerifyUserIdentity } from '@components/cards/profile/user/VerifyUserIdentity';
import { router } from 'expo-router';
import { useAtom } from 'jotai/index';
import { authTokenAtom } from '@stores/token';
import { userCodeAtom } from '@stores/user';
import { UserProfileContext } from '@components/context/UserProfileContext';
import {
  UserType,
  useUserTypeContext,
} from '@components/context/UserTypeContext';

export default function UserProfile() {
  const { userType, setUserType, onTraveling } = useUserTypeContext();
  const [messageTypeUser, setMessageTypeUser] = useState('');
  const [authToken, setAuthToken] = useAtom(authTokenAtom);
  const [userCode, setUserCode] = useAtom(userCodeAtom);
  const userProfile = useContext(UserProfileContext);

  useEffect(() => {
    modifyUser(userType, onTraveling);
  }, []);

  const modifyUser = (user: UserType, traveling: boolean) => {
    if (traveling) {
      if (user == 'driver') {
        setMessageTypeUser('Cambiar a conductor');
        setUserType('driver');
      } else if (user == 'passenger') {
        setMessageTypeUser('Cambiar a pasajero');
        setUserType('passenger');
      }
    } else {
      if (user == 'driver') {
        setMessageTypeUser('Cambiar a pasajero');
        setUserType('passenger');
      } else if (user == 'passenger') {
        setMessageTypeUser('Cambiar a conductor');
        setUserType('driver');
      }
    }
  };

  const closeSession = async () => {
    setAuthToken('');
    router.replace('/');
  };

  const swapTypeUser = async () => {
    modifyUser(userType, onTraveling);
  };

  const actionItems = [
    {
      title: messageTypeUser,
      onTouchTap: swapTypeUser,
    },
    {
      title: 'Cerrar sesion',
      onTouchTap: closeSession,
    },
  ];

  const fullName = `${userProfile.firstName} ${userProfile.maternalSurname} ${userProfile.paternalSurname}`;
  const userIdentify = `#${userCode}`;
  const role = userProfile.role;

  return (
    <View style={styles.container}>
      <AdBanner />
      <ProfileHeader name={fullName} role={role} />

      <VerifyUserIdentity code={userIdentify} />

      <InfoSection />

      {actionItems.map((item, index) => (
        <ActionItem
          key={index}
          title={item.title}
          onTouchTap={item.onTouchTap}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  divider: {
    width: 170,
    aspectRatio: 1,
    alignSelf: 'center',
    marginVertical: 20,
  },
  footer: {
    width: '100%',
    aspectRatio: 4.08,
    marginTop: 82,
  },
});
