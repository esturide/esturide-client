import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#F5F5F5',
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#FFFFFF',
  },
  radio: {
    width: 17.5,
    height: 17.5,
    borderRadius: 15,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  selectedRadio: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
    backgroundColor: '#4B61B9',
    borderWidth: 1,
    borderColor: '#4B61B9',
  },
  cardInfoText: {
    color: '#606060',
    fontSize: 13,
    fontWeight: '400',
  },
});

export default styles;

export const DefaultPassengerColor = '#4B61B9';
export const DefaultDriverColor = '#2F7265';
