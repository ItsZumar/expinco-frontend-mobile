import { colors } from "app/theme"
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
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: hp(1.9),
  },
  link: {
    color: colors.error,
    marginTop: hp(1.3),
  },
})

export default styles
