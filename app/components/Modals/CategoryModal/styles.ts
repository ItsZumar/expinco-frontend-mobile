import { StyleSheet } from "react-native"
import { isIOS, isAndroid } from "../../../utils/deviceInfo"
import { colors, typography } from "../../../theme"
import { hp, wp } from "../../../utils/responsive"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: wp(5),
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingTop: isIOS ? 50 : 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  TITLE: {
    color: colors.text,
    fontSize: hp(3.5),
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  renderCardBlock: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  shadowLayer: {
    shadowColor: colors.background,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: hp(0.02),
    shadowRadius: hp(0.4),
    borderRadius: 9,
  },
  renderCardImage: { width: wp(12), height: wp(12), borderRadius: 50, marginRight: 20 },
  cardSelectionOverlay: {
    width: wp(20),
    height: wp(20),
    backgroundColor: colors.palette.primary500,
    // opacity: 0.7,
    // position: "absolute",
    zIndex: 10,
    // justifyContent: "center",
    // alignItems: "center",
    // borderRadius: 9,
  },
  renderCardText: {
    fontSize: hp(1.8),
    color: colors.text,
    fontFamily: typography.fonts.inter.normal
  },
  subTitleText: {
    marginBottom: hp(3),
    color: colors.text,
    fontSize: hp(1.75),
  },
  verifyEmailBtn: {
    marginTop: hp(3),
  },
  flatlistStyles: {
    flex: 1,
  },
  doneBtn: {
    position: "absolute",
    bottom: isAndroid ? hp(1.8) : hp(2),
  },
})

export default styles
