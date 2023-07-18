import { StyleSheet } from "react-native"
import { colors } from "app/theme"
import { hp, wp } from "app/utils/responsive"

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: hp(2),
  },
  topBanner: {
    marginHorizontal: wp(5),
    backgroundColor: "#EEE5FF",
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
    borderRadius: wp(2),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topBannerText: {
    color: colors.palette.primary500,
  },
  listStyle: {
    marginTop: hp(2),
    paddingHorizontal: wp(5),
  },
})

export default styles
