import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AdBanner from '@components/banners/AdBanner';
import { ProfileHeader } from '@components/cards/profile/user/ProfileHeader';
import { InfoSection } from '@components/cards/profile/user/InfoSection';
import { ActionItem } from '@components/cards/profile/user/ActionItem';
import { VerifyUserIdentity } from '@components/cards/profile/user/VerifyUserIdentity';
import { useAtom } from 'jotai/index';
import { authTokenAtom } from '@stores/token';
import { userCodeAtom } from '@stores/user';
import { useUserManagerContext } from '@components/context/UserManagerContext';
import { getFullName, UserType } from '@const/RequestProfile';
import SwitchInput from '@components/switch/SwitchInput';
import { defaultDriverColor } from '@const/DefaultColors';

const DefaultMessageNotVerified = 'Verificar usuario';

export default function UserProfile() {
  const { setUserType, userType, onTraveling, setSessionStatus, userProfile } =
    useUserManagerContext();

  const [userCode, setUserCode] = useAtom(userCodeAtom);
  const [authToken, setAuthToken] = useAtom(authTokenAtom);

  const [messageRole, setMessageRole] = useState(DefaultMessageNotVerified);
  const [disableSwap, setDisableSwap] = useState(false);

  useEffect(() => {
    console.log('Perfil de usuario: ', userProfile);
  }, [userProfile]);

  useEffect(() => {
    setDisableSwap(userType != 'Not Verified');
  }, [userType]);

  const swapUserMessage = (user: UserType, traveling: boolean) => {
    if (traveling) {
      if (user == 'Driver') {
        setMessageRole('Cambiar a conductor');
        setUserType('driver');
      } else if (user == 'Passenger') {
        setMessageRole('Cambiar a pasajero');
        setUserType('passenger');
      }
    } else {
      if (user == 'Driver') {
        setMessageRole('Cambiar a pasajero');
        setUserType('passenger');
      } else if (user == 'Passenger') {
        setMessageRole('Cambiar a conductor');
        setUserType('driver');
      }
    }
  };

  const closeSession = async () => {
    setSessionStatus('Logout');
  };

  const swapUser = async () => {
    swapUserMessage(userType, onTraveling);
  };

  const actionItems = [
    {
      title: 'Acerca de',
    },
    {
      title: 'Cerrar sesion',
      onTouchTap: closeSession,
    },
  ];

  return (
    <View style={styles.container}>
      <AdBanner />
      <ProfileHeader name={getFullName(userProfile)} role={userProfile.role} />

      <VerifyUserIdentity code={`#${userCode}`} />

      <InfoSection />

      <SwitchInput
        firstLabel={'Conductor'}
        secondLabel={'Pasajero'}
        thirdLabel={'No verificado'}
        disabled={disableSwap}
      />

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
