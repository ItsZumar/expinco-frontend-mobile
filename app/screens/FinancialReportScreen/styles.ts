import { StyleSheet } from "react-native"
import { colors } from "app/theme"
import { hp, wp } from "app/utils/responsive"

const styles = StyleSheet.create({
  screenStyle: {
    paddingHorizontal: wp(5),
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  monthContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: colors.palette.neutral300,
    borderRadius: 20,
    paddingVertical: hp(0.7),
    paddingLeft: wp(3.4),
    paddingRight: wp(4.5),
  },
  toggleScreenBtns: {
    flexDirection: "row",
    borderRadius: 10,
    borderColor: colors.palette.neutral200,
    borderWidth: 1,
  },
})

export default styles
