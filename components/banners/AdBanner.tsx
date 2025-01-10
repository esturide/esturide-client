import React from 'react';
import { Image, View } from 'react-native';
import styles from '@styles/banners/AdBannerStyle';

const AdBanner: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@assets/images/ad-banner.png')}
        style={styles.bannerImage}
      />
    </View>
  );
};

export default AdBanner;
