import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },

  indicatorIcon: {
    fontSize: 12,
    color: '#b9b9c3',
    marginHorizontal: 8,
    alignItems: 'center',
  },

  defaultLine: {
    borderStyle: 'solid',
    borderColor: '#b9b9c3',
    borderTopWidth: 1,
    width: 41,
    height: 1,
    backgroundColor: 'lime',
  },
});

export default styles;
