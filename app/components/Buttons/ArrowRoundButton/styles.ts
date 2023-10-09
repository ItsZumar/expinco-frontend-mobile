import { colors } from "app/theme"
import { hp, wp } from "app/utils/responsive"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  monthContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: colors.palette.neutral300,
    borderRadius: hp(3),
    paddingVertical: hp(0.8),
    paddingLeft: wp(4),
    paddingRight: wp(5),
  },
  monthText: {
    marginLeft: wp(0.6),
  },
})

export { styles }
