import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  indicatorIcon: {
    fontSize: 12,
    color: '#b9b9c3',
    marginHorizontal: 8,
  },

  defaultLine: {
    borderStyle: 'solid',
    borderColor: '#b9b9c3',
    borderTopWidth: 1,
    width: 41,
    height: 1,
  },

  progressBar3: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 0,
  },

  progressBar2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
