import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ProfileHeader } from '@components/cards/profile/user/ProfileHeader';
import { InfoSection } from '@components/cards/profile/user/InfoSection';
import { ActionItem } from '@components/cards/profile/user/ActionItem';
import AdBanner from '@components/banners/AdBanner';
import QRCode from 'react-native-qrcode-svg';
import { VerifyUserIdentity } from '@components/cards/profile/user/VerifyUserIdentity';

export default function UserProfile() {
  const actionItems = [
    {
      title: 'Depositar Capital',
      icon: 'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/0ef109f5751d99399f108de14e5b4f972a01fad01d84f36711d1059813d98d98?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
    },
    {
      title: 'Retirar Capital',
      icon: 'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/e3d7dcb07c4c8ea879afccae0d1378d99773c53c23cc0076afd24e8d16bdbe9c?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
    },
    {
      title: 'Cambiar a Pasajero',
      icon: 'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/5eedea026824c885feee582da5af44b63a6e2638dc38b77c1c5c0fc5f1192be8?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
    },
  ];

  return (
    <View style={styles.container}>
      <AdBanner />
      <ProfileHeader
        name="Raul Jiménez Rodríguez"
        role="Conductor"
        avatarUri="https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/74d5a3d37a9568a351100cdcf54159355bfad163068f23b17ffdf97346ba711e?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&"
      />

      <VerifyUserIdentity code={'Hello world'} />

      <InfoSection />
      {actionItems.map((item, index) => (
        <ActionItem key={index} title={item.title} iconUri={item.icon} />
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
