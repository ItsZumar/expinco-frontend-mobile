import React, { FC, useMemo, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { ScrollView, TextInput, TouchableOpacity, View, ViewStyle } from "react-native"
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
  Toggle,
} from "app/components"
import { ScreensEnum } from "app/enums"
import { colors } from "app/theme"
import { useStores } from "app/models"
import { useFieldErrorHandler } from "app/hooks/useFieldErrorHandler"
import styles from "./styles"

interface SignUpScreenProps
  extends NativeStackScreenProps<AppStackScreenProps<ScreensEnum.SIGNUP>> {}

export const SignUpScreen: FC<SignUpScreenProps> = observer(({ navigation }) => {
  const {
    authenticationStore: {
      firstname,
      lastname,
      email,
      password,
      setFirstName,
      setLastName,
      setEmail,
      setPassword,
      validateSignupErrors,
    },
  } = useStores()

  const passwordInput = useRef<TextInput>()

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const [agreeTandC, setAgreeTandC] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const { formHavingError } = useFieldErrorHandler(validateSignupErrors)
  const error = isSubmitted ? validateSignupErrors : null

  const PasswordRightAccessory = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={showPassword ? "hidden" : "view"}
            color={colors.palette.neutral500}
            containerStyle={{ ...props.style, marginRight: 20 }}
            size={20}
            onPress={() => setShowPassword((prev) => !prev)}
          />
        )
      },
    [showPassword],
  )

  const signupHandler = () => {
    setIsSubmitted(true)

    if (formHavingError) return

    setIsSubmitted(false)
    setPassword("")
    setEmail("")
  }

  return (
    <Screen statusBarStyle="dark">
      <Header titleTx="common.signup" leftIcon="back" onLeftPress={() => navigation.goBack()} />

      <ScrollView style={styles.spacingHorizonal} showsVerticalScrollIndicator={false}>
        <View style={styles.spacing2} />
        <TextField
          value={firstname}
          onChangeText={setFirstName}
          containerStyle={styles.textField}
          autoCapitalize="none"
          autoComplete="name"
          autoCorrect={false}
          labelTx="common.firstname"
          placeholderTx="signupScreen.enterfirstname"
          helper={error?.firstname}
          status={error?.firstname ? "error" : undefined}
          onSubmitEditing={() => passwordInput.current?.focus()}
        />
        <TextField
          value={lastname}
          onChangeText={setLastName}
          containerStyle={styles.textField}
          autoCapitalize="none"
          autoComplete="name"
          autoCorrect={false}
          labelTx="common.lastname"
          placeholderTx="signupScreen.enterlastname"
          helper={error?.lastname}
          status={error?.lastname ? "error" : undefined}
          onSubmitEditing={() => passwordInput.current?.focus()}
        />
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
          RightAccessory={PasswordRightAccessory}
          helper={error?.password}
          status={error?.password ? "error" : undefined}
        />

        <Toggle
          label={`By signing up, you agree to the Terms of Service and Privacy Policy`}
          containerStyle={{ marginBottom: 20 }}
          onValueChange={(value) => setAgreeTandC(value)}
          value={agreeTandC}
        />

        <Button
          tx="common.signup"
          style={styles.tapButton}
          disabled={!agreeTandC}
          preset={agreeTandC ? "filled" : "reversed"}
          // onPress={signupHandler}
          onPress={() => navigation.navigate(ScreensEnum.OTP_VERIFICATION as any)}
        />

        <View style={styles.bottomBlock}>
          <Text tx="signupScreen.alreadyHaveAccount" style={styles.dontHaveAccountText} />
          <TouchableOpacity onPress={() => navigation.navigate(ScreensEnum.SIGNIN as any)}>
            <Text tx="common.signin" style={styles.loginText} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  )
})
