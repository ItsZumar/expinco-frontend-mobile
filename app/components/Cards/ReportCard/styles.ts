import { colors } from "app/theme"
import { hp, wp } from "app/utils/responsive"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  topPortion: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp(2.5),
  },
  progressLine: {
    alignSelf: "center",
    width: wp(90),
    height: hp(1.4),
    borderRadius: 10,
    marginTop: hp(0.6),
  },
  budgetType: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.palette.neutral100,
    borderColor: colors.palette.neutral200,
    borderWidth: 1,
    paddingVertical: wp(0.3),
    paddingHorizontal: wp(0.8),
    borderRadius: hp(2),
  },
  budgetCircle: {
    width: wp(4),
    height: hp(2),
    borderRadius: hp(3),
    marginRight: wp(2.5),
  },
})

export default styles
