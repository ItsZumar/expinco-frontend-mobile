import { StyleSheet } from "react-native"
import { colors } from "app/theme"
import { hp } from "app/utils/responsive"

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: hp(2),
  },
  amount: {
    marginBottom: hp(1),
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.palette.neutral200,
    borderWidth: 1,
    backgroundColor: colors.palette.neutral200,
    marginTop: hp(1),
    borderRadius: hp(3),
  },
  btn: {
    flex: 1,
    padding: hp(1),
    borderRadius: hp(3),
    alignItems: "center",
  },
  activeBtn: {
    backgroundColor: colors.palette.primary500,
  },
  activeBtnTxt: {
    color: colors.palette.neutral100,
  },
  transactionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp(1),
  },
})

export default styles
