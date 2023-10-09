import { StyleSheet } from "react-native"
import { colors } from "app/theme"
import { hp, wp } from "app/utils/responsive"

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.palette.neutral100,
  },
  budgetType: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.palette.neutral100,
    borderColor: colors.palette.neutral200,
    borderWidth: 1,
    paddingVertical: hp(0.3),
    paddingHorizontal: wp(1),
    borderRadius: hp(2),
  },
  budgetCircle: {
    width: wp(4),
    height: hp(2),
    borderRadius: hp(2),
    marginRight: wp(2.7),
  },
  headingContainer: {
    paddingHorizontal: wp(5),
    marginTop: hp(2),
  },
  listStyle: {
    flex: 1,
    paddingHorizontal: wp(5),
  },
  headerIcons: {
    flexDirection: "row",
    paddingHorizontal: wp(4),
  },
  alertHeading: {
    flexDirection: "row",
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.4),
    backgroundColor: colors.error,
  },
  alertHeadingText: {
    color: colors.palette.neutral100,
    marginLeft: 10,
  },
  middleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderBottomColor: colors.palette.neutral200,
    borderBottomWidth: 1,
    paddingVertical: hp(2),
  },
  centerDivider: {
    width: wp(0.4),
    height: hp(12),
    backgroundColor: colors.palette.neutral200,
  },
  amountContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
})

export default styles
