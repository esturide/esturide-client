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
import loaderEffect from '@libs/loaderEffect';
import { requestProfile } from '@libs/request/requestProfile';
import RequestProfile from '@const/RequestProfile';
import { userCodeAtom } from '@stores/user';
import Loading from '@components/visuals/resources/Loading';

export default function UserProfile() {
  const [authToken, setAuthToken] = useAtom(authTokenAtom);
  const [userCode, setUserCode] = useAtom(userCodeAtom);
  const [userProfile, setUserProfile] = useState<RequestProfile | null>(null);
  const [loading, setLoading] = useState(false);

  const closeSession = async () => {
    setAuthToken('');
    router.replace('/');
  };

  useEffect(() => {
    const requestDateProfile = async () => {
      await loaderEffect(async () => {
        const status = await requestProfile(userCode, setUserProfile);

        if (!status) {
        }

        console.log(userProfile);
      }, setLoading);
    };

    requestDateProfile();
  }, []);

  const actionItems = [
    {
      title: 'Depositar Capital',
    },
    {
      title: 'Retirar Capital',
    },
    {
      title: 'Cambiar a Pasajero',
    },
    {
      title: 'Cerrar sesion',
      onTouchTap: closeSession,
    },
  ];

  if (userProfile !== null) {
    const fullName = `${userProfile.firstName} ${userProfile.maternalSurname} ${userProfile.paternalSurname}`;
    const role = userProfile.role;

    return (
      <View style={styles.container}>
        <AdBanner />
        <ProfileHeader
          name={fullName}
          role={role}
          avatarUri="https://thispersondoesnotexist.com/"
        />

        <VerifyUserIdentity code={'Hello world'} />

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
  } else {
    return (
      <View style={styles.container}>
        <Loading visible={true} />
      </View>
    );
  }
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
