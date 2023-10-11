import React, { FC, useMemo, useRef, useState } from "react"
import { ScrollView, TextInput, TouchableOpacity, View } from "react-native"
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
import { useAppDispatch } from "app/store/store"
import { signupService } from "app/store/slices/auth/authService"
import { SignupPayloadI } from "app/store/slices/auth/types"
import styles from "./styles"

interface SignUpScreenProps
  extends NativeStackScreenProps<AppStackScreenProps<ScreensEnum.SIGNUP>> {}

export const SignUpScreen: FC<SignUpScreenProps> = ({ navigation }) => {
  const dispatch = useAppDispatch()

  const passwordInput = useRef<TextInput>()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [agreeTandC, setAgreeTandC] = useState<boolean>(false)

  const [userPayload, setUserPayload] = useState<SignupPayloadI>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  })

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

  const signupHandler = async () => {
    await dispatch(
      signupService({
        firstname: userPayload.firstname,
        lastname: userPayload.lastname,
        email: userPayload.email,
        password: userPayload.password,
      }),
    )
      .unwrap()
      .then((response: SignupPayloadI) => navigation.navigate(ScreensEnum.OTP_VERIFICATION as any))
      .catch((err: Error) => console.log("error", err))
  }

  return (
    <Screen statusBarStyle="dark">
      <Header titleTx="common.signup" leftIcon="back" onLeftPress={() => navigation.goBack()} />

      <ScrollView style={styles.spacingHorizonal} showsVerticalScrollIndicator={false}>
        <View style={styles.spacing2} />
        <TextField
          value={userPayload.firstname}
          onChangeText={(text) => setUserPayload({ ...userPayload, firstname: text })}
          containerStyle={styles.textField}
          autoCapitalize="none"
          autoComplete="name"
          autoCorrect={false}
          labelTx="common.firstname"
          placeholderTx="signupScreen.enterfirstname"
          // helper={error?.firstname}
          // status={error?.firstname ? "error" : undefined}
          onSubmitEditing={() => passwordInput.current?.focus()}
        />
        <TextField
          value={userPayload.lastname}
          onChangeText={(text) => setUserPayload({ ...userPayload, lastname: text })}
          containerStyle={styles.textField}
          autoCapitalize="none"
          autoComplete="name"
          autoCorrect={false}
          labelTx="common.lastname"
          placeholderTx="signupScreen.enterlastname"
          // helper={error?.lastname}
          // status={error?.lastname ? "error" : undefined}
          onSubmitEditing={() => passwordInput.current?.focus()}
        />
        <TextField
          value={userPayload.email}
          onChangeText={(text) => setUserPayload({ ...userPayload, email: text })}
          containerStyle={styles.textField}
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
          keyboardType="email-address"
          labelTx="common.email"
          placeholderTx="signinScreen.enterEmail"
          // helper={error?.email}
          // status={error?.email ? "error" : undefined}
          onSubmitEditing={() => passwordInput.current?.focus()}
        />
        <TextField
          ref={passwordInput}
          value={userPayload.password}
          onChangeText={(text) => setUserPayload({ ...userPayload, password: text })}
          containerStyle={styles.textField}
          autoCapitalize="none"
          autoComplete="password"
          autoCorrect={false}
          secureTextEntry={!showPassword}
          labelTx="common.password"
          placeholderTx="signinScreen.enterPass"
          RightAccessory={PasswordRightAccessory}
          // helper={error?.password}
          // status={error?.password ? "error" : undefined}
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
          onPress={signupHandler}
          // onPress={() => navigation.navigate(ScreensEnum.OTP_VERIFICATION as any)}
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
}
