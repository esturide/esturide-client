import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  userImage: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },
  cardContainer: {
    width: 335,
    minHeight: 135,
    paddingVertical: 10,
    paddingLeft: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#295C53",
    flexDirection: "row",
    gap: 12,
    backgroundColor: "white",
  },
  postInfo: {
    flexDirection: "row",
    gap: 25,
  },
  userName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#223F3A",
    maxWidth: 220,
  },
  postDate: {
    fontSize: 12,
    fontWeight: "300",
    color: "#6D6D6D",
  },
  postBody: {
    fontSize: 14,
    fontWeight: "400",
    maxWidth: 250,
    marginTop: 3,
    marginBottom: 7
  },
  postInfoText: {
    fontSize: 10,
  },
});

export default styles;
