import React, { FC, useState } from "react"
import { View } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Button, Header, Screen, Text, TextField } from "app/components"
import { ScreensEnum } from "app/enums"
import styles from "./styles"
// import { useStores } from "app/models"
import { useFieldErrorHandler } from "app/hooks/useFieldErrorHandler"

interface ForgotPasswordScreenProps
  extends NativeStackScreenProps<AppStackScreenProps<ScreensEnum.FORGOT_PASSWORD>> {}

export const ForgotPasswordScreen: FC<ForgotPasswordScreenProps> = ({ navigation }) => {
  // const {
  //   authenticationStore: { email, password, setEmail, setPassword, validateForgotPasswordErrors },
  // } = useStores()

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  // const { formHavingError } = useFieldErrorHandler(validateForgotPasswordErrors)
  // const error = isSubmitted ? validateForgotPasswordErrors : null

  const submitHandler = () => {
    setIsSubmitted(true)

    // if (formHavingError) return

    setIsSubmitted(false)
    navigation.navigate(ScreensEnum.OTP_VERIFICATION as any)
  }

  return (
    <Screen style={styles.container}>
      <Header
        titleTx="forgotPassword.forgotPassword"
        leftIcon="back"
        onLeftPress={() => navigation.goBack()}
      />

      <View style={styles.spacingHorizontal}>
        <Text
          tx="forgotPassword.dontWorryText"
          preset="heading"
          style={{ marginTop: 40, marginBottom: 40 }}
        />

        <TextField
          // value={email}
          // onChangeText={setEmail}
          containerStyle={styles.textField}
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
          keyboardType="email-address"
          placeholderTx="signinScreen.enterEmail"
          // helper={error?.email}
          // status={error?.email ? "error" : undefined}
        />

        <Button tx="common.continue" preset="filled" onPress={submitHandler} />
      </View>
    </Screen>
  )
}
