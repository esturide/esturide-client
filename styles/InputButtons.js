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
});

export default styles;
