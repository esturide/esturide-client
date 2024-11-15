import React from 'react';
import { AccessibilityInfo, Image, StyleSheet, Text, View } from 'react-native';

interface StatusBarProps {
  time: string;
}

const StatusBar: React.FC<StatusBarProps> = ({ time }) => (
  <View style={styles.statusBarContainer} accessibilityRole="header">
    <Text
      style={styles.statusBarText}
      accessibilityLabel={`Current time: ${time}`}
    >
      {time}
    </Text>
  </View>
);

interface ImageContainerProps {
  images: { uri: string; style: object; alt: string }[];
}

const ImageContainer: React.FC<ImageContainerProps> = ({ images }) => (
  <View style={styles.imageContainer}>
    {images.map((image, index) => (
      <Image
        key={index}
        resizeMode="contain"
        source={{ uri: image.uri }}
        style={image.style}
        accessibilityLabel={image.alt}
        accessible={true}
      />
    ))}
  </View>
);

const DriverMapView: React.FC = () => {
  const images = [
    {
      uri: 'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/5c06f19d1cfa10a494c595e6bb79ad5dee416250808902638f2f6f1e103b47fb?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
      style: styles.firstImage,
      alt: 'First map image',
    },
    {
      uri: 'https://cdn.builder.io/api/v1/image/assets/d15ccaa318ae47d3ace2dfebd63f7426/602c428115ecf5cfbfa4d9fe81501aee1df597ba71dad4b2872ae876859185eb?apiKey=d15ccaa318ae47d3ace2dfebd63f7426&',
      style: styles.secondImage,
      alt: 'Second map image',
    },
  ];

  React.useEffect(() => {
    AccessibilityInfo.announceForAccessibility('Driver Map View loaded');
  }, []);

  return (
    <View style={styles.mainContainer}>
      <StatusBar time="9:41" />
      <ImageContainer images={images} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    position: 'relative',
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
  firstImage: {
    position: 'relative',
    display: 'flex',
    width: 164,
    flexShrink: 0,
    maxWidth: '100%',
    aspectRatio: 5.46,
  },
  secondImage: {
    position: 'relative',
    display: 'flex',
    marginTop: 19,
    width: 77,
    flexShrink: 0,
    aspectRatio: 5.92,
  },
});

export default DriverMapView;
