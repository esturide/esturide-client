import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#254a44',
    marginBottom: 5,
    marginLeft: 22,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 32,
    backgroundColor: '#fff',
    height: 56,
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 32,
    height: 56,
    fontSize: 16,
    fontWeight: 'medium',
  },
  toggleButton: {
    padding: 10,
  },
  datePicker: {
    width: '100%',
  },
  dateInput: {
    borderWidth: 0,
    alignItems: 'flex-start',
  },
  placeholderText: {
    fontSize: 16,
    color: '#888',
  },
  icon: {
    fontSize: 24,
    color: '#ccc',
  },
  dateText: {
    alignItems: 'center',
    color: '#000',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default styles;
