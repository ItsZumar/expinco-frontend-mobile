import { spacing } from "app/theme"
import { hp } from "app/utils/responsive"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spacingHorizontal: {
    paddingHorizontal: 20,
    paddingTop: hp(10)
  },
  textField: {
    marginBottom: spacing.xl,
  },
})

export default styles
