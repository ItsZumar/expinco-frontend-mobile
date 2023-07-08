import { StyleSheet } from "react-native"
import { colors } from "app/theme"
import { hp, wp } from "app/utils/responsive"

const styles = StyleSheet.create({
  opportunitiesBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: hp(1),
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  lineBlock: {
    width: hp(0.5),
    height: hp(3),
    backgroundColor: colors.palette.primary500,
    marginRight: wp(3),
    borderRadius: hp(1),
  },
  rightBlock: {
    padding: hp(0.6),
  },
})

export default styles
