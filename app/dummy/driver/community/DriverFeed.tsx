import React from 'react';
import { AccessibilityInfo, Image, StyleSheet, Text, View } from 'react-native';

interface StatusBarProps {
  time: string;
}

const StatusBar: React.FC<StatusBarProps> = ({ time }) => {
  return (
    <View style={styles.statusBarContainer} aria-live="polite">
      <Text style={styles.statusBarText}>{time}</Text>
    </View>
  );
};

interface ImageContainerProps {
  imageUri1: string;
  imageUri2: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
  imageUri1,
  imageUri2,
}) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        resizeMode="contain"
        source={{ uri: imageUri1 }}
        style={styles.image1}
        accessibilityLabel="Decorative image one"
        accessible={true}
      />
      <Image
        resizeMode="contain"
        source={{ uri: imageUri2 }}
        style={styles.image2}
        accessibilityLabel="Decorative image two"
        accessible={true}
      />
    </View>
  );
};

const DriverNotificationsScreen: React.FC = () => {
  React.useEffect(() => {
    AccessibilityInfo.announceForAccessibility(
      'Driver Notifications Screen Loaded',
    );
  }, []);

  return (
    <View style={styles.mainContainer}>
      <StatusBar time="9:41" />
      <ImageContainer
        imageUri1="https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/5c06f19d1cfa10a494c595e6bb79ad5dee416250808902638f2f6f1e103b47fb?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&"
        imageUri2="https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/602c428115ecf5cfbfa4d9fe81501aee1df597ba71dad4b2872ae876859185eb?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'stretch',
    gap: 40,
    overflow: 'hidden',
  },
  statusBarContainer: {
    marginTop: 15,
  },
  statusBarText: {
    color: 'rgba(1, 1, 1, 1)',
    fontSize: 17,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: -0.41,
    textAlign: 'center',
  },
  imageContainer: {
    display: 'flex',
    gap: 12,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
  },
  image1: {
    position: 'relative',
    display: 'flex',
    width: 164,
    flexShrink: 0,
    maxWidth: '100%',
    aspectRatio: 5.46,
  },
  image2: {
    position: 'relative',
    display: 'flex',
    marginTop: 19,
    width: 77,
    flexShrink: 0,
    aspectRatio: 5.92,
  },
});

export default DriverNotificationsScreen;
