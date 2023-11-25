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
    marginTop: hp(16),
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
    marginBottom: hp(1.2),
  },
  secondHalfContainer: {
    flex: 1,
    backgroundColor: colors.palette.neutral100,
    paddingHorizontal: wp(5),
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
  inputFieldStyle: {
    flex: 1,
    paddingLeft: -5,
    fontSize: hp(2),
    fontFamily: typography.fonts.inter.normal,
    color: colors.textDim,
  },
  attachmentBtn: {
    marginTop: hp(2),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: hp(8),
    borderRadius: hp(2),
    borderWidth: 1,
    borderColor: colors.palette.neutral400,
    borderStyle: "dashed",
  },
  underHeaderBlock: {
    flex: 1,
    justifyContent: "space-between",
  },
  spacingRight: {
    marginRight: wp(3),
  },
  spacingTop: {
    position: "absolute",
    bottom: hp(11),
    paddingHorizontal: wp(5),
    flexDirection: "row",
  },
  closeBtn: {
    position: "absolute",
    backgroundColor: "red",
    right: hp(0.7),
    top: hp(0.7),
    borderRadius: wp(50),
  },
})

export default styles
