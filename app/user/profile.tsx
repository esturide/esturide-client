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

      <View style={styles.section}>
        <View style={styles.item}>
          <InfoSection />
          {actionItems.map((item, index) => (
            <ActionItem key={index} title={item.title} />
          ))}
        </View>

        {!onTraveling && (
          <View style={styles.controls}>
            <SwitchInput
              firstLabel={'Cambiar a conductor'}
              secondLabel={'Cambiar a Pasajero'}
              thirdLabel={'No verificado'}
              disabled={disableSwap}
              onToggleSwitch={onSwapUser}
              swapState={userType !== 'Driver'}
            />
            <CancelButton title={'Cerrar sesion'} onPress={closeSession} />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  section: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 5,
    paddingHorizontal: 17,
  },
  item: {
    alignSelf: 'stretch',
    flexShrink: 1,
    flexGrow: 0,
  },
  controls: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    flexShrink: 1,
    flexGrow: 0,
    gap: 15,
    minHeight: 150,
  },
});
