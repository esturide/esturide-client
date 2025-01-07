import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ProfileHeader } from '@components/cards/profile/user/ProfileHeader';
import { InfoSection } from '@components/cards/profile/user/InfoSection';
import { ActionItem } from '@components/cards/profile/user/ActionItem';
import AdBanner from '@components/banners/AdBanner';
import { VerifyUserIdentity } from '@components/cards/profile/user/VerifyUserIdentity';
import { router } from 'expo-router';
import { useAtom } from 'jotai/index';
import { authTokenAtom } from '@stores/token';

export default function UserProfile() {
  const [authToken, setAuthToken] = useAtom(authTokenAtom);

  const closeSession = async () => {
    setAuthToken('');
    router.replace('/');
  };

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

  return (
    <View style={styles.container}>
      <AdBanner />
      <ProfileHeader
        name="Mary Jiménez Rodríguez"
        role="Conductor"
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
