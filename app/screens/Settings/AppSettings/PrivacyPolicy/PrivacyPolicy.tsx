import React, { FC } from "react"
import { View } from "react-native"
import { ScreensEnum } from "app/enums"
import { Header } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import styles from "./styles"

export const PrivacyPolicyScreen: FC<AppStackScreenProps<ScreensEnum.PRIVACY_POLICY>> = ({
  navigation,
}) => {
  return (
    <View style={styles.root}>
      <Header title="Privacy Policy" leftIcon="back" onLeftPress={() => navigation.goBack()} />
    </View>
  )
}
