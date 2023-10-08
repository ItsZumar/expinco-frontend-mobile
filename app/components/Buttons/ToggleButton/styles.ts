import { StyleSheet } from "react-native"
import { colors } from "app/theme"
import { hp } from "app/utils/responsive"

const styles = StyleSheet.create({
  toggleBtn: {
    padding: hp(0.9),
    borderRadius: hp(1),
  },
  activeToggleBtn: {
    backgroundColor: colors.palette.primary500,
    borderColor: colors.palette.primary500,
    borderWidth: 1,
  },
  activeToggleBtnIcon: {
    color: colors.palette.neutral100,
  },
  toggleBtnIcon: {
    color: colors.palette.primary500,
  },
})

export default styles
