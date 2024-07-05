import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  /*
  driverColors: {
    borderColor: "#3E8E7E",
    color: "#3E8E7E",
    backgroundColor: "#3E8E7E",
  },
  passengerColors: {
    borderColor: "#40498D",
    color: "#40498D",
    backgroundColor: "#40498D",
  },
  */
  cardContainer: {
    width: 335,
    height: 153,
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 25,
    backgroundColor: "#FFFFFF",
  },
  infoLabel: {
    fontSize: 19,
    fontWeight: "700",
  },
  infoText: {
    fontSize: 16,
    fontWeight: "700",
  },
  rowContainer: {
    flexDirection: "row",
    gap: 100,
    marginTop: 18,
  },
  seatsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  seatView: {
    width: 20,
    height: 20,
    alignItems: "center",
    borderRadius: 6,
  },
  seatText: {
    color: "white",
    fontWeight: "700",
  },
});

export default styles;

export const DRIVER_COLOR = "#3E8E7E";
export const PASSENGER_COLOR = "#40498D";
