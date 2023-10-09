import { StyleSheet } from "react-native"
import { colors } from "app/theme"
import { hp, wp } from "app/utils/responsive"

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.1)",
    zIndex: 1,
  },
  modalView: {
    width: wp(80),
    alignItems: "center",
    borderRadius: wp(3),
    backgroundColor: colors.palette.neutral100,
    padding: wp(5),
  },
  typeBlock: {
    width: hp(6),
    height: hp(6),
    borderRadius: hp(4),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp(2),
  },
  typeSuccessBlock: {
    backgroundColor: colors.palette.primary500,
    color: "white",
  },
  typeErrorBlock: {
    backgroundColor: "#FFDBDB",
    color: "red",
  },
  title: {
    textAlign: "center",
    marginBottom: hp(2),
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
  },
  primaryButton: {
    width: wp(70),
    paddingVertical: hp(1),
    marginTop: hp(2),
  },
  secondaryButton: {
    width: wp(70),
    paddingVertical: hp(1),
    marginTop: hp(2),
  },
})

export default styles
