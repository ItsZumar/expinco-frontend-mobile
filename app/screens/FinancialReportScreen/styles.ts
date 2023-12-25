import { StyleSheet } from "react-native"
import { colors } from "app/theme"
import { wp } from "app/utils/responsive"

const styles = StyleSheet.create({
  screenStyle: {
    paddingHorizontal: wp(5),
    backgroundColor: colors.palette.neutral100,
    // flex: 1,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toggleScreenBtns: {
    flexDirection: "row",
    borderRadius: 10,
    borderColor: colors.palette.neutral200,
    borderWidth: 1,
  },
})

export default styles
