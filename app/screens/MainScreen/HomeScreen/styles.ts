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
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  monthContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: colors.palette.neutral300,
    borderRadius: 20,
    paddingVertical: 6,
    paddingLeft: 12,
    paddingRight: 20,
  },
  monthText: {
    marginLeft: 6,
    fontSize: 14,
    fontFamily: typography.fonts.inter.semiBold,
  },
  bellContainer: {
    padding: 8,
    borderRadius: 20,
  },
  accountBalanceText: {
    textAlign: "center",
    marginBottom: hp(1),
  },
  amountText: {
    textAlign: "center",
    fontFamily: typography.fonts.inter.semiBold,
    color: colors.palette.neutral900,
    fontSize: hp(4),
    paddingTop: hp(2),
  },
  topBlock: { marginVertical: 20 },
  transBtnBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(5),
    gap: 20,
    marginTop: 15,
  },
  incBtnBlock: {
    flex: 1,
    height: 80,
    borderRadius: 20,
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
    padding: 8,
    backgroundColor: "#FFF",
    borderRadius: 16,
    marginHorizontal: 12,
  },
  topLightText: {
    color: colors.palette.neutral100,
    marginBottom: 6,
  },
  actualAmountText: {
    color: colors.palette.neutral100,
    fontFamily: typography.fonts.inter.semiBold,
    fontSize: 24,
  },
  seeAllbtnBlock: {
    backgroundColor: colors.palette.primary100,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  seeAllText: {
    color: colors.palette.primary500,
    fontFamily: typography.fonts.inter.medium,
  },
  bottomBlock: {
    paddingHorizontal: wp(5),
    marginTop: 30,
  },
  graphSortBlock: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 15,
  },
  timeStampBtn: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "#FCEED4",
  },
  timeStampText: {
    color: "orange",
    fontSize: 14,
    fontFamily: typography.fonts.inter.semiBold,
  },
  spacingTop: { marginTop: 12 },
})

export default styles
