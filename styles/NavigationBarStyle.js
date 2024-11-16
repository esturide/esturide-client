import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  navigationBar: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 3,
    paddingTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorContainer: {
    width: '100%',
    paddingHorizontal: 75,
    paddingTop: 17,
    paddingBottom: 8,
    alignItems: 'center',
  },
  indicator: {
    width: 135,
    height: 5,
    borderRadius: 100,
    backgroundColor: '#000',
  },
});

export default styles;
