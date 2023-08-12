import { colors, typography } from "app/theme"
import { hp, wp } from "app/utils/responsive"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    backgroundColor: colors.palette.neutral100,
  },
  innerContainer: {
    paddingHorizontal: wp(5),
    marginTop: hp(4),
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
  text: { fontSize: 16, fontWeight: "700", marginTop: hp(2.5) },
  btnIcon: {
    marginRight: wp(3),
  },
  spacingTop: {
    marginTop: hp(4),
  },
  spacingBottom: {
    marginBottom: hp(2),
  },
})

export default styles
