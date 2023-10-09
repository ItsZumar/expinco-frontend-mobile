import { colors } from "app/theme"
import { isIOS } from "app/utils/deviceInfo"
import { hp, wp } from "app/utils/responsive"
import { StyleSheet } from "react-native"

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
    height: hp(100),
    backgroundColor: colors.background,
    paddingHorizontal: wp(5),
    paddingTop: isIOS ? hp(6.5) : hp(3),
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
    lineHeight: hp(4),
  },
})

export default styles
