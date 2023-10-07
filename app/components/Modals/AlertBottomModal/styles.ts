import { StyleSheet } from "react-native"
import { hp, wp } from "../../../utils/responsive"

const styles = StyleSheet.create({
  spacing: {
    textAlign: "center",
    marginBottom: hp(2),
  },
  btnContainer: {
    flexDirection: "row",
    width: wp(90),
    gap: 20,
  },
  btnStyles: { flex: 1 },
})

export default styles
