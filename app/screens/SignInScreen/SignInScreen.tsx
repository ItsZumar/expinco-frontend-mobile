import React, { FC, useMemo, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { Pressable, TextInput, TouchableOpacity, View, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import {
  Button,
  Icon,
  Screen,
  Text,
  TextField,
  Header,
  TextFieldAccessoryProps,
} from "app/components"
import { ScreensEnum } from "app/enums"
import { colors } from "app/theme"
import { useStores } from "app/models"
import { useFieldErrorHandler } from "app/hooks/useFieldErrorHandler"
import styles from "./styles"

interface SignInScreenProps extends NativeStackScreenProps<AppStackScreenProps<ScreensEnum.SIGNIN>> {}

export const SignInScreen: FC<SignInScreenProps> = observer(({ navigation }) => {
  const {
    authenticationStore: { email, password, setEmail, setPassword, validationError },
  } = useStores()

  const passwordInput = useRef<TextInput>()

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const { formHavingError } = useFieldErrorHandler(validationError)
  const error = isSubmitted ? validationError : null

  const PasswordRightAccessory = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={showPassword ? "hidden" : "view"}
            color={colors.palette.neutral500}
            containerStyle={{ ...props.style, marginRight: 20 }}
            size={20}
            onPress={() => setShowPassword(prev => !prev)}
          />
        )
      },
    [showPassword],
  )

  const login = () => {
    setIsSubmitted(true)

    if (formHavingError) return

    setIsSubmitted(false)
    setPassword("")
    setEmail("")
  }

  return (
    <Screen style={styles.root} preset="auto">
      <Header titleTx="common.signin" leftIcon="back" />

      <View style={styles.spacingHorizonal}>
        <View style={styles.spacingTop}>
          <TextField
            value={email}
            onChangeText={setEmail}
            containerStyle={styles.textField}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            keyboardType="email-address"
            labelTx="common.email"
            placeholderTx="signinScreen.enterEmail"
            helper={error?.email}
            status={error?.email ? "error" : undefined}
            onSubmitEditing={() => passwordInput.current?.focus()}
          />
          <TextField
            ref={passwordInput}
            value={password}
            onChangeText={setPassword}
            containerStyle={styles.textField}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            secureTextEntry={!showPassword}
            labelTx="common.password"
            placeholderTx="signinScreen.enterPass"
            onSubmitEditing={login}
            RightAccessory={PasswordRightAccessory}
            helper={error?.password}
            status={error?.password ? "error" : undefined}
          />
          <Button tx="common.login" style={styles.tapButton} preset="filled" onPress={login} />
        </View>

        <TouchableOpacity style={styles.forgetpassBlock}>
          <Text tx="signinScreen.forgotPass" preset="bold" style={styles.forgetPassText} />
        </TouchableOpacity>

        <View style={styles.bottomBlock}>
          <Text tx="signinScreen.donthaveaccount" style={styles.dontHaveAccountText} />
          <TouchableOpacity onPress={() => navigation.navigate(ScreensEnum.SIGNUP as any)}>
            <Text tx="common.signup" style={styles.loginText} />
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  )
})
