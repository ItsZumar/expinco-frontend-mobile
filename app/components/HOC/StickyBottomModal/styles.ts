import { colors } from "app/theme"
import { hp, wp } from "app/utils/responsive"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  backdrop: {
    alignItems: "center",
    backgroundColor: colors.palette.backdrop,
    flex: 1,
    justifyContent: "flex-end",
  },
  modalBg: {
    backgroundColor: colors.palette.neutral100,
    borderTopLeftRadius: hp(4),
    borderTopRightRadius: hp(4),
    paddingHorizontal: wp(5),
    paddingVertical: hp(5),
    width: wp(100),
  },
})

export default styles
