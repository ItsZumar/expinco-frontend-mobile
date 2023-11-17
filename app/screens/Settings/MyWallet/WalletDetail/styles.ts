import { colors } from "app/theme"
import { hp, wp } from "app/utils/responsive"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: wp(5),
    backgroundColor: colors.palette.neutral100,
  },
  detailWalletContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: wp(10),
  },
  iconContainer: {
    backgroundColor: colors.palette.neutral200,
    paddingHorizontal: wp(3),
    paddingVertical: hp(1.5),
    marginTop: hp(3),
    marginBottom: hp(1),
    borderRadius: hp(1.5),
  },
  primaryHeading: {
    paddingHorizontal: wp(5),
    fontSize: 17,
    fontWeight: "bold",
  },
  renderCardImage: {
    width: wp(12),
    height: hp(5),
    borderRadius: 10,
  },
})

export default styles
