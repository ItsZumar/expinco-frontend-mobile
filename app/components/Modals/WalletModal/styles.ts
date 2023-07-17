import { colors } from "../../../theme"
import { StyleSheet } from "react-native"
import { hp } from "../../../utils/responsive"

const styles = StyleSheet.create({
  subTitleText: {
    marginBottom: hp(3),
    color: colors.text,
    fontSize: hp(1.75),
  },
  flatlistStyles: {
    flex: 1,
  },
  spacingBottom: {
    position: "absolute",
    bottom: hp(2),
  },
  containerStyle: { paddingBottom: hp(10) },
})

export default styles
