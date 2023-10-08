import { StyleSheet } from "react-native"
import { colors, typography } from "app/theme"
import { hp, wp } from "app/utils/responsive"

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  scrollViewStyle: {
    flex: 1,
    // backgroundColor: colors.palette.neutral100,
  },
  topContainer: {
    alignItems: "center",
    backgroundColor: colors.error,
    paddingTop: hp(4),
    paddingBottom: hp(10),
    borderBottomLeftRadius: hp(2.5),
    borderBottomRightRadius: hp(2.5),
  },
  amount: {
    textAlign: "center",
    color: colors.palette.neutral100,
    paddingTop: hp(3.5),
  },
  detailCard: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderColor: colors.palette.neutral200,
    borderWidth: 1,
    paddingVertical: hp(1),
    borderRadius: hp(1.8),
    marginTop: hp(-3.8),
    backgroundColor: colors.palette.neutral100,
  },
  transactionName: {
    textAlign: "center",
    paddingTop: hp(1),
    color: colors.palette.neutral100,
  },
  date: {
    paddingTop: hp(1),
    color: colors.palette.neutral200,
  },
  bottomContainer: {
    paddingHorizontal: wp(5),
  },
  upperText: {
    fontSize: 14,
    color: colors.palette.neutral500,
    fontFamily: typography.primary.medium,
  },
  lowerText: {
    fontSize: 16,
    color: colors.palette.neutral900,
    fontFamily: typography.primary.semiBold,
    textTransform: "capitalize",
  },
  divider: {
    height: 1,
    width: "100%",
    borderRadius: 1,
    borderWidth: 1,
    borderColor: colors.palette.neutral300,
    borderStyle: "dashed",
    zIndex: 0,
    marginTop: hp(3),
    marginBottom: hp(2),
  },
  description: {
    marginTop: hp(1),
    marginBottom: hp(2),
  },
  attachmentsContainer: {
    marginVertical: hp(1),
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },
})

export default styles
