import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textHeader: {
    color: "#373F71",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 20,
  },
  cardsContainer: {
    width: 327,
    height: 148,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: "#F5F5F5",
    elevation: 5,
    shadowOffset: {
      height: 5,
      width: 5,
    },
  },
  addCardButton: {
    width: 24,
    height: 24,
    backgroundColor: "#ACC0E4",
    borderRadius: 6.13,
    justifyContent: "center",
    alignItems: "center",
  },
  addCardContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 6,
  },
});

export default styles;
