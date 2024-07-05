import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 'fit-content',
    paddingRight: 5,
    paddingBottom: 5,
    backgroundColor: "#FFFFFF",
  },
  textHeader: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 20,
  },
  cardsContainer: {
    width: 327,
    minHeight: 148,
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

export const PASSENGER_COLORS = {
  header: "#373F71",
  addCardButton: "#ACC0E4",
  iconColor: "#4B61B9",
}

export const DRIVER_COLORS = {
  header: "#254A44",
  addCardButton: "#87C9B8",
  iconColor: "#2F7265",
}
