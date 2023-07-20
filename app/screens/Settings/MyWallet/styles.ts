import { colors, shadow } from "app/theme"
import { hp, wp } from "app/utils/responsive"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  textField: {
    marginBottom: hp(2.4),
  },
  profilePicBlock: {
    width: wp(35),
    height: wp(35),
    overflow: "hidden",
    borderRadius: wp(20),
    borderWidth: 3,
    borderColor: colors.palette.neutral100,
    alignSelf: "center",
    ...shadow.light,
  },
  profilePic: {
    width: wp(35),
    height: wp(35),
    borderRadius: wp(20),
  },
  profilePicContainer: {
    alignSelf: "center",
    marginBottom: hp(3.5),
  },
  uploadPicBtn: {
    position: "absolute",
    bottom: 0,
    right: wp(2),
    width: hp(3.5),
    height: hp(3.5),
    backgroundColor: colors.palette.primary500,
    borderRadius: wp(20),
    zIndex: 100,
    justifyContent: "center",
    alignItems: "center",
    ...shadow.light,
  },
})

export default styles
