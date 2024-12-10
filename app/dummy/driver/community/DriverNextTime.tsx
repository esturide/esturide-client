import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface StatusBarProps {
  time: string;
}

const StatusBar: React.FC<StatusBarProps> = ({ time }) => (
  <View style={styles.statusBarContainer} aria-live="polite">
    <Text style={styles.statusBarText}>{time}</Text>
  </View>
);

interface ImageContainerProps {
  imageUris: string[];
}

const ImageContainer: React.FC<ImageContainerProps> = ({ imageUris }) => (
  <View style={styles.imageContainer}>
    {imageUris.map((uri, index) => (
      <Image
        key={index}
        resizeMode="contain"
        source={{ uri }}
        style={index === 0 ? styles.largeImage : styles.smallImage}
        accessibilityLabel={`Decorative image ${index + 1}`}
        accessible={true}
      />
    ))}
  </View>
);

const DriverNextTime: React.FC = () => {
  const imageUris = [
    'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/5c06f19d1cfa10a494c595e6bb79ad5dee416250808902638f2f6f1e103b47fb?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
    'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/602c428115ecf5cfbfa4d9fe81501aee1df597ba71dad4b2872ae876859185eb?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.mainContainer}>
          <StatusBar time="9:41" />
          <ImageContainer imageUris={imageUris} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    display: 'flex',
    width: '100%',
    maxWidth: 334,
    alignItems: 'stretch',
    gap: 50,
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
  largeImage: {
    position: 'relative',
    display: 'flex',
    width: 164,
    flexShrink: 0,
    maxWidth: '100%',
    aspectRatio: 5.46,
  },
  smallImage: {
    position: 'relative',
    display: 'flex',
    marginTop: 19,
    width: 77,
    flexShrink: 0,
    aspectRatio: 5.92,
  },
});

export default DriverNextTime;
