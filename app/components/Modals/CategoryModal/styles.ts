import { StyleSheet } from "react-native"
import { isIOS, isAndroid } from "../../../utils/deviceInfo"
import { colors } from "../../../theme"
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
    justifyContent: "center",
    marginBottom: 15,
    borderTopRightRadius: 9,
    borderTopLeftRadius: 9,
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
    // backgroundColor: "#fff",
    // elevation: 5,
  },
  renderCardImage: { width: wp(25), height: wp(25), borderRadius: 9 },
  cardSelectionOverlay: {
    width: wp(25),
    height: wp(25),
    backgroundColor: colors.palette.primary500,
    opacity: 0.7,
    position: "absolute",
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
  },
  renderCardText: { fontSize: hp(1.2), textAlign: "center", marginTop: hp(0.4) },
  subTitleText: {
    marginBottom: hp(3),
    color: colors.text,
    fontSize: hp(1.75),
  },
  verifyEmailBtn: {
    marginTop: hp(3),
  },
  flatlistContentStyles: {
    paddingBottom: hp(8),
  },
  flatlistStyles: {
    flex: 1,
  },
  columnStyles: {
    justifyContent: "space-between",
  },
  doneBtn: {
    position: "absolute",
    bottom: isAndroid ? hp(1.8) : hp(2),
  },
})

export default styles
