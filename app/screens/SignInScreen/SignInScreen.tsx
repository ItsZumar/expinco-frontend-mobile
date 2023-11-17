import React, { FC, useMemo, useRef, useState } from "react"
import { TextInput, TouchableOpacity, View } from "react-native"
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
import { useAppDispatch } from "app/store/store"
import { signinService } from "app/store/slices/auth/authService"
import { SigninPayloadI, SigninResponseI } from "app/store/slices/auth/types"
import { validateData } from "app/validations/loginSchema"
import styles from "./styles"

interface SignInScreenProps
  extends NativeStackScreenProps<AppStackScreenProps<ScreensEnum.SIGNIN>> {}

export const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
  const dispatch = useAppDispatch()
  const passwordInput = useRef<TextInput>()

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [state, setState] = useState<SigninPayloadI>({
    email: "",
    password: "",
  })

  const [validationErrors, setValidationErrors] = useState<any>({
    email: "",
    password: "",
  })

  const handleValidation = () => {
    const dataToValidate = {
      email: state.email,
      password: state.password,
    }

    const errors = validateData(dataToValidate)

    setValidationErrors(errors)
  }

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

  const login = () => {
    // if (formHavingError) return

    handleValidation()

    dispatch(
      signinService({
        email: state.email,
        password: state.password,
      }),
    )
      .unwrap()
      .then((response: SigninResponseI) => navigation.navigate(ScreensEnum.MAIN as any))
      .catch((err: Error) => console.log("error", err))
  }

  return (
    <Screen style={styles.root} preset="auto">
      <Header titleTx="common.signin" />

      <View style={styles.spacingHorizonal}>
        <View style={styles.spacingTop}>
          <TextField
            value={state.email}
            onChangeText={(text) => setState({ ...state, email: text })}
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
            helper={validationErrors?.email}
            status={validationErrors?.email ? "error" : undefined}
          />
          <TextField
            ref={passwordInput}
            value={state.password}
            onChangeText={(text) => setState({ ...state, password: text })}
            containerStyle={styles.textField}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            secureTextEntry={!showPassword}
            labelTx="common.password"
            placeholderTx="signinScreen.enterPass"
            onSubmitEditing={login}
            RightAccessory={PasswordRightAccessory}
            helper={validationErrors?.password}
            status={validationErrors?.password ? "error" : undefined}
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
}
