  import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    width: 335,
    height: 273,
    borderWidth: 2,
    borderColor: "#40498D",
    borderRadius: 20,
    paddingHorizontal: 25,
    backgroundColor: "#FFFFFF"
  },
  driverInfoContainer: {
    marginTop: 18,
    gap: 18,
  },
  infoLabel: {
    fontSize: 19,
    fontWeight: "700",
    color: "#40498D",
  },
  infoText: {
    fontSize: 16,
    fontWeight: "700",
  },
  rowContainer: {
    flexDirection: "row",
    gap: 100,
    marginTop: 10,
  },
  seatsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  seatView: {
    width: 20,
    height: 20,
    backgroundColor: "#40498D",
    alignItems: "center",
    borderRadius: 6,
  },
  seatText: {
    color: "white",
    fontWeight: "700",
  },
});

export default styles;
