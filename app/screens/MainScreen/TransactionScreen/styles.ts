import { StyleSheet } from "react-native"
import { colors, typography } from "app/theme"

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  rowFlexStartCenter: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  subTitleText: {
    fontSize: 18,
    fontFamily: typography.fonts.inter.medium,
    color: colors.palette.neutral100,
    marginBottom: 5,
  },
  amountText: {
    fontSize: 60,
    lineHeight: 67,
    fontFamily: typography.fonts.inter.bold,
    color: colors.palette.neutral100,
    marginBottom: 15,
  },
  secondHalfContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
  },
  itemContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 15,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.palette.neutral200,
  },
  itemTextHeading: {
    fontSize: 16,
    fontFamily: typography.fonts.inter.normal,
    color: colors.textDim,
  },
  inputFieldStyle: {
    flex: 1,
    paddingLeft: -5,
    fontSize: 16,
    fontFamily: typography.fonts.inter.normal,
    color: colors.textDim,
  },
  attachmentBtn: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 15,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.palette.neutral400,
    borderStyle: "dashed",
  },
  incomeBgColor: {
    backgroundColor: colors.palette.expense,
  },
  expenseBgColor: {
    backgroundColor: colors.palette.income,
  },
})

export default styles
