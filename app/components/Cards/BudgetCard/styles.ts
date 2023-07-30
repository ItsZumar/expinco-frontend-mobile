import { StyleSheet } from "react-native"
import { colors, typography } from "../../../theme"
import { hp, wp } from "../../../utils/responsive"

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FCFCFC",
    padding: 15,
    marginBottom: 15,
    borderRadius: 15,
    shadowColor: colors.palette.neutral500,
    shadowOffset: {
      width: 0,
      height: 0.3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,

    elevation: 4,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  remainingAmount: { marginTop: 15, fontSize: 22, fontWeight: "800" },
  alertText: { color: colors.error, fontSize: 13, marginBottom: 10 },
})

export default styles
