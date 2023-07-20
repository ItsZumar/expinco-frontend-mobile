import { ScreensEnum } from "app/enums";
import { navigate } from "app/navigators";

export const SETTINGS_ITEMS = [
    {
        _id: "0",
        name: "Personal",
        onPress: () => navigate(ScreensEnum.PERSONAL_SETTINGS),
        icon: "person-circle"
    }, 
    {
        _id: "1",
        name: "My Wallets",
        onPress: () => navigate(ScreensEnum.MY_WALLETS),
        icon: "wallet"
    },
    {
        _id: "2",
        name: "Settings",
        href: "OTHER_SETTINGS",
        icon: "settings"
    },
    {
        _id: "3",
        name: "Export Data",
        href: "EXPORT_DATA",
        icon: "download"
    },
    {
        _id: "4",
        name: "Logout",
        href: "LOGOUT",
        icon: "log-out"
    },
]