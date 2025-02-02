import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AdBanner from '@components/banners/AdBanner';
import { ProfileHeader } from '@components/cards/profile/user/ProfileHeader';
import { InfoSection } from '@components/cards/profile/user/InfoSection';
import { ActionItem } from '@components/cards/profile/user/ActionItem';
import { VerifyUserIdentity } from '@components/cards/profile/user/VerifyUserIdentity';
import { useAtom } from 'jotai/index';
import { userCodeAtom } from '@stores/user';
import { useUserManagerContext } from '@components/context/UserManagerContext';
import { getFullName, UserType } from '@const/RequestProfile';
import SwitchInput from '@components/switch/SwitchInput';
import CancelButton from '@components/buttons/CancelButton';

export default function UserProfile() {
  const { setUserType, userType, onTraveling, setSessionStatus, userProfile } =
    useUserManagerContext();

  const [userCode, setUserCode] = useAtom(userCodeAtom);
  const [disableSwap, setDisableSwap] = useState(userType === 'Not-Verified');

  useEffect(() => {
    setDisableSwap(userType === 'Not-Verified');
  }, [userType]);

  const swapUserMessage = (user: UserType, traveling: boolean) => {
    if (disableSwap) {
      return;
    }

    if (!traveling) {
      if (user === 'Driver') {
        setUserType('Passenger');
      } else if (user === 'Passenger') {
        setUserType('Driver');
      }
    }
  };

  const closeSession = async () => {
    setSessionStatus('Logout');
  };

  const onSwapUser = async () => {
    swapUserMessage(userType, onTraveling);
  };

  const actionItems = [
    {
      title: 'Informacion del proyecto',
    },
  ];

  return (
    <View style={styles.container}>
      <AdBanner />
      <ProfileHeader name={getFullName(userProfile)} role={userType} />

      <VerifyUserIdentity code={`#${userCode}`} />

      <InfoSection />

      <View style={styles.containerControls}>
        {!onTraveling && (
          <>
            <SwitchInput
              firstLabel={'Cambiar a conductor'}
              secondLabel={'Cambiar a Pasajero'}
              thirdLabel={'No verificado'}
              disabled={disableSwap}
              onToggleSwitch={onSwapUser}
              swapState={userType !== 'Driver'}
            />
            <CancelButton title={'Cerrar sesion'} onPress={closeSession} />
          </>
        )}
      </View>

      {actionItems.map((item, index) => (
        <ActionItem key={index} title={item.title} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  containerControls: {},
});
