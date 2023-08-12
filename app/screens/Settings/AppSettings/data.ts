import { ScreensEnum } from "app/enums"
import { navigate } from "app/navigators"

export const SETTING_ITEMS = [
  {
    id: "0",
    listItem: "Theme",
    icon: null,
  },
  {
    id: "1",
    listItem: "Notification",
    icon: null,
  },
  {
    id: "2",
    listItem: "About",
    icon: "caretRight",
    onPress: () => navigate(ScreensEnum.ABOUT),
  },
  {
    id: "3",
    listItem: "Privacy Policy",
    icon: "caretRight",
    onPress: () => navigate(ScreensEnum.PRIVACY_POLICY),
  },
]
