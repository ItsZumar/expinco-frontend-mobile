import { colors, typography } from "app/theme"
import { hp, wp } from "app/utils/responsive"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  mainHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(5),
    marginHorizontal: wp(5),
  },
  profileImage: {
    width: wp(9),
    height: hp(4.5),
    borderRadius: hp(3),
  },
  monthContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: colors.palette.neutral300,
    borderRadius: hp(3),
    paddingVertical: hp(0.8),
    paddingLeft: wp(4),
    paddingRight: wp(5),
  },
  monthText: {
    marginLeft: wp(0.6),
  },
  bellContainer: {
    padding: hp(0.8),
    borderRadius: hp(3),
  },
  accountBalanceText: {
    textAlign: "center",
    marginBottom: hp(1),
  },
  amountText: {
    textAlign: "center",
    color: colors.palette.neutral900,
  },
  topBlock: {
    marginVertical: hp(3.5),
  },
  transBtnBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(5),
    gap: wp(5),
    marginTop: hp(2),
  },
  incBtnBlock: {
    flex: 1,
    height: hp(10),
    borderRadius: hp(2.5),
    flexDirection: "row",
    alignItems: "center",
  },
  incBg: {
    backgroundColor: colors.palette.income,
  },
  expBg: {
    backgroundColor: colors.palette.expense,
  },
  arrowBlock: {
    padding: wp(2),
    backgroundColor: colors.palette.neutral100,
    borderRadius: hp(1.8),
    marginHorizontal: wp(3.5),
  },
  topLightText: {
    color: colors.palette.neutral100,
    marginBottom: hp(0.8),
  },
  actualAmountText: {
    color: colors.palette.neutral100,
    fontFamily: typography.fonts.inter.semiBold,
    fontSize: 24,
  },
  seeAllbtnBlock: {
    backgroundColor: colors.palette.primary100,
    paddingVertical: hp(0.8),
    paddingHorizontal: wp(4),
    borderRadius: hp(4),
  },
  seeAllText: {
    color: colors.palette.primary500,
    fontFamily: typography.fonts.inter.medium,
  },
  bottomBlock: {
    paddingHorizontal: wp(5),
    marginTop: hp(3),
  },
  graphSortBlock: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: hp(2),
  },
  timeStampBtn: {
    paddingHorizontal: wp(5.5),
    paddingVertical: hp(0.8),
    borderRadius: hp(5),
    backgroundColor: "#FCEED4",
  },
  timeStampText: {
    color: "orange",
  },
  spacingTop: { marginTop: hp(2) },
})

export default styles
