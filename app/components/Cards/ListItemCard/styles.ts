import { StyleSheet } from "react-native"
import { colors, typography } from "../../../theme"
import { hp, wp } from "../../../utils/responsive"

const styles = StyleSheet.create({
  renderCardBlock: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(5),
    paddingVertical: hp(1),
    marginBottom: hp(1),
    borderRadius: hp(1.5),
    backgroundColor: colors.palette.neutral200,
    borderWidth: 1,
    borderColor: colors.palette.neutral100,
  },
  renderCardImage: { width: wp(12), height: wp(12), borderRadius: 50, marginRight: 20 },
  renderCardText: {
    fontSize: hp(1.8),
    color: colors.text,
    fontFamily: typography.fonts.inter.normal,
  },
})

export default styles
