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
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  monthContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: colors.palette.neutral300,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 20,
  },
  monthText: {
    marginLeft: 12,
    fontSize: 14,
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
    backgroundColor: "#00A86B",
  },
  expBg: {
    backgroundColor: "#FD3C4A",
  },
  arrowBlock: {
    padding: 8,
    backgroundColor: "#FFF",
    borderRadius: 16,
    marginHorizontal: 16,
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
})

export default styles
