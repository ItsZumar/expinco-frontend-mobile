import { colors } from "app/theme"
import { hp, wp } from "app/utils/responsive"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: hp(3),
  },
  headerBlock: {
    marginVertical: 15,
    paddingHorizontal: wp(5),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: hp(3),
    lineHeight: hp(3.5),
  },
  createBudgetBtn: {
    position: "absolute",
    bottom: hp(2),
    left: 0,
    right: 0,
    paddingHorizontal: wp(5),
  },
  p5: { padding: 5 },
  displayHidden: { opacity: 0 },
  innerContainer: {
    paddingHorizontal: wp(5),
  },
  cardContainer: {
    backgroundColor: "#FCFCFC",
    padding: 15,
    marginBottom: 10,
    borderRadius: 15,
  },
  budgetType: {
    //required changes
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
    width: 15,
    height: 15,
    borderRadius: 50,
    marginRight: 10,
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
