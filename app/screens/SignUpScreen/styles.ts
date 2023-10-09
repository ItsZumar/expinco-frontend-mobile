import { StyleSheet } from "react-native"
import { colors, spacing } from "app/theme"
import { hp } from "app/utils/responsive"

const styles = StyleSheet.create({
  forgetpassBlock: {
    marginVertical: hp(4),
    alignSelf: "center",
  },
  forgetPassText: {
    color: colors.palette.primary500,
  },
  loginText: {
    color: colors.palette.primary600,
    textDecorationLine: "underline",
  },
  root: {
    flex: 1,
  },
  spacingHorizonal: {
    paddingHorizontal: 20,
  },
  spacingTop: {
    marginTop: 60,
  },
  spacing2: {
    marginTop: 20,
  },
  textField: {
    marginBottom: spacing.lg,
  },
  tapButton: {
    marginTop: spacing.xs,
  },
  bottomBlock: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  dontHaveAccountText: {
    color: colors.textDim,
    marginRight: 5,
  },
})

export default styles
