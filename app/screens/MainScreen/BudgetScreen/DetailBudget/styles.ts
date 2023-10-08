import { StyleSheet } from "react-native"
import { colors } from "app/theme"
import { hp, wp } from "app/utils/responsive"

const styles = StyleSheet.create({
  budgetType: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.palette.neutral100,
    borderColor: colors.palette.neutral200,
    borderWidth: 1,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 30,
  },
  budgetCircle: {
    width: 15,
    height: 15,
    borderRadius: 50,
    marginRight: 10,
  },
  headingContainer: {
    paddingHorizontal: wp(5),
    marginTop: hp(2),
    marginBottom: hp(-2),
  },
  listStyle: {
    marginTop: hp(2),
    paddingHorizontal: wp(5),
  },
  createBudgetBtn: {
    position: "absolute",
    bottom: hp(2),
    left: 0,
    right: 0,
    paddingHorizontal: wp(5),
  },
  detailBudgetContainer: {
    flex: 1,
    backgroundColor: colors.palette.neutral100,
    // height: hp(100),
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
