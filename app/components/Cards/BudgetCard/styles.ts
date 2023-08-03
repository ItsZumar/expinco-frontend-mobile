import { StyleSheet } from "react-native"
import { colors, shadow, typography } from "../../../theme"
import { hp, wp } from "../../../utils/responsive"

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.palette.neutral200,
    padding: 15,
    marginBottom: 15,
    borderRadius: 15,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
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
  alertText: { color: colors.error, fontSize: 13 },
})

export default styles
