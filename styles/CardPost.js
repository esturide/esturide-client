import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  userImage: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },
  cardContainer: {
    width: 335,
    height: 135,
    paddingTop: 10,
    paddingLeft: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#295C53",
    flexDirection: "row",
    gap: 12,
  },
  postInfo: {
    flexDirection: "row",
    gap: 25,
  },
  userName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#223F3A",
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
  },
  postInfoText: {
    fontSize: 10,
    marginTop: 10,
  },
});

export default styles;
