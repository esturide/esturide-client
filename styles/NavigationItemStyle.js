import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 52,
    height: 52,
  },
  activeIconContainer: {
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#FFF',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default styles;
