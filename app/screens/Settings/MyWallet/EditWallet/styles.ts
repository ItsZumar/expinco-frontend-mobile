import { StyleSheet } from "react-native"
import { colors, typography } from "app/theme"
import { hp, wp } from "app/utils/responsive"

const styles = StyleSheet.create({
  rowFlexStartCenter: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  amountBlock: {
    marginHorizontal: wp(5),
    marginTop: hp(46),
  },
  subTitleText: {
    fontSize: hp(2.2),
    fontFamily: typography.fonts.inter.medium,
    color: colors.palette.neutral100,
    marginBottom: hp(0.5),
  },
  amountText: {
    fontSize: hp(6.5),
    lineHeight: hp(7),
    fontFamily: typography.fonts.inter.bold,
    color: colors.palette.neutral100,
    marginBottom: hp(0),
  },
  secondHalfContainer: {
    backgroundColor: colors.palette.neutral100,
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    borderTopRightRadius: hp(3),
    borderTopLeftRadius: hp(3),
  },
  itemContainer: {
    marginTop: hp(2),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: hp(8),
    paddingHorizontal: wp(4),
    borderRadius: hp(2),
    borderWidth: 1,
    borderColor: colors.palette.neutral200,
  },
  itemTextHeading: {
    fontSize: hp(2),
    fontFamily: typography.fonts.inter.normal,
    color: colors.textDim,
  },

  underHeaderBlock: {
    flex: 1,
    justifyContent: "space-between",
  },
  spacingTop: {
    marginTop: hp(4),
  },
  spacingBottom: {
    marginBottom: hp(2),
  },
})

export default styles
