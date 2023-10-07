import { StyleSheet } from "react-native"
import { hp, wp } from "../../../utils/responsive"
import { colors } from "../../../theme"

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: colors.palette.backdrop,
  },
  modalBg: {
    backgroundColor: colors.palette.neutral100,
    width: wp(100),
    borderTopLeftRadius: hp(4),
    borderTopRightRadius: hp(4),
    paddingHorizontal: wp(5),
    paddingVertical: hp(5),
  },
})

export default styles
