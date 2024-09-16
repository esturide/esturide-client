import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 300, // Ajusta según sea necesario
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
  },
  bottomSheetGrabHandle: {
    width: 40,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#d1d1d1',
    marginVertical: 10,
  },
  bottomSheetContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#f0f0f0',
  },
});

export default styles;
