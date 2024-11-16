import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { ProfileHeader } from './ProfileHeader';
import { InfoSection } from './InfoSection';
import { ActionItem } from './ActionItem';
import AdBanner from '@components/banners/AdBanner';

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
      <Image
        resizeMode="contain"
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/e125fa49d84bd938dc34a41f6d980319e82ac05939292b202d29ad005c29ce20?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
        }}
        style={styles.divider}
        accessibilityLabel="Decorative divider"
      />
      <InfoSection />
      {actionItems.map((item, index) => (
        <ActionItem key={index} title={item.title} iconUri={item.icon} />
      ))}
      <Image
        resizeMode="contain"
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/1d9ef8039256a56b3b136303fa5e90a5d414cfeb963bcaf59e8ea60d95abeb18?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
        }}
        style={styles.footer}
        accessibilityLabel="Footer image"
      />
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
