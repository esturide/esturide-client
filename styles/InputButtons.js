import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  btnSubmit: {
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: "#2f7265",
    width: 302,
    height: 51,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 44,
    paddingVertical: 7,
    marginVertical: 5,
  },

  btnSubmitText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    textAlign: "left",
  },

  btnDepositGreen: {
    borderRadius: 9,
    backgroundColor: "#2f7265",
    width: 130,
    height: 37,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 3,
    marginVertical: 5,
  },

  btnDepositGreenText: {
    fontSize: 19,
    fontWeight: "700",
    color: "#fff",
    textAlign: "left",
  },

  btnDepositBlue: {
    borderRadius: 9,
    backgroundColor: "#4b61b9",
    width: 166,
    height: 37,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 3,
    marginVertical: 5,
  },

  btnDepositBlueText: {
    fontSize: 19,
    fontWeight: "700",
    color: "#fff",
    textAlign: "left",
  },

  btnWithdraw: {
    borderRadius: 9,
    backgroundColor: "#2f7265",
    width: 130,
    height: 37,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 3,
  },

  btnWithdrawText: {
    fontSize: 19,
    fontWeight: "700",
    color: "#fff",
    textAlign: "left",
  },

  btnAddBlue: {
    borderRadius: 100,
    backgroundColor: "#40498d",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 14,
  },

  btnAddIcon: {
    fontSize: 24,
    color: "#ffffff",
  },

  btnAddGreen: {
    borderRadius: 100,
    backgroundColor: "#3e8e7e",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 14,
  },

  optionContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    borderBottomColor: "#d1d1d1",
    borderBottomWidth: 1,
    justifyContent: "center",
  },

  optionChild: {
    flexDirection: "row",
    alignItems: "center",
    height: 51,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
  },

  optionLabel: {
    flex: 1,
    fontSize: 19,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    color: "#484c52",
    opacity: 0.75,
    textAlign: "left",
  },

  optionIcon: {
    fontSize: 24,
    color: "#484c52",
  },

  btnFilterGreen: {
    borderRadius: 50,
    backgroundColor: "#3e8e7e",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  filterIcon: {
    fontSize: 24,
    color: "#ffffff",
  },

  btnFilterBlue: {
    borderRadius: 50,
    backgroundColor: "#40498d",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  gpsIcon: {
    fontSize: 24,
    color: "#ffffff",
  },

  btnLocationGreen: {
    borderRadius: 50,
    backgroundColor: "#3e8e7e",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  btnLocationContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },

  btnLocationBlue: {
    borderRadius: 50,
    backgroundColor: "#40498d",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#dcdcdc",
    borderWidth: 1,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
  },

  searchInput: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    color: "#000",
  },

  searchIcon: {
    fontSize: 24,
    color: "#dcdcdc",
  },

  btnPassenger: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e3e9f6",
    borderRadius: 10,
    borderColor: "#6782ca",
    borderWidth: 1,
    width: 300,
    height: 70,
    padding: -10,
  },

  btnPassengerView: {
    height: 50,
    width: 50,
    backgroundColor: "#6782ca",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 10,
  },

  passengerIcon: {
    fontSize: 32,
    color: "#fff",
  },

  btnPassengerLabel: {
    fontSize: 19,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    color: "#252946",
  },

  btnPassengerText: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    color: "#4f4f4f",
  },

  btnPassengerTextContainer: {
    flex: 1,
  },

  btnDriver: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d0e9e6",
    borderRadius: 10,
    borderColor: "#3e8e7e",
    borderWidth: 1,
    width: 300,
    height: 70,
    padding: -10,
  },

  btnDriverView: {
    height: 50,
    width: 50,
    backgroundColor: "#87c9b8",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 10,
  },

  driverIcon: {
    fontSize: 32,
    color: "#fff",
  },

  btnDriverLabel: {
    fontSize: 19,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    color: "#0f2422",
  },

  btnDriverText: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    color: "#4f4f4f",
  },

  btnDriverTextContainer: {
    flex: 1,
  },
});

export default styles;
