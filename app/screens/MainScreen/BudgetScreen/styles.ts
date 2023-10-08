import { colors } from "app/theme"
import { hp, wp } from "app/utils/responsive"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  // root: {
  //   flex: 1,
  //   backgroundColor: colors.background,
  // },
  headerBlock: {
    paddingTop: hp(5),
    paddingBottom: hp(2),
    paddingHorizontal: wp(5),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  headerText: {
    fontSize: hp(3),
    lineHeight: hp(3.5),
  },

  p5: {
    padding: wp(2),
  },
  displayHidden: {
    opacity: 0,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: wp(5),
    backgroundColor: colors.background,
  },
  cardContainer: {
    backgroundColor: "#FCFCFC",
    padding: hp(2),
    marginBottom: hp(2),
    borderRadius: hp(3),
  },
  budgetType: {
    width: wp(40),
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
    width: wp(4),
    height: hp(2),
    borderRadius: hp(4),
    marginRight: wp(2),
  },
  progressLine: {
    alignSelf: "center",
    width: wp(83),
    height: hp(1.4),
    borderRadius: 10,
    marginTop: hp(0.6),
  },
  amount: {
    marginTop: hp(0.4),
    color: colors.palette.neutral600,
  },
})

export default styles
