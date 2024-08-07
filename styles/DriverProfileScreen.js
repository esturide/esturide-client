import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screenContainer: {
    height: "100%",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 30,
    gap: 20,
    alignItems: "center",
  },
  adBanner: {
    backgroundColor: "orange",
    height: 50,
    width: "100%",
  },
  profilePicture: {
    height: 64,
    width: 64,
    borderRadius: 32,
  },
  label: {
    color: "#295C53",
    fontWeight: "700",
    fontSize: 19,
  },
  text: {
    fontSize: 19,
    fontWeight: "700",
  },
  driverPersonal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    alignSelf: "flex-start",
  },
  qrCode: {
    height: 205,
    width: 205,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#3C3C434D",
    paddingVertical: 20,
  },
  vehicleInfoLabel: {
    paddingVertical: 20,
  },
  vehicleInfoContainer: {
    position: "relative",
  },
  addVehicleBtn: {
    height: 38,
    width: 38,
    borderRadius: 19,
    backgroundColor: "#87C9B8",
    position: "absolute",
    top: 50,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
