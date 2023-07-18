import { Platform } from "react-native"

export const shadow = {
  lighter: Platform.select({
    android: {
      elevation: 5,
      shadowColor: "rgba(0, 0, 0, .1)",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 1,
      shadowRadius: 2,
    },
    ios: {
      elevation: 5,
      shadowColor: "rgba(0, 0, 0, .1)",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 1,
      shadowRadius: 2,
    },
  }),
  light: Platform.select({
    android: {
      elevation: 5,
      shadowColor: "rgba(0, 0, 0, .4)",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 1,
      shadowRadius: 2,
    },
    ios: {
      elevation: 5,
      shadowColor: "rgba(0, 0, 0, .1)",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 1,
      shadowRadius: 2,
    },
  }),
  medium: Platform.select({
    android: {
      elevation: 10,
      shadowColor: "rgba(0, 0, 0, .4)",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 1,
      shadowRadius: 2,
    },
    ios: {
      elevation: 5,
      shadowColor: "rgba(0, 0, 0, .1)",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 1,
      shadowRadius: 2,
    },
  }),
}
