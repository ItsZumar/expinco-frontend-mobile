import { colors } from "app/theme"
import { StyleSheet } from "react-native"
import { hp } from "app/utils/responsive"

const styles = StyleSheet.create({
  subTitleText: {
    marginBottom: hp(3),
    color: colors.text,
    fontSize: hp(1.75),
  },
  flatlistStyles: {
    flex: 1,
  },
  containerStyle: {
    paddingBottom: hp(10),
  },
  spacingBottom: {
    position: "absolute",
    bottom: hp(5),
  },
})

export default styles
