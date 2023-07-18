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
})

export default styles
