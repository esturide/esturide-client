import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalContent: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
  },
  titleContainer: {
    padding: 16,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
