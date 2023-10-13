import { colors, shadow } from "app/theme"
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
  alignSelfCenter: {
    alignSelf: "center",
  },
  textAlignCenter: {
    textAlign: "center",
  },
  profilePicBlock: {
    width: wp(35),
    height: wp(35),
    overflow: "hidden",
    borderRadius: wp(20),
    borderWidth: 3,
    borderColor: colors.palette.neutral100,
    ...shadow.light,
  },
  profilePic: {
    width: wp(35),
    height: wp(35),
    borderRadius: wp(20),
  },
  nameText: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  totalAmountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: 30,
    paddingHorizontal: wp(5),
  },
  subAmountContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  walletsContainer: {
    marginVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  wallet: {
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: colors.palette.primary100,
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  walletText: {
    fontSize: 12,
    color: colors.text,
  },
  achievementsContainer: {
    marginVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14,
  },
  achievement: {
    backgroundColor: colors.palette.primary100,
    padding: 10,
    borderRadius: 20,
  },
})

export default styles
