import { StyleSheet } from "react-native"
import { colors, typography } from "../../../theme"
import { hp, wp } from "../../../utils/responsive"

const styles = StyleSheet.create({
  walletCardContainer: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: colors.palette.neutral200,
  },
  iconContainer: {
    backgroundColor: colors.palette.neutral200,
    padding: wp(3.5),
    borderRadius: 15,
    marginRight: 10,
  },
  primaryText: { fontSize: 18, fontWeight: "700" },
  innerLeftContainer: { flexDirection: "row", alignItems: "center" },
})

export default styles
