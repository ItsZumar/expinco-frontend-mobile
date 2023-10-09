import React, { FC, useState } from "react"
import { View } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Button, Header, Screen, Text, TextField } from "app/components"
import { ScreensEnum } from "app/enums"
import styles from "./styles"

interface ResetPasswordScreenProps
  extends NativeStackScreenProps<AppStackScreenProps<ScreensEnum.RESET_PASSWORD>> {}

export const ResetPasswordScreen: FC<ResetPasswordScreenProps> = ({ navigation }) => {
  // const {
  //   authenticationStore: { password, confirmpassword, setPassword, setConfirmPassword ,validateResetPasswordErrors },
  // } = useStores()

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  // const { formHavingError } = useFieldErrorHandler(validateResetPasswordErrors)
  // const error = isSubmitted ? validateResetPasswordErrors : null

  const submitHandler = () => {
    setIsSubmitted(true)

    // if (formHavingError) return

    setIsSubmitted(false)
    navigation.navigate(ScreensEnum.SIGNIN as any)
  }

  return (
    <Screen style={styles.container}>
      <Header
        titleTx="resetPassword.resetPass"
        leftIcon="back"
        onLeftPress={() => navigation.goBack()}
      />

      <View style={styles.spacingHorizontal}>
        <TextField
          // value={password}
          // onChangeText={setPassword}
          containerStyle={styles.textField}
          autoCapitalize="none"
          autoComplete="password"
          autoCorrect={false}
          placeholderTx="signinScreen.enterEmail"
          // helper={error?.password}
          // status={error?.password ? "error" : undefined}
        />
        <TextField
          // value={confirmpassword}
          // onChangeText={setConfirmPassword}
          containerStyle={styles.textField}
          autoCapitalize="none"
          autoComplete="password"
          autoCorrect={false}
          placeholderTx="signinScreen.enterEmail"
          // helper={error?.confirmpassword}
          // status={error?.confirmpassword ? "error" : undefined}
        />

        <Button tx="common.submit" preset="filled" onPress={submitHandler} />
      </View>
    </Screen>
  )
}
