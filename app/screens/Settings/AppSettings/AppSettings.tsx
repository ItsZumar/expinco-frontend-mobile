import React, { FC, useState } from "react"
import { TouchableOpacity, View } from "react-native"
import { Switch } from "react-native"
import { colors } from "app/theme"
import { ScreensEnum } from "app/enums"
import { Text, Header, Icon } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import styles from "./styles"

export const AppSettingsScreen: FC<AppStackScreenProps<ScreensEnum.APP_SETTINGS>> = ({
  navigation,
}) => {
  const [themeSwitchBtn, setThemeSwitchBtn] = useState<boolean>(false)
  const [notiSwitchBtn, setNotiSwitchBtn] = useState<boolean>(false)

  const themeToggleSwitch = () => {
    setThemeSwitchBtn((prev) => !prev)
  }

  const notiToggleSwitch = () => {
    setNotiSwitchBtn((prev) => !prev)
  }

  return (
    <View style={styles.root}>
      <Header title="Settings" leftIcon="back" onLeftPress={() => navigation.goBack()} />
      <View style={styles.innerContainer}>
        {/* Theme */}
        <TouchableOpacity onPress={() => {}} style={styles.listItem}>
          <Text text={"Theme"} preset="subheading" />
          <Switch
            trackColor={{ false: colors.palette.neutral300, true: colors.palette.primary500 }}
            thumbColor={themeSwitchBtn ? colors.palette.neutral100 : colors.palette.neutral100}
            ios_backgroundColor={colors.palette.neutral500}
            onValueChange={() => themeToggleSwitch()}
            value={themeSwitchBtn}
          />
        </TouchableOpacity>

        {/* Notification */}
        <TouchableOpacity onPress={() => {}} style={styles.listItem}>
          <Text text={"Notification"} preset="subheading" />
          <Switch
            trackColor={{ false: colors.palette.neutral300, true: colors.palette.primary500 }}
            thumbColor={notiSwitchBtn ? colors.palette.neutral100 : colors.palette.neutral100}
            ios_backgroundColor={colors.palette.neutral500}
            onValueChange={() => notiToggleSwitch()}
            value={notiSwitchBtn}
          />
        </TouchableOpacity>

        {/* About */}
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreensEnum.ABOUT)}
          style={styles.listItem}
        >
          <Text text={"About"} preset="subheading" />
          <Icon icon={"caretRight"} color={colors.palette.primary500} />
        </TouchableOpacity>

        {/* Privacy Policy */}
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreensEnum.PRIVACY_POLICY)}
          style={styles.listItem}
        >
          <Text text={"Privacy Policy"} preset="subheading" />
          <Icon icon={"caretRight"} color={colors.palette.primary500} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Text text="Delete My Account" preset="subheading" style={styles.link} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
