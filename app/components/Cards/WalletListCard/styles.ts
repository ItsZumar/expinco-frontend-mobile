import { StyleSheet } from "react-native"
import { hp, wp } from "app/utils/responsive"
import { colors } from "app/theme"

const styles = StyleSheet.create({
  walletCardContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: colors.palette.neutral200,
  },
  iconContainer: {
    backgroundColor: colors.palette.neutral200,
    padding: wp(3.5),
    borderRadius: hp(1.8),
    marginRight: wp(2.5),
  },
  innerLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
})

export default styles
