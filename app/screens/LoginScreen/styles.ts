import { StyleSheet } from 'react-native';
import { colors } from 'app/theme'
import { hp } from '../../utils/responsive';

const styles = StyleSheet.create({
  loginBtn: {
    marginTop: hp(6),
  },
  forgetpassBlock: {
    marginVertical: hp(4),
    alignSelf: 'center'
  },
  forgetPassText: {
    color: colors.palette.primary500,
  },
  headerBackBtn: {
    paddingVertical: 5,
    paddingRight: 5
  },
  headerForwardBtn: {
    paddingVertical: 5,
    paddingLeft: 5,
    opacity: 0
  },
  loginText: {
    color: colors.palette.primary600,
    textDecorationLine: "underline"
  }
});

export default styles;