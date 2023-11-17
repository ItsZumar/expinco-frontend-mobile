import { colors, typography } from "app/theme"
import { hp, wp } from "app/utils/responsive"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  otpForm: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: hp(5),
  },
  codeExpireText: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: hp(1),
    alignItems: "center",
  },
  verifyBtn: {
    backgroundColor: colors.palette.primary500,
    marginTop: hp(5),
  },
  disableVerifyBtn: {
    backgroundColor: colors.palette.neutral400,
    marginTop: hp(5),
  },
  resendCodeBtn: {
    backgroundColor: colors.palette.primary500,
    marginTop: hp(1),
  },
  bottomBlock: {
    alignItems: "center",
    marginBottom: hp(2),
  },
  dontReceiveOtpText: {
    fontSize: hp(2),
    lineHeight: hp(2.2),
  },
  resendOTPBtn: {
    color: colors.palette.secondary500,
    fontWeight: "bold",
    fontSize: hp(2),
    lineHeight: hp(2.2),
    textTransform: "uppercase",
  },
  codeVerifyBlock: {
    backgroundColor: "#F2F3F4",
    borderRadius: hp(0.6),
    width: hp(6.5),
    height: hp(8),
    textAlign: "center",
    fontSize: hp(3),
    color: colors.palette.primary500,
    fontFamily: typography.primary.semiBold,
  },
  conjoinImage: {
    width: wp(80),
    height: wp(80),
    alignSelf: "center",
  },
  infoText: {
    fontSize: hp(1.75),
    paddingTop: hp(3.2),
  },
  subtitleText: {
    fontSize: hp(2.2),
    marginTop: hp(2.5),
    fontWeight: "bold",
  },
  spacingTop: { marginTop: hp(2), fontSize: hp(1.8) },
  timerText: { marginTop: hp(2), color: colors.palette.primary500, fontSize: hp(1.8) },
})

export default styles
