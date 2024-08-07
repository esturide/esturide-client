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
  bgImage: {
    height: 200,
    width: 250,
    marginTop: 110,
  },
  textBold: {
    fontSize: 19,
    fontWeight: "700",
    color: "#3d3d3d",
    lineHeight: 23,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  btnContainer: {
    gap: 25,
    position: "absolute",
    bottom: 40,
    right: 30,
  },
});

export default styles;
