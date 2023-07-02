import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { ScreensEnum } from "app/enums"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface SignInScreenProps extends NativeStackScreenProps<AppStackScreenProps<ScreensEnum.SIGNIN>> {}

export const LoginScreen: FC<SignInScreenProps> = observer(() => {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="fixed">
      <Text text="login" preset="heading" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: 'center'
}
