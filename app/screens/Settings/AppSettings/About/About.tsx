import React, { FC } from "react"
import { View } from "react-native"
import { ScreensEnum } from "app/enums"
import { observer } from "mobx-react-lite"
import { Header } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import styles from "./styles"

export const AboutScreen: FC<AppStackScreenProps<ScreensEnum.ABOUT>> = observer(
  ({ navigation }) => {
    return (
      <View style={styles.root}>
        <Header title="About" leftIcon="back" onLeftPress={() => navigation.goBack()} />
      </View>
    )
  },
)
