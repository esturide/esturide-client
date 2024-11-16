import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: 50,
    backgroundColor: '#f0f0f0',
    alignSelf: 'center',
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 10,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default styles;
