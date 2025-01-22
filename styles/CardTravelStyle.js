import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    height: 350,
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 25,
    backgroundColor: '#FFFFFF',
  },
  infoLabel: {
    fontSize: 19,
    fontWeight: '700',
  },
  infoText: {
    fontSize: 16,
    fontWeight: '700',
  },
  rowContainer: {
    flexDirection: 'row',
    gap: 100,
    marginTop: 18,
  },
  seatsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  seatView: {
    width: 20,
    height: 20,
    alignItems: 'center',
    borderRadius: 6,
  },
  seatText: {
    color: 'white',
    fontWeight: '700',
  },
  mapsContainer: {
    flex: 2,
    paddingVertical: 15,
    borderRadius: 25,
  },
  maps: {
    width: '100%',
    height: '100%',
  },
});

export default styles;

export const DefaultDriverColor = '#3E8E7E';
export const DefaultPassengerColor = '#40498D';
