import { colors, typography } from "app/theme"
import { hp, wp } from "app/utils/responsive"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    position: "absolute",
    top: hp(7),
    left: wp(5),
  },
  menu: {
    backgroundColor: "white",
    padding: hp(2),
    borderRadius: 8,
    borderWidth: wp(0.2),
    borderColor: colors.palette.neutral300,
    height: hp(68),
  },
  menuOpts: {
    paddingHorizontal: wp(5),
    paddingBottom: hp(1.1),
    marginBottom: hp(1.1),
    borderBottomColor: colors.palette.neutral200,
    borderBottomWidth: wp(0.3),
    alignItems: "center",
  },
  closeBtn: {
    position: "absolute",
    backgroundColor: "red",
    right: hp(0.7),
    top: hp(0.7),
    borderRadius: wp(50),
  },
})

export default styles
