import { StyleSheet } from "react-native"
import { colors } from "../../../theme"
import { hp, wp } from "../../../utils/responsive"

const styles = StyleSheet.create({
  selectedBtnStyle: {
    borderWidth: 1,
    borderColor: colors.palette.primary500,
    borderRadius: hp(5),
    paddingHorizontal: wp(6),
    paddingVertical: hp(0.9),
  },
  btnStyle: {
    borderWidth: 1,
    borderColor: colors.palette.neutral300,
    borderRadius: hp(5),
    paddingHorizontal: wp(6),
    paddingVertical: hp(0.9),
  },
  selectedTextStyle: {
    color: colors.palette.primary500,
  },
  textStyle: {
    color: colors.palette.neutral800,
  },
})

export default styles
