import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    maxWidth: 340,
    height: 73,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 17,
    marginVertical: 8,
    gap: 20,
  },
  readStateIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  itemHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  communityName: {
    fontSize: 16,
    fontWeight: "700",
  },
  headerRightContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  postTime: {
    fontSize: 13,
    color: "#3C3C4399",
  },
  postBody: {
    fontSize: 13,
    color: "#3C3C4399",
    marginTop: 3,
    maxWidth: 262,
  },
  postBodyContainer: {
    width: 280,
  },
});

export default styles;
