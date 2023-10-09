import { StyleSheet } from "react-native"
import { colors } from "app/theme"
import { hp, wp } from "app/utils/responsive"

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.palette.neutral100,
  },
  walletList: {
    paddingHorizontal: wp(5),
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
  addWalletBtnContainer: {
    paddingHorizontal: wp(5),
  },
})

export default styles
