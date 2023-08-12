import { colors, shadow } from "app/theme"
import { hp, wp } from "app/utils/responsive"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  rootContainer: { flex: 1, backgroundColor: colors.palette.neutral100 },
  detailWalletContainer: { flexDirection: "column", alignItems: "center", marginBottom: wp(20) },
  iconContainer: {
    backgroundColor: colors.palette.neutral200,
    paddingHorizontal: wp(3),
    paddingVertical: hp(1.5),
    marginTop: 30,
    borderRadius: 10,
  },
  walletTitle: { fontSize: 25, fontWeight: "bold", padding: 12 },
  walletAmount: { fontSize: 33, fontWeight: "bold", padding: 12 },
  primaryHeading: { paddingHorizontal: wp(5), fontSize: 17, fontWeight: "bold" },

  listStyle: {
    marginTop: hp(2),
    paddingHorizontal: wp(5),
  },
})

export default styles
