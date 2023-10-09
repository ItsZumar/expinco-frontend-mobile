import { StyleSheet } from "react-native"
import { hp, wp } from "app/utils/responsive"
import { colors, typography } from "app/theme"

const styles = StyleSheet.create({
  flexSpace: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    gap: wp(2),
    alignItems: "center",
    justifyContent: "space-between",
  },
  headingStyle: {
    marginVertical: hp(1.5),
  },
  roundedBtnsContainer: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },
  itemContainer: {
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
  btnStyle: {
    marginTop: hp(2),
  },
})

export default styles
