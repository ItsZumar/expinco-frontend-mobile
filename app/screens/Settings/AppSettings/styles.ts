import { colors, shadow } from "app/theme"
import { hp, wp } from "app/utils/responsive"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: colors.palette.neutral100,
    paddingHorizontal: wp(5),
  },
  link: {
    fontSize: hp(2.2),
    color: colors.error,
    paddingHorizontal: wp(5),
    fontWeight: "700",
    marginTop: hp(1.3),
    position: "absolute",
    top: hp(30),
  },
})

export default styles
