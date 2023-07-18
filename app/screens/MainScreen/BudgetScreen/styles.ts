import { colors } from "app/theme"
import { hp, wp } from "app/utils/responsive"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: hp(2),
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
})

export default styles
