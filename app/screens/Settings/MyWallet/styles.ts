import { StyleSheet } from "react-native"
import { colors } from "app/theme"
import { hp, wp } from "app/utils/responsive"

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.palette.neutral100,
    flex: 1,
  },
  walletList: {
    paddingTop: hp(5),
  },
  totalBalanceContainer: {
    height: hp(20),
    justifyContent: "center",
    alignItems: "center",
  },
  totalBalanceImage: {
    width: wp(100),
    height: hp(20),
    position: "absolute",
  },
  btnContainer: {
    position: "absolute",
    bottom: 0,
    paddingHorizontal: wp(5),
    backgroundColor: colors.palette.neutral100,
    marginBottom: hp(6.5),
    flexDirection: "row",
  },
})

export default styles
