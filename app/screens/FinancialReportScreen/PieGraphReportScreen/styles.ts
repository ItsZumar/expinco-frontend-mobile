import { StyleSheet } from "react-native"
import { colors } from "app/theme"
import { hp, wp } from "app/utils/responsive"

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
    marginTop: hp(2),
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
  budgetType: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.palette.neutral100,
    borderColor: colors.palette.neutral200,
    borderWidth: 1,
    paddingVertical: hp(0.3),
    paddingHorizontal: wp(2),
    borderRadius: hp(2),
  },
  budgetCircle: {
    width: wp(4),
    height: hp(2),
    borderRadius: hp(4),
    marginRight: wp(2),
  },
  progressLine: {
    alignSelf: "center",
    height: hp(1.4),
    borderRadius: hp(2),
    marginTop: hp(0.6),
  },
})

export default styles
