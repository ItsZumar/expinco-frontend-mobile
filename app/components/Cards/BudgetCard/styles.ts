import { colors } from "app/theme"
import { hp, wp } from "app/utils/responsive"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.palette.neutral200,
    padding: hp(2),
    marginBottom: hp(1.7),
    borderRadius: hp(1.5),
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    width: wp(83),
    height: hp(1.4),
    borderRadius: hp(2),
    marginTop: hp(0.6),
  },
  remainingAmount: {
    marginTop: hp(2.5),
  },
  alertText: {
    color: colors.error,
  },
})

export default styles
